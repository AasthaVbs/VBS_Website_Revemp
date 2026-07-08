import { SiteHeader } from "@/components/layout/site-header";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import { lifeAtVbsStatsStrip } from "@/constants/life-at-vbs-content";
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
    <div className="vbs-redesign-page about-section-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <AboutHeroSection />
      <TrustStripSection stats={lifeAtVbsStatsStrip} className="vbs-trust-strip-section bg-white" />
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
