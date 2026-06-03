import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { WebinarBrowseSection } from "@/components/sections/webinar/webinar-browse-section";
import { WebinarHeroSection } from "@/components/sections/webinar/webinar-hero-section";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Webinars | Virtual Building Studio",
  description:
    "Watch on-demand and upcoming Virtual Building Studio webinars on BIM, MEP engineering, and delivery for architecture and engineering firms.",
};

export default function WebinarPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <WebinarHeroSection />
        <WebinarBrowseSection />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
