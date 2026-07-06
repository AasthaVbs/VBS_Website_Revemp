import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { MepBimDeliverablesSection } from "@/components/sections/mep/mep-bim-deliverables-section";
import { MepBimLodCarouselSection } from "@/components/sections/mep/mep-bim-lod-carousel-section";
import { MepBimServiceCoverageGridSection } from "@/components/sections/mep/mep-bim-service-coverage-grid-section";
import { MepBimModellingIntroSection } from "@/components/sections/mep/mep-bim-modelling-intro-section";
import { MepBimMeasurableResultsSection } from "@/components/sections/mep/mep-bim-measurable-results-section";
import { MepBimModellingProcessSection } from "@/components/sections/mep/mep-bim-modelling-process-section";
import { MepBimUseCasesSection } from "@/components/sections/mep/mep-bim-use-cases-section";
import { MepBimServiceFeaturesSection } from "@/components/sections/mep/mep-bim-service-features-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepFaqSection } from "@/components/sections/mep/mep-faq-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepResourcesSection } from "@/components/sections/mep/mep-resources-section";
import { mepResourcesSection } from "@/constants/mep-engineers-content";
import { MepTrustedByStripSection } from "@/components/sections/mep/mep-trusted-by-strip-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { mepBimModellingHero } from "@/constants/mep-bim-modelling-content";
import { mepFaqDescription } from "@/constants/mep-engineers-content";

export function MepBimModellingPage() {
  return (
    <div className="vbs-redesign-page relative min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="relative z-0">
        <MepPageHeroSection {...mepBimModellingHero} imageSize="compact" />
        <MepTrustedByStripSection />
        <MepBimModellingIntroSection />
        <MepBimServiceFeaturesSection />
        <MepBimLodCarouselSection />
        <MepBimServiceCoverageGridSection />
        <MepBimTechnologyStackSection />
        <MepBimDeliverablesSection />
        <MepBimModellingProcessSection />
        <MepBimUseCasesSection />
        <MepBimMeasurableResultsSection />
        <MepResourcesSection section={mepResourcesSection} />
        <MepFaqSection />
        <GetInTouchSection description={mepFaqDescription} />
      </main>

      <SiteFooter />
    </div>
  );
}
