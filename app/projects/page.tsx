import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { CaseStudiesBrowseSection } from "@/components/sections/portfolio/case-studies-browse-section";
import { PortfolioHeroSection } from "@/components/sections/portfolio/portfolio-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { buildResourceCatalog } from "@/lib/resource-catalog";

export const metadata: Metadata = {
  title: "BIM Portfolio | Successful Projects by Top 1% AEC Experts",
  description:
    "Explore successful BIM projects by top 1% architects & engineers for AEC clients. Onboard in just 1 days and try our 30-day money-back guarantee.",
};

export default function PortfolioPage() {
  const initialCatalog = buildResourceCatalog(new Date());

  return (
    <div className="vbs-redesign-page resources-listing-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <PortfolioHeroSection />
        <CaseStudiesBrowseSection initialCatalog={initialCatalog} />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
