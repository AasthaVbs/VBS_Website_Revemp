import { SiteHeader } from "@/components/layout/site-header";
import { CareersBenefitsSection } from "@/components/sections/careers/careers-benefits-section";
import { CareersHeroSection } from "@/components/sections/careers/careers-hero-section";
import { CareersJoinTeamCtaSection } from "@/components/sections/careers/careers-join-team-cta-section";
import { CareersWhyWorkSection } from "@/components/sections/careers/careers-why-work-section";
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
      <CareersWhyWorkSection />
      <CareersBenefitsSection />
      <DeferredCareersOpeningsSection hidden />
      <CareersJoinTeamCtaSection />
      <DeferredCareersCareerFormSection />
      <DeferredSiteFooter />
    </div>
  );
}
