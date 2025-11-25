// src/app/api/getOfferEinzel/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import fs from "fs/promises";
import path from "path";
import os from "os";

const HALLESCHE_URL =
  process.env.HALLESCHE_URL ||
  "https://www.kv-rechner0.de/HallescheVVG_Net/GC_KrankenService.svc";
const SOAP_ACTION = 'GEWA.COMP.VVGService/IGC_KrankenService_WCF/getOffer';

interface Doc {
  kurz: string | null;
  createdAt: string | null;
  base64: string;
  raw: Record<string, unknown>;
}

interface GetOfferBody {
  tarifId: string;
  vorname: string;
  name: string;
  geburtsdatum: string;
  beginn: string;
}

// Escape XML special characters
function escapeXml(str = ""): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Build SOAP XML
function buildGetOfferEnvelope({
  tarifId,
  vorname,
  name,
  geburtsdatum,
  beginn,
}: GetOfferBody): string {
  return `<?xml version="1.0" encoding="utf-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:vvg="GEWA.COMP.VVGService"
                  xmlns:allg="http://www.bipro.net/namespace/allgemein"
                  xmlns:tar="http://www.bipro.net/namespace/tarifierung"
                  xmlns:partner="http://www.bipro.net/namespace/partner"
                  xmlns:kt="http://www.bipro.net/namespace/kranken"
                  xmlns:dt="http://www.bipro.net/namespace/datentypen"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <soapenv:Header/>
  <soapenv:Body>
    <vvg:getOffer>
      <vvg:request>
        <tar:Angebot>
          <allg:Dokumentanforderung>
            <allg:CT_Dokumentanforderung>
              <allg:ArtID>
                <dt:ST_DokumentartID>AVB</dt:ST_DokumentartID>
                <dt:ST_DokumentartID>Prospekt</dt:ST_DokumentartID>
                <dt:ST_DokumentartID>PiBVI</dt:ST_DokumentartID>
                <dt:ST_DokumentartID>EmpfangsbestaetigungVVGDokumente</dt:ST_DokumentartID>
              </allg:ArtID>
            </allg:CT_Dokumentanforderung>
          </allg:Dokumentanforderung>

          <tar:Partner>
            <partner:CT_Partner xsi:type="partner:CT_Person">
              <partner:Anrede>Item1</partner:Anrede>
              <partner:Name>${escapeXml(name)}</partner:Name>
              <partner:Vorname>${escapeXml(vorname)}</partner:Vorname>
              <partner:Geburtsdatum>${escapeXml(geburtsdatum)}</partner:Geburtsdatum>
              <partner:GeschlechtSpecified>true</partner:GeschlechtSpecified>
              <partner:Geschlecht>Item1</partner:Geschlecht>
            </partner:CT_Partner>
          </tar:Partner>

          <tar:Verkaufsprodukt>
            <tar:CT_Verkaufsprodukt>
              <tar:Beginn>${escapeXml(beginn)}</tar:Beginn>
              <tar:Produkt>
                <tar:CT_Produkt>
                  <tar:Elementarprodukt>
                    <tar:CT_Elementarprodukt xsi:type="kt:CT_Tarif">
                      <kt:TarifID>${escapeXml(tarifId)}</kt:TarifID>
                    </tar:CT_Elementarprodukt>
                  </tar:Elementarprodukt>
                </tar:CT_Produkt>
              </tar:Produkt>
            </tar:CT_Verkaufsprodukt>
          </tar:Verkaufsprodukt>

        </tar:Angebot>
      </vvg:request>
    </vvg:getOffer>
  </soapenv:Body>
</soapenv:Envelope>`;
}

// Call Hallesche SOAP endpoint
async function callHallesche(xml: string) {
  return axios.post(HALLESCHE_URL, xml, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: `"${SOAP_ACTION}"`,
    },
    timeout: 20000,
  });
}

// Parse XML response
const parser = new XMLParser({
  ignoreAttributes: false,
  removeNSPrefix: true,
  trimValues: true,
});

