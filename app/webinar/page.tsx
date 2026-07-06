import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { WebinarHeroSection } from "@/components/sections/webinar/webinar-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
  DeferredWebinarBrowseSection,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "Webinars | Virtual Building Studio",
  description:
    "Watch on-demand and upcoming Virtual Building Studio webinars on BIM, MEP engineering, and delivery for architecture and engineering firms.",
};

export default function WebinarPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <WebinarHeroSection />
        <DeferredWebinarBrowseSection />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
