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
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepQualityAssuranceSection } from "@/components/sections/mep/figma/mep-quality-assurance-section";
import { MepResourcesSection } from "@/components/sections/mep/mep-resources-section";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { MepWhatYouGetSection } from "@/components/sections/mep/figma/mep-what-you-get-section";
import { MepWhyChooseSection } from "@/components/sections/mep/figma/mep-why-choose-figma-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import {
  architectureDisciplinePanels,
  architectureDisciplinesSection,
  architectureEngagementProcessSection,
  architectureEngagementProcessSteps,
  architectureFaqDescription,
  architectureFaqSection,
  architectureFaqs,
  architectureFullSpectrumCards,
  architectureFullSpectrumSection,
  architectureHero,
  architectureIndustriesIntro,
  architectureIntroCopy,
  architectureIntroPoints,
  architectureProjectCta,
  architectureQualityAssuranceSection,
  architectureQualityAssuranceStages,
  architectureQualityAssuranceStats,
  architectureResourcesSection,
  architectureServiceBenefitsCards,
  architectureServiceBenefitsSection,
  architectureStatsStrip,
  architectureTestimonialsDescription,
  architectureWhatYouGetCards,
  architectureWhatYouGetSection,
  architectureWhyChooseItems,
  architectureWhyChooseSection,
  architectureWorkflowSection,
  architectureWorkflowSteps,
} from "@/constants/architecture-services-content";

export function ArchitectureServicesPage() {
  return (
    <div className="vbs-redesign-page architecture-services-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection {...architectureHero} ctaHref="#services" />
        <StatsStripSection stats={architectureStatsStrip} className="vbs-mep-stats-strip bg-white" />
        <MepIntroSection copy={architectureIntroCopy} points={architectureIntroPoints} />
        <MepWhatYouGetSection
          section={architectureWhatYouGetSection}
          cards={architectureWhatYouGetCards}
        />
        <MepFullSpectrumServicesSection
          section={architectureFullSpectrumSection}
          cards={architectureFullSpectrumCards}
          scrollInteraction="hover"
        />
        <MepDisciplinesSection
          section={architectureDisciplinesSection}
          panels={architectureDisciplinePanels}
          tabsAriaLabel="Architectural and structural disciplines"
        />
        <MepWorkflowSection section={architectureWorkflowSection} steps={architectureWorkflowSteps} />
        <MepQualityAssuranceSection
          section={architectureQualityAssuranceSection}
          stages={architectureQualityAssuranceStages}
          stats={architectureQualityAssuranceStats}
        />
        <MepServiceBenefitsSection
          section={architectureServiceBenefitsSection}
          cards={architectureServiceBenefitsCards}
        />
        <MepWhyChooseSection section={architectureWhyChooseSection} items={architectureWhyChooseItems} />
        <MepResourcesSection section={architectureResourcesSection} />
        <IndustriesSection
          intro={architectureIndustriesIntro.description}
          titleLine1={architectureIndustriesIntro.titleLine1}
          titleLine2={architectureIndustriesIntro.titleLine2}
          titleMaxWidth={architectureIndustriesIntro.titleMaxWidth}
        />
        <MepEngagementProcessSection
          section={architectureEngagementProcessSection}
          steps={architectureEngagementProcessSteps}
        />
        <EvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              {architectureProjectCta.titleLine1}
              <span className="font-light text-accent">{architectureProjectCta.titleLine2}</span>
            </>
          }
          description={architectureProjectCta.description}
          ctaLabel={architectureProjectCta.cta}
          ctaHref="#architecture-page-contact"
          titleClassName="max-w-[800px]"
          descriptionClassName="max-w-[720px]"
        />
        <ClientSuccessStoriesSection description={architectureTestimonialsDescription} />
        <FaqSection
          variant="mep"
          tag={architectureFaqSection.tag}
          description={architectureFaqSection.description}
          items={architectureFaqs}
        />
        <GetInTouchSection sectionId="architecture-page-contact" description={architectureFaqDescription} />
      </main>
      <SiteFooter />
    </div>
  );
}
