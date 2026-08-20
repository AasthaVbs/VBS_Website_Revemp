import { SiteHeader } from "@/components/layout/site-header";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
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
  MEP_BOM_CONTACT_HASH,
  MEP_BOM_CONTACT_ID,
  mepBomDeliverablesCards,
  mepBomDeliverablesSection,
  mepBomFaqSection,
  mepBomFaqs,
  mepBomHero,
  mepBomIntro,
  mepBomMeasurableOutcomeCards,
  mepBomMeasurableOutcomesSection,
  mepBomOutsourcingGuideCards,
  mepBomOutsourcingGuideSection,
  mepBomProjectCta,
  mepBomResourcesSection,
  mepBomServiceCards,
  mepBomServiceFeatureCards,
  mepBomServiceFeaturesSection,
  mepBomServicesSection,
  mepBomTechnologyStackSection,
  mepBomTechnologyStackToolsRowOne,
  mepBomTechnologyStackToolsRowTwo,
  mepBomTrustedBy,
  mepBomWorkflowSection,
  mepBomWorkflowSteps,
} from "@/constants/mep-bill-of-material-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function MepBillOfMaterialPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page mep-bill-of-material-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepBomHero}
          imageSize="compact"
          ctaHref={MEP_BOM_CONTACT_HASH}
          containerClassName="!pt-0 !pb-4 sm:!pt-0 sm:!pb-5 lg:!pt-0 lg:!pb-6"
        />
        <MepTrustedByStripSection
          trustedBy={mepBomTrustedBy}
          className="!py-6 sm:!py-8 lg:!py-[50px]"
        />
        <MepBimModellingIntroSection
          intro={mepBomIntro}
          sectionClassName="mep-figma-overview--mep-bim-modeling"
        />
        <MepBimServiceFeaturesSection
          section={mepBomServiceFeaturesSection}
          cards={mepBomServiceFeatureCards}
          ctaHref={MEP_BOM_CONTACT_HASH}
          columnsPerRow={2}
          titleMaxWidth={727}
          descriptionMaxWidth={676}
        />
        <MepFullSpectrumServicesSection
          section={mepBomServicesSection}
          cards={mepBomServiceCards}
          scrollInteraction="hover"
          sectionId="services"
        />
        <MepServiceBenefitsSection
          id="deliverables"
          section={mepBomDeliverablesSection}
          cards={mepBomDeliverablesCards}
          showCta={false}
        />
        <MepBimTechnologyStackSection
          section={mepBomTechnologyStackSection}
          toolsRowOne={mepBomTechnologyStackToolsRowOne}
          toolsRowTwo={mepBomTechnologyStackToolsRowTwo}
          titleLayout="inline"
          descriptionMaxWidth={591}
        />
        <MepWorkflowSection
          id="workflow"
          section={mepBomWorkflowSection}
          steps={mepBomWorkflowSteps}
        />
        <MepBimUseCasesSection
          id="outsourcing-guide"
          section={mepBomOutsourcingGuideSection}
          cards={mepBomOutsourcingGuideCards}
          showCta
          ctaHref={MEP_BOM_CONTACT_HASH}
          iconVariant="boxed"
          descriptionMaxWidth={598}
          columnsPerRow={2}
        />
        <MepBimMeasurableResultsSection
          id="measurable-outcomes"
          section={mepBomMeasurableOutcomesSection}
          cards={mepBomMeasurableOutcomeCards}
          columnsPerRow={2}
          descriptionMaxWidth={753}
        />
        <DeferredMepResourcesSection section={mepBomResourcesSection} allItems={resourcesFeed} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepBomProjectCta.titleLine1}</span>
              <span className="font-light">{mepBomProjectCta.titleLine2}</span>
            </>
          }
          description={mepBomProjectCta.description}
          ctaLabel={mepBomProjectCta.cta}
          ctaHref={mepBomProjectCta.ctaHref}
          titleClassName="max-w-[899px] !text-[#111111]"
          descriptionClassName="max-w-[667px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepBomFaqSection.tag}
          description={mepBomFaqSection.description}
          items={mepBomFaqs}
        />
        <DeferredGetInTouchSection
          sectionId={MEP_BOM_CONTACT_ID}
          description={mepFaqDescription}
        />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
