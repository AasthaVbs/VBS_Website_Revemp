import { SiteHeader } from "@/components/layout/site-header";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  scanToCadAdvantagesCards,
  scanToCadAdvantagesSection,
  scanToCadContactDescription,
  scanToCadFaqSection,
  scanToCadFaqs,
  scanToCadHero,
  scanToCadIndustriesIntro,
  scanToCadIntro,
  scanToCadOurClientsSection,
  scanToCadProjectCta,
  scanToCadResourcesSection,
  scanToCadServiceCards,
  scanToCadServiceMetrics,
  scanToCadServicesSection,
  scanToCadStatsStrip,
  scanToCadTechnologyStackSection,
  scanToCadTechnologyStackToolsRowOne,
  scanToCadTechnologyStackToolsRowTwo,
  scanToCadTestimonialsDescription,
  scanToCadWhyChooseItems,
  scanToCadWhyChooseSection,
  scanToCadWorkflowSection,
  scanToCadWorkflowSteps,
} from "@/constants/scan-to-cad-services-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredMepWorkflowSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function ScanToCadServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page scan-to-cad-services-page point-cloud-to-bim-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...scanToCadHero}
          imageSize="compact"
          ctaHref="#scan-to-cad-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={scanToCadStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={scanToCadIntro} />
        <OurClientsSection section={scanToCadOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={scanToCadServicesSection}
          cards={scanToCadServiceCards}
          metrics={scanToCadServiceMetrics}
          scrollInteraction="hover"
        />
        <BimModelingWhyChooseSection
          section={scanToCadWhyChooseSection}
          items={scanToCadWhyChooseItems}
        />
        <DeferredMepWorkflowSection
          section={scanToCadWorkflowSection}
          steps={scanToCadWorkflowSteps}
        />
        <MepBimTechnologyStackSection
          section={scanToCadTechnologyStackSection}
          toolsRowOne={scanToCadTechnologyStackToolsRowOne}
          toolsRowTwo={scanToCadTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={scanToCadAdvantagesSection}
          cards={scanToCadAdvantagesCards}
        />
        <DeferredEngagementModelsSection />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">
                Ready to Extend Your
                <br />
              </span>
              <span className="font-light text-accent">
                {scanToCadProjectCta.titleLine2}
              </span>
            </>
          }
          description={scanToCadProjectCta.description}
          ctaLabel={scanToCadProjectCta.cta}
          ctaHref={scanToCadProjectCta.ctaHref}
          titleClassName="max-w-[610px]"
          descriptionClassName="max-w-[581px]"
        />
        <DeferredIndustriesSection
          intro={scanToCadIndustriesIntro.description}
          titleLine1={scanToCadIndustriesIntro.titleLine1}
          titleLine2={scanToCadIndustriesIntro.titleLine2}
          titleMaxWidth={scanToCadIndustriesIntro.titleMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={scanToCadResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={scanToCadTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={scanToCadFaqSection.tag}
          description={scanToCadFaqSection.description}
          items={scanToCadFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="scan-to-cad-page-contact"
          description={scanToCadContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
