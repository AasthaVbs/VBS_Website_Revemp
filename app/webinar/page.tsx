import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { WebinarBrowseSection } from "@/components/sections/webinar/webinar-browse-section";
import { WebinarHeroSection } from "@/components/sections/webinar/webinar-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { buildResourceCatalogLive } from "@/lib/resource-catalog";

export const metadata: Metadata = {
  title: "Webinars | Virtual Building Studio",
  description:
    "Watch on-demand and upcoming Virtual Building Studio webinars on BIM, MEP engineering, and delivery for architecture and engineering firms.",
};

export default async function WebinarPage() {
  const initialCatalog = await buildResourceCatalogLive(new Date());

  return (
    <div className="vbs-redesign-page resources-listing-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <WebinarHeroSection />
        <WebinarBrowseSection initialCatalog={initialCatalog} />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
