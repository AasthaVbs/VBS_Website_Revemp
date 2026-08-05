import { SiteHeader } from "@/components/layout/site-header";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
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
    <div className="vbs-redesign-page about-section-page vbs-about-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <AboutHeroSection />
      <TrustStripSection stats={aboutStatsStrip} className="vbs-trust-strip-section bg-white" />
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
