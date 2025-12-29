"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { translations } from "./translations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Amirhossein Bayani - Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Full-Stack Software Developer specializing in AI-enabled applications, Python/Django, Next.js, and semantic web technologies"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider translations={translations}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
