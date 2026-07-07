import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { ZOHO_UTM_LEAD_TRACKING_SCRIPT } from "@/scripts/zoho-utm-lead-tracking";

import "./globals.css";
import "@/styles/vbs-migrated-pages-shell.scss";
import "@/styles/vbs-redesign-overrides.scss";
import "@/styles/vbs-redesign-spacing.scss";
import "@/styles/vbs-header.scss";
import "@/styles/vbs-site-footer.scss";
import "@/styles/vbs-home-sections.scss";
import "@/styles/vbs-about-sections.scss";
import "@/styles/vbs-contact-sections.scss";
import "@/styles/vbs-careers-sections.scss";
import "@/styles/vbs-leadership-sections.scss";
import "@/styles/vbs-engagement-models-section.scss";
import "@/styles/vbs-engagement-model-page-sections.scss";
import "@/styles/mep-figma-page.scss";

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Script id="zoho-utm-lead-tracking" strategy="afterInteractive">
          {ZOHO_UTM_LEAD_TRACKING_SCRIPT}
        </Script>
      </body>
    </html>
  );
}
