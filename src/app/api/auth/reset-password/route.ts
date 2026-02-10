import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: "Invalid request" },
        { status: 400 }
      );
    }

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    // 🔑 Find user by reset token
    const user = await prisma.user.findFirst({
      where: {
        AND: [
          { resetToken: hashedToken as any },
          { resetTokenExpiry: { gt: new Date() } },
        ],
      } as any,
    });

    if (!user) {
      return NextResponse.json(
        { message: "Token invalid or expired" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔑 Update password & clear reset fields
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null as any,
        resetTokenExpiry: null as any,
      } as any,
    });

    return NextResponse.json(
      { message: "Password reset successful" },
      { status: 200 }
    );
  } catch (err) {
    console.error("RESET PASSWORD ERROR:", err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
