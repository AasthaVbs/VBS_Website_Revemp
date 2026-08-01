import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureAiBimWorkflowSection } from "@/components/sections/architecture/architecture-ai-bim-workflow-section";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  cadDraftingAdvantagesCards,
  cadDraftingAdvantagesSection,
  cadDraftingAiBimWorkflowSection,
  cadDraftingContactDescription,
  cadDraftingEngagementDescription,
  cadDraftingFaqSection,
  cadDraftingFaqs,
  cadDraftingHero,
  cadDraftingIndustriesIntro,
  cadDraftingIntro,
  cadDraftingOurClientsSection,
  cadDraftingProjectCta,
  cadDraftingResourcesSection,
  cadDraftingServiceCards,
  cadDraftingServicesSection,
  cadDraftingStatsStrip,
  cadDraftingTechnologyStackSection,
  cadDraftingTechnologyStackToolsRowOne,
  cadDraftingTechnologyStackToolsRowTwo,
  cadDraftingTestimonialsDescription,
  cadDraftingWhyChooseItems,
  cadDraftingWhyChooseSection,
  cadDraftingWorkflowSection,
  cadDraftingWorkflowSteps,
} from "@/constants/cad-drafting-services-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredMepWorkflowSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function CadDraftingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page cad-drafting-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...cadDraftingHero}
          imageSize="compact"
          ctaHref="#cad-drafting-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={cadDraftingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={cadDraftingIntro} />
        <OurClientsSection section={cadDraftingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={cadDraftingServicesSection}
          cards={cadDraftingServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={cadDraftingAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={cadDraftingWhyChooseSection}
          items={cadDraftingWhyChooseItems}
        />
        <DeferredMepWorkflowSection
          section={cadDraftingWorkflowSection}
          steps={cadDraftingWorkflowSteps}
        />
        <MepBimTechnologyStackSection
          section={cadDraftingTechnologyStackSection}
          toolsRowOne={cadDraftingTechnologyStackToolsRowOne}
          toolsRowTwo={cadDraftingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={cadDraftingAdvantagesSection}
          cards={cadDraftingAdvantagesCards}
        />
        <DeferredEngagementModelsSection description={cadDraftingEngagementDescription} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{cadDraftingProjectCta.titleLine1}</span>
              <br />
              <span className="font-light text-accent">{cadDraftingProjectCta.titleLine2}</span>
            </>
          }
          description={cadDraftingProjectCta.description}
          ctaLabel={cadDraftingProjectCta.cta}
          ctaHref={cadDraftingProjectCta.ctaHref}
          titleClassName="max-w-[835px] capitalize"
          descriptionClassName="max-w-[577px]"
        />
        <DeferredIndustriesSection
          intro={cadDraftingIndustriesIntro.description}
          titleLine1={cadDraftingIndustriesIntro.titleLine1}
          titleLine2={cadDraftingIndustriesIntro.titleLine2}
          titleMaxWidth={cadDraftingIndustriesIntro.titleMaxWidth}
          introMaxWidth={cadDraftingIndustriesIntro.descriptionMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={cadDraftingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={cadDraftingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={cadDraftingFaqSection.tag}
          description={cadDraftingFaqSection.description}
          items={cadDraftingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="cad-drafting-page-contact"
          description={cadDraftingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
