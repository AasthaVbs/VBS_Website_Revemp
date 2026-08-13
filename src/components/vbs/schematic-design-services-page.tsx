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
  schematicDesignAdvantagesCards,
  schematicDesignAdvantagesSection,
  schematicDesignAiBimWorkflowSection,
  schematicDesignContactDescription,
  schematicDesignEngagementModelsCards,
  schematicDesignEngagementModelsSection,
  schematicDesignFaqSection,
  schematicDesignFaqs,
  schematicDesignHero,
  schematicDesignIndustriesIntro,
  schematicDesignIntro,
  schematicDesignOurClientsSection,
  schematicDesignProjectCta,
  schematicDesignResourcesSection,
  schematicDesignServiceCards,
  schematicDesignServicesSection,
  schematicDesignStatsStrip,
  schematicDesignTechnologyStackSection,
  schematicDesignTechnologyStackToolsRowOne,
  schematicDesignTechnologyStackToolsRowTwo,
  schematicDesignTestimonialsDescription,
  schematicDesignWhyChooseItems,
  schematicDesignWhyChooseSection,
  schematicDesignWorkflowIntegrateSection,
  schematicDesignWorkflowIntegrateSteps,
} from "@/constants/schematic-design-services-content";
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

export async function SchematicDesignServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page schematic-design-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...schematicDesignHero}
          imageSize="compact"
          ctaHref="#schematic-design-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={schematicDesignStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={schematicDesignIntro} />
        <OurClientsSection section={schematicDesignOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={schematicDesignServicesSection}
          cards={schematicDesignServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={schematicDesignAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={schematicDesignWhyChooseSection}
          items={schematicDesignWhyChooseItems}
          descriptionMaxWidth={schematicDesignWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={schematicDesignWorkflowIntegrateSection}
          steps={schematicDesignWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={schematicDesignTechnologyStackSection}
          toolsRowOne={schematicDesignTechnologyStackToolsRowOne}
          toolsRowTwo={schematicDesignTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={schematicDesignAdvantagesSection}
          cards={schematicDesignAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={schematicDesignEngagementModelsSection}
          cards={schematicDesignEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{schematicDesignProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{schematicDesignProjectCta.titleLine2}</span>
            </>
          }
          description={schematicDesignProjectCta.description}
          ctaLabel={schematicDesignProjectCta.cta}
          ctaHref={schematicDesignProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[638px]"
        />
        <DeferredIndustriesSection
          intro={schematicDesignIndustriesIntro.description}
          titleLine1={schematicDesignIndustriesIntro.titleLine1}
          titleLine2={schematicDesignIndustriesIntro.titleLine2}
          titleMaxWidth={schematicDesignIndustriesIntro.titleMaxWidth}
          introMaxWidth={790}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={schematicDesignResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={schematicDesignTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={schematicDesignFaqSection.tag}
          description={schematicDesignFaqSection.description}
          items={schematicDesignFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="schematic-design-page-contact"
          description={schematicDesignContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
