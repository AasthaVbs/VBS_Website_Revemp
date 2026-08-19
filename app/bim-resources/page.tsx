import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BimResourcesBrowseSection } from "@/components/sections/bim-resources/bim-resources-browse-section";
import { BimResourcesHeroSection } from "@/components/sections/bim-resources/bim-resources-hero-section";
import { bimResourcesPageHero } from "@/constants/bim-resources-content";
import { DeferredGetInTouchSection, DeferredSiteFooter } from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "BIM Resource Hub - Virtual Building Studio",
  description: bimResourcesPageHero.description,
};

export default function BimResourcesPage() {
  return (
    <div className="vbs-redesign-page resources-listing-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <BimResourcesHeroSection />
        <BimResourcesBrowseSection />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
