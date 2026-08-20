import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureAiBimWorkflowSection } from "@/components/sections/architecture/architecture-ai-bim-workflow-section";
import { ArchitectureIntegrateWorkflowSection } from "@/components/sections/architecture/architecture-integrate-workflow-section";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  revitFamilyCreationAiBimWorkflowSection,
  revitFamilyCreationContactDescription,
  revitFamilyCreationEngagementCards,
  revitFamilyCreationFaqSection,
  revitFamilyCreationFaqs,
  revitFamilyCreationHero,
  revitFamilyCreationIndustriesIntro,
  revitFamilyCreationIntro,
  revitFamilyCreationKeyPointsCards,
  revitFamilyCreationKeyPointsSection,
  revitFamilyCreationOurClientsSection,
  revitFamilyCreationProjectCta,
  revitFamilyCreationResourcesSection,
  revitFamilyCreationServiceCards,
  revitFamilyCreationServicesSection,
  revitFamilyCreationStatsStrip,
  revitFamilyCreationTechnologyStackSection,
  revitFamilyCreationTechnologyStackToolsRowOne,
  revitFamilyCreationTechnologyStackToolsRowTwo,
  revitFamilyCreationTestimonialsDescription,
  revitFamilyCreationWhyChooseItems,
  revitFamilyCreationWhyChooseSection,
  revitFamilyCreationWorkflowIntegrateSection,
  revitFamilyCreationWorkflowIntegrateSteps,
} from "@/constants/revit-family-creation-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function RevitFamilyCreationPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page revit-family-creation-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...revitFamilyCreationHero}
          imageSize="compact"
          ctaHref="#revit-family-creation-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={revitFamilyCreationStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={revitFamilyCreationIntro} />
        <OurClientsSection section={revitFamilyCreationOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={revitFamilyCreationServicesSection}
          cards={revitFamilyCreationServiceCards}
          scrollInteraction="hover"
          titleLine2ClassName="block"
        />
        <ArchitectureAiBimWorkflowSection
          section={revitFamilyCreationAiBimWorkflowSection}
        />
        <BimModelingWhyChooseSection
          section={revitFamilyCreationWhyChooseSection}
          items={revitFamilyCreationWhyChooseItems}
          descriptionMaxWidth={revitFamilyCreationWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={revitFamilyCreationWorkflowIntegrateSection}
          steps={revitFamilyCreationWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={revitFamilyCreationTechnologyStackSection}
          toolsRowOne={revitFamilyCreationTechnologyStackToolsRowOne}
          toolsRowTwo={revitFamilyCreationTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="key-points"
          section={revitFamilyCreationKeyPointsSection}
          cards={revitFamilyCreationKeyPointsCards}
        />
        <DeferredEngagementModelsSection cards={revitFamilyCreationEngagementCards} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">
                {revitFamilyCreationProjectCta.titleLine1}
              </span>
              <br />
              <span className="font-light">
                {revitFamilyCreationProjectCta.titleLine2}
              </span>
            </>
          }
          description={revitFamilyCreationProjectCta.description}
          ctaLabel={revitFamilyCreationProjectCta.cta}
          ctaHref={revitFamilyCreationProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111] capitalize"
          descriptionClassName="max-w-[602px]"
        />
        <DeferredIndustriesSection
          intro={revitFamilyCreationIndustriesIntro.description}
          titleLine1={revitFamilyCreationIndustriesIntro.titleLine1}
          titleLine2={revitFamilyCreationIndustriesIntro.titleLine2}
          titleMaxWidth={revitFamilyCreationIndustriesIntro.titleMaxWidth}
          introMaxWidth={revitFamilyCreationIndustriesIntro.introMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={revitFamilyCreationResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={revitFamilyCreationTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={revitFamilyCreationFaqSection.tag}
          description={revitFamilyCreationFaqSection.description}
          items={revitFamilyCreationFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="revit-family-creation-page-contact"
          description={revitFamilyCreationContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
