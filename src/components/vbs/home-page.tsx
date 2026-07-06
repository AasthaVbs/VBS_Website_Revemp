import { SiteHeader } from "@/components/layout/site-header";
import { AboutUsSection } from "@/components/sections/about-us-section";
import { BestBenefitsSection } from "@/components/sections/best-benefits-section";
import { CertificationSection } from "@/components/sections/certification-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { EngagementModelsSection } from "@/components/sections/engagement-models-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { HomeCapabilitiesSection } from "@/components/sections/home-capabilities-section";
import { HomeHeroSection } from "@/components/sections/home-hero-section";
import { MepResourcesSection } from "@/components/sections/mep/mep-resources-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { SiteFooter } from "@/components/sections/site-footer";
import {
  bestBenefitsSectionCopy,
  homeFaqDescription,
  homeFaqItems,
  homeResourcesSection,
} from "@/constants/home-content";

export function VbsHomePage() {
  return (
    <div className="vbs-home-page vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <HomeHeroSection />
      <HomeCapabilitiesSection />
      <AboutUsSection />
      <OurClientsSection />
      <BestBenefitsSection
        tag={bestBenefitsSectionCopy.tag}
        titleLead={bestBenefitsSectionCopy.titleLead}
        titleAccent={bestBenefitsSectionCopy.titleAccent}
        description={bestBenefitsSectionCopy.description}
        ctaHref="/contact"
      />
      <EngagementModelsSection sectionClassName="vbs-engagement-models-section--home" />
      <IndustriesSection />
      <MepResourcesSection section={homeResourcesSection} sectionClassName="mep-figma-resources vbs-home-resources" />
      <CertificationSection />
      <ClientSuccessStoriesSection />
      <EvaluateDeliveryCtaSection cardOnMobile ctaHref="/contact" />
      <FaqSection variant="home" items={homeFaqItems} description={homeFaqDescription} />
      <GetInTouchSection />
      <SiteFooter />
    </div>
  );
}
