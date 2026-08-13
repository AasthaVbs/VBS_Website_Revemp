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
  twoDDraftingAdvantagesCards,
  twoDDraftingAdvantagesSection,
  twoDDraftingAiBimWorkflowSection,
  twoDDraftingContactDescription,
  twoDDraftingEngagementModelsCards,
  twoDDraftingEngagementModelsSection,
  twoDDraftingFaqSection,
  twoDDraftingFaqs,
  twoDDraftingHero,
  twoDDraftingIndustriesIntro,
  twoDDraftingIntro,
  twoDDraftingOurClientsSection,
  twoDDraftingProjectCta,
  twoDDraftingResourcesSection,
  twoDDraftingServiceCards,
  twoDDraftingServicesSection,
  twoDDraftingStatsStrip,
  twoDDraftingTechnologyStackSection,
  twoDDraftingTechnologyStackToolsRowOne,
  twoDDraftingTechnologyStackToolsRowTwo,
  twoDDraftingTestimonialsDescription,
  twoDDraftingWhyChooseItems,
  twoDDraftingWhyChooseSection,
  twoDDraftingWorkflowIntegrateSection,
  twoDDraftingWorkflowIntegrateSteps,
} from "@/constants/2d-drafting-services-content";
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

export async function TwoDDraftingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page two-d-drafting-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...twoDDraftingHero}
          imageSize="compact"
          ctaHref="#two-d-drafting-page-contact"
          containerClassName="!pt-0 !pb-6 sm:!pt-0 sm:!pb-8 lg:!pt-0 lg:!pb-10"
        />
        <TrustStripSection
          stats={twoDDraftingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={twoDDraftingIntro} />
        <OurClientsSection section={twoDDraftingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={twoDDraftingServicesSection}
          cards={twoDDraftingServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={twoDDraftingAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={twoDDraftingWhyChooseSection}
          items={twoDDraftingWhyChooseItems}
          descriptionMaxWidth={twoDDraftingWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={twoDDraftingWorkflowIntegrateSection}
          steps={twoDDraftingWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={twoDDraftingTechnologyStackSection}
          toolsRowOne={twoDDraftingTechnologyStackToolsRowOne}
          toolsRowTwo={twoDDraftingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={twoDDraftingAdvantagesSection}
          cards={twoDDraftingAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={twoDDraftingEngagementModelsSection}
          cards={twoDDraftingEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{twoDDraftingProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{twoDDraftingProjectCta.titleLine2}</span>
            </>
          }
          description={twoDDraftingProjectCta.description}
          ctaLabel={twoDDraftingProjectCta.cta}
          ctaHref={twoDDraftingProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[673px]"
        />
        <DeferredIndustriesSection
          intro={twoDDraftingIndustriesIntro.description}
          titleLine1={twoDDraftingIndustriesIntro.titleLine1}
          titleLine2={twoDDraftingIndustriesIntro.titleLine2}
          titleMaxWidth={twoDDraftingIndustriesIntro.titleMaxWidth}
          introMaxWidth={twoDDraftingIndustriesIntro.descriptionMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={twoDDraftingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={twoDDraftingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={twoDDraftingFaqSection.tag}
          description={twoDDraftingFaqSection.description}
          items={twoDDraftingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="two-d-drafting-page-contact"
          description={twoDDraftingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
