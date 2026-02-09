export const runtime = "nodejs";

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("📩 Appointment API hit");

  try {
    const { name, email, date, time, comment } = await req.json();

    const result = await resend.emails.send({
      from: "Website <onboarding@resend.dev>", // IMPORTANT for now
      to: ["developer@insurbe.com"],
      replyTo: email,
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Comment:</b> ${comment || "N/A"}</p>
      `,
    });

    console.log("✅ Resend result:", result);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Resend error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
