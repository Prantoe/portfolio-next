import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import LenisProvider from "@/components/providers/LenisProvider";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pranto Soearno — Software Engineer",
  description:
    "Software Engineer & Fullstack Developer based in Jakarta. Specializing in React, Next.js, AI integration, and enterprise systems.",
  openGraph: {
    title: "Pranto Soearno — Software Engineer",
    description: "Software Engineer & Fullstack Developer based in Jakarta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
