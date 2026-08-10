import { SiteHeader } from "@/components/layout/site-header";
import { CadDraftingUsaClientsSection } from "@/components/sections/cad-landing/cad-drafting-usa-clients-section";
import { CadDraftingUsaExpertiseSection } from "@/components/sections/cad-landing/cad-drafting-usa-expertise-section";
import { CadDraftingUsaHeroSection } from "@/components/sections/cad-landing/cad-drafting-usa-hero-section";
import { CadDraftingUsaTestimonialSection } from "@/components/sections/cad-landing/cad-drafting-usa-testimonial-section";
import { FaqSection } from "@/components/sections/faq-section";
import { MepWhyChooseSection } from "@/components/sections/mep/figma/mep-why-choose-figma-section";
import {
  BIM_USA_CONTACT_ID,
  bimModelingUsaClientLogos,
  bimModelingUsaClientsSection,
  bimModelingUsaContactDescription,
  bimModelingUsaExpertiseItems,
  bimModelingUsaExpertiseSection,
  bimModelingUsaFaqs,
  bimModelingUsaHero,
  bimModelingUsaTestimonial,
  bimModelingUsaWhyChooseItems,
  bimModelingUsaWhyChooseSection,
} from "@/constants/bim-modeling-services-usa-content";
import {
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function BimModelingServicesUsaPage() {
  return (
    <div className="vbs-redesign-page cad-drafting-services-usa-page bim-modeling-services-usa-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <CadDraftingUsaHeroSection hero={bimModelingUsaHero} />
        <CadDraftingUsaTestimonialSection content={bimModelingUsaTestimonial} />
        <CadDraftingUsaExpertiseSection
          section={bimModelingUsaExpertiseSection}
          items={bimModelingUsaExpertiseItems}
        />
        <CadDraftingUsaClientsSection
          section={bimModelingUsaClientsSection}
          logos={bimModelingUsaClientLogos}
        />
        <MepWhyChooseSection
          section={bimModelingUsaWhyChooseSection}
          items={bimModelingUsaWhyChooseItems}
          className="cad-usa-why-choose !bg-[#FAFAFA]"
        />
        <FaqSection
          variant="mep"
          tag=""
          titleLine1="Frequently Asked "
          titleLine2="Questions"
          description=""
          items={bimModelingUsaFaqs}
          defaultOpenIndex={0}
        />
        <DeferredGetInTouchSection
          sectionId={BIM_USA_CONTACT_ID}
          description={bimModelingUsaContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
