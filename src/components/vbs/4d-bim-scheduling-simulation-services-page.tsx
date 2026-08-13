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
  fourDBimSchedulingAdvantagesCards,
  fourDBimSchedulingAdvantagesSection,
  fourDBimSchedulingAiBimWorkflowSection,
  fourDBimSchedulingContactDescription,
  fourDBimSchedulingEngagementModelsCards,
  fourDBimSchedulingEngagementModelsSection,
  fourDBimSchedulingFaqSection,
  fourDBimSchedulingFaqs,
  fourDBimSchedulingHero,
  fourDBimSchedulingIndustriesIntro,
  fourDBimSchedulingIntro,
  fourDBimSchedulingOurClientsSection,
  fourDBimSchedulingProjectCta,
  fourDBimSchedulingResourcesSection,
  fourDBimSchedulingServiceCards,
  fourDBimSchedulingServicesSection,
  fourDBimSchedulingStatsStrip,
  fourDBimSchedulingTechnologyStackSection,
  fourDBimSchedulingTechnologyStackToolsRowOne,
  fourDBimSchedulingTechnologyStackToolsRowTwo,
  fourDBimSchedulingTestimonialsDescription,
  fourDBimSchedulingWhyChooseItems,
  fourDBimSchedulingWhyChooseSection,
  fourDBimSchedulingWorkflowIntegrateSection,
  fourDBimSchedulingWorkflowIntegrateSteps,
} from "@/constants/4d-bim-scheduling-simulation-content";
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

export async function FourDBimSchedulingSimulationServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page four-d-bim-scheduling-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...fourDBimSchedulingHero}
          imageSize="compact"
          ctaHref="#four-d-bim-scheduling-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={fourDBimSchedulingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={fourDBimSchedulingIntro} />
        <OurClientsSection section={fourDBimSchedulingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={fourDBimSchedulingServicesSection}
          cards={fourDBimSchedulingServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={fourDBimSchedulingAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={fourDBimSchedulingWhyChooseSection}
          items={fourDBimSchedulingWhyChooseItems}
          descriptionMaxWidth={fourDBimSchedulingWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={fourDBimSchedulingWorkflowIntegrateSection}
          steps={fourDBimSchedulingWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={fourDBimSchedulingTechnologyStackSection}
          toolsRowOne={fourDBimSchedulingTechnologyStackToolsRowOne}
          toolsRowTwo={fourDBimSchedulingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={fourDBimSchedulingAdvantagesSection}
          cards={fourDBimSchedulingAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={fourDBimSchedulingEngagementModelsSection}
          cards={fourDBimSchedulingEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{fourDBimSchedulingProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{fourDBimSchedulingProjectCta.titleLine2}</span>
            </>
          }
          description={fourDBimSchedulingProjectCta.description}
          ctaLabel={fourDBimSchedulingProjectCta.cta}
          ctaHref={fourDBimSchedulingProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[638px]"
        />
        <DeferredIndustriesSection
          intro={fourDBimSchedulingIndustriesIntro.description}
          titleLine1={fourDBimSchedulingIndustriesIntro.titleLine1}
          titleLine2={fourDBimSchedulingIndustriesIntro.titleLine2}
          titleMaxWidth={fourDBimSchedulingIndustriesIntro.titleMaxWidth}
          introMaxWidth={790}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={fourDBimSchedulingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={fourDBimSchedulingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={fourDBimSchedulingFaqSection.tag}
          description={fourDBimSchedulingFaqSection.description}
          items={fourDBimSchedulingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="four-d-bim-scheduling-page-contact"
          description={fourDBimSchedulingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
