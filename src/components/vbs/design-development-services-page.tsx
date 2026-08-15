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
  designDevelopmentAdvantagesCards,
  designDevelopmentAdvantagesSection,
  designDevelopmentAiBimWorkflowSection,
  designDevelopmentContactDescription,
  designDevelopmentEngagementModelsCards,
  designDevelopmentEngagementModelsSection,
  designDevelopmentFaqSection,
  designDevelopmentFaqs,
  designDevelopmentHero,
  designDevelopmentIndustriesIntro,
  designDevelopmentIntro,
  designDevelopmentOurClientsSection,
  designDevelopmentProjectCta,
  designDevelopmentResourcesSection,
  designDevelopmentServiceCards,
  designDevelopmentServicesSection,
  designDevelopmentStatsStrip,
  designDevelopmentTechnologyStackSection,
  designDevelopmentTechnologyStackToolsRowOne,
  designDevelopmentTechnologyStackToolsRowTwo,
  designDevelopmentTestimonialsDescription,
  designDevelopmentWhyChooseItems,
  designDevelopmentWhyChooseSection,
  designDevelopmentWorkflowIntegrateSection,
  designDevelopmentWorkflowIntegrateSteps,
} from "@/constants/design-development-services-content";
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

export async function DesignDevelopmentServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page design-development-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...designDevelopmentHero}
          imageSize="compact"
          ctaHref="#design-development-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={designDevelopmentStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={designDevelopmentIntro} />
        <OurClientsSection section={designDevelopmentOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={designDevelopmentServicesSection}
          cards={designDevelopmentServiceCards}
          scrollInteraction="hover"
          titleLine2ClassName="block"
        />
        <ArchitectureAiBimWorkflowSection section={designDevelopmentAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={designDevelopmentWhyChooseSection}
          items={designDevelopmentWhyChooseItems}
          descriptionMaxWidth={designDevelopmentWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={designDevelopmentWorkflowIntegrateSection}
          steps={designDevelopmentWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={designDevelopmentTechnologyStackSection}
          toolsRowOne={designDevelopmentTechnologyStackToolsRowOne}
          toolsRowTwo={designDevelopmentTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={designDevelopmentAdvantagesSection}
          cards={designDevelopmentAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={designDevelopmentEngagementModelsSection}
          cards={designDevelopmentEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium max-lg:whitespace-normal lg:whitespace-nowrap">
                {designDevelopmentProjectCta.titleLine1}
              </span>
              <br />
              <span className="font-light">{designDevelopmentProjectCta.titleLine2}</span>
            </>
          }
          description={designDevelopmentProjectCta.description}
          ctaLabel={designDevelopmentProjectCta.cta}
          ctaHref={designDevelopmentProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[673px]"
        />
        <DeferredIndustriesSection
          intro={designDevelopmentIndustriesIntro.description}
          titleLine1={designDevelopmentIndustriesIntro.titleLine1}
          titleLine2={designDevelopmentIndustriesIntro.titleLine2}
          titleMaxWidth={designDevelopmentIndustriesIntro.titleMaxWidth}
          introMaxWidth={934}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={designDevelopmentResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={designDevelopmentTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={designDevelopmentFaqSection.tag}
          description={designDevelopmentFaqSection.description}
          items={designDevelopmentFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="design-development-page-contact"
          description={designDevelopmentContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
