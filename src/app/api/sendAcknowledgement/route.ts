import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, formType } = await req.json();

    if (!email) {
      return Response.json({ success: false, message: "Email required" });
    }

    const subjectMap: Record<string, string> = {
      public: "Public Health Insurance Application Received",
      private: "Private Health Insurance Application Received",
      expat: "Expat Health Insurance Application Received",
    };

    const subject =
      subjectMap[formType] || "Insurance Application Received";

    const data = await resend.emails.send({
      from: "InsurBe <noreply@insurbe.com>", // your verified domain
      to: email,
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2 style="color:#820ad1;">Hi ${name || "there"},</h2>

          
          <p>Thank you for submitting your <b>InsurBe expat insurance</b> application with <b>InsurBe</b>.</p>

          <p>Our team will review your details and contact you shortly.</p>

          <br/>
          <p style="color:#666;font-size:14px">
            If you have any questions, feel free to reply to this email.
          </p>

          <br/>

          <p>Best regards,<br/>
          <b>InsurBe Team</b></p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Email error:", data.error);
      return Response.json({ success: false });
    }

    return Response.json({ success: true });

  } catch (error) {
    console.error("Email API error:", error);
    return Response.json({ success: false });
  }
}