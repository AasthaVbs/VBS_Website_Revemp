import { SiteHeader } from "@/components/layout/site-header";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { MepDisciplinesSection } from "@/components/sections/mep/mep-disciplines-section";
import { MepEngagementProcessSection } from "@/components/sections/mep/mep-engagement-process-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { MepFaqSection } from "@/components/sections/mep/mep-faq-section";
import { MepFullSpectrumSection } from "@/components/sections/mep/mep-full-spectrum-section";
import { MepHeroSection } from "@/components/sections/mep/mep-hero-section";
import { MepIntroSection } from "@/components/sections/mep/mep-intro-section";
import { MepKeyBenefitsSection } from "@/components/sections/mep/mep-key-benefits-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { MepResourcesSection } from "@/components/sections/mep/mep-resources-section";
import { MepServicesSection } from "@/components/sections/mep/mep-services-section";
import { MepTechnicalMethodsSection } from "@/components/sections/mep/mep-technical-methods-section";
import { MepWhyChooseSection } from "@/components/sections/mep/mep-why-choose-section";
import { MepWorkflowSection } from "@/components/sections/mep/mep-workflow-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import {
  mepFaqDescription,
  mepProjectCta,
  mepStatsStrip,
  mepTestimonialsDescription,
} from "@/constants/mep-engineers-content";

/** MEP Engineers page — Figma frame 265:59140 */
export function MepEngineersPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="relative z-0">
        <MepHeroSection />

        <StatsStripSection stats={mepStatsStrip} className="bg-white pb-[30px] pt-[60px]" />

        <MepIntroSection />

        <MepServicesSection />

        <MepFullSpectrumSection />

        <MepDisciplinesSection />

        <MepWorkflowSection />

        <MepTechnicalMethodsSection />

        <MepKeyBenefitsSection />

        <MepWhyChooseSection />

        <MepResourcesSection />

        <IndustriesSection />

        <MepEngagementProcessSection />

        <EvaluateDeliveryCtaSection
          title={
            <>
              {mepProjectCta.titleLine1}{" "}
              <span className="text-accent">{mepProjectCta.titleLine2}</span>
            </>
          }
          description={mepProjectCta.description}
          ctaLabel={mepProjectCta.cta}
          titleClassName="max-w-[800px]"
          descriptionClassName="max-w-[720px]"
        />

        <ClientSuccessStoriesSection description={mepTestimonialsDescription} />

        <MepFaqSection />

        <GetInTouchSection description={mepFaqDescription} />
      </main>

      <SiteFooter />
    </div>
  );
}
