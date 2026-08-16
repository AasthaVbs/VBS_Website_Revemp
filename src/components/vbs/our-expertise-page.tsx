import { SiteHeader } from "@/components/layout/site-header";
import { CadDraftingUsaClientsSection } from "@/components/sections/cad-landing/cad-drafting-usa-clients-section";
import { CadDraftingUsaHeroSection } from "@/components/sections/cad-landing/cad-drafting-usa-hero-section";
import { CadDraftingUsaTestimonialSection } from "@/components/sections/cad-landing/cad-drafting-usa-testimonial-section";
import { OurExpertiseCapabilitiesSection } from "@/components/sections/our-expertise/our-expertise-capabilities-section";
import { OurExpertiseExpertsSection } from "@/components/sections/our-expertise/our-expertise-experts-section";
import { OurExpertiseToolsSection } from "@/components/sections/our-expertise/our-expertise-tools-section";
import {
  OUR_EXPERTISE_CONTACT_ID,
  ourExpertiseContactDescription,
  ourExpertiseEngagementCards,
  ourExpertiseEngagementModelsHeader,
  ourExpertiseFaqs,
  ourExpertiseHero,
  ourExpertiseTestimonial,
} from "@/constants/our-expertise-content";
import {
  DeferredEngagementModelsSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function OurExpertisePage() {
  return (
    <div className="vbs-redesign-page our-expertise-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <CadDraftingUsaHeroSection hero={ourExpertiseHero} mobileLayout="copy-image-cta" />
        <OurExpertiseCapabilitiesSection />
        <OurExpertiseExpertsSection />
        <CadDraftingUsaClientsSection />
        <CadDraftingUsaTestimonialSection
          content={ourExpertiseTestimonial}
          className="!bg-white"
          descriptionClassName="!text-[14px] !leading-5"
          mobileCentered
        />
        <DeferredEngagementModelsSection
          tag={ourExpertiseEngagementModelsHeader.tag}
          titleLine1={ourExpertiseEngagementModelsHeader.titleLine1}
          titleAccent={ourExpertiseEngagementModelsHeader.titleAccent}
          description={ourExpertiseEngagementModelsHeader.description}
          breakTitle
          titleMaxWidth={778}
          descriptionMaxWidth={806}
          cards={ourExpertiseEngagementCards}
        />
        <OurExpertiseToolsSection />
        <DeferredFaqSection
          variant="mep"
          tag=""
          titleLine1="Frequently Asked "
          titleLine2="Questions"
          description=""
          items={ourExpertiseFaqs}
          defaultOpenIndex={0}
        />
        <DeferredGetInTouchSection
          sectionId={OUR_EXPERTISE_CONTACT_ID}
          description={ourExpertiseContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
