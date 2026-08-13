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
  title: "Our Successfully Completed BIM Projects | Virtual Building Studio",
  description:
    "Our portfolio offers a wide range of projects for AEC professionals, including Scan to BIM, CAD to BIM conversions, Clash Detection & Co-Ordination, Value Engineering, 4D simulations, 5D Quantity Take-Offs, and captivating 3D rendering and walkthroughs for architecture, structure, and MEPF disciplines.",
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
