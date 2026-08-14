import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureAiBimWorkflowSection } from "@/components/sections/architecture/architecture-ai-bim-workflow-section";
import { ArchitectureEngagementModelsSection } from "@/components/sections/architecture/architecture-engagement-models-section";
import { ArchitectureIntegrateWorkflowSection } from "@/components/sections/architecture/architecture-integrate-workflow-section";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  PDF_TO_CAD_CONTACT_SECTION_ID,
  pdfToCadAdvantagesCards,
  pdfToCadAdvantagesSection,
  pdfToCadAiBimWorkflowSection,
  pdfToCadContactDescription,
  pdfToCadEngagementModelsCards,
  pdfToCadEngagementModelsSection,
  pdfToCadFaqSection,
  pdfToCadFaqs,
  pdfToCadHero,
  pdfToCadIndustriesIntro,
  pdfToCadIntro,
  pdfToCadOurClientsSection,
  pdfToCadProjectCta,
  pdfToCadResourcesSection,
  pdfToCadServiceCards,
  pdfToCadServicesSection,
  pdfToCadStatsStrip,
  pdfToCadTechnologyStackSection,
  pdfToCadTechnologyStackToolsRowOne,
  pdfToCadTechnologyStackToolsRowTwo,
  pdfToCadTestimonialsDescription,
  pdfToCadWhyChooseItems,
  pdfToCadWhyChooseSection,
  pdfToCadWorkflowIntegrateSection,
  pdfToCadWorkflowIntegrateSteps,
} from "@/constants/pdf-to-cad-conversion-services-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function PdfToCadConversionServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page pdf-to-cad-conversion-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...pdfToCadHero}
          imageSize="compact"
          ctaHref={`#${PDF_TO_CAD_CONTACT_SECTION_ID}`}
          containerClassName="!pt-0 !pb-6 sm:!pt-0 sm:!pb-8 lg:!pt-0 lg:!pb-10"
        />
        <TrustStripSection
          stats={pdfToCadStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={pdfToCadIntro} />
        <OurClientsSection section={pdfToCadOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={pdfToCadServicesSection}
          cards={pdfToCadServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={pdfToCadAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={pdfToCadWhyChooseSection}
          items={pdfToCadWhyChooseItems}
          descriptionMaxWidth={pdfToCadWhyChooseSection.descriptionMaxWidth}
        />
        <ArchitectureIntegrateWorkflowSection
          section={pdfToCadWorkflowIntegrateSection}
          steps={pdfToCadWorkflowIntegrateSteps}
          headerAlign="center"
        />
        <MepBimTechnologyStackSection
          section={pdfToCadTechnologyStackSection}
          toolsRowOne={pdfToCadTechnologyStackToolsRowOne}
          toolsRowTwo={pdfToCadTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={pdfToCadAdvantagesSection}
          cards={pdfToCadAdvantagesCards}
        />
        <ArchitectureEngagementModelsSection
          section={pdfToCadEngagementModelsSection}
          cards={pdfToCadEngagementModelsCards}
        />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{pdfToCadProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{pdfToCadProjectCta.titleLine2}</span>
            </>
          }
          description={pdfToCadProjectCta.description}
          ctaLabel={pdfToCadProjectCta.cta}
          ctaHref={pdfToCadProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111]"
          descriptionClassName="max-w-[686px]"
        />
        <DeferredIndustriesSection
          intro={pdfToCadIndustriesIntro.description}
          titleLine1={pdfToCadIndustriesIntro.titleLine1}
          titleLine2={pdfToCadIndustriesIntro.titleLine2}
          titleMaxWidth={pdfToCadIndustriesIntro.titleMaxWidth}
          introMaxWidth={pdfToCadIndustriesIntro.descriptionMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={pdfToCadResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={pdfToCadTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={pdfToCadFaqSection.tag}
          description={pdfToCadFaqSection.description}
          items={pdfToCadFaqs}
        />
        <DeferredGetInTouchSection
          sectionId={PDF_TO_CAD_CONTACT_SECTION_ID}
          description={pdfToCadContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
