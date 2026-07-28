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
  mepRevitFamilyCreationDeliverablesCards,
  mepRevitFamilyCreationDeliverablesSection,
  mepRevitFamilyCreationFaqSection,
  mepRevitFamilyCreationFaqs,
  mepRevitFamilyCreationHero,
  mepRevitFamilyCreationIntro,
  mepRevitFamilyCreationMeasurableOutcomeCards,
  mepRevitFamilyCreationMeasurableOutcomesSection,
  mepRevitFamilyCreationOutsourcingGuideCards,
  mepRevitFamilyCreationOutsourcingGuideSection,
  mepRevitFamilyCreationProjectCta,
  mepRevitFamilyCreationResourcesSection,
  mepRevitFamilyCreationServiceCards,
  mepRevitFamilyCreationServiceFeatureCards,
  mepRevitFamilyCreationServiceFeaturesSection,
  mepRevitFamilyCreationServicesSection,
  mepRevitFamilyCreationTechnologyStackSection,
  mepRevitFamilyCreationTechnologyStackToolsRowOne,
  mepRevitFamilyCreationTechnologyStackToolsRowTwo,
  mepRevitFamilyCreationTrustedBy,
  mepRevitFamilyCreationWorkflowSection,
  mepRevitFamilyCreationWorkflowSteps,
} from "@/constants/mep-revit-family-creation-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function MepRevitFamilyCreationPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();
  return (
    <div className="vbs-redesign-page mep-revit-family-creation-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepRevitFamilyCreationHero}
          imageSize="compact"
          ctaHref="/contact-us"
          containerClassName="!pt-0 !pb-4 sm:!pt-0 sm:!pb-5 lg:!pt-0 lg:!pb-6"
        />
        <MepTrustedByStripSection
          trustedBy={mepRevitFamilyCreationTrustedBy}
          className="!py-6 sm:!py-8 lg:!py-[50px]"
        />
        <MepBimModellingIntroSection
          intro={mepRevitFamilyCreationIntro}
          sectionClassName="mep-figma-overview--mep-revit-family-creation"
        />
        <MepBimServiceFeaturesSection
          section={mepRevitFamilyCreationServiceFeaturesSection}
          cards={mepRevitFamilyCreationServiceFeatureCards}
          ctaHref="/contact-us"
        />
        <MepFullSpectrumServicesSection
          section={mepRevitFamilyCreationServicesSection}
          cards={mepRevitFamilyCreationServiceCards}
          scrollInteraction="hover"
          sectionId="services"
          className="mep-figma-services--mep-revit-family-creation"
        />
        <MepServiceBenefitsSection
          id="deliverables"
          section={mepRevitFamilyCreationDeliverablesSection}
          cards={mepRevitFamilyCreationDeliverablesCards}
          showCta={false}
        />
        <MepBimTechnologyStackSection
          section={mepRevitFamilyCreationTechnologyStackSection}
          toolsRowOne={mepRevitFamilyCreationTechnologyStackToolsRowOne}
          toolsRowTwo={mepRevitFamilyCreationTechnologyStackToolsRowTwo}
          titleLayout="inline"
        />
        <MepWorkflowSection
          id="workflow"
          section={mepRevitFamilyCreationWorkflowSection}
          steps={mepRevitFamilyCreationWorkflowSteps}
        />
        <MepBimUseCasesSection
          id="outsourcing-guide"
          section={mepRevitFamilyCreationOutsourcingGuideSection}
          cards={mepRevitFamilyCreationOutsourcingGuideCards}
          showCta
          ctaHref="/contact-us"
          iconVariant="boxed"
          descriptionMaxWidth={666}
          columnsPerRow={2}
        />
        <MepBimMeasurableResultsSection
          id="measurable-outcomes"
          section={mepRevitFamilyCreationMeasurableOutcomesSection}
          cards={mepRevitFamilyCreationMeasurableOutcomeCards}
          columnsPerRow={2}
          descriptionMaxWidth={639}
        />
        <DeferredMepResourcesSection
          section={mepRevitFamilyCreationResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepRevitFamilyCreationProjectCta.titleLine1}</span>
              <span className="font-light">{mepRevitFamilyCreationProjectCta.titleLine2}</span>
            </>
          }
          description={mepRevitFamilyCreationProjectCta.description}
          ctaLabel={mepRevitFamilyCreationProjectCta.cta}
          ctaHref={mepRevitFamilyCreationProjectCta.ctaHref}
          titleClassName="max-w-[865px] !text-[#111111]"
          descriptionClassName="max-w-[820px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepRevitFamilyCreationFaqSection.tag}
          description={mepRevitFamilyCreationFaqSection.description}
          items={mepRevitFamilyCreationFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
