import { SiteHeader } from "@/components/layout/site-header";
import { LocationServiceNearYouSection } from "@/components/sections/locations/location-service-near-you-section";
import { LocationServiceOverviewSection } from "@/components/sections/locations/location-service-overview-section";
import { LocationsNearYouSection } from "@/components/sections/locations/locations-near-you-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  CAD_NY_CONTACT_ID,
  CAD_NY_CONTACT_HASH,
  cadNyContactDescription,
  cadNyEngagementSection,
  cadNyHero,
  cadNyIndustriesIntro,
  cadNyNearYouSection,
  cadNyOverviewSection,
  cadNyStatsStrip,
  cadNyTestimonials,
  cadNyWhyChooseItems,
  cadNyWhyChooseSection,
} from "@/constants/cad-drafting-services-new-york-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepWhyChooseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function CadDraftingServicesNewYorkPage() {
  return (
    <div className="vbs-redesign-page locations-page location-service-page cad-ny-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...cadNyHero}
          imageSize="compact"
          mobileLayout="copy-image-cta"
          breakTitle
          ctaHref={CAD_NY_CONTACT_HASH}
          containerClassName="max-lg:!pt-0 max-lg:!pb-0 lg:!pt-4 lg:!pb-0"
          rowClassName="lg:!gap-[60px] xl:!gap-[60px]"
          imageFrameClassName="!aspect-[650/530]"
        />
        <TrustStripSection stats={cadNyStatsStrip} className="vbs-trust-strip-section bg-white" />
        <LocationServiceOverviewSection section={cadNyOverviewSection} />
        <LocationServiceNearYouSection section={cadNyNearYouSection} />
        <LocationsNearYouSection />
        <DeferredClientSuccessStoriesSection
          className="!bg-[#FAFAFA]"
          tag={cadNyTestimonials.tag}
          titleLead={cadNyTestimonials.titleLead}
          titleAccent={cadNyTestimonials.titleAccent}
          description={cadNyTestimonials.description}
          stories={cadNyTestimonials.stories}
          showViewAll={false}
        />
        <DeferredMepWhyChooseSection
          id="cad-ny-why-choose"
          className="location-service-why-choose"
          section={cadNyWhyChooseSection}
          items={cadNyWhyChooseItems}
        />
        <DeferredIndustriesSection
          intro={cadNyIndustriesIntro.description}
          titleLine1={cadNyIndustriesIntro.titleLine1}
          titleLine2={cadNyIndustriesIntro.titleLine2}
          titleMaxWidth={cadNyIndustriesIntro.titleMaxWidth}
          introMaxWidth={cadNyIndustriesIntro.introMaxWidth}
          className="!bg-[#FAFAFA] py-12 sm:py-16 lg:!py-[100px]"
        />
        <DeferredEngagementModelsSection
          tag={cadNyEngagementSection.tag}
          titleLine1={cadNyEngagementSection.titleLine1}
          titleAccent={cadNyEngagementSection.titleAccent}
          titleTrail={cadNyEngagementSection.titleTrail}
          description={cadNyEngagementSection.description}
          titleMaxWidth={733}
          descriptionMaxWidth={750}
          sectionClassName="location-service-engagement"
        />
        <DeferredGetInTouchSection
          sectionId={CAD_NY_CONTACT_ID}
          description={cadNyContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
