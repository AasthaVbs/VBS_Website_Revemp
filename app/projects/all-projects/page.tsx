import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import {
  DeferredAllProjectsSection,
  DeferredCertificationAwardsSection,
  DeferredClientSuccessStoriesSection,
  DeferredJoinTeamCtaSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "All Projects | Virtual Building Studio",
  description:
    "Browse Virtual Building Studio's complete MEP BIM modeling project portfolio across the United States.",
};

export default function AllProjectsPage() {
  return (
    <div className="vbs-redesign-page min-h-screen bg-white">
      <SiteHeader />
      <main className="overflow-visible">
        <DeferredAllProjectsSection />
        <DeferredCertificationAwardsSection />
        <DeferredClientSuccessStoriesSection />
        <DeferredJoinTeamCtaSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
