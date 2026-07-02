import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { ZOHO_UTM_LEAD_TRACKING_SCRIPT } from "@/scripts/zoho-utm-lead-tracking";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Virtual Building Studio",
  description: "Corporate-ready Next.js starter architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <Script id="zoho-utm-lead-tracking" strategy="afterInteractive">
          {ZOHO_UTM_LEAD_TRACKING_SCRIPT}
        </Script>
      </body>
    </html>
  );
}
