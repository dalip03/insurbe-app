export const runtime = "nodejs";

import { PDFDocument, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json();

 const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // ✅ Load PNG logo 
  const logoPath = path.join(process.cwd(), "public/insurBe.png");
  const logoBytes = fs.readFileSync(logoPath);
  const logoImage = await pdfDoc.embedPng(logoBytes);

  let y = 0;
  let page: any;
  let height: number;

const createPage = () => {
    page = pdfDoc.addPage([595, 842]);
    height = page.getSize().height;

    page.drawImage(logoImage, {
      x: 50,
      y: height - 80,
      width: 120,
      height: 40,
    });

    y = height - 120;
  };

  const drawText = (
    text: string,
    size = 10,
    isBold = false,
    x = 50
  ) => {
    page.drawText(text, {
      x,
      y,
      size,
      font: isBold ? boldFont : font,
    });
    y -= size + 6;
  };

  const drawWrapped = (
    text: string,
    size = 10,
    isBold = false,
    x = 50,
    maxWidth = 495
  ) => {
    const fontUsed = isBold ? boldFont : font;
    const words = text.split(" ");
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const width = fontUsed.widthOfTextAtSize(testLine, size);

      if (width > maxWidth) {
        page.drawText(line, { x, y, size, font: fontUsed });
        line = words[i] + " ";
        y -= size + 6;
      } else {
        line = testLine;
      }
    }

    page.drawText(line, { x, y, size, font: fontUsed });
    y -= size + 10;
  };

 // ================= PAGE 1 =================
 createPage();

const today = new Date().toLocaleDateString("en-GB"); 

const drawWrappedText = (
  text: string,
  size: number = 10,
  isBold: boolean = false
) => {
  const maxWidth = 495;
  const fontUsed = isBold ? boldFont : font;
  const words = text.split(" ");
  let line = "";

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const width = fontUsed.widthOfTextAtSize(testLine, size);

    if (width > maxWidth) {
      page.drawText(line, { x: 50, y, size, font: fontUsed });
      line = words[i] + " ";
      y -= size + 6;
    } else {
      line = testLine;
    }
  }

  page.drawText(line, { x: 50, y, size, font: fontUsed });
  y -= size + 10;
};

// ===== TITLE =====
drawWrappedText("Consultation protocol for your request", 16, true);

drawWrappedText(
  `Study Secure Premium Application from the ${today}`,
  12,
  false
);

// ===== DEAR NAME =====
drawWrappedText(`Dear ${data.firstName}`, 12, false);

// ===== PARAGRAPH =====
drawWrappedText(
  "The EU distribution directive requires to document the minutes of a consultation meeting. Please read through the minutes and print them for your records or save them on a secure data carrier. The minutes were prepared during the consultation meeting. The consultation took place automatically on your initiative by means of an online consultation. These consultation minutes were created electronically and are valid without signature."
);

// ===== SECTION TITLE =====
drawWrappedText("Identity of the companies involved:", 12, true);

// ===== COMPANY TEXT EXACT COPY =====
drawWrappedText(
  "The brokerage and service management are carried out by:"
);

drawWrappedText(
  "InsurBe GmbH Großgörschener Straße 15 06686 Lützen Germany Phone: +49 (0)1802 22 44 24, E-Mail: enquiries@insurbe.com Managing Directors: Marvin Fürst"
);

drawWrappedText(
  "The health insurance contract is carried out by:"
);

drawWrappedText(
  "ottonova Krankenversicherung AG Ottostraße 4, 80333 München Germany Phone: +49 8926 2098 000, Email: helpdesk@ottonova.de Executive Board: Dr. Bernhard Brühl, Christopher Koker, Martin Betzwieser"
);

drawWrappedText(
  "InsurBe Global Services GmbH acts as an insurance agent for one or multiple clients in accordance with § 34d par. 1 Industrial Code. The competent authority is IHK Berlin, Breite Straße 29, 10178 Berlin, Germany. InsurBe Global Services GmbH is registered in the register of insurance intermediaries under the number D- IOJC-EBSW8-35."
);

drawWrappedText(
  "Ottonova Krankenversicherung AG is a fully licensed German health insurance, regulated under § 257 of the German Social Code (Book V) and fulfilling all regulatory requirements. You can verify this information at any time with the registration body: DIHK | Deutsche Industrie- und Handelskammer, Breite Straße 29, D-10178 Berlin, T 0180-600-585-0, www.vermittlerregister.info"
);

