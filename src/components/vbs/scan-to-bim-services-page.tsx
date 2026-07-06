// @ts-nocheck
import { SiteHeader } from "@/components/layout/site-header";
import { MepIntroSection } from "@/components/sections/mep/figma/mep-intro-figma-section";
import { MepWhatYouGetSection } from "@/components/sections/mep/figma/mep-what-you-get-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
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
import {
  DeferredClientSuccessStoriesSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepDisciplinesSection,
  DeferredMepEngagementProcessSection,
  DeferredMepFullSpectrumServicesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredMepWhyChooseSection,
  DeferredMepWorkflowSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function ScanToBimServicesPage() {
  return (
    <div className="vbs-redesign-page scan-to-bim-services-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection {...scanToBimHero} ctaHref="#services" />
        <StatsStripSection stats={scanToBimStatsStrip} className="vbs-mep-stats-strip bg-white" />
        <MepIntroSection copy={scanToBimIntroCopy} points={scanToBimIntroPoints} />
        <MepWhatYouGetSection section={scanToBimWhatYouGetSection} cards={scanToBimWhatYouGetCards} />
        <DeferredMepFullSpectrumServicesSection
          section={scanToBimFullSpectrumSection}
          cards={scanToBimFullSpectrumCards}
          scrollInteraction="hover"
        />
        <DeferredMepDisciplinesSection
          section={scanToBimDisciplinesSection}
          panels={scanToBimDisciplinePanels}
          tabsAriaLabel="Scan to BIM disciplines"
        />
        <DeferredMepWorkflowSection section={scanToBimWorkflowSection} steps={scanToBimWorkflowSteps} />
        <DeferredMepServiceBenefitsSection
          section={scanToBimServiceBenefitsSection}
          cards={scanToBimServiceBenefitsCards}
        />
        <DeferredMepWhyChooseSection section={scanToBimWhyChooseSection} items={scanToBimWhyChooseItems} />
        <DeferredMepResourcesSection section={scanToBimResourcesSection} />
        <DeferredIndustriesSection
          intro={scanToBimIndustriesIntro.description}
          titleLine1={scanToBimIndustriesIntro.titleLine1}
          titleLine2={scanToBimIndustriesIntro.titleLine2}
          titleMaxWidth={scanToBimIndustriesIntro.titleMaxWidth}
        />
        <DeferredMepEngagementProcessSection
          section={scanToBimEngagementProcessSection}
          steps={scanToBimEngagementProcessSteps}
        />
        <DeferredEvaluateDeliveryCtaSection
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
        <DeferredClientSuccessStoriesSection description={scanToBimTestimonialsDescription} />
        <DeferredFaqSection
          variant="mep"
          tag={scanToBimFaqSection.tag}
          description={scanToBimFaqSection.description}
          items={scanToBimFaqs}
        />
        <DeferredGetInTouchSection sectionId="scan-page-contact" description={scanToBimFaqDescription} />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
