import { SiteHeader } from "@/components/layout/site-header";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import "@/styles/mep-figma-page.scss";
import { mepResourcesSection } from "@/constants/mep-engineers-content";
import { mepBimModellingHero } from "@/constants/mep-bim-modelling-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";
import {
  DeferredGetInTouchSection,
  DeferredMepBimDeliverablesSection,
  DeferredMepBimLodCarouselSection,
  DeferredMepBimMeasurableResultsSection,
  DeferredMepBimModellingIntroSection,
  DeferredMepBimModellingProcessSection,
  DeferredMepBimServiceCoverageGridSection,
  DeferredMepBimServiceFeaturesSection,
  DeferredMepBimTechnologyStackSection,
  DeferredMepBimUseCasesSection,
  DeferredMepFaqSection,
  DeferredMepResourcesSection,
  DeferredMepTrustedByStripSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function MepBimModellingPage() {
  return (
    <div className="vbs-redesign-page mep-bim-modeling-services-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="relative z-0">
        <MepPageHeroSection {...mepBimModellingHero} imageSize="compact" ctaHref="#services" />
        <DeferredMepTrustedByStripSection />
        <DeferredMepBimModellingIntroSection />
        <DeferredMepBimServiceFeaturesSection />
        <DeferredMepBimLodCarouselSection />
        <DeferredMepBimServiceCoverageGridSection />
        <DeferredMepBimTechnologyStackSection />
        <DeferredMepBimDeliverablesSection />
        <DeferredMepBimModellingProcessSection />
        <DeferredMepBimUseCasesSection />
        <DeferredMepBimMeasurableResultsSection />
        <DeferredMepResourcesSection section={mepResourcesSection} />
        <DeferredMepFaqSection />
        <DeferredGetInTouchSection description={mepFaqDescription} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
