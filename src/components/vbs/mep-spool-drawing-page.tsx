import { SiteHeader } from "@/components/layout/site-header";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { MepBimMeasurableResultsSection } from "@/components/sections/mep/mep-bim-measurable-results-section";
import { MepBimModellingIntroSection } from "@/components/sections/mep/mep-bim-modelling-intro-section";
import { MepBimServiceFeaturesSection } from "@/components/sections/mep/mep-bim-service-features-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepBimUseCasesSection } from "@/components/sections/mep/mep-bim-use-cases-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepTrustedByStripSection } from "@/components/sections/mep/mep-trusted-by-strip-section";
import {
  mepSpoolDrawingDeliverablesCards,
  mepSpoolDrawingDeliverablesSection,
  mepSpoolDrawingFaqSection,
  mepSpoolDrawingFaqs,
  mepSpoolDrawingHero,
  mepSpoolDrawingIntro,
  mepSpoolDrawingMeasurableOutcomeCards,
  mepSpoolDrawingMeasurableOutcomesSection,
  mepSpoolDrawingOutsourcingGuideCards,
  mepSpoolDrawingOutsourcingGuideSection,
  mepSpoolDrawingProjectCta,
  mepSpoolDrawingResourcesSection,
  mepSpoolDrawingServiceCards,
  mepSpoolDrawingServiceFeatureCards,
  mepSpoolDrawingServiceFeaturesSection,
  mepSpoolDrawingServicesSection,
  mepSpoolDrawingTechnologyStackSection,
  mepSpoolDrawingTechnologyStackToolsRowOne,
  mepSpoolDrawingTechnologyStackToolsRowTwo,
  mepSpoolDrawingTrustedBy,
  mepSpoolDrawingWorkflowSection,
  mepSpoolDrawingWorkflowSteps,
} from "@/constants/mep-spool-drawing-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function MepSpoolDrawingPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page mep-spool-drawing-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepSpoolDrawingHero}
          imageSize="compact"
          ctaHref="/contact-us"
          containerClassName="!pt-0 !pb-4 sm:!pt-0 sm:!pb-5 lg:!pt-0 lg:!pb-6"
        />
        <MepTrustedByStripSection
          trustedBy={mepSpoolDrawingTrustedBy}
          className="!py-6 sm:!py-8 lg:!py-[50px]"
        />
        <MepBimModellingIntroSection
          intro={mepSpoolDrawingIntro}
          sectionClassName="mep-figma-overview--mep-spool-drawing"
        />
        <MepBimServiceFeaturesSection
          section={mepSpoolDrawingServiceFeaturesSection}
          cards={mepSpoolDrawingServiceFeatureCards}
          ctaHref="/contact-us"
          columnsPerRow={3}
          titleMaxWidth={727}
          descriptionMaxWidth={621}
        />
        <MepFullSpectrumServicesSection
          section={mepSpoolDrawingServicesSection}
          cards={mepSpoolDrawingServiceCards}
          scrollInteraction="hover"
          sectionId="services"
          className="mep-figma-services--mep-spool-drawing"
          titleLine1ClassName="whitespace-pre-line"
          descriptionClassName="!max-w-[633px]"
        />
        <MepServiceBenefitsSection
          id="deliverables"
          section={mepSpoolDrawingDeliverablesSection}
          cards={mepSpoolDrawingDeliverablesCards}
          showCta={false}
        />
        <MepBimTechnologyStackSection
          section={mepSpoolDrawingTechnologyStackSection}
          toolsRowOne={mepSpoolDrawingTechnologyStackToolsRowOne}
          toolsRowTwo={mepSpoolDrawingTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={591}
        />
        <MepWorkflowSection
          id="workflow"
          section={mepSpoolDrawingWorkflowSection}
          steps={mepSpoolDrawingWorkflowSteps}
        />
        <MepBimUseCasesSection
          id="outsourcing-guide"
          section={mepSpoolDrawingOutsourcingGuideSection}
          cards={mepSpoolDrawingOutsourcingGuideCards}
          showCta
          ctaHref="/contact-us"
          iconVariant="boxed"
          titleMaxWidth={786}
          descriptionMaxWidth={494}
          columnsPerRow={2}
        />
        <MepBimMeasurableResultsSection
          id="measurable-outcomes"
          section={mepSpoolDrawingMeasurableOutcomesSection}
          cards={mepSpoolDrawingMeasurableOutcomeCards}
          columnsPerRow={2}
          descriptionMaxWidth={622}
          titleMaxWidth={795}
        />
        <DeferredMepResourcesSection
          section={mepSpoolDrawingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium whitespace-pre-line">
                {mepSpoolDrawingProjectCta.titleLine1}
              </span>
              <span className="font-light">{mepSpoolDrawingProjectCta.titleLine2}</span>
            </>
          }
          description={mepSpoolDrawingProjectCta.description}
          ctaLabel={mepSpoolDrawingProjectCta.cta}
          ctaHref={mepSpoolDrawingProjectCta.ctaHref}
          titleClassName="max-w-[787px] !text-[#111111]"
          descriptionClassName="max-w-[609px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepSpoolDrawingFaqSection.tag}
          description={mepSpoolDrawingFaqSection.description}
          items={mepSpoolDrawingFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
