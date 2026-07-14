import { SiteHeader } from "@/components/layout/site-header";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepBimLodCarouselSection } from "@/components/sections/mep/mep-bim-lod-carousel-section";
import { MepBimModellingProcessSection } from "@/components/sections/mep/mep-bim-modelling-process-section";
import {
  mepBimLodStickyCards,
  mepBimLodStickySection,
  mepBimModellingFaqSection,
  mepBimModellingFaqs,
  mepBimModellingHero,
  mepBimModellingProjectCta,
  mepBimModellingResourcesSection,
} from "@/constants/mep-bim-modelling-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredMepBimDeliverablesSection,
  DeferredMepBimMeasurableResultsSection,
  DeferredMepBimModellingIntroSection,
  DeferredMepBimServiceCoverageGridSection,
  DeferredMepBimServiceFeaturesSection,
  DeferredMepBimTechnologyStackSection,
  DeferredMepBimUseCasesSection,
  DeferredMepResourcesSection,
  DeferredMepTrustedByStripSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function MepBimModellingPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();
  return (
    <div className="vbs-redesign-page mep-bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />

      <main>
        <MepPageHeroSection {...mepBimModellingHero} imageSize="compact" ctaHref="#services" />
        <DeferredMepTrustedByStripSection />
        <DeferredMepBimModellingIntroSection />
        <DeferredMepBimServiceFeaturesSection />
        <DeferredMepBimServiceCoverageGridSection />
        <MepBimLodCarouselSection
          section={mepBimLodStickySection}
          cards={mepBimLodStickyCards}
        />
        <DeferredMepBimDeliverablesSection />
        <DeferredMepBimTechnologyStackSection />
        <MepBimModellingProcessSection />
        <DeferredMepBimUseCasesSection />
        <DeferredMepBimMeasurableResultsSection />
        <DeferredMepResourcesSection section={mepBimModellingResourcesSection} allItems={resourcesFeed} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{mepBimModellingProjectCta.titleLine1}</span>
              <span className="font-light">{mepBimModellingProjectCta.titleLine2}</span>
            </>
          }
          description={mepBimModellingProjectCta.description}
          ctaLabel={mepBimModellingProjectCta.cta}
          ctaHref={mepBimModellingProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[552px]"
        />
        <DeferredFaqSection
          variant="mep"
          tag={mepBimModellingFaqSection.tag}
          description={mepBimModellingFaqSection.description}
          items={mepBimModellingFaqs}
        />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
