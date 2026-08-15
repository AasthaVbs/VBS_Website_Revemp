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
  THREE_D_RENDERING_CONTACT_HASH,
  threeDRenderingAdvantagesCards,
  threeDRenderingAdvantagesSection,
  threeDRenderingAiBimWorkflowSection,
  threeDRenderingContactDescription,
  threeDRenderingEngagementCards,
  threeDRenderingEngagementModelsHeader,
  threeDRenderingFaqSection,
  threeDRenderingFaqs,
  threeDRenderingHero,
  threeDRenderingIndustriesIntro,
  threeDRenderingIntro,
  threeDRenderingOurClientsSection,
  threeDRenderingProjectCta,
  threeDRenderingResourcesSection,
  threeDRenderingServiceCards,
  threeDRenderingServicesSection,
  threeDRenderingStatsStrip,
  threeDRenderingTechnologyStackSection,
  threeDRenderingTechnologyStackToolsRowOne,
  threeDRenderingTechnologyStackToolsRowTwo,
  threeDRenderingTestimonialsDescription,
  threeDRenderingWhyChooseItems,
  threeDRenderingWhyChooseSection,
  threeDRenderingWorkflowIntegrateSection,
  threeDRenderingWorkflowIntegrateSteps,
} from "@/constants/3d-rendering-services-content";
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

export async function ThreeDRenderingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page three-d-rendering-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...threeDRenderingHero}
          imageSize="compact"
          ctaHref={THREE_D_RENDERING_CONTACT_HASH}
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={threeDRenderingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={threeDRenderingIntro} />
        <OurClientsSection section={threeDRenderingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={threeDRenderingServicesSection}
          cards={threeDRenderingServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={threeDRenderingAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={threeDRenderingWhyChooseSection}
          items={threeDRenderingWhyChooseItems}
          descriptionMaxWidth={threeDRenderingWhyChooseSection.descriptionMaxWidth}
          titleMaxWidth={threeDRenderingWhyChooseSection.titleMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={threeDRenderingWorkflowIntegrateSection}
          steps={threeDRenderingWorkflowIntegrateSteps}
          headerAlign="center"
          descriptionMaxWidth={846}
        />
        <MepBimTechnologyStackSection
          section={threeDRenderingTechnologyStackSection}
          toolsRowOne={threeDRenderingTechnologyStackToolsRowOne}
          toolsRowTwo={threeDRenderingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          titleMaxWidth={615}
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={threeDRenderingAdvantagesSection}
          cards={threeDRenderingAdvantagesCards}
        />
        <DeferredEngagementModelsSection
          tag={threeDRenderingEngagementModelsHeader.tag}
          titleLine1={threeDRenderingEngagementModelsHeader.titleLine1}
          titleAccent={threeDRenderingEngagementModelsHeader.titleAccent}
          description={threeDRenderingEngagementModelsHeader.description}
          titleMaxWidth={840}
          descriptionMaxWidth={797}
          cards={threeDRenderingEngagementCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium text-[#111111]">
                {threeDRenderingProjectCta.titleLine1}
              </span>
              <span className="font-light !text-[#111111]">
                {threeDRenderingProjectCta.titleLine2}
              </span>
            </>
          }
          description={threeDRenderingProjectCta.description}
          ctaLabel={threeDRenderingProjectCta.cta}
          ctaHref={threeDRenderingProjectCta.ctaHref}
          titleClassName="max-w-[614px] !text-[#111111]"
          descriptionClassName="max-w-[727px]"
        />
        <DeferredIndustriesSection
          intro={threeDRenderingIndustriesIntro.description}
          titleLine1={threeDRenderingIndustriesIntro.titleLine1}
          titleLine2={threeDRenderingIndustriesIntro.titleLine2}
          titleMaxWidth={threeDRenderingIndustriesIntro.titleMaxWidth}
          introMaxWidth={threeDRenderingIndustriesIntro.introMaxWidth}
        />
        <DeferredMepResourcesSection
          section={threeDRenderingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          titleLead="Real Feedback,"
          titleAccent=" Real Results"
          description={threeDRenderingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={threeDRenderingFaqSection.tag}
          description={threeDRenderingFaqSection.description}
          items={threeDRenderingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="3d-rendering-page-contact"
          description={threeDRenderingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
