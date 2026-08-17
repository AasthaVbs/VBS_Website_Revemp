import { SiteHeader } from "@/components/layout/site-header";
import { LocationsNearYouSection } from "@/components/sections/locations/locations-near-you-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  LOCATIONS_CONTACT_ID,
  locationsContactDescription,
  locationsHero,
  locationsStatsStrip,
} from "@/constants/locations-content";
import { DeferredGetInTouchSection, DeferredSiteFooter } from "@/lib/lazy-page-sections";

export function LocationsPage() {
  return (
    <div className="vbs-redesign-page locations-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...locationsHero}
          imageSize="compact"
          mobileLayout="copy-image-cta"
          breakTitle
          ctaHref={`#${LOCATIONS_CONTACT_ID}`}
          containerClassName="max-lg:!pt-0 max-lg:!pb-0 lg:!pt-4 lg:!pb-0"
          rowClassName="lg:!gap-[60px] xl:!gap-[60px]"
          imageFrameClassName="!bg-[#6D6D6D] !aspect-[650/530]"
          imageClassName="object-contain"
        />
        <TrustStripSection
          stats={locationsStatsStrip}
          className="vbs-trust-strip-section bg-white"
        />
        <LocationsNearYouSection />
        <DeferredGetInTouchSection
          sectionId={LOCATIONS_CONTACT_ID}
          description={locationsContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
