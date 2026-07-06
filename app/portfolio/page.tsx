import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { PortfolioHeroSection } from "@/components/sections/portfolio/portfolio-hero-section";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { defaultStatsStrip } from "@/constants/shared-sections";
import {
  DeferredCertificationAwardsSection,
  DeferredClientSuccessStoriesSection,
  DeferredGetInTouchSection,
  DeferredPortfolioProjectsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "Portfolio | Virtual Building Studio",
  description:
    "Explore Virtual Building Studio's BIM and MEP portfolio — project coverage across the U.S. and delivery for architecture and engineering firms.",
};

export default function PortfolioPage() {
  return (
    <div className="vbs-redesign-page min-h-screen bg-white">
      <SiteHeader />
      <main className="overflow-visible">
        <PortfolioHeroSection />
        <StatsStripSection stats={defaultStatsStrip} />
        <DeferredPortfolioProjectsSection />
        <DeferredCertificationAwardsSection />
        <DeferredClientSuccessStoriesSection />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
