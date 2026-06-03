import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { AllProjectsSection } from "@/components/sections/portfolio/all-projects-section";
import { CertificationAwardsSection } from "@/components/sections/certification-awards-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { JoinTeamCtaSection } from "@/components/sections/join-team-cta-section";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "All Projects | Virtual Building Studio",
  description:
    "Browse Virtual Building Studio's complete MEP BIM modeling project portfolio across the United States.",
};

export default function AllProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="overflow-visible">
        <AllProjectsSection />
        <CertificationAwardsSection />
        <ClientSuccessStoriesSection />
        <JoinTeamCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
