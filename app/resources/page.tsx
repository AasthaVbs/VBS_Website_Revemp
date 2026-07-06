import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { ResourcesHeroSection } from "@/components/sections/resources/resources-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredResourcesBrowseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "Resources | Virtual Building Studio",
  description:
    "Explore blogs, whitepapers, case studies, and insights from Virtual Building Studio on BIM delivery for architecture and engineering firms.",
};

export default function ResourcesPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <ResourcesHeroSection />
        <DeferredResourcesBrowseSection />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
