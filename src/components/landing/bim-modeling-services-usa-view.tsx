"use client";

import { CadDraftingLandingHeader } from "@/components/sections/cad-landing/cad-drafting-landing-header";
import { CadDraftingLandingHeroSection } from "@/components/sections/cad-landing/cad-drafting-landing-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { CadDraftingComparisonSection } from "@/components/sections/cad-landing/cad-drafting-comparison-section";
import { BimLandingZohoFormSection } from "@/components/sections/cad-landing/bim-landing-zoho-form-section";
import { CadDraftingToolsSection } from "@/components/sections/cad-landing/cad-drafting-tools-section";
import { CadDraftingCaseStudiesSection } from "@/components/sections/cad-landing/cad-drafting-case-studies-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { FaqSection } from "@/components/sections/faq-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import {
  bimModelingLandingCaseStudies,
  bimModelingLandingCaseStudiesSection,
  bimModelingLandingComparisonSection,
  bimModelingLandingCta,
  bimModelingLandingFaqDescription,
  bimModelingLandingFaqs,
  bimModelingLandingHero,
  bimModelingLandingNavLinks,
  bimModelingLandingServiceBenefitsCards,
  bimModelingLandingServicesSection,
  bimModelingLandingStatsStrip,
  bimModelingLandingTestimonialsDescription,
  bimModelingLandingToolLogos,
  bimModelingLandingToolsSection,
  bimModelingLandingWorkflowSection,
  bimModelingLandingWorkflowSteps,
} from "@/constants/bim-modeling-landing-content";

import "@/styles/cad-drafting-landing.scss";
import "@/styles/bim-modeling-landing-mobile.scss";

export function BimModelingServicesUsaLandingView() {
  return (
    <div
      className="vbs-redesign-page cad-drafting-landing-page bim-modeling-landing-page mep-bim-services-page"
      style={{ ["--vbs-page-max" as string]: "1440px" }}
    >
      <CadDraftingLandingHeader
        navLinks={bimModelingLandingNavLinks}
        navAriaLabel="BIM modeling landing page"
      />
      <main>
        <CadDraftingLandingHeroSection {...bimModelingLandingHero} />
        <TrustStripSection
          stats={bimModelingLandingStatsStrip}
          className="vbs-trust-strip-section vbs-mep-stats-strip bg-white"
        />
        <MepServiceBenefitsSection
          id="services"
          section={bimModelingLandingServicesSection}
          cards={bimModelingLandingServiceBenefitsCards}
        />
        <CadDraftingCaseStudiesSection
          section={bimModelingLandingCaseStudiesSection}
          studies={bimModelingLandingCaseStudies}
        />
        <CadDraftingComparisonSection section={bimModelingLandingComparisonSection} />
        <BimLandingZohoFormSection />
        <CadDraftingToolsSection
          section={bimModelingLandingToolsSection}
          logos={bimModelingLandingToolLogos}
        />
        <MepWorkflowSection
          id="process"
          section={bimModelingLandingWorkflowSection}
          steps={bimModelingLandingWorkflowSteps}
        />
        <ClientSuccessStoriesSection
          sectionId="reviews"
          description={bimModelingLandingTestimonialsDescription}
        />
        <FaqSection
          variant="mep"
          items={bimModelingLandingFaqs}
          description={bimModelingLandingFaqDescription}
          defaultOpenIndex={0}
        />
        <EvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              {bimModelingLandingCta.titleLine1}
              <span className="font-light">{bimModelingLandingCta.titleLine2}</span>
            </>
          }
          titleClassName="bim-landing-cta__title"
          description={bimModelingLandingCta.description}
          descriptionClassName="bim-landing-cta__description"
          ctaLabel={bimModelingLandingCta.ctaLabel}
          ctaHref={bimModelingLandingCta.ctaHref}
        />
        <GetInTouchSection
          sectionId="bim-landing-contact"
          sectionClassName="bim-landing-get-in-touch"
        />
      </main>
      <SiteFooter />
    </div>
  );
}

export default BimModelingServicesUsaLandingView;
