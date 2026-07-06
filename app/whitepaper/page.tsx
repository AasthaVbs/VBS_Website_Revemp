import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { WhitepapersHeroSection } from "@/components/sections/whitepapers/whitepapers-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
  DeferredWhitepapersBrowseSection,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "White Papers | Virtual Building Studio",
  description:
    "Explore expert-led white papers on BIM delivery, MEP coordination, and digital project workflows from Virtual Building Studio.",
};

export default function WhitepaperPage() {
  return (
    <div className="vbs-redesign-page resources-listing-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <WhitepapersHeroSection />
        <DeferredWhitepapersBrowseSection />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
