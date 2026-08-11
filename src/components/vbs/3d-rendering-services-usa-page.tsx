import { SiteHeader } from "@/components/layout/site-header";
import { ThreeDRenderingUsaClientsSaySection } from "@/components/sections/3d-rendering/3d-rendering-usa-clients-say-section";
import { ThreeDRenderingUsaHeroSection } from "@/components/sections/3d-rendering/3d-rendering-usa-hero-section";
import { ThreeDRenderingUsaPricingSection } from "@/components/sections/3d-rendering/3d-rendering-usa-pricing-section";
import { ThreeDRenderingUsaProjectPriceSection } from "@/components/sections/3d-rendering/3d-rendering-usa-project-price-section";
import { ThreeDRenderingUsaShowcaseSection } from "@/components/sections/3d-rendering/3d-rendering-usa-showcase-section";
import { ThreeDRenderingUsaWhyTrustSection } from "@/components/sections/3d-rendering/3d-rendering-usa-why-trust-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  threeDRenderingUsaContactDescription,
  threeDRenderingUsaStatsStrip,
} from "@/constants/3d-rendering-services-usa-content";
import { DeferredGetInTouchSection, DeferredSiteFooter } from "@/lib/lazy-page-sections";

export function ThreeDRenderingServicesUsaPage() {
  return (
    <div className="vbs-redesign-page three-d-rendering-services-usa-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <ThreeDRenderingUsaHeroSection />
        <TrustStripSection
          stats={threeDRenderingUsaStatsStrip}
          className="vbs-mep-stats-strip trs-usa-trust bg-white"
        />
        <ThreeDRenderingUsaShowcaseSection />
        <ThreeDRenderingUsaProjectPriceSection />
        <ThreeDRenderingUsaPricingSection />
        <ThreeDRenderingUsaWhyTrustSection />
        <ThreeDRenderingUsaClientsSaySection />
        <DeferredGetInTouchSection
          sectionId="trs-usa-contact"
          description={threeDRenderingUsaContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