drawWrappedText(
  "As part of its role as an insurance intermediary, InsurBe Global Services GmbH provides consulting in accordance with the legal requirements and receives a commission by the product provider for successful mediation of an insurance contract. As a result, this commission shall not be paid by you but is already part of the insurance premium. InsurBe Global Services GmbH does not receive any additional compensation in connection with the mediation. No insurance company or parent company of an insurance company has a direct or indirect interest of more than 10 % in voting rights or capital of InsurBe Global Services GmbH."
);


  // ================= PAGE 2 =================
createPage();

const drawLabelValue = (label: string, value: string) => {
  page.drawText(label, { x: 50, y, size: 10, font });
  page.drawText(value || "-", { x: 200, y, size: 10, font });
  y -= 16;
};

// ===== TITLE =====
drawText("Your Details", 14, true);
y -= 10;

// ===== POLICY HOLDER =====
drawText("Data of the policy holder", 11, true);
y -= 6;

drawLabelValue("Name:", data.firstName + " " + data.lastName);
drawLabelValue("E-mail:", data.email);

y -= 10;

// ===== INSURED PERSON =====
drawText("Data of the insured person", 11, true);
y -= 6;

drawLabelValue("First name:", data.firstName);
drawLabelValue("Last name:", data.lastName);
drawLabelValue("Date of birth:", data.birthday);
drawLabelValue("Native country:", data.nationality);
drawLabelValue("Nationality:", data.nationality);
drawLabelValue("Phone:", data.phoneNumber);
drawLabelValue("E-mail:", data.email);
drawLabelValue("Passport number:", data.passport);

y -= 15;

// ===== REASON OF CONSULTATION =====
drawText("Reason of consultation", 11, true);
y -= 6;

drawWrapped(
  "By independently obtaining information on the following insurance policies at www.insurbe.com you have expressed specific insurance needs:"
);

y -= 6;

// Bullet points
page.drawText("• Comprehensive private health insurance", {
  x: 70,
  y,
  size: 10,
  font,
});
y -= 16;

page.drawText("• Waiting Period", {
  x: 70,
  y,
  size: 10,
  font,
});
y -= 16;

page.drawText("• Long-term care insurance", {
  x: 70,
  y,
  size: 10,
  font,
});
y -= 20;

// ===== CUSTOMER REQUIREMENTS =====
drawText(
  "Customer requirements and personal comparison criteria of the policyholder/ insured person",
  11,
  true
);

y -= 8;

drawText("You have provided us with the following information:");
y -= 10;

drawLabelValue("Reason:", data.occupationStatus);
drawLabelValue("University:", data.university);
drawLabelValue("Subject:", data.subject);
drawLabelValue("Date of entry:", data.string);
drawLabelValue("Waiting period:", data.waitingPeriod);


 // ================= PAGE 3 =================
createPage();

// ===== HEALTH ISSUES =====
drawText("Health issues:", 12, true);
y -= 6;

// Show answers dynamically (like screenshot only showing first few)

for (let i = 1; i <= 5; i++) {
  drawText(`Answer to question ${i}: ${data[`healthQ${i}`] || "No"}`);
}

y -= 10;

// ===== NOTE =====
drawWrapped(
  "Note: Your other details are stored in our system and are not mentioned in these minutes for reasons of data security. We reserve the right to check your details individually."
);

y -= 20;

// ===== YOUR CHOICE =====
drawText("Your Choice", 12, true);
y -= 8;

drawWrapped(
  "The aim of our consultation service is to advise and insure people who are temporarily staying abroad on all issues related to their insurance coverage. We attach great importance to comprehensive insurance coverage that is sufficient in all respects and favorable for the policyholder."
);

y -= 10;

drawText("The policyholder has opted for the following insurance coverage:", 11, true);
y -= 12;

drawText("From the beginning of the study/activities", 11, true);
y -= 16;

// ===== TARIFF SECTION LEFT COLUMN =====
drawText("Tariff: Premium", 11, true);
drawText("Comprehensive health insurance");
drawText("(Comprehensive health insurance of ottonova Krankenversicherung AG)");
drawText("Services: Please refer to the consumer information, the product information sheet and the insurance confirmation");

y -= 10;


// ===== RIGHT COLUMN VALUES =====
let rightY = page.getSize().height - 440;

const drawRight = (text: string) => {
  page.drawText(text, {
    x: 320,
    y: rightY,
    size: 10,
    font,
  });
  rightY -= 16;
};

