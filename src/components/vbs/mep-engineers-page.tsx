// @ts-nocheck
import { SiteHeader } from "@/components/layout/site-header";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { MepDisciplinesSection } from "@/components/sections/mep/figma/mep-disciplines-figma-section";
import { MepEngagementProcessSection } from "@/components/sections/mep/figma/mep-engagement-process-figma-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepIntroSection } from "@/components/sections/mep/figma/mep-intro-figma-section";
import { MepQualityAssuranceSection } from "@/components/sections/mep/figma/mep-quality-assurance-section";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { MepWhatYouGetSection } from "@/components/sections/mep/figma/mep-what-you-get-section";
import { MepWhyChooseSection } from "@/components/sections/mep/figma/mep-why-choose-figma-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepResourcesSection } from "@/components/sections/mep/mep-resources-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import {
  mepDisciplinePanels,
  mepDisciplinesSection,
  mepEngagementProcessSection,
  mepEngagementProcessSteps,
  mepEngineersHero,
  mepFaqDescription,
  mepFaqSection,
  mepFaqs,
  mepFullSpectrumCards,
  mepFullSpectrumSection,
  mepIndustriesSection,
  mepIntroCopy,
  mepIntroPoints,
  mepProjectCta,
  mepQualityAssuranceSection,
  mepQualityAssuranceStages,
  mepQualityAssuranceStats,
  mepResourcesSection,
  mepServiceBenefitsCards,
  mepServiceBenefitsSection,
  mepStatsStrip,
  mepTestimonialsDescription,
  mepWhatYouGetCards,
  mepWhatYouGetSection,
  mepWhyChooseItems,
  mepWhyChooseSection,
  mepWorkflowSection,
  mepWorkflowSteps,
} from "@/constants/mep-engineers-content";

/** MEP BIM Services — same layout as architecture and scan-to-bim service pages. */
export function MepEngineersPage() {
  return (
    <div className="vbs-redesign-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection {...mepEngineersHero} ctaHref="#services" />
        <StatsStripSection stats={mepStatsStrip} className="vbs-mep-stats-strip bg-white" />
        <MepIntroSection copy={mepIntroCopy} points={mepIntroPoints} />
        <MepWhatYouGetSection section={mepWhatYouGetSection} cards={mepWhatYouGetCards} />
        <MepFullSpectrumServicesSection
          section={mepFullSpectrumSection}
          cards={mepFullSpectrumCards}
          scrollInteraction="hover"
        />
        <MepDisciplinesSection
          section={mepDisciplinesSection}
          panels={mepDisciplinePanels}
          tabsAriaLabel="MEP disciplines"
        />
        <MepWorkflowSection section={mepWorkflowSection} steps={mepWorkflowSteps} />
        <MepQualityAssuranceSection
          section={mepQualityAssuranceSection}
          stages={mepQualityAssuranceStages}
          stats={mepQualityAssuranceStats}
        />
        <MepServiceBenefitsSection
          section={mepServiceBenefitsSection}
          cards={mepServiceBenefitsCards}
        />
        <MepWhyChooseSection section={mepWhyChooseSection} items={mepWhyChooseItems} />
        <MepResourcesSection section={mepResourcesSection} />
        <IndustriesSection
          intro={mepIndustriesSection.description}
          titleLine1={mepIndustriesSection.titleLine1}
          titleLine2={mepIndustriesSection.titleLine2}
          titleMaxWidth={mepIndustriesSection.titleMaxWidth}
        />
        <MepEngagementProcessSection
          section={mepEngagementProcessSection}
          steps={mepEngagementProcessSteps}
        />
        <EvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              {mepProjectCta.titleLine1}
              <span className="font-light text-accent">{mepProjectCta.titleLine2}</span>
            </>
          }
          description={mepProjectCta.description}
          ctaLabel={mepProjectCta.cta}
          ctaHref="#mep-page-contact"
          titleClassName="max-w-[800px]"
          descriptionClassName="max-w-[720px]"
        />
        <ClientSuccessStoriesSection description={mepTestimonialsDescription} />
        <FaqSection
          variant="mep"
          tag={mepFaqSection.tag}
          description={mepFaqSection.description}
          items={mepFaqs}
        />
        <GetInTouchSection sectionId="mep-page-contact" description={mepFaqDescription} />
      </main>
      <SiteFooter />
    </div>
  );
}
