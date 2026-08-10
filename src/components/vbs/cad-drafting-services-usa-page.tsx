import { SiteHeader } from "@/components/layout/site-header";
import { CadDraftingUsaClientsSection } from "@/components/sections/cad-landing/cad-drafting-usa-clients-section";
import { CadDraftingUsaExpertiseSection } from "@/components/sections/cad-landing/cad-drafting-usa-expertise-section";
import { CadDraftingUsaHeroSection } from "@/components/sections/cad-landing/cad-drafting-usa-hero-section";
import { CadDraftingUsaTestimonialSection } from "@/components/sections/cad-landing/cad-drafting-usa-testimonial-section";
import { FaqSection } from "@/components/sections/faq-section";
import { MepWhyChooseSection } from "@/components/sections/mep/figma/mep-why-choose-figma-section";
import {
  CAD_USA_CONTACT_ID,
  cadDraftingUsaContactDescription,
  cadDraftingUsaFaqs,
  cadDraftingUsaWhyChooseItems,
  cadDraftingUsaWhyChooseSection,
} from "@/constants/cad-drafting-services-usa-content";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function CadDraftingServicesUsaPage() {
  return (
    <div className="vbs-redesign-page cad-drafting-services-usa-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <CadDraftingUsaHeroSection />
        <CadDraftingUsaTestimonialSection />
        <CadDraftingUsaExpertiseSection />
        <CadDraftingUsaClientsSection />
        <MepWhyChooseSection
          section={cadDraftingUsaWhyChooseSection}
          items={cadDraftingUsaWhyChooseItems}
          className="cad-usa-why-choose !bg-[#FAFAFA]"
        />
        <FaqSection
          variant="mep"
          tag=""
          titleLine1="Frequently Asked "
          titleLine2="Questions"
          description=""
          items={cadDraftingUsaFaqs}
          defaultOpenIndex={0}
        />
        <DeferredGetInTouchSection
          sectionId={CAD_USA_CONTACT_ID}
          description={cadDraftingUsaContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