// Extract premium from parsed XML
function extractPremium(parsed: unknown): string | null {
  const candidates: unknown[] = [];

  function rec(obj: unknown) {
    if (!obj || typeof obj !== "object") return;
    const record = obj as Record<string, unknown>;
    for (const key of Object.keys(record)) {
      const v = record[key];
      const local = key.includes(":") ? key.split(":").pop()! : key;
      if (/Betrag$/i.test(local)) candidates.push(v);
      if (Array.isArray(v)) v.forEach(rec);
      else if (v && typeof v === "object") rec(v);
    }
  }

  rec(parsed);

  for (const v of candidates) {
    if (typeof v === "number" && !isNaN(v)) return String(v);
    if (typeof v === "string" && !isNaN(Number(v.trim()))) return v.trim();
    if (v && typeof v === "object") {
      const maybe = (v as Record<string, unknown>)._ ?? (v as Record<string, unknown>)["#text"];
      if (typeof maybe === "string" && !isNaN(Number(maybe.trim()))) return maybe.trim();
    }
  }

  return null;
}

// Collect documents from parsed XML
function collectDocs(parsed: unknown): Doc[] {
  const docs: unknown[] = [];

  function rec(o: unknown) {
    if (!o || typeof o !== "object") return;
    const record = o as Record<string, unknown>;
    for (const k of Object.keys(record)) {
      const v = record[k];
      const local = k.includes(":") ? k.split(":").pop() : k;
      if (local === "CT_Datei" || local === "Datei") {
        if (Array.isArray(v)) v.forEach((item) => docs.push(item));
        else docs.push(v);
      }
      if (Array.isArray(v)) v.forEach(rec);
      else if (v && typeof v === "object") rec(v);
    }
  }

  rec(parsed);

  const out: Doc[] = [];

  function normalize(node: unknown) {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) return node.forEach(normalize);

    const n = node as Record<string, unknown>;

    const kurz =
      typeof n.Kurzbeschreibung === "string"
        ? n.Kurzbeschreibung
        : typeof n.Kurzbeschreibung === "object" && 
          n.Kurzbeschreibung !== null &&
          typeof (n.Kurzbeschreibung as Record<string, unknown>)._ === "string"
        ? (n.Kurzbeschreibung as Record<string, unknown>)._ as string
        : null;

    const createdAt =
      typeof n.Erstelldatum === "string"
        ? n.Erstelldatum
        : typeof n.Erstelldatum === "object" && 
          n.Erstelldatum !== null &&
          typeof (n.Erstelldatum as Record<string, unknown>)._ === "string"
        ? (n.Erstelldatum as Record<string, unknown>)._ as string
        : null;

    let base64: string | null = null;
    if (n.Daten && typeof n.Daten === "object") {
      const daten = n.Daten as Record<string, unknown>;
      for (const key of Object.keys(daten)) {
        const kLocal = key.includes(":") ? key.split(":").pop() : key;
        if (!kLocal) continue;
        if (/Value$/i.test(kLocal) || kLocal === "_" || kLocal === "#text") {
          const val = daten[key];
          if (typeof val === "string") { 
            base64 = val.replace(/\s/g, ""); 
            break; 
          }
          if (val && typeof val === "object") {
            const valRecord = val as Record<string, unknown>;
            if (typeof valRecord._ === "string") {
              base64 = valRecord._.replace(/\s/g, "");
              break;
            }
          }
        }
      }
    }

    if ("CT_Datei" in n) normalize(n.CT_Datei);
    else if (base64) out.push({ kurz, createdAt, base64, raw: n });
  }

  normalize(docs);
  return out;
}

// API handler
export async function POST(req: Request) {
  try {
    const body: Partial<GetOfferBody> = await req.json();
    const { tarifId, vorname, name, geburtsdatum, beginn } = body;

    if (!tarifId || !vorname || !name || !geburtsdatum || !beginn) {
      return NextResponse.json({ error: "missing required fields" }, { status: 400 });
    }

    const xml = buildGetOfferEnvelope({ tarifId, vorname, name, geburtsdatum, beginn });
    const call = await callHallesche(xml);
    const parsed = parser.parse(call.data);

    // Save parsed JSON (dev only)
    const timestamp = Date.now();
    const rnd = Math.floor(Math.random() * 90000 + 10000);
    const fileName = `hallesche_parsed_${timestamp}_${rnd}.json`;
    const dir = path.join(os.tmpdir(), "hallesche_parsed");
    await fs.mkdir(dir, { recursive: true });
    if (process.env.NODE_ENV === "development") {
      await fs.writeFile(path.join(dir, fileName), JSON.stringify(parsed, null, 2), "utf8");
    }

    const premium = extractPremium(parsed);
    const documents = collectDocs(parsed);

    return NextResponse.json({ premium, documents }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : JSON.stringify(err).slice(0, 500);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
