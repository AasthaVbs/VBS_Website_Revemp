import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { ResourcesBrowseSection } from "@/components/sections/resources/resources-browse-section";
import { ResourcesHeroSection } from "@/components/sections/resources/resources-hero-section";
import { SiteFooter } from "@/components/sections/site-footer";

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
        <ResourcesBrowseSection />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
