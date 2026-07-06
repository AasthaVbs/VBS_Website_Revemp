import { SiteHeader } from "@/components/layout/site-header";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { aboutStatsStrip } from "@/constants/shared-sections";
import {
  DeferredCertificationAwardsSection,
  DeferredClientSuccessStoriesSection,
  DeferredCoreValuesSection,
  DeferredFounderSection,
  DeferredGetInTouchSection,
  DeferredJoinTeamCtaSection,
  DeferredSiteFooter,
  DeferredVisionMissionSection,
} from "@/lib/lazy-page-sections";

export function VbsAboutPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <AboutHeroSection />

      <StatsStripSection stats={aboutStatsStrip} className="bg-white pb-[30px] pt-0" />

      <DeferredVisionMissionSection />
      <DeferredCoreValuesSection />
      <DeferredFounderSection />
      <DeferredCertificationAwardsSection />
      <DeferredJoinTeamCtaSection />
      <DeferredClientSuccessStoriesSection />
      <DeferredGetInTouchSection />
      <DeferredSiteFooter />
    </div>
  );
}
