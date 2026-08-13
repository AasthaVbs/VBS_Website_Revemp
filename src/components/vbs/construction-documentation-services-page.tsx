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
  constructionDocumentationAdvantagesCards,
  constructionDocumentationAdvantagesSection,
  constructionDocumentationAiBimWorkflowSection,
  constructionDocumentationContactDescription,
  constructionDocumentationEngagementModelsCards,
  constructionDocumentationEngagementModelsSection,
  constructionDocumentationFaqSection,
  constructionDocumentationFaqs,
  constructionDocumentationHero,
  constructionDocumentationIndustriesIntro,
  constructionDocumentationIntro,
  constructionDocumentationOurClientsSection,
  constructionDocumentationProjectCta,
  constructionDocumentationResourcesSection,
  constructionDocumentationServiceCards,
  constructionDocumentationServicesSection,
  constructionDocumentationStatsStrip,
  constructionDocumentationTechnologyStackSection,
  constructionDocumentationTechnologyStackToolsRowOne,
  constructionDocumentationTechnologyStackToolsRowTwo,
  constructionDocumentationTestimonialsDescription,
  constructionDocumentationWhyChooseItems,
  constructionDocumentationWhyChooseSection,
  constructionDocumentationWorkflowIntegrateSection,
  constructionDocumentationWorkflowIntegrateSteps,
} from "@/constants/construction-documentation-services-content";
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

export async function ConstructionDocumentationServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page construction-documentation-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...constructionDocumentationHero}
          imageSize="compact"
          ctaHref="#construction-documentation-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={constructionDocumentationStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={constructionDocumentationIntro} />
        <OurClientsSection section={constructionDocumentationOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={constructionDocumentationServicesSection}
          cards={constructionDocumentationServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection
          section={constructionDocumentationAiBimWorkflowSection}
        />
        <BimModelingWhyChooseSection
          section={constructionDocumentationWhyChooseSection}
          items={constructionDocumentationWhyChooseItems}
          descriptionMaxWidth={
            constructionDocumentationWhyChooseSection.descriptionMaxWidth
          }
        />
        <ArchitectureIntegrateWorkflowSection
          section={constructionDocumentationWorkflowIntegrateSection}
          steps={constructionDocumentationWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={constructionDocumentationTechnologyStackSection}
          toolsRowOne={constructionDocumentationTechnologyStackToolsRowOne}
          toolsRowTwo={constructionDocumentationTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          titleMaxWidth={920}
          descriptionMaxWidth={620}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={constructionDocumentationAdvantagesSection}
          cards={constructionDocumentationAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={constructionDocumentationEngagementModelsSection}
          cards={constructionDocumentationEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">
                {constructionDocumentationProjectCta.titleLine1}
              </span>
              <br />
              <span className="font-light">
                {constructionDocumentationProjectCta.titleLine2}
              </span>
            </>
          }
          description={constructionDocumentationProjectCta.description}
          ctaLabel={constructionDocumentationProjectCta.cta}
          ctaHref={constructionDocumentationProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[638px]"
        />
        <DeferredIndustriesSection
          intro={constructionDocumentationIndustriesIntro.description}
          titleLine1={constructionDocumentationIndustriesIntro.titleLine1}
          titleLine2={constructionDocumentationIndustriesIntro.titleLine2}
          titleMaxWidth={constructionDocumentationIndustriesIntro.titleMaxWidth}
          introMaxWidth={790}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={constructionDocumentationResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={constructionDocumentationTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={constructionDocumentationFaqSection.tag}
          description={constructionDocumentationFaqSection.description}
          items={constructionDocumentationFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="construction-documentation-page-contact"
          description={constructionDocumentationContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
