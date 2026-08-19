import { SiteHeader } from "@/components/layout/site-header";
import { LocationServiceNearYouSection } from "@/components/sections/locations/location-service-near-you-section";
import { LocationServiceOverviewSection } from "@/components/sections/locations/location-service-overview-section";
import { LocationsNearYouSection } from "@/components/sections/locations/locations-near-you-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  ACS_NY_CONTACT_ID,
  ACS_NY_CONTACT_HASH,
  acsNyContactDescription,
  acsNyEngagementSection,
  acsNyHero,
  acsNyIndustriesIntro,
  acsNyNearYouSection,
  acsNyOverviewSection,
  acsNyStatsStrip,
  acsNyTestimonials,
  acsNyWhyChooseItems,
  acsNyWhyChooseSection,
} from "@/constants/architectural-bim-services-new-york-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepWhyChooseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function ArchitecturalBimServicesNewYorkPage() {
  return (
    <div className="vbs-redesign-page locations-page location-service-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...acsNyHero}
          imageSize="compact"
          mobileLayout="copy-image-cta"
          breakTitle
          ctaHref={ACS_NY_CONTACT_HASH}
          containerClassName="max-lg:!pt-0 max-lg:!pb-0 lg:!pt-4 lg:!pb-0"
          rowClassName="lg:!gap-[60px] xl:!gap-[60px]"
          imageFrameClassName="!aspect-[650/530]"
        />
        <TrustStripSection stats={acsNyStatsStrip} className="vbs-trust-strip-section bg-white" />
        <LocationServiceOverviewSection section={acsNyOverviewSection} />
        <LocationServiceNearYouSection section={acsNyNearYouSection} />
        <LocationsNearYouSection />
        <DeferredClientSuccessStoriesSection
          className="!bg-[#FAFAFA]"
          tag={acsNyTestimonials.tag}
          titleLead={acsNyTestimonials.titleLead}
          titleAccent={acsNyTestimonials.titleAccent}
          description={acsNyTestimonials.description}
          stories={acsNyTestimonials.stories}
          showViewAll={false}
        />
        <DeferredMepWhyChooseSection
          id="acs-ny-why-choose"
          className="location-service-why-choose"
          section={acsNyWhyChooseSection}
          items={acsNyWhyChooseItems}
        />
        <DeferredIndustriesSection
          intro={acsNyIndustriesIntro.description}
          titleLine1={acsNyIndustriesIntro.titleLine1}
          titleLine2={acsNyIndustriesIntro.titleLine2}
          titleMaxWidth={acsNyIndustriesIntro.titleMaxWidth}
          introMaxWidth={acsNyIndustriesIntro.introMaxWidth}
          breakTitle
          className="!bg-[#FAFAFA] py-12 sm:py-16 lg:!py-[100px]"
        />
        <DeferredEngagementModelsSection
          tag={acsNyEngagementSection.tag}
          titleLine1={acsNyEngagementSection.titleLine1}
          titleAccent={acsNyEngagementSection.titleAccent}
          description={acsNyEngagementSection.description}
          breakTitle
          titleMaxWidth={930}
          descriptionMaxWidth={750}
          sectionClassName="location-service-engagement"
        />
        <DeferredGetInTouchSection
          sectionId={ACS_NY_CONTACT_ID}
          description={acsNyContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
