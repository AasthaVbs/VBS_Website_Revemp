import { SiteHeader } from "@/components/layout/site-header";
import { LocationServiceNearYouSection } from "@/components/sections/locations/location-service-near-you-section";
import { LocationServiceOverviewSection } from "@/components/sections/locations/location-service-overview-section";
import { LocationsNearYouSection } from "@/components/sections/locations/locations-near-you-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import type { ClientSuccessStory } from "@/constants/client-success-stories-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepWhyChooseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export type LocationServicePageContent = {
  pageClassName: string;
  contactId: string;
  contactHash: string;
  contactDescription: string;
  hero: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaLabel: string;
    imageSrc: string;
    imageAlt: string;
    copyMaxWidth?: number;
    descriptionMaxWidth?: number;
    titleMaxWidth?: number;
  };
  stats: { value: string; color: string; label: string }[];
  overview: {
    tag: string;
    titleLines: { text: string; accent?: boolean }[];
    description: string;
    ctaLabel: string;
    ctaHref: string;
    image: string;
    imageAlt: string;
    descriptionMaxWidth?: number;
  };
  nearYou: {
    titleLead: string;
    titleAccent: string;
    titleMaxWidth?: number;
    locations: { name: string; href: string }[];
  };
  testimonials: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    stories: ClientSuccessStory[];
  };
  whyChooseId: string;
  // Figma why-choose section is untyped; keep the same shape as the NY location pages.
  whyChooseSection: object;
  whyChooseItems: object[];
  industries: {
    description: string;
    titleLine1: string;
    titleLine2: string;
    titleMaxWidth?: number;
    introMaxWidth?: number;
  };
  industriesBreakTitle?: boolean;
  engagement: {
    tag: string;
    titleLine1: string;
    titleAccent: string;
    titleTrail?: string;
    description: string;
  };
  engagementBreakTitle?: boolean;
  engagementTitleMaxWidth: number;
  engagementDescriptionMaxWidth?: number;
};

export function LocationServicePage({ content }: { content: LocationServicePageContent }) {
  return (
    <div className={content.pageClassName}>
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...content.hero}
          imageSize="compact"
          mobileLayout="copy-image-cta"
          breakTitle
          ctaHref={content.contactHash}
          containerClassName="max-lg:!pt-0 max-lg:!pb-0 lg:!pt-4 lg:!pb-0"
          rowClassName="lg:!gap-[60px] xl:!gap-[60px]"
          imageFrameClassName="!aspect-[650/530]"
        />
        <TrustStripSection stats={content.stats} className="vbs-trust-strip-section bg-white" />
        <LocationServiceOverviewSection section={content.overview} />
        <LocationServiceNearYouSection section={content.nearYou} />
        <LocationsNearYouSection />
        <DeferredClientSuccessStoriesSection
          className="!bg-[#FAFAFA]"
          tag={content.testimonials.tag}
          titleLead={content.testimonials.titleLead}
          titleAccent={content.testimonials.titleAccent}
          description={content.testimonials.description}
          stories={content.testimonials.stories}
          showViewAll={false}
        />
        <DeferredMepWhyChooseSection
          id={content.whyChooseId}
          className="location-service-why-choose"
          section={content.whyChooseSection}
          items={content.whyChooseItems}
        />
        <DeferredIndustriesSection
          intro={content.industries.description}
          titleLine1={content.industries.titleLine1}
          titleLine2={content.industries.titleLine2}
          titleMaxWidth={content.industries.titleMaxWidth}
          introMaxWidth={content.industries.introMaxWidth}
          breakTitle={content.industriesBreakTitle}
          className="!bg-[#FAFAFA] py-12 sm:py-16 lg:!py-[100px]"
        />
        <DeferredEngagementModelsSection
          tag={content.engagement.tag}
          titleLine1={content.engagement.titleLine1}
          titleAccent={content.engagement.titleAccent}
          titleTrail={content.engagement.titleTrail}
          description={content.engagement.description}
          breakTitle={content.engagementBreakTitle}
          titleMaxWidth={content.engagementTitleMaxWidth}
          descriptionMaxWidth={content.engagementDescriptionMaxWidth}
          sectionClassName="location-service-engagement"
        />
        <DeferredGetInTouchSection
          sectionId={content.contactId}
          description={content.contactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
