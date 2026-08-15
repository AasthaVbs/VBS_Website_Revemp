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
  asBuiltDraftingAdvantagesCards,
  asBuiltDraftingAdvantagesSection,
  asBuiltDraftingAiBimWorkflowSection,
  asBuiltDraftingContactDescription,
  asBuiltDraftingEngagementModelsCards,
  asBuiltDraftingEngagementModelsSection,
  asBuiltDraftingFaqSection,
  asBuiltDraftingFaqs,
  asBuiltDraftingHero,
  asBuiltDraftingIndustriesIntro,
  asBuiltDraftingIntro,
  asBuiltDraftingOurClientsSection,
  asBuiltDraftingProjectCta,
  asBuiltDraftingResourcesSection,
  asBuiltDraftingServiceCards,
  asBuiltDraftingServicesSection,
  asBuiltDraftingStatsStrip,
  asBuiltDraftingTechnologyStackSection,
  asBuiltDraftingTechnologyStackToolsRowOne,
  asBuiltDraftingTechnologyStackToolsRowTwo,
  asBuiltDraftingTestimonialsDescription,
  asBuiltDraftingWhyChooseItems,
  asBuiltDraftingWhyChooseSection,
  asBuiltDraftingWorkflowIntegrateSection,
  asBuiltDraftingWorkflowIntegrateSteps,
} from "@/constants/as-built-drafting-services-content";
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

export async function AsBuiltDraftingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page as-built-drafting-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...asBuiltDraftingHero}
          imageSize="compact"
          ctaHref="#as-built-drafting-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={asBuiltDraftingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={asBuiltDraftingIntro} />
        <OurClientsSection section={asBuiltDraftingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={asBuiltDraftingServicesSection}
          cards={asBuiltDraftingServiceCards}
          scrollInteraction="hover"
          titleLine2ClassName="block"
        />
        <ArchitectureAiBimWorkflowSection section={asBuiltDraftingAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={asBuiltDraftingWhyChooseSection}
          items={asBuiltDraftingWhyChooseItems}
          descriptionMaxWidth={asBuiltDraftingWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={asBuiltDraftingWorkflowIntegrateSection}
          steps={asBuiltDraftingWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={asBuiltDraftingTechnologyStackSection}
          toolsRowOne={asBuiltDraftingTechnologyStackToolsRowOne}
          toolsRowTwo={asBuiltDraftingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={589}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={asBuiltDraftingAdvantagesSection}
          cards={asBuiltDraftingAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={asBuiltDraftingEngagementModelsSection}
          cards={asBuiltDraftingEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium max-lg:whitespace-normal lg:whitespace-nowrap">
                {asBuiltDraftingProjectCta.titleLine1}
              </span>
              <br />
              <span className="font-light">{asBuiltDraftingProjectCta.titleLine2}</span>
            </>
          }
          description={asBuiltDraftingProjectCta.description}
          ctaLabel={asBuiltDraftingProjectCta.cta}
          ctaHref={asBuiltDraftingProjectCta.ctaHref}
          titleClassName="max-w-[758px] !text-[#111111]"
          descriptionClassName="max-w-[673px]"
        />
        <DeferredIndustriesSection
          intro={asBuiltDraftingIndustriesIntro.description}
          titleLine1={asBuiltDraftingIndustriesIntro.titleLine1}
          titleLine2={asBuiltDraftingIndustriesIntro.titleLine2}
          titleMaxWidth={asBuiltDraftingIndustriesIntro.titleMaxWidth}
          introMaxWidth={802}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={asBuiltDraftingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={asBuiltDraftingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={asBuiltDraftingFaqSection.tag}
          description={asBuiltDraftingFaqSection.description}
          items={asBuiltDraftingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="as-built-drafting-page-contact"
          description={asBuiltDraftingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
