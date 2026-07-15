import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { PortfolioHeroSection } from "@/components/sections/portfolio/portfolio-hero-section";
import {
  DeferredCaseStudiesBrowseSection,
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { buildResourceCatalog } from "@/lib/resource-catalog";

export const metadata: Metadata = {
  title: "Case Studies | Virtual Building Studio",
  description:
    "Discover how Virtual Building Studio helps clients improve accuracy, accelerate delivery, and optimize project outcomes across diverse building projects.",
};

export default function PortfolioPage() {
  const initialCatalog = buildResourceCatalog(new Date());

  return (
    <div className="vbs-redesign-page resources-listing-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <PortfolioHeroSection />
        <DeferredCaseStudiesBrowseSection initialCatalog={initialCatalog} />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
