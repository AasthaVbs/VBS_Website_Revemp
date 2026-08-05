"use client";

import { CadDraftingLandingHeader } from "@/components/sections/cad-landing/cad-drafting-landing-header";
import { CadDraftingLandingHeroSection } from "@/components/sections/cad-landing/cad-drafting-landing-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import { CadDraftingServicesSection } from "@/components/sections/cad-landing/cad-drafting-services-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { CadDraftingComparisonSection } from "@/components/sections/cad-landing/cad-drafting-comparison-section";
import { CadDraftingCaseStudiesSection } from "@/components/sections/cad-landing/cad-drafting-case-studies-section";
import { CadDraftingToolsSection } from "@/components/sections/cad-landing/cad-drafting-tools-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { FaqSection } from "@/components/sections/faq-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import {
  cadDraftingLandingCta,
  cadDraftingLandingFaqDescription,
  cadDraftingLandingFaqs,
  cadDraftingLandingStatsStrip,
  cadDraftingLandingTestimonialsDescription,
  cadDraftingLandingWorkflowSection,
  cadDraftingLandingWorkflowSteps,
} from "@/constants/cad-drafting-landing-content";

import "@/styles/cad-drafting-landing.scss";

export function CadDraftingServicesUsaLandingView() {
  return (
    <div className="vbs-redesign-page cad-drafting-landing-page mep-bim-services-page">
      <CadDraftingLandingHeader />
      <main>
        <CadDraftingLandingHeroSection />
        <TrustStripSection
          stats={cadDraftingLandingStatsStrip}
          className="vbs-trust-strip-section vbs-mep-stats-strip bg-white"
        />
        <CadDraftingServicesSection />
        <OurClientsSection />
        <CadDraftingComparisonSection />
        <CadDraftingCaseStudiesSection />
        <CadDraftingToolsSection />
        <MepWorkflowSection
          id="process"
          section={cadDraftingLandingWorkflowSection}
          steps={cadDraftingLandingWorkflowSteps}
        />
        <ClientSuccessStoriesSection
          sectionId="reviews"
          description={cadDraftingLandingTestimonialsDescription}
        />
        <FaqSection
          variant="mep"
          items={cadDraftingLandingFaqs}
          description={cadDraftingLandingFaqDescription}
          defaultOpenIndex={0}
        />
        <EvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              {cadDraftingLandingCta.titleLine1}
              <span className="text-accent font-light">{cadDraftingLandingCta.titleLine2}</span>
            </>
          }
          description={cadDraftingLandingCta.description}
          ctaLabel={cadDraftingLandingCta.ctaLabel}
          ctaHref={cadDraftingLandingCta.ctaHref}
        />
        <GetInTouchSection sectionId="cad-landing-contact" />
      </main>
      <SiteFooter />
    </div>
  );
}

export default CadDraftingServicesUsaLandingView;
