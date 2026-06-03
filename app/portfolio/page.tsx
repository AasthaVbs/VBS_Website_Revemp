import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { CertificationAwardsSection } from "@/components/sections/certification-awards-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { PortfolioHeroSection } from "@/components/sections/portfolio/portfolio-hero-section";
import { PortfolioProjectsSection } from "@/components/sections/portfolio/portfolio-projects-section";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { defaultStatsStrip } from "@/constants/shared-sections";

export const metadata: Metadata = {
  title: "Portfolio | Virtual Building Studio",
  description:
    "Explore Virtual Building Studio's BIM and MEP portfolio — project coverage across the U.S. and delivery for architecture and engineering firms.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="overflow-visible">
        <PortfolioHeroSection />
        <StatsStripSection stats={defaultStatsStrip} />
        <PortfolioProjectsSection />
        <CertificationAwardsSection />
        <ClientSuccessStoriesSection />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
