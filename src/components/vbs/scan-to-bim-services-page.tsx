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
import { MepResourcesSection } from "@/components/sections/mep/mep-resources-section";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { MepWhatYouGetSection } from "@/components/sections/mep/figma/mep-what-you-get-section";
import { MepWhyChooseSection } from "@/components/sections/mep/figma/mep-why-choose-figma-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { StatsStripSection } from "@/components/sections/stats-strip-section";
import {
  scanToBimDisciplinePanels,
  scanToBimDisciplinesSection,
  scanToBimEngagementProcessSection,
  scanToBimEngagementProcessSteps,
  scanToBimFaqDescription,
  scanToBimFaqSection,
  scanToBimFaqs,
  scanToBimFullSpectrumCards,
  scanToBimFullSpectrumSection,
  scanToBimHero,
  scanToBimIndustriesIntro,
  scanToBimIntroCopy,
  scanToBimIntroPoints,
  scanToBimProjectCta,
  scanToBimResourcesSection,
  scanToBimServiceBenefitsCards,
  scanToBimServiceBenefitsSection,
  scanToBimStatsStrip,
  scanToBimTestimonialsDescription,
  scanToBimWhatYouGetCards,
  scanToBimWhatYouGetSection,
  scanToBimWhyChooseItems,
  scanToBimWhyChooseSection,
  scanToBimWorkflowSection,
  scanToBimWorkflowSteps,
} from "@/constants/scan-to-bim-content";

export function ScanToBimServicesPage() {
  return (
    <div className="vbs-redesign-page scan-to-bim-services-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection {...scanToBimHero} ctaHref="#services" />
        <StatsStripSection stats={scanToBimStatsStrip} className="vbs-mep-stats-strip bg-white" />
        <MepIntroSection copy={scanToBimIntroCopy} points={scanToBimIntroPoints} />
        <MepWhatYouGetSection section={scanToBimWhatYouGetSection} cards={scanToBimWhatYouGetCards} />
        <MepFullSpectrumServicesSection
          section={scanToBimFullSpectrumSection}
          cards={scanToBimFullSpectrumCards}
          scrollInteraction="hover"
        />
        <MepDisciplinesSection
          section={scanToBimDisciplinesSection}
          panels={scanToBimDisciplinePanels}
          tabsAriaLabel="Scan to BIM disciplines"
        />
        <MepWorkflowSection section={scanToBimWorkflowSection} steps={scanToBimWorkflowSteps} />
        <MepServiceBenefitsSection
          section={scanToBimServiceBenefitsSection}
          cards={scanToBimServiceBenefitsCards}
        />
        <MepWhyChooseSection section={scanToBimWhyChooseSection} items={scanToBimWhyChooseItems} />
        <MepResourcesSection section={scanToBimResourcesSection} />
        <IndustriesSection
          intro={scanToBimIndustriesIntro.description}
          titleLine1={scanToBimIndustriesIntro.titleLine1}
          titleLine2={scanToBimIndustriesIntro.titleLine2}
          titleMaxWidth={scanToBimIndustriesIntro.titleMaxWidth}
        />
        <MepEngagementProcessSection
          section={scanToBimEngagementProcessSection}
          steps={scanToBimEngagementProcessSteps}
        />
        <EvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              {scanToBimProjectCta.titleLine1}
              <span className="font-light text-accent">{scanToBimProjectCta.titleLine2}</span>
            </>
          }
          description={scanToBimProjectCta.description}
          ctaLabel={scanToBimProjectCta.cta}
          ctaHref="#scan-page-contact"
          titleClassName="max-w-[800px]"
          descriptionClassName="max-w-[720px]"
        />
        <ClientSuccessStoriesSection description={scanToBimTestimonialsDescription} />
        <FaqSection
          variant="mep"
          tag={scanToBimFaqSection.tag}
          description={scanToBimFaqSection.description}
          items={scanToBimFaqs}
        />
        <GetInTouchSection sectionId="scan-page-contact" description={scanToBimFaqDescription} />
      </main>
      <SiteFooter />
    </div>
  );
}
