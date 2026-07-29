import { SiteHeader } from "@/components/layout/site-header";
import { MepBimMeasurableResultsSection } from "@/components/sections/mep/mep-bim-measurable-results-section";
import { MepBimUseCasesSection } from "@/components/sections/mep/mep-bim-use-cases-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimModellingIntroSection } from "@/components/sections/mep/mep-bim-modelling-intro-section";
import { MepBimServiceFeaturesSection } from "@/components/sections/mep/mep-bim-service-features-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepTrustedByStripSection } from "@/components/sections/mep/mep-trusted-by-strip-section";
import {
  mepShopDrawingDeliverablesCards,
  mepShopDrawingDeliverablesSection,
  mepShopDrawingFaqSection,
  mepShopDrawingFaqs,
  mepShopDrawingHero,
  mepShopDrawingIntro,
  mepShopDrawingMeasurableOutcomeCards,
  mepShopDrawingMeasurableOutcomesSection,
  mepShopDrawingOutsourcingGuideCards,
  mepShopDrawingOutsourcingGuideSection,
  mepShopDrawingProjectCta,
  mepShopDrawingResourcesSection,
  mepShopDrawingServiceCards,
  mepShopDrawingServiceFeatureCards,
  mepShopDrawingServiceFeaturesSection,
  mepShopDrawingServicesSection,
  mepShopDrawingTechnologyStackSection,
  mepShopDrawingTechnologyStackToolsRowOne,
  mepShopDrawingTechnologyStackToolsRowTwo,
  mepShopDrawingTrustedBy,
  mepShopDrawingWorkflowSection,
  mepShopDrawingWorkflowSteps,
} from "@/constants/mep-shop-drawing-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function MepShopDrawingPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();
  return (
    <div className="vbs-redesign-page mep-shop-drawing-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepShopDrawingHero}
          imageSize="compact"
          ctaHref="/contact-us"
          containerClassName="!pt-0 !pb-4 sm:!pt-0 sm:!pb-5 lg:!pt-0 lg:!pb-6"
        />
        <MepTrustedByStripSection
          trustedBy={mepShopDrawingTrustedBy}
          className="!py-6 sm:!py-8 lg:!py-[50px]"
        />
        <MepBimModellingIntroSection
          intro={mepShopDrawingIntro}
          sectionClassName="mep-figma-overview--mep-shop-drawing"
        />
        <MepBimServiceFeaturesSection
          section={mepShopDrawingServiceFeaturesSection}
          cards={mepShopDrawingServiceFeatureCards}
          ctaHref="/contact-us"
          columnsPerRow={2}
          titleMaxWidth={680}
          descriptionMaxWidth={662}
        />
        <MepFullSpectrumServicesSection
          section={mepShopDrawingServicesSection}
          cards={mepShopDrawingServiceCards}
          scrollInteraction="hover"
          sectionId="services"
          className="mep-figma-services--mep-shop-drawing"
          titleLine2ClassName="whitespace-pre-line"
          descriptionClassName="!max-w-[606px]"
        />
        <MepServiceBenefitsSection
          id="deliverables"
          section={mepShopDrawingDeliverablesSection}
          cards={mepShopDrawingDeliverablesCards}
          showCta={false}
        />
        <MepBimTechnologyStackSection
          section={mepShopDrawingTechnologyStackSection}
          toolsRowOne={mepShopDrawingTechnologyStackToolsRowOne}
          toolsRowTwo={mepShopDrawingTechnologyStackToolsRowTwo}
          titleLayout="inline"
        />
        <MepWorkflowSection
          id="workflow"
          section={mepShopDrawingWorkflowSection}
          steps={mepShopDrawingWorkflowSteps}
        />
        <MepBimUseCasesSection
          id="outsourcing-guide"
          section={mepShopDrawingOutsourcingGuideSection}
          cards={mepShopDrawingOutsourcingGuideCards}
          showCta
          ctaHref="/contact-us"
          iconVariant="boxed"
          titleMaxWidth={900}
          descriptionMaxWidth={666}
          columnsPerRow={2}
        />
        <MepBimMeasurableResultsSection
          id="measurable-outcomes"
          section={mepShopDrawingMeasurableOutcomesSection}
          cards={mepShopDrawingMeasurableOutcomeCards}
          columnsPerRow={2}
          descriptionMaxWidth={598}
        />
        <DeferredMepResourcesSection
          section={mepShopDrawingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepShopDrawingProjectCta.titleLine1}</span>
              <span className="font-light">{mepShopDrawingProjectCta.titleLine2}</span>
            </>
          }
          description={mepShopDrawingProjectCta.description}
          ctaLabel={mepShopDrawingProjectCta.cta}
          ctaHref={mepShopDrawingProjectCta.ctaHref}
          titleClassName="max-w-[787px] !text-[#111111]"
          descriptionClassName="max-w-[725px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepShopDrawingFaqSection.tag}
          description={mepShopDrawingFaqSection.description}
          items={mepShopDrawingFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