drawRight(`Student Study Protect : ${data.premium || "117 €"}`);
drawRight("Scope: Germany and Europe");

rightY -= 10;


  // ================= PAGE 4 =================
 createPage();

// ===== IMPORTANT NOTES =====
drawWrapped("Important notes", 12, true);

drawWrapped(
  "The wording of the insurance certificate is binding. Please check the exact content of the insurance certificate and report any discrepancies."
);

// ===== CONCLUSION =====
drawWrapped("Conclusion of the contract", 11, true);

drawWrapped(
  "The insurance contract is concluded when the insurance certificate is sent or offered, or the written acceptance of the application is declared by the insurer. If you fail to pay the first premium on time but at a later point in time, the insurance coverage starts possibly from this later point in time. This shall not apply if you prove that you were not responsible for non- payment."
);

// ===== PRELIMINARY COVERAGE =====
drawWrapped("Preliminary insurance coverage", 11, true);

drawWrapped(
  "Generally, insurance coverage is only provided after the insurer has accepted the application. Preliminary insurance coverage is only provided if it was agreed upon at the time of application and confirmed in writing by the insurer."
);

// ===== ARBITRATION =====
drawWrapped("Arbitration bodies - extrajudicial arbitration", 11, true);

drawWrapped(
  "For possible disputes between customers and insurance companies or insurance intermediaries, there is the possibility of extrajudicial arbitration through the insurance industry ombudsmen. If necessary, you can contact them at the following addresses:"
);

y -= 10;

// ===== 3 COLUMN LAYOUT =====

const col1X = 50;
const col2X = 230;
const col3X = 390;

const columnWidth = 150; // width for each column

const startY = y;

let col1Y = startY;
let col2Y = startY;
let col3Y = startY;

const drawWrappedColumn = (
  text: string,
  x: number,
  currentY: number
) => {
  const words = text.split(" ");
  let line = "";

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + " ";
    const width = font.widthOfTextAtSize(testLine, 9);

    if (width > columnWidth) {
      page.drawText(line, { x, y: currentY, size: 9, font });
      line = words[i] + " ";
      currentY -= 12;
    } else {
      line = testLine;
    }
  }

  page.drawText(line, { x, y: currentY, size: 9, font });
  return currentY - 14;
};

// ===== COLUMN 1 =====
col1Y = drawWrappedColumn("Versicherungsombudsmann e. V.", col1X, col1Y);
col1Y = drawWrappedColumn("Postfach 080632", col1X, col1Y);
col1Y = drawWrappedColumn("10006 Berlin", col1X, col1Y);
col1Y = drawWrappedColumn("T 0800 3 696 000", col1X, col1Y);
col1Y = drawWrappedColumn("E-Mail:", col1X, col1Y);
col1Y = drawWrappedColumn("beschwerde@versicherungsombudsmann.de", col1X, col1Y);
col1Y = drawWrappedColumn("Internet:", col1X, col1Y);
col1Y = drawWrappedColumn("www.versicherungsombudsmann.de", col1X, col1Y);

// ===== COLUMN 2 =====
col2Y = drawWrappedColumn(
  "Ombudsmann Private Kranken- und Pflegeversicherung",
  col2X,
  col2Y
);
col2Y = drawWrappedColumn("Postfach 060222", col2X, col2Y);
col2Y = drawWrappedColumn("10052 Berlin", col2X, col2Y);
col2Y = drawWrappedColumn("T 0800 2 55 04 44", col2X, col2Y);
col2Y = drawWrappedColumn("E-Mail: ombudsmann@pkv.de", col2X, col2Y);
col2Y = drawWrappedColumn("Internet: www.pkv-ombudsmann.de", col2X, col2Y);

// ===== COLUMN 3 =====
col3Y = drawWrappedColumn(
  "The European commission offers a platform for online dispute settlement.",
  col3X,
  col3Y
);
col3Y = drawWrappedColumn(
  "Internet: webgate.ec.europa.eu",
  col3X,
  col3Y
);



 const pdfBytes = await pdfDoc.save();

// Create a REAL ArrayBuffer copy (not SharedArrayBuffer)
const safeBuffer = new Uint8Array(pdfBytes).slice().buffer;

return new Response(safeBuffer as ArrayBuffer, {
  status: 200,
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition":
      "attachment; filename=InsurBe-Consultation-Protocol.pdf",
  },
});

}
