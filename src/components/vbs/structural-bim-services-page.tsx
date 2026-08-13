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
  structuralBimAdvantagesCards,
  structuralBimAdvantagesSection,
  structuralBimAiBimWorkflowSection,
  structuralBimContactDescription,
  structuralBimEngagementModelsCards,
  structuralBimEngagementModelsSection,
  structuralBimFaqSection,
  structuralBimFaqs,
  structuralBimHero,
  structuralBimIndustriesIntro,
  structuralBimIntro,
  structuralBimOurClientsSection,
  structuralBimProjectCta,
  structuralBimResourcesSection,
  structuralBimServiceCards,
  structuralBimServicesSection,
  structuralBimStatsStrip,
  structuralBimTechnologyStackSection,
  structuralBimTechnologyStackToolsRowOne,
  structuralBimTechnologyStackToolsRowTwo,
  structuralBimTestimonialsDescription,
  structuralBimWhyChooseItems,
  structuralBimWhyChooseSection,
  structuralBimWorkflowIntegrateSection,
  structuralBimWorkflowIntegrateSteps,
} from "@/constants/structural-bim-services-content";
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

export async function StructuralBimServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page structural-bim-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...structuralBimHero}
          imageSize="compact"
          ctaHref="#structural-bim-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={structuralBimStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={structuralBimIntro} />
        <OurClientsSection section={structuralBimOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={structuralBimServicesSection}
          cards={structuralBimServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={structuralBimAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={structuralBimWhyChooseSection}
          items={structuralBimWhyChooseItems}
          descriptionMaxWidth={structuralBimWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={structuralBimWorkflowIntegrateSection}
          steps={structuralBimWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={structuralBimTechnologyStackSection}
          toolsRowOne={structuralBimTechnologyStackToolsRowOne}
          toolsRowTwo={structuralBimTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={structuralBimAdvantagesSection}
          cards={structuralBimAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={structuralBimEngagementModelsSection}
          cards={structuralBimEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{structuralBimProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{structuralBimProjectCta.titleLine2}</span>
            </>
          }
          description={structuralBimProjectCta.description}
          ctaLabel={structuralBimProjectCta.cta}
          ctaHref={structuralBimProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[638px]"
        />
        <DeferredIndustriesSection
          intro={structuralBimIndustriesIntro.description}
          titleLine1={structuralBimIndustriesIntro.titleLine1}
          titleLine2={structuralBimIndustriesIntro.titleLine2}
          titleMaxWidth={structuralBimIndustriesIntro.titleMaxWidth}
          introMaxWidth={790}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={structuralBimResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={structuralBimTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={structuralBimFaqSection.tag}
          description={structuralBimFaqSection.description}
          items={structuralBimFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="structural-bim-page-contact"
          description={structuralBimContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
