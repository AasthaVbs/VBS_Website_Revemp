import type { ReactNode } from "react";
import Script from "next/script";

import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/vbs-legacy-projects.scss";
import "@/styles/malaysia-data-center-case.scss";

/** Legacy Gatsby project / case study detail pages */
export default function PortfolioProjectLayout({ children }: { children: ReactNode }) {
  return (
    <div className="vbs-project-detail-page vbs-redesign-page min-h-screen bg-white">
      <SiteHeader />
      {children}
      <GetInTouchSection />
      <SiteFooter />
      <Script src="https://cdn.jsdelivr.net/npm/lucide@0.383.0/dist/umd/lucide.min.js" strategy="afterInteractive" />
    </div>
  );
}
