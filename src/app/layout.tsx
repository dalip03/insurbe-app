import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InsureBe",
  description: "Unlock the Best Insurance Solutions in Germany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body
        className={`font-jost ${geistSans.variable} ${geistMono.variable} antialiased gradient-to-br from-white to-[#fdf3ff] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
