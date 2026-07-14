// @ts-nocheck
import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureAiBimWorkflowSection } from "@/components/sections/architecture/architecture-ai-bim-workflow-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepIntroSection } from "@/components/sections/mep/figma/mep-intro-figma-section";
import { MepWhatYouGetSection } from "@/components/sections/mep/figma/mep-what-you-get-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  architectureAiBimWorkflowSection,
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
  architectureIntroFeatures,
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
import {
  DeferredClientSuccessStoriesSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepDisciplinesSection,
  DeferredMepEngagementProcessSection,
  DeferredMepQualityAssuranceSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredMepWhyChooseSection,
  DeferredMepWorkflowSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function ArchitectureServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page architecture-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection {...architectureHero} ctaHref="#services" />
        <TrustStripSection
          stats={architectureStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <MepIntroSection
          copy={architectureIntroCopy}
          features={architectureIntroFeatures}
          featuresPlacement="below"
        />
        <MepWhatYouGetSection
          section={architectureWhatYouGetSection}
          cards={architectureWhatYouGetCards}
        />
        <MepFullSpectrumServicesSection
          section={architectureFullSpectrumSection}
          cards={architectureFullSpectrumCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={architectureAiBimWorkflowSection} />
        <DeferredMepDisciplinesSection
          section={architectureDisciplinesSection}
          panels={architectureDisciplinePanels}
          tabsAriaLabel="Architectural and structural disciplines"
        />
        <DeferredMepWorkflowSection
          section={architectureWorkflowSection}
          steps={architectureWorkflowSteps}
        />
        <DeferredMepQualityAssuranceSection
          section={architectureQualityAssuranceSection}
          stages={architectureQualityAssuranceStages}
          stats={architectureQualityAssuranceStats}
        />
        <DeferredMepServiceBenefitsSection
          section={architectureServiceBenefitsSection}
          cards={architectureServiceBenefitsCards}
        />
        <DeferredMepWhyChooseSection
          section={architectureWhyChooseSection}
          items={architectureWhyChooseItems}
        />
        <DeferredMepResourcesSection section={architectureResourcesSection} allItems={resourcesFeed} />
        <DeferredMepEngagementProcessSection
          section={architectureEngagementProcessSection}
          steps={architectureEngagementProcessSteps}
        />
        <DeferredIndustriesSection
          intro={architectureIndustriesIntro.description}
          titleLine1={architectureIndustriesIntro.titleLine1}
          titleLine2={architectureIndustriesIntro.titleLine2}
          titleMaxWidth={architectureIndustriesIntro.titleMaxWidth}
        />
        <DeferredEvaluateDeliveryCtaSection
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
        <DeferredClientSuccessStoriesSection description={architectureTestimonialsDescription} />
        <DeferredFaqSection
          variant="mep"
          tag={architectureFaqSection.tag}
          description={architectureFaqSection.description}
          items={architectureFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="architecture-page-contact"
          description={architectureFaqDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
