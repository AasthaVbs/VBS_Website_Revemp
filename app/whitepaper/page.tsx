import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { WhitepapersBrowseSection } from "@/components/sections/whitepapers/whitepapers-browse-section";
import { WhitepapersHeroSection } from "@/components/sections/whitepapers/whitepapers-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { buildResourceCatalog } from "@/lib/resource-catalog";

export const metadata: Metadata = {
  title: "White Papers | Virtual Building Studio",
  description:
    "Explore expert-led white papers on BIM delivery, MEP coordination, and digital project workflows from Virtual Building Studio.",
};

export default function WhitepaperPage() {
  const initialCatalog = buildResourceCatalog(new Date());

  return (
    <div className="vbs-redesign-page resources-listing-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <WhitepapersHeroSection />
        <WhitepapersBrowseSection initialCatalog={initialCatalog} />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
