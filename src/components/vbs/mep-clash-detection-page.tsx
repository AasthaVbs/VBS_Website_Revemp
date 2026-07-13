import { SiteHeader } from "@/components/layout/site-header";
import { MepEngagementProcessSection } from "@/components/sections/mep/figma/mep-engagement-process-figma-section";
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
  mepClashDetectionDeliverablesCards,
  mepClashDetectionDeliverablesSection,
  mepClashDetectionFaqSection,
  mepClashDetectionFaqs,
  mepClashDetectionHero,
  mepClashDetectionIntro,
  mepClashDetectionMeasurableOutcomeCards,
  mepClashDetectionMeasurableOutcomesSection,
  mepClashDetectionOutsourcingGuideCards,
  mepClashDetectionOutsourcingGuideSection,
  mepClashDetectionProjectCta,
  mepClashDetectionResourcesSection,
  mepClashDetectionServiceFeatureCards,
  mepClashDetectionServiceFeaturesSection,
  mepClashDetectionTechnologyStackSection,
  mepClashDetectionTechnologyStackToolsRowOne,
  mepClashDetectionTechnologyStackToolsRowTwo,
  mepClashDetectionTrustedBy,
  mepClashDetectionTypesSection,
  mepClashDetectionTypesSteps,
  mepClashDetectionWorkflowSection,
  mepClashDetectionWorkflowSteps,
} from "@/constants/mep-clash-detection-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function MepClashDetectionPage() {
  return (
    <div className="vbs-redesign-page mep-bim-clash-detection-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepClashDetectionHero}
          imageSize="compact"
          ctaHref="/contact"
          containerClassName="!pt-0 !pb-4 sm:!pt-0 sm:!pb-5 lg:!pt-0 lg:!pb-6"
        />
        <MepTrustedByStripSection
          trustedBy={mepClashDetectionTrustedBy}
          className="!py-6 sm:!py-8 lg:!py-8"
        />
        <MepBimModellingIntroSection
          intro={mepClashDetectionIntro}
          sectionClassName="mep-figma-overview--mep-coordination"
        />
        <MepBimServiceFeaturesSection
          section={mepClashDetectionServiceFeaturesSection}
          cards={mepClashDetectionServiceFeatureCards}
          ctaHref="/contact"
        />
        <MepEngagementProcessSection
          section={mepClashDetectionTypesSection}
          steps={mepClashDetectionTypesSteps}
          showCta={false}
          className="mep-engagement-process--clash-types bg-white"
          titleLayout="inline"
          titleMaxWidth={833}
        />
        <MepServiceBenefitsSection
          id="deliverables"
          section={mepClashDetectionDeliverablesSection}
          cards={mepClashDetectionDeliverablesCards}
          showCta={false}
        />
        <MepBimTechnologyStackSection
          section={mepClashDetectionTechnologyStackSection}
          toolsRowOne={mepClashDetectionTechnologyStackToolsRowOne}
          toolsRowTwo={mepClashDetectionTechnologyStackToolsRowTwo}
          titleLayout="inline"
          descriptionMaxWidth={591}
        />
        <MepWorkflowSection
          id="workflow"
          section={mepClashDetectionWorkflowSection}
          steps={mepClashDetectionWorkflowSteps}
        />
        <MepBimUseCasesSection
          id="outsourcing-guide"
          section={mepClashDetectionOutsourcingGuideSection}
          cards={mepClashDetectionOutsourcingGuideCards}
          showCta
          ctaHref="/contact"
          iconVariant="boxed"
          descriptionMaxWidth={636}
          columnsPerRow={3}
        />
        <MepBimMeasurableResultsSection
          id="measurable-outcomes"
          section={mepClashDetectionMeasurableOutcomesSection}
          cards={mepClashDetectionMeasurableOutcomeCards}
          columnsPerRow={3}
          descriptionMaxWidth={683}
        />
        <DeferredMepResourcesSection section={mepClashDetectionResourcesSection} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepClashDetectionProjectCta.titleLine1}</span>
              <span className="font-light">{mepClashDetectionProjectCta.titleLine2}</span>
            </>
          }
          description={mepClashDetectionProjectCta.description}
          ctaLabel={mepClashDetectionProjectCta.cta}
          ctaHref={mepClashDetectionProjectCta.ctaHref}
          titleClassName="max-w-[787px] !text-[#111111]"
          descriptionClassName="max-w-[612px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepClashDetectionFaqSection.tag}
          description={mepClashDetectionFaqSection.description}
          items={mepClashDetectionFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
