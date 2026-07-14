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
  mepCoordinationDeliverablesCards,
  mepCoordinationDeliverablesSection,
  mepCoordinationFaqSection,
  mepCoordinationFaqs,
  mepCoordinationHero,
  mepCoordinationIntro,
  mepCoordinationMeasurableOutcomeCards,
  mepCoordinationMeasurableOutcomesSection,
  mepCoordinationOutsourcingGuideCards,
  mepCoordinationOutsourcingGuideSection,
  mepCoordinationProjectCta,
  mepCoordinationResourcesSection,
  mepCoordinationServiceCards,
  mepCoordinationServiceFeatureCards,
  mepCoordinationServiceFeaturesSection,
  mepCoordinationServicesSection,
  mepCoordinationTechnologyStackSection,
  mepCoordinationTechnologyStackToolsRowOne,
  mepCoordinationTechnologyStackToolsRowTwo,
  mepCoordinationTrustedBy,
  mepCoordinationWorkflowSection,
  mepCoordinationWorkflowSteps,
} from "@/constants/mep-coordination-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function MepCoordinationPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();
  return (
    <div className="vbs-redesign-page mep-bim-coordination-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepCoordinationHero}
          imageSize="compact"
          ctaHref="/contact"
        />
        <MepTrustedByStripSection trustedBy={mepCoordinationTrustedBy} />
        <MepBimModellingIntroSection
          intro={mepCoordinationIntro}
          sectionClassName="mep-figma-overview--mep-coordination"
        />
        <MepBimServiceFeaturesSection
          section={mepCoordinationServiceFeaturesSection}
          cards={mepCoordinationServiceFeatureCards}
          ctaHref="/contact"
        />
        <MepFullSpectrumServicesSection
          section={mepCoordinationServicesSection}
          cards={mepCoordinationServiceCards}
          scrollInteraction="hover"
          sectionId="services"
          className="mep-figma-services--coordination-services"
        />
        <MepServiceBenefitsSection
          id="deliverables"
          section={mepCoordinationDeliverablesSection}
          cards={mepCoordinationDeliverablesCards}
          showCta={false}
        />
        <MepBimTechnologyStackSection
          section={mepCoordinationTechnologyStackSection}
          toolsRowOne={mepCoordinationTechnologyStackToolsRowOne}
          toolsRowTwo={mepCoordinationTechnologyStackToolsRowTwo}
          titleLayout="inline"
          descriptionMaxWidth={591}
        />
        <MepWorkflowSection
          id="workflow"
          section={mepCoordinationWorkflowSection}
          steps={mepCoordinationWorkflowSteps}
        />
        <MepBimUseCasesSection
          id="outsourcing-guide"
          section={mepCoordinationOutsourcingGuideSection}
          cards={mepCoordinationOutsourcingGuideCards}
          showCta
          ctaHref="/contact"
          iconVariant="boxed"
          descriptionMaxWidth={618}
        />
        <MepBimMeasurableResultsSection
          id="measurable-outcomes"
          section={mepCoordinationMeasurableOutcomesSection}
          cards={mepCoordinationMeasurableOutcomeCards}
          columnsPerRow={3}
          descriptionMaxWidth={683}
        />
        <DeferredMepResourcesSection section={mepCoordinationResourcesSection} allItems={resourcesFeed} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepCoordinationProjectCta.titleLine1}</span>
              <span className="font-light">{mepCoordinationProjectCta.titleLine2}</span>
            </>
          }
          description={mepCoordinationProjectCta.description}
          ctaLabel={mepCoordinationProjectCta.cta}
          ctaHref={mepCoordinationProjectCta.ctaHref}
          titleClassName="max-w-[787px] !text-[#111111]"
          descriptionClassName="max-w-[662px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepCoordinationFaqSection.tag}
          description={mepCoordinationFaqSection.description}
          items={mepCoordinationFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
