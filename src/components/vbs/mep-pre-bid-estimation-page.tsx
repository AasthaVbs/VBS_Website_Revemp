import { SiteHeader } from "@/components/layout/site-header";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { MepBimMeasurableResultsSection } from "@/components/sections/mep/mep-bim-measurable-results-section";
import { MepBimModellingIntroSection } from "@/components/sections/mep/mep-bim-modelling-intro-section";
import { MepBimServiceFeaturesSection } from "@/components/sections/mep/mep-bim-service-features-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepBimUseCasesSection } from "@/components/sections/mep/mep-bim-use-cases-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepTrustedByStripSection } from "@/components/sections/mep/mep-trusted-by-strip-section";
import {
  mepPreBidDeliverablesCards,
  mepPreBidDeliverablesSection,
  mepPreBidFaqSection,
  mepPreBidFaqs,
  mepPreBidHero,
  mepPreBidImpactCards,
  mepPreBidImpactSection,
  mepPreBidIntro,
  mepPreBidProjectCta,
  mepPreBidResourcesSection,
  mepPreBidServiceFeatureCards,
  mepPreBidServiceFeaturesSection,
  mepPreBidTechnologyStackSection,
  mepPreBidTechnologyStackToolsRowOne,
  mepPreBidTechnologyStackToolsRowTwo,
  mepPreBidTrustedBy,
  mepPreBidWhatYouGetCards,
  mepPreBidWhatYouGetSection,
  mepPreBidWhyChooseCards,
  mepPreBidWhyChooseSection,
  mepPreBidWorkflowSection,
  mepPreBidWorkflowSteps,
} from "@/constants/mep-pre-bid-estimation-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function MepPreBidEstimationPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page mep-pre-bid-estimation-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepPreBidHero}
          imageSize="compact"
          ctaHref="/contact-us"
          containerClassName="!pt-0 !pb-4 sm:!pt-0 sm:!pb-5 lg:!pt-0 lg:!pb-6"
        />
        <MepTrustedByStripSection
          trustedBy={mepPreBidTrustedBy}
          className="!py-6 sm:!py-8 lg:!py-[50px]"
        />
        <MepBimModellingIntroSection
          intro={mepPreBidIntro}
          sectionClassName="mep-figma-overview--mep-bim-modeling"
        />
        <MepBimServiceFeaturesSection
          section={mepPreBidServiceFeaturesSection}
          cards={mepPreBidServiceFeatureCards}
          ctaHref="/contact-us"
          columnsPerRow={2}
          titleMaxWidth={850}
          descriptionMaxWidth={702}
        />
        <MepServiceBenefitsSection
          id="what-you-get"
          section={mepPreBidWhatYouGetSection}
          cards={mepPreBidWhatYouGetCards}
          showCta
        />
        <MepBimTechnologyStackSection
          section={mepPreBidTechnologyStackSection}
          toolsRowOne={mepPreBidTechnologyStackToolsRowOne}
          toolsRowTwo={mepPreBidTechnologyStackToolsRowTwo}
          titleLayout="inline"
          descriptionMaxWidth={591}
        />
        <MepBimMeasurableResultsSection
          id="what-we-deliver"
          section={mepPreBidDeliverablesSection}
          cards={mepPreBidDeliverablesCards}
          columnsPerRow={2}
          descriptionMaxWidth={656}
          titleMaxWidth={713}
        />
        <MepWorkflowSection
          id="workflow"
          section={mepPreBidWorkflowSection}
          steps={mepPreBidWorkflowSteps}
        />
        <MepBimUseCasesSection
          id="why-choose-us"
          section={mepPreBidWhyChooseSection}
          cards={mepPreBidWhyChooseCards}
          showCta
          ctaHref="/contact-us"
          iconVariant="boxed"
          descriptionMaxWidth={603}
          titleMaxWidth={848}
          columnsPerRow={2}
        />
        <MepBimMeasurableResultsSection
          id="impact-workflow"
          section={mepPreBidImpactSection}
          cards={mepPreBidImpactCards}
          columnsPerRow={2}
          descriptionMaxWidth={661}
          titleMaxWidth={639}
        />
        <DeferredMepResourcesSection section={mepPreBidResourcesSection} allItems={resourcesFeed} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepPreBidProjectCta.titleLine1}</span>
              <span className="font-light">{mepPreBidProjectCta.titleLine2}</span>
            </>
          }
          description={mepPreBidProjectCta.description}
          ctaLabel={mepPreBidProjectCta.cta}
          ctaHref={mepPreBidProjectCta.ctaHref}
          titleClassName="max-w-[787px] !text-[#111111]"
          descriptionClassName="max-w-[675px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepPreBidFaqSection.tag}
          description={mepPreBidFaqSection.description}
          items={mepPreBidFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
