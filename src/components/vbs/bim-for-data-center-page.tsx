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
  bimForDataCenterAdvantagesCards,
  bimForDataCenterAdvantagesSection,
  bimForDataCenterAiBimWorkflowSection,
  bimForDataCenterContactDescription,
  bimForDataCenterEngagementCards,
  bimForDataCenterEngagementModelsHeader,
  bimForDataCenterFaqSection,
  bimForDataCenterFaqs,
  bimForDataCenterHero,
  bimForDataCenterIndustriesIntro,
  bimForDataCenterIntro,
  bimForDataCenterOurClientsSection,
  bimForDataCenterProjectCta,
  bimForDataCenterResourcesSection,
  bimForDataCenterServiceCards,
  bimForDataCenterServicesSection,
  bimForDataCenterStatsStrip,
  bimForDataCenterTechnologyStackSection,
  bimForDataCenterTechnologyStackToolsRowOne,
  bimForDataCenterTechnologyStackToolsRowTwo,
  bimForDataCenterTestimonialsDescription,
  bimForDataCenterWhyChooseItems,
  bimForDataCenterWhyChooseSection,
  bimForDataCenterWorkflowIntegrateSection,
  bimForDataCenterWorkflowIntegrateSteps,
} from "@/constants/bim-for-data-center-content";
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

export async function BimForDataCenterPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page bim-for-data-center-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...bimForDataCenterHero}
          imageSize="compact"
          ctaHref="#bim-for-data-center-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={bimForDataCenterStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={bimForDataCenterIntro} />
        <OurClientsSection section={bimForDataCenterOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={bimForDataCenterServicesSection}
          cards={bimForDataCenterServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={bimForDataCenterAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={bimForDataCenterWhyChooseSection}
          items={bimForDataCenterWhyChooseItems}
          descriptionMaxWidth={bimForDataCenterWhyChooseSection.descriptionMaxWidth}
          titleMaxWidth={bimForDataCenterWhyChooseSection.titleMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={bimForDataCenterWorkflowIntegrateSection}
          steps={bimForDataCenterWorkflowIntegrateSteps}
          headerAlign="center"
          descriptionMaxWidth={716}
          stackTitleParts={false}
        />
        <MepBimTechnologyStackSection
          section={bimForDataCenterTechnologyStackSection}
          toolsRowOne={bimForDataCenterTechnologyStackToolsRowOne}
          toolsRowTwo={bimForDataCenterTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          titleMaxWidth={920}
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={bimForDataCenterAdvantagesSection}
          cards={bimForDataCenterAdvantagesCards}
        />
        <DeferredEngagementModelsSection
          tag={bimForDataCenterEngagementModelsHeader.tag}
          titleLine1={bimForDataCenterEngagementModelsHeader.titleLine1}
          titleAccent={bimForDataCenterEngagementModelsHeader.titleAccent}
          description={bimForDataCenterEngagementModelsHeader.description}
          cards={bimForDataCenterEngagementCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium text-[#111111]">
                {bimForDataCenterProjectCta.titleLine1}
              </span>
              <br />
              <span className="font-light !text-[#111111]">
                {bimForDataCenterProjectCta.titleLine2}
              </span>
            </>
          }
          description={bimForDataCenterProjectCta.description}
          ctaLabel={bimForDataCenterProjectCta.cta}
          ctaHref={bimForDataCenterProjectCta.ctaHref}
          titleClassName="max-w-[825px] !text-[#111111]"
          descriptionClassName="max-w-[775px]"
        />
        <DeferredIndustriesSection
          intro={bimForDataCenterIndustriesIntro.description}
          titleLine1={bimForDataCenterIndustriesIntro.titleLine1}
          titleBeforeAccent={bimForDataCenterIndustriesIntro.titleBeforeAccent}
          titleLine2={bimForDataCenterIndustriesIntro.titleLine2}
          titleMaxWidth={bimForDataCenterIndustriesIntro.titleMaxWidth}
          introMaxWidth={bimForDataCenterIndustriesIntro.introMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={bimForDataCenterResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={bimForDataCenterTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={bimForDataCenterFaqSection.tag}
          description={bimForDataCenterFaqSection.description}
          items={bimForDataCenterFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="bim-for-data-center-page-contact"
          description={bimForDataCenterContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
