import { SiteHeader } from "@/components/layout/site-header";
import { MepBimModellingIntroSection } from "@/components/sections/mep/mep-bim-modelling-intro-section";
import { MepBimServiceFeaturesSection } from "@/components/sections/mep/mep-bim-service-features-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { MepDataCenterKeyChallengesSection } from "@/components/sections/mep/mep-data-center-key-challenges-section";
import { MepDataCenterWhyChooseSection } from "@/components/sections/mep/mep-data-center-why-choose-section";
import { MepDataCenterWhoWeHelpSection } from "@/components/sections/mep/mep-data-center-who-we-help-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepTrustedByStripSection } from "@/components/sections/mep/mep-trusted-by-strip-section";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepResourcesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";
import {
  mepDataCenterFaqSection,
  mepDataCenterFaqs,
  mepDataCenterHero,
  mepDataCenterIntro,
  mepDataCenterProjectCta,
  mepDataCenterResourcesSection,
  mepDataCenterServiceFeatureCards,
  mepDataCenterServiceFeaturesSection,
  mepDataCenterTechnologyStackSection,
  mepDataCenterTechnologyStackToolsRowOne,
  mepDataCenterTechnologyStackToolsRowTwo,
  mepDataCenterTrustedBy,
  mepDataCenterWhyChooseCards,
  mepDataCenterWhyChooseSection,
  mepDataCenterWorkflowSection,
  mepDataCenterWorkflowSteps,
  mepDataCenterWhoWeHelpCards,
  mepDataCenterWhoWeHelpSection,
} from "@/constants/mep-data-center-content";

export async function MepDataCenterPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page mep-data-center-services-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection
          {...mepDataCenterHero}
          imageSize="compact"
          ctaHref="/contact-us"
          containerClassName="!pt-0 !pb-4 sm:!pt-0 sm:!pb-5 lg:!pt-0 lg:!pb-6"
        />
        <MepTrustedByStripSection
          trustedBy={mepDataCenterTrustedBy}
          className="!pt-3 !pb-6 sm:!pt-4 sm:!pb-8 lg:!pt-6 lg:!pb-[50px]"
        />
        <MepBimModellingIntroSection
          intro={mepDataCenterIntro}
          sectionClassName="mep-figma-overview--mep-data-center"
        />
        <MepBimServiceFeaturesSection
          section={mepDataCenterServiceFeaturesSection}
          cards={mepDataCenterServiceFeatureCards}
          ctaHref="/contact-us"
          columnsPerRow={3}
          titleMaxWidth={716}
          descriptionMaxWidth={682}
        />
        <MepDataCenterWhoWeHelpSection
          section={mepDataCenterWhoWeHelpSection}
          cards={mepDataCenterWhoWeHelpCards}
          ctaHref="/contact-us"
        />
        <MepDataCenterKeyChallengesSection />
        <MepBimTechnologyStackSection
          section={mepDataCenterTechnologyStackSection}
          toolsRowOne={mepDataCenterTechnologyStackToolsRowOne}
          toolsRowTwo={mepDataCenterTechnologyStackToolsRowTwo}
          titleLayout="inline"
          descriptionMaxWidth={591}
        />
        <MepWorkflowSection
          id="workflow"
          section={mepDataCenterWorkflowSection}
          steps={mepDataCenterWorkflowSteps}
        />
        <MepDataCenterWhyChooseSection
          section={mepDataCenterWhyChooseSection}
          cards={mepDataCenterWhyChooseCards}
          ctaHref="/contact-us"
        />
        <DeferredMepResourcesSection section={mepDataCenterResourcesSection} allItems={resourcesFeed} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepDataCenterProjectCta.titleLine1}</span>
              <span className="font-light whitespace-pre-line">{mepDataCenterProjectCta.titleLine2}</span>
            </>
          }
          description={mepDataCenterProjectCta.description}
          ctaLabel={mepDataCenterProjectCta.cta}
          ctaHref={mepDataCenterProjectCta.ctaHref}
          titleClassName="max-w-[787px] !text-[#111111]"
          descriptionClassName="max-w-[806px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepDataCenterFaqSection.tag}
          description={mepDataCenterFaqSection.description}
          items={mepDataCenterFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
