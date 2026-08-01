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
  bimModelingAdvantagesCards,
  bimModelingAdvantagesSection,
  bimModelingAiBimWorkflowSection,
  bimModelingContactDescription,
  bimModelingFaqSection,
  bimModelingFaqs,
  bimModelingHero,
  bimModelingIndustriesIntro,
  bimModelingOurClientsSection,
  bimModelingProjectCta,
  bimModelingResourcesSection,
  bimModelingServiceCards,
  bimModelingServicesSection,
  bimModelingStatsStrip,
  bimModelingTechnologyStackSection,
  bimModelingTechnologyStackToolsRowOne,
  bimModelingTechnologyStackToolsRowTwo,
  bimModelingTestimonialsDescription,
  bimModelingWorkflowSection,
  bimModelingWorkflowSteps,
} from "@/constants/bim-modeling-services-content";
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

export async function BimModelingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...bimModelingHero}
          imageSize="compact"
          ctaHref="#bim-modeling-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={bimModelingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection />
        <OurClientsSection section={bimModelingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={bimModelingServicesSection}
          cards={bimModelingServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={bimModelingAiBimWorkflowSection} />
        <BimModelingWhyChooseSection />
        <DeferredMepWorkflowSection
          section={bimModelingWorkflowSection}
          steps={bimModelingWorkflowSteps}
        />
        <MepBimTechnologyStackSection
          section={bimModelingTechnologyStackSection}
          toolsRowOne={bimModelingTechnologyStackToolsRowOne}
          toolsRowTwo={bimModelingTechnologyStackToolsRowTwo}
          titleLayout="inline"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={bimModelingAdvantagesSection}
          cards={bimModelingAdvantagesCards}
        />
        <DeferredEngagementModelsSection />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{bimModelingProjectCta.titleLine1}</span>
              <span className="font-light">{bimModelingProjectCta.titleLine2}</span>
            </>
          }
          description={bimModelingProjectCta.description}
          ctaLabel={bimModelingProjectCta.cta}
          ctaHref={bimModelingProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[744px]"
        />
        <DeferredIndustriesSection
          intro={bimModelingIndustriesIntro.description}
          titleLine1={bimModelingIndustriesIntro.titleLine1}
          titleLine2={bimModelingIndustriesIntro.titleLine2}
          titleMaxWidth={bimModelingIndustriesIntro.titleMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={bimModelingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={bimModelingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={bimModelingFaqSection.tag}
          description={bimModelingFaqSection.description}
          items={bimModelingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="bim-modeling-page-contact"
          description={bimModelingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
