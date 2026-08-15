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
  zoningAnalysisAdvantagesCards,
  zoningAnalysisAdvantagesSection,
  zoningAnalysisAiBimWorkflowSection,
  zoningAnalysisContactDescription,
  zoningAnalysisEngagementModelsCards,
  zoningAnalysisEngagementModelsSection,
  zoningAnalysisFaqSection,
  zoningAnalysisFaqs,
  zoningAnalysisHero,
  zoningAnalysisIndustriesIntro,
  zoningAnalysisIntro,
  zoningAnalysisOurClientsSection,
  zoningAnalysisProjectCta,
  zoningAnalysisResourcesSection,
  zoningAnalysisServiceCards,
  zoningAnalysisServicesSection,
  zoningAnalysisStatsStrip,
  zoningAnalysisTechnologyStackSection,
  zoningAnalysisTechnologyStackToolsRowOne,
  zoningAnalysisTechnologyStackToolsRowTwo,
  zoningAnalysisTestimonialsDescription,
  zoningAnalysisWhyChooseItems,
  zoningAnalysisWhyChooseSection,
  zoningAnalysisWorkflowIntegrateSection,
  zoningAnalysisWorkflowIntegrateSteps,
} from "@/constants/zoning-analysis-services-content";
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

export async function ZoningAnalysisServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page zoning-analysis-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...zoningAnalysisHero}
          imageSize="compact"
          ctaHref="#zoning-analysis-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
          rowClassName="lg:!gap-4 xl:!gap-4"
          copyClassName="xl:!flex-none"
        />
        <TrustStripSection
          stats={zoningAnalysisStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={zoningAnalysisIntro} />
        <OurClientsSection section={zoningAnalysisOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={zoningAnalysisServicesSection}
          cards={zoningAnalysisServiceCards}
          scrollInteraction="hover"
          titleLine2ClassName="block"
        />
        <ArchitectureAiBimWorkflowSection section={zoningAnalysisAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={zoningAnalysisWhyChooseSection}
          items={zoningAnalysisWhyChooseItems}
          descriptionMaxWidth={zoningAnalysisWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={zoningAnalysisWorkflowIntegrateSection}
          steps={zoningAnalysisWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={zoningAnalysisTechnologyStackSection}
          toolsRowOne={zoningAnalysisTechnologyStackToolsRowOne}
          toolsRowTwo={zoningAnalysisTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={zoningAnalysisAdvantagesSection}
          cards={zoningAnalysisAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={zoningAnalysisEngagementModelsSection}
          cards={zoningAnalysisEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium max-lg:whitespace-normal lg:whitespace-nowrap">{zoningAnalysisProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{zoningAnalysisProjectCta.titleLine2}</span>
            </>
          }
          description={zoningAnalysisProjectCta.description}
          ctaLabel={zoningAnalysisProjectCta.cta}
          ctaHref={zoningAnalysisProjectCta.ctaHref}
          titleClassName="max-w-[900px] !text-[#111111]"
          descriptionClassName="max-w-[600px]"
        />
        <DeferredIndustriesSection
          intro={zoningAnalysisIndustriesIntro.description}
          titleLine1={zoningAnalysisIndustriesIntro.titleLine1}
          titleLine2={zoningAnalysisIndustriesIntro.titleLine2}
          titleMaxWidth={zoningAnalysisIndustriesIntro.titleMaxWidth}
          introMaxWidth={731}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={zoningAnalysisResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={zoningAnalysisTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={zoningAnalysisFaqSection.tag}
          description={zoningAnalysisFaqSection.description}
          items={zoningAnalysisFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="zoning-analysis-page-contact"
          description={zoningAnalysisContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
