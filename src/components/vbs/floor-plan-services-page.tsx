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
  floorPlanAdvantagesCards,
  floorPlanAdvantagesSection,
  floorPlanAiBimWorkflowSection,
  floorPlanContactDescription,
  floorPlanEngagementModelsCards,
  floorPlanEngagementModelsSection,
  floorPlanFaqSection,
  floorPlanFaqs,
  floorPlanHero,
  floorPlanIndustriesIntro,
  floorPlanIntro,
  floorPlanOurClientsSection,
  floorPlanProjectCta,
  floorPlanResourcesSection,
  floorPlanServiceCards,
  floorPlanServicesSection,
  floorPlanStatsStrip,
  floorPlanTechnologyStackSection,
  floorPlanTechnologyStackToolsRowOne,
  floorPlanTechnologyStackToolsRowTwo,
  floorPlanTestimonialsDescription,
  floorPlanWhyChooseItems,
  floorPlanWhyChooseSection,
  floorPlanWorkflowIntegrateSection,
  floorPlanWorkflowIntegrateSteps,
} from "@/constants/floor-plan-services-content";
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

export async function FloorPlanServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page floor-plan-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...floorPlanHero}
          imageSize="compact"
          ctaHref="#floor-plan-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection stats={floorPlanStatsStrip} className="vbs-mep-stats-strip bg-white" />
        <BimModelingOverviewSection intro={floorPlanIntro} />
        <OurClientsSection section={floorPlanOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={floorPlanServicesSection}
          cards={floorPlanServiceCards}
          scrollInteraction="hover"
          titleLine2ClassName="block"
        />
        <ArchitectureAiBimWorkflowSection section={floorPlanAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={floorPlanWhyChooseSection}
          items={floorPlanWhyChooseItems}
          descriptionMaxWidth={floorPlanWhyChooseSection.descriptionMaxWidth}
          titleMaxWidth={floorPlanWhyChooseSection.titleMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={floorPlanWorkflowIntegrateSection}
          steps={floorPlanWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={floorPlanTechnologyStackSection}
          toolsRowOne={floorPlanTechnologyStackToolsRowOne}
          toolsRowTwo={floorPlanTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          titleMaxWidth={615}
          descriptionMaxWidth={579}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={floorPlanAdvantagesSection}
          cards={floorPlanAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={floorPlanEngagementModelsSection}
          cards={floorPlanEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{floorPlanProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{floorPlanProjectCta.titleLine2}</span>
            </>
          }
          description={floorPlanProjectCta.description}
          ctaLabel={floorPlanProjectCta.cta}
          ctaHref={floorPlanProjectCta.ctaHref}
          titleClassName="max-w-[758px] !text-[#111111]"
          descriptionClassName="max-w-[673px]"
        />
        <DeferredIndustriesSection
          intro={floorPlanIndustriesIntro.description}
          titleLine1={floorPlanIndustriesIntro.titleLine1}
          titleLine2={floorPlanIndustriesIntro.titleLine2}
          titleMaxWidth={floorPlanIndustriesIntro.titleMaxWidth}
          introMaxWidth={802}
          breakTitle
        />
        <DeferredMepResourcesSection section={floorPlanResourcesSection} allItems={resourcesFeed} />
        <DeferredClientSuccessStoriesSection description={floorPlanTestimonialsDescription} />
        <DeferredFaqSection
          variant="mep"
          tag={floorPlanFaqSection.tag}
          description={floorPlanFaqSection.description}
          items={floorPlanFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="floor-plan-page-contact"
          description={floorPlanContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
