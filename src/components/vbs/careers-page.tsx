import { SiteHeader } from "@/components/layout/site-header";
import { CareersHeroSection } from "@/components/sections/careers/careers-hero-section";
import {
  DeferredCareersBenefitsSection,
  DeferredCareersCareerFormSection,
  DeferredCareersOpeningsSection,
  DeferredCareersWhyWorkSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function VbsCareersPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <CareersHeroSection />
      <DeferredCareersWhyWorkSection />
      <DeferredCareersBenefitsSection />
      <DeferredCareersOpeningsSection />
      <DeferredEvaluateDeliveryCtaSection />
      <DeferredCareersCareerFormSection />
      <DeferredSiteFooter />
    </div>
  );
}
