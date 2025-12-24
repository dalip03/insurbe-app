import { NextResponse } from "next/server";

/**
 * YYYY-MM-DD → DD.MM.YYYY
 */
function toGermanDate(date: string) {
  if (!date) return "";
  const [y, m, d] = date.split("-");
  return `${d}.${m}.${y}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      tariffId,
      vorname,
      name,
      geburtsdatum,
      anrede,
      geschlecht,
      beginn,
      bank,
    } = body;

    if (!tariffId) {
      return NextResponse.json(
        { error: "Tariff ID is required" },
        { status: 400 }
      );
    }

    /**
     * ✅ SOAP 1.2 ENVELOPE (IMPORTANT)
     */
    const soapXML = `
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
  <soap:Body>
    <getOrder xmlns="GEWA.COMP.VVGService">
      <request>
        <Antrag xmlns="http://www.bipro.net/namespace/tarifierung">

          <Dokumentanforderung xmlns="http://www.bipro.net/namespace/allgemein">
            <CT_Dokumentanforderung>
              <ArtID>
                <ST_DokumentartID xmlns="http://www.bipro.net/namespace/datentypen">
                  Antrag
                </ST_DokumentartID>
              </ArtID>
            </CT_Dokumentanforderung>
          </Dokumentanforderung>

          <Partner>
            <CT_Partner
              xmlns="http://www.bipro.net/namespace/partner"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:type="CT_Person">
              <Anrede>${anrede}</Anrede>
              <Vorname>${vorname}</Vorname>
              <Name>${name}</Name>
              <Geburtsdatum>${toGermanDate(geburtsdatum)}</Geburtsdatum>
              <GeschlechtSpecified>true</GeschlechtSpecified>
              <Geschlecht>${geschlecht}</Geschlecht>
            </CT_Partner>
          </Partner>

          <!-- BANK DATA (MANDATORY) -->
          <Bankverbindung xmlns="http://www.bipro.net/namespace/zahlung">
            <CT_Bankverbindung>
              <IBAN>${bank?.iban}</IBAN>
              <BIC>${bank?.bic}</BIC>
              <Kontoinhaber>${bank?.kontoinhaber}</Kontoinhaber>
              <Zahlungsart>SEPA</Zahlungsart>
            </CT_Bankverbindung>
          </Bankverbindung>

          <Verkaufsprodukt>
            <CT_Verkaufsprodukt>
              <Beginn>${toGermanDate(beginn)}</Beginn>
              <Produkt>
                <CT_Produkt>
                  <Elementarprodukt>
                    <CT_Elementarprodukt
                      xmlns="http://www.bipro.net/namespace/kranken"
                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                      xsi:type="CT_Tarif">
                      <TarifID>${tariffId}</TarifID>
                    </CT_Elementarprodukt>
                  </Elementarprodukt>
                </CT_Produkt>
              </Produkt>
            </CT_Verkaufsprodukt>
          </Verkaufsprodukt>

        </Antrag>
      </request>
    </getOrder>
  </soap:Body>
</soap:Envelope>
`.trim();

    /**
     * ✅ SOAP 1.2 FETCH (NO SOAPAction HEADER)
     */
    const soapRes = await fetch(
      "https://www.kv-rechner0.de/HallescheVVG_Net/GC_KrankenService.svc",
      {
        method: "POST",
        headers: {
          "Content-Type":
            'application/soap+xml; charset=utf-8; action="GEWA.COMP.VVGService/IGC_KrankenService/getOrder"',
        },
        body: soapXML,
      }
    );

    const responseText = await soapRes.text();

    console.log("SOAP REQUEST SENT:");
    console.log(soapXML);

    console.log("SOAP RESPONSE STATUS:", soapRes.status);
    console.log("SOAP RESPONSE TEXT:", responseText);

    return new NextResponse(responseText, {
      status: 200,
      headers: { "Content-Type": "application/xml" },
    });
  } catch (err) {
    console.error("SOAP getOrder error:", err);
    return NextResponse.json(
      { error: "Failed to call getOrder service" },
      { status: 500 }
    );
  }
}
