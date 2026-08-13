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
  permitDrawingAdvantagesCards,
  permitDrawingAdvantagesSection,
  permitDrawingAiBimWorkflowSection,
  permitDrawingContactDescription,
  permitDrawingEngagementModelsCards,
  permitDrawingEngagementModelsSection,
  permitDrawingFaqSection,
  permitDrawingFaqs,
  permitDrawingHero,
  permitDrawingIndustriesIntro,
  permitDrawingIntro,
  permitDrawingOurClientsSection,
  permitDrawingProjectCta,
  permitDrawingResourcesSection,
  permitDrawingServiceCards,
  permitDrawingServicesSection,
  permitDrawingStatsStrip,
  permitDrawingTechnologyStackSection,
  permitDrawingTechnologyStackToolsRowOne,
  permitDrawingTechnologyStackToolsRowTwo,
  permitDrawingTestimonialsDescription,
  permitDrawingWhyChooseItems,
  permitDrawingWhyChooseSection,
  permitDrawingWorkflowIntegrateSection,
  permitDrawingWorkflowIntegrateSteps,
} from "@/constants/permit-drawing-services-content";
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

export async function PermitDrawingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page permit-drawing-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...permitDrawingHero}
          imageSize="compact"
          ctaHref="#permit-drawing-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={permitDrawingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={permitDrawingIntro} />
        <OurClientsSection section={permitDrawingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={permitDrawingServicesSection}
          cards={permitDrawingServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={permitDrawingAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={permitDrawingWhyChooseSection}
          items={permitDrawingWhyChooseItems}
          descriptionMaxWidth={permitDrawingWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={permitDrawingWorkflowIntegrateSection}
          steps={permitDrawingWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={permitDrawingTechnologyStackSection}
          toolsRowOne={permitDrawingTechnologyStackToolsRowOne}
          toolsRowTwo={permitDrawingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={620}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={permitDrawingAdvantagesSection}
          cards={permitDrawingAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={permitDrawingEngagementModelsSection}
          cards={permitDrawingEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{permitDrawingProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{permitDrawingProjectCta.titleLine2}</span>
            </>
          }
          description={permitDrawingProjectCta.description}
          ctaLabel={permitDrawingProjectCta.cta}
          ctaHref={permitDrawingProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[638px]"
        />
        <DeferredIndustriesSection
          intro={permitDrawingIndustriesIntro.description}
          titleLine1={permitDrawingIndustriesIntro.titleLine1}
          titleLine2={permitDrawingIndustriesIntro.titleLine2}
          titleMaxWidth={permitDrawingIndustriesIntro.titleMaxWidth}
          introMaxWidth={790}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={permitDrawingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={permitDrawingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={permitDrawingFaqSection.tag}
          description={permitDrawingFaqSection.description}
          items={permitDrawingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="permit-drawing-page-contact"
          description={permitDrawingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
