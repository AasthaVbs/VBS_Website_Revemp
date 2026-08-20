import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureAiBimWorkflowSection } from "@/components/sections/architecture/architecture-ai-bim-workflow-section";
import { ArchitectureEngagementModelsSection } from "@/components/sections/architecture/architecture-engagement-models-section";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  architecturalDraftingAdvantagesCards,
  architecturalDraftingAdvantagesSection,
  architecturalDraftingAiBimWorkflowSection,
  architecturalDraftingContactDescription,
  architecturalDraftingEngagementModelsCards,
  architecturalDraftingEngagementModelsSection,
  architecturalDraftingFaqSection,
  architecturalDraftingFaqs,
  architecturalDraftingHero,
  architecturalDraftingIndustriesIntro,
  architecturalDraftingIntro,
  architecturalDraftingOurClientsSection,
  architecturalDraftingProjectCta,
  architecturalDraftingResourcesSection,
  architecturalDraftingServiceCards,
  architecturalDraftingServicesSection,
  architecturalDraftingStatsStrip,
  architecturalDraftingTechnologyStackSection,
  architecturalDraftingTechnologyStackToolsRowOne,
  architecturalDraftingTechnologyStackToolsRowTwo,
  architecturalDraftingTestimonialsDescription,
  architecturalDraftingWhyChooseItems,
  architecturalDraftingWhyChooseSection,
} from "@/constants/architectural-drafting-services-content";
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

export async function ArchitecturalDraftingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page architectural-drafting-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...architecturalDraftingHero}
          imageSize="compact"
          ctaHref="#architectural-drafting-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={architecturalDraftingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={architecturalDraftingIntro} />
        <OurClientsSection section={architecturalDraftingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={architecturalDraftingServicesSection}
          cards={architecturalDraftingServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection
          section={architecturalDraftingAiBimWorkflowSection}
        />
        <BimModelingWhyChooseSection
          section={architecturalDraftingWhyChooseSection}
          items={architecturalDraftingWhyChooseItems}
        />
        <MepBimTechnologyStackSection
          section={architecturalDraftingTechnologyStackSection}
          toolsRowOne={architecturalDraftingTechnologyStackToolsRowOne}
          toolsRowTwo={architecturalDraftingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={architecturalDraftingAdvantagesSection}
          cards={architecturalDraftingAdvantagesCards}
          className="bg-[#FAFAFA]"
          transparentCards
        />
        <ArchitectureEngagementModelsSection
          section={architecturalDraftingEngagementModelsSection}
          cards={architecturalDraftingEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{architecturalDraftingProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{architecturalDraftingProjectCta.titleLine2}</span>
            </>
          }
          description={architecturalDraftingProjectCta.description}
          ctaLabel={architecturalDraftingProjectCta.cta}
          ctaHref={architecturalDraftingProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111] capitalize"
          descriptionClassName="max-w-[638px]"
        />
        <DeferredIndustriesSection
          intro={architecturalDraftingIndustriesIntro.description}
          titleLine1={architecturalDraftingIndustriesIntro.titleLine1}
          titleLine2={architecturalDraftingIndustriesIntro.titleLine2}
          titleMaxWidth={architecturalDraftingIndustriesIntro.titleMaxWidth}
          introMaxWidth={790}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={architecturalDraftingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={architecturalDraftingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={architecturalDraftingFaqSection.tag}
          description={architecturalDraftingFaqSection.description}
          items={architecturalDraftingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="architectural-drafting-page-contact"
          description={architecturalDraftingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
