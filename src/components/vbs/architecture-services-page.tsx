// @ts-nocheck
import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureEngagementModelsSection } from "@/components/sections/architecture/architecture-engagement-models-section";
import { ArchitectureIntegrateWorkflowSection } from "@/components/sections/architecture/architecture-integrate-workflow-section";
import { ArchitectureScaleComparisonSection } from "@/components/sections/architecture/architecture-scale-comparison-section";
import { ArchitectureStageServicesSection } from "@/components/sections/architecture/architecture-stage-services-section";
import { ArchitectureVbsDifferenceSection } from "@/components/sections/architecture/architecture-vbs-difference-section";
import { ArchitectureWhyContinueSection } from "@/components/sections/architecture/architecture-why-continue-section";
import { MepIntroSection } from "@/components/sections/mep/figma/mep-intro-figma-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  architectureFaqDescription,
  architectureFaqSection,
  architectureFaqs,
  architectureHero,
  architectureIndustriesIntro,
  architectureIntroCopy,
  architectureIntroFeatures,
  architectureProjectCta,
  architectureStatsStrip,
  architectureTestimonialsDescription,
} from "@/constants/architecture-services-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function ArchitectureServicesPage() {
  return (
    <div className="vbs-redesign-page architecture-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection {...architectureHero} ctaFilled />
        <TrustStripSection stats={architectureStatsStrip} className="vbs-mep-stats-strip bg-white" />
        <MepIntroSection
          copy={architectureIntroCopy}
          features={architectureIntroFeatures}
          featuresPlacement="below"
        />
        <ArchitectureScaleComparisonSection />
        <ArchitectureStageServicesSection />
        <ArchitectureIntegrateWorkflowSection />
        <ArchitectureWhyContinueSection />
        <ArchitectureVbsDifferenceSection />
        <ArchitectureEngagementModelsSection />
        <DeferredIndustriesSection
          intro={architectureIndustriesIntro.description}
          titleLine1={architectureIndustriesIntro.titleLine1}
          titleLine2={architectureIndustriesIntro.titleLine2}
          titleMaxWidth={architectureIndustriesIntro.titleMaxWidth}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              {architectureProjectCta.titleLine1}
              <span className="font-light text-accent">{architectureProjectCta.titleLine2}</span>
            </>
          }
          description={architectureProjectCta.description}
          ctaLabel={architectureProjectCta.cta}
          ctaHref="#architecture-page-contact"
          titleClassName="max-w-[800px]"
          descriptionClassName="max-w-[720px]"
        />
        <DeferredClientSuccessStoriesSection description={architectureTestimonialsDescription} />
        <DeferredFaqSection
          variant="mep"
          tag={architectureFaqSection.tag}
          description={architectureFaqSection.description}
          items={architectureFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="architecture-page-contact"
          description={architectureFaqDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
