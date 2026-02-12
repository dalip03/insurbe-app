import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, orderId } = await req.json();

    const data = await resend.emails.send({
        // from: "InsurBe <noreply@insurbe.com>",

      from: "InsurBe <onboarding@resend.dev>",
      to: email,
      subject: "Insurance Application Received ✅",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for purchasing your insurance.</p>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p>We are processing your documents. You will hear from us within 24 hours.</p>
        <br/>
        <p>Best regards,<br/>InsurBe Team</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
