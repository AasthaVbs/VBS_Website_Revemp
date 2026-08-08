import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {
  SiteTrackingNoscript,
  SiteTrackingScripts,
} from "@/components/tracking/site-tracking-scripts";
import {
  GOOGLE_SITE_VERIFICATION,
  SITE_URL,
} from "@/constants/site-tracking";

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
import "@/styles/vbs-life-at-vbs.scss";
import "@/styles/vbs-engagement-models-section.scss";
import "@/styles/vbs-engagement-model-page-sections.scss";
import "@/styles/mep-figma-page.scss";
import "@/styles/vbs-legal-page.scss";
import "@/styles/vbs-thank-you-page.scss";
import "@/styles/vbs-mobile-typography.scss";
import "@/styles/vbs-blog-detail.scss";
import "@/styles/vbs-webinar-detail-redesign.scss";
import "@/styles/vbs-cookie-consent.scss";
import "@/styles/vbs-architecture-services-redesign.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Virtual Building Studio",
  description:
    "Virtual Building Studio: Leading Texas-based BIM company. Hire top 1% architects and engineers in the USA within 3 days of onboarding time. Flexible staffing service with a 30-days money-back guarantee.",
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "website",
    siteName: "Virtual Building Studio",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SiteTrackingNoscript />
        {children}
        <SiteTrackingScripts />
      </body>
    </html>
  );
}
