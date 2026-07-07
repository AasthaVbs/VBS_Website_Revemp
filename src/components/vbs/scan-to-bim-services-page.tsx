import { SiteHeader } from "@/components/layout/site-header";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { EvaluateDeliveryCtaSection } from "@/components/sections/evaluate-delivery-cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { MepDisciplinesSection } from "@/components/sections/mep/figma/mep-disciplines-figma-section";
import { MepEngagementProcessSection } from "@/components/sections/mep/figma/mep-engagement-process-figma-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepIntroSection } from "@/components/sections/mep/figma/mep-intro-figma-section";
import { MepServiceBenefitsSection } from "@/components/sections/mep/figma/mep-service-benefits-section";
import { MepWhatYouGetSection } from "@/components/sections/mep/figma/mep-what-you-get-section";
import { MepWhyChooseSection } from "@/components/sections/mep/figma/mep-why-choose-figma-section";
import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { MepResourcesSection } from "@/components/sections/mep/mep-resources-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  scanToBimDisciplinePanels,
  scanToBimDisciplinesSection,
  scanToBimEngagementProcessSection,
  scanToBimEngagementProcessSteps,
  scanToBimFaqDescription,
  scanToBimFaqSection,
  scanToBimFaqs,
  scanToBimFullSpectrumCards,
  scanToBimFullSpectrumSection,
  scanToBimHero,
  scanToBimIndustriesIntro,
  scanToBimIntroCopy,
  scanToBimIntroFeatures,
  scanToBimProjectCta,
  scanToBimResourcesSection,
  scanToBimServiceBenefitsCards,
  scanToBimServiceBenefitsSection,
  scanToBimStatsStrip,
  scanToBimTestimonialsDescription,
  scanToBimWhatYouGetCards,
  scanToBimWhatYouGetSection,
  scanToBimWhyChooseItems,
  scanToBimWhyChooseSection,
  scanToBimWorkflowSection,
  scanToBimWorkflowSteps,
} from "@/constants/scan-to-bim-content";

/** Scan to BIM Services — same layout as /mep-bim-services/. */
export function ScanToBimServicesPage() {
  return (
    <div className="vbs-redesign-page scan-to-bim-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection {...scanToBimHero} ctaHref="#services" />
        <TrustStripSection stats={scanToBimStatsStrip} className="vbs-mep-stats-strip bg-white" />
        <MepIntroSection
          copy={scanToBimIntroCopy}
          features={scanToBimIntroFeatures}
          variant="scan-to-bim"
        />
        <MepWhatYouGetSection section={scanToBimWhatYouGetSection} cards={scanToBimWhatYouGetCards} />
        <MepFullSpectrumServicesSection
          section={scanToBimFullSpectrumSection}
          cards={scanToBimFullSpectrumCards}
          scrollInteraction="hover"
        />
        <MepDisciplinesSection
          section={scanToBimDisciplinesSection}
          panels={scanToBimDisciplinePanels}
          tabsAriaLabel="Scan to BIM disciplines"
        />
        <MepWorkflowSection section={scanToBimWorkflowSection} steps={scanToBimWorkflowSteps} />
        <MepServiceBenefitsSection
          section={scanToBimServiceBenefitsSection}
          cards={scanToBimServiceBenefitsCards}
        />
        <MepWhyChooseSection section={scanToBimWhyChooseSection} items={scanToBimWhyChooseItems} />
        <MepResourcesSection section={scanToBimResourcesSection} />
        <IndustriesSection
          intro={scanToBimIndustriesIntro.description}
          titleLine1={scanToBimIndustriesIntro.titleLine1}
          titleLine2={scanToBimIndustriesIntro.titleLine2}
          titleMaxWidth={933}
        />
        <MepEngagementProcessSection
          section={scanToBimEngagementProcessSection}
          steps={scanToBimEngagementProcessSteps}
        />
        <EvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              {scanToBimProjectCta.titleParts.map((part) => (
                <span key={part.text} className={part.className}>
                  {part.text}
                </span>
              ))}
            </>
          }
          description={scanToBimProjectCta.description}
          ctaLabel={scanToBimProjectCta.cta}
          ctaHref="#scan-page-contact"
          titleClassName="max-w-[791px] !text-[#111111] scan-to-bim-project-cta__title"
          descriptionClassName="max-w-[799px]"
        />
        <ClientSuccessStoriesSection description={scanToBimTestimonialsDescription} />
        <FaqSection
          variant="mep"
          tag={scanToBimFaqSection.tag}
          description={scanToBimFaqSection.description}
          items={scanToBimFaqs}
        />
        <GetInTouchSection sectionId="scan-page-contact" description={scanToBimFaqDescription} />
      </main>
      <SiteFooter />
    </div>
  );
}
