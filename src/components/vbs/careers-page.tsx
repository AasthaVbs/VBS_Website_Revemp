import { SiteHeader } from "@/components/layout/site-header";
import { CareersBenefitsSection } from "@/components/sections/careers/careers-benefits-section";
import { CareersHeroSection } from "@/components/sections/careers/careers-hero-section";
import { CareersJoinTeamCtaSection } from "@/components/sections/careers/careers-join-team-cta-section";
import { CareersWhyWorkSection } from "@/components/sections/careers/careers-why-work-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import { lifeAtVbsStatsStrip } from "@/constants/life-at-vbs-content";
import {
  DeferredCareersCareerFormSection,
  DeferredCareersOpeningsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsCareersPage() {
  return (
    <div className="vbs-redesign-page about-section-page careers-section-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <CareersHeroSection />
      <TrustStripSection
        stats={lifeAtVbsStatsStrip}
        className=" pt-20 vbs-trust-strip-section vbs-careers-trust-strip bg-white"
      />
      <CareersWhyWorkSection />
      <CareersJoinTeamCtaSection />
      <CareersBenefitsSection />
      <DeferredCareersOpeningsSection hidden />
      <DeferredCareersCareerFormSection />
      <DeferredSiteFooter />
    </div>
  );
}
