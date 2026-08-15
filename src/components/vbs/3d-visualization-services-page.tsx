import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureAiBimWorkflowSection } from "@/components/sections/architecture/architecture-ai-bim-workflow-section";
import { ArchitectureEngagementModelsSection } from "@/components/sections/architecture/architecture-engagement-models-section";
import { ArchitectureIntegrateWorkflowSection } from "@/components/sections/architecture/architecture-integrate-workflow-section";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  visualizationAdvantagesCards,
  visualizationAdvantagesSection,
  visualizationAiBimWorkflowSection,
  visualizationContactDescription,
  visualizationEngagementModelsCards,
  visualizationEngagementModelsSection,
  visualizationFaqSection,
  visualizationFaqs,
  visualizationHero,
  visualizationIndustriesIntro,
  visualizationIntro,
  visualizationOurClientsSection,
  visualizationProjectCta,
  visualizationResourcesSection,
  visualizationServiceCards,
  visualizationServicesSection,
  visualizationStatsStrip,
  visualizationTechnologyStackSection,
  visualizationTechnologyStackToolsRowOne,
  visualizationTechnologyStackToolsRowTwo,
  visualizationTestimonialsDescription,
  visualizationWhyChooseItems,
  visualizationWhyChooseSection,
  visualizationWorkflowIntegrateSection,
  visualizationWorkflowIntegrateSteps,
} from "@/constants/3d-visualization-services-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function ThreeDVisualizationServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page visualization-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...visualizationHero}
          imageSize="compact"
          ctaHref="#3d-visualization-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={visualizationStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={visualizationIntro} />
        <OurClientsSection section={visualizationOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={visualizationServicesSection}
          cards={visualizationServiceCards}
          scrollInteraction="hover"
          titleLine2ClassName="block"
        />
        <ArchitectureAiBimWorkflowSection section={visualizationAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={visualizationWhyChooseSection}
          items={visualizationWhyChooseItems}
          descriptionMaxWidth={visualizationWhyChooseSection.descriptionMaxWidth}
          titleMaxWidth={visualizationWhyChooseSection.titleMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={visualizationWorkflowIntegrateSection}
          steps={visualizationWorkflowIntegrateSteps}
          headerAlign="center"
          descriptionMaxWidth={640}
        />
        <MepBimTechnologyStackSection
          section={visualizationTechnologyStackSection}
          toolsRowOne={visualizationTechnologyStackToolsRowOne}
          toolsRowTwo={visualizationTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          titleMaxWidth={615}
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={visualizationAdvantagesSection}
          cards={visualizationAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={visualizationEngagementModelsSection}
          cards={visualizationEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{visualizationProjectCta.titleLine1}</span>
              <br />
              <span className="font-light text-accent">{visualizationProjectCta.titleLine2}</span>
            </>
          }
          description={visualizationProjectCta.description}
          ctaLabel={visualizationProjectCta.cta}
          ctaHref={visualizationProjectCta.ctaHref}
          titleClassName="max-w-[835px]"
          descriptionClassName="max-w-[638px]"
        />
        <DeferredIndustriesSection
          intro={visualizationIndustriesIntro.description}
          titleLine1={visualizationIndustriesIntro.titleLine1}
          titleLine2={visualizationIndustriesIntro.titleLine2}
          titleMaxWidth={visualizationIndustriesIntro.titleMaxWidth}
          introMaxWidth={774}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={visualizationResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={visualizationTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={visualizationFaqSection.tag}
          description={visualizationFaqSection.description}
          items={visualizationFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="3d-visualization-page-contact"
          description={visualizationContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
