import { SiteHeader } from "@/components/layout/site-header";
import { LocationServiceNearYouSection } from "@/components/sections/locations/location-service-near-you-section";
import { LocationServiceOverviewSection } from "@/components/sections/locations/location-service-overview-section";
import { LocationsNearYouSection } from "@/components/sections/locations/locations-near-you-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  MEP_NY_CONTACT_ID,
  MEP_NY_CONTACT_HASH,
  mepNyContactDescription,
  mepNyEngagementSection,
  mepNyHero,
  mepNyIndustriesIntro,
  mepNyNearYouSection,
  mepNyOverviewSection,
  mepNyStatsStrip,
  mepNyTestimonials,
  mepNyWhyChooseItems,
  mepNyWhyChooseSection,
} from "@/constants/mep-bim-services-new-york-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepWhyChooseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function MepBimServicesNewYorkPage() {
  return (
    <div className="vbs-redesign-page locations-page location-service-page mep-ny-page mep-bim-services-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...mepNyHero}
          imageSize="compact"
          mobileLayout="copy-image-cta"
          breakTitle
          ctaHref={MEP_NY_CONTACT_HASH}
          containerClassName="max-lg:!pt-0 max-lg:!pb-0 lg:!pt-4 lg:!pb-0"
          rowClassName="lg:!gap-[60px] xl:!gap-[60px]"
          imageFrameClassName="!aspect-[650/530]"
        />
        <TrustStripSection stats={mepNyStatsStrip} className="vbs-trust-strip-section bg-white" />
        <LocationServiceOverviewSection section={mepNyOverviewSection} />
        <LocationServiceNearYouSection section={mepNyNearYouSection} />
        <LocationsNearYouSection />
        <DeferredClientSuccessStoriesSection
          className="!bg-[#FAFAFA]"
          tag={mepNyTestimonials.tag}
          titleLead={mepNyTestimonials.titleLead}
          titleAccent={mepNyTestimonials.titleAccent}
          description={mepNyTestimonials.description}
          stories={mepNyTestimonials.stories}
          showViewAll={false}
        />
        <DeferredMepWhyChooseSection
          id="mep-ny-why-choose"
          className="location-service-why-choose"
          section={mepNyWhyChooseSection}
          items={mepNyWhyChooseItems}
        />
        <DeferredIndustriesSection
          intro={mepNyIndustriesIntro.description}
          titleLine1={mepNyIndustriesIntro.titleLine1}
          titleLine2={mepNyIndustriesIntro.titleLine2}
          titleMaxWidth={mepNyIndustriesIntro.titleMaxWidth}
          introMaxWidth={mepNyIndustriesIntro.introMaxWidth}
          className="!bg-[#FAFAFA] py-12 sm:py-16 lg:!py-[100px]"
        />
        <DeferredEngagementModelsSection
          tag={mepNyEngagementSection.tag}
          titleLine1={mepNyEngagementSection.titleLine1}
          titleAccent={mepNyEngagementSection.titleAccent}
          description={mepNyEngagementSection.description}
          breakTitle
          titleMaxWidth={695}
          descriptionMaxWidth={750}
          sectionClassName="location-service-engagement"
        />
        <DeferredGetInTouchSection
          sectionId={MEP_NY_CONTACT_ID}
          description={mepNyContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
