import { SiteHeader } from "@/components/layout/site-header";
import { CadDraftingUsaClientsSection } from "@/components/sections/cad-landing/cad-drafting-usa-clients-section";
import { CadDraftingUsaExpertiseSection } from "@/components/sections/cad-landing/cad-drafting-usa-expertise-section";
import { CadDraftingUsaHeroSection } from "@/components/sections/cad-landing/cad-drafting-usa-hero-section";
import { CadDraftingUsaTestimonialSection } from "@/components/sections/cad-landing/cad-drafting-usa-testimonial-section";
import { FaqSection } from "@/components/sections/faq-section";
import { MepWhyChooseSection } from "@/components/sections/mep/figma/mep-why-choose-figma-section";
import {
  CAD_TO_BIM_CONTACT_ID,
  cadToBimConversionClientLogos,
  cadToBimConversionClientsSection,
  cadToBimConversionContactDescription,
  cadToBimConversionExpertiseItems,
  cadToBimConversionExpertiseSection,
  cadToBimConversionFaqs,
  cadToBimConversionHero,
  cadToBimConversionTestimonial,
  cadToBimConversionWhyChooseItems,
  cadToBimConversionWhyChooseSection,
} from "@/constants/cad-to-bim-conversion-services-content";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function CadToBimConversionServicesPage() {
  return (
    <div className="vbs-redesign-page cad-drafting-services-usa-page cad-to-bim-conversion-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <CadDraftingUsaHeroSection hero={cadToBimConversionHero} />
        <CadDraftingUsaTestimonialSection content={cadToBimConversionTestimonial} />
        <CadDraftingUsaExpertiseSection
          section={cadToBimConversionExpertiseSection}
          items={cadToBimConversionExpertiseItems}
        />
        <CadDraftingUsaClientsSection
          section={cadToBimConversionClientsSection}
          logos={cadToBimConversionClientLogos}
        />
        <MepWhyChooseSection
          section={cadToBimConversionWhyChooseSection}
          items={cadToBimConversionWhyChooseItems}
          className="cad-usa-why-choose !bg-[#FAFAFA]"
        />
        <FaqSection
          variant="mep"
          tag=""
          titleLine1="Frequently Asked "
          titleLine2="Questions"
          description=""
          items={cadToBimConversionFaqs}
          defaultOpenIndex={0}
        />
        <DeferredGetInTouchSection
          sectionId={CAD_TO_BIM_CONTACT_ID}
          description={cadToBimConversionContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
