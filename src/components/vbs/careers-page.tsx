import { SiteHeader } from "@/components/layout/site-header";
import { CareersBenefitsSection } from "@/components/sections/careers/careers-benefits-section";
import { CareersCareerFormSection } from "@/components/sections/careers/careers-career-form-section";
import { CareersHeroSection } from "@/components/sections/careers/careers-hero-section";
import { CareersOpeningsSection } from "@/components/sections/careers/careers-openings-section";
import { CareersWhyWorkSection } from "@/components/sections/careers/careers-why-work-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { SiteFooter } from "@/components/sections/site-footer";

export function VbsCareersPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <CareersHeroSection />
      <CareersWhyWorkSection />
      <CareersBenefitsSection />
      <CareersOpeningsSection />
      <EvaluateDeliveryCtaSection />
      <CareersCareerFormSection />
      <SiteFooter />
    </div>
  );
}
