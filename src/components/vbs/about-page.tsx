import { SiteHeader } from "@/components/layout/site-header";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { CoreValuesSection } from "@/components/sections/about/core-values-section";
import { FounderSection } from "@/components/sections/about/founder-section";
import { VisionMissionSection } from "@/components/sections/about/vision-mission-section";
import { CertificationAwardsSection } from "@/components/sections/certification-awards-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { JoinTeamCtaSection } from "@/components/sections/join-team-cta-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import { aboutStatsStrip } from "@/constants/shared-sections";

export function VbsAboutPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <AboutHeroSection />

      <StatsStripSection stats={aboutStatsStrip} className="bg-white pb-[30px] pt-0" />

      <VisionMissionSection />
      <CoreValuesSection />
      <FounderSection />
      <CertificationAwardsSection />
      <JoinTeamCtaSection />
      <ClientSuccessStoriesSection />
      <GetInTouchSection />
      <SiteFooter />
    </div>
  );
}
