import type {Metadata, Viewport} from "next";
import {Fira_Code, Geist, Geist_Mono, Outfit} from "next/font/google";
import "./globals.css";
import MyThemeProvider from "@/components/ThemeProvider"
import React from "react";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
})

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bibek Gnawali's Portfolio",
  description: "Bibek Gnawali's Portfolio",
};

export const viewport:Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${firaCode.variable} ${geist.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <MyThemeProvider>
          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}
