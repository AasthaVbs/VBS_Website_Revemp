import { SiteHeader } from "@/components/layout/site-header";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  architecturalScanToBimAdvantagesCards,
  architecturalScanToBimAdvantagesSection,
  architecturalScanToBimContactDescription,
  architecturalScanToBimEngagementCards,
  architecturalScanToBimFaqSection,
  architecturalScanToBimFaqs,
  architecturalScanToBimHero,
  architecturalScanToBimIndustriesIntro,
  architecturalScanToBimIntro,
  architecturalScanToBimOurClientsSection,
  architecturalScanToBimProjectCta,
  architecturalScanToBimResourcesSection,
  architecturalScanToBimServiceCards,
  architecturalScanToBimServiceMetrics,
  architecturalScanToBimServicesSection,
  architecturalScanToBimStatsStrip,
  architecturalScanToBimTechnologyStackSection,
  architecturalScanToBimTechnologyStackToolsRowOne,
  architecturalScanToBimTechnologyStackToolsRowTwo,
  architecturalScanToBimTestimonialsDescription,
  architecturalScanToBimWhyChooseItems,
  architecturalScanToBimWhyChooseSection,
  architecturalScanToBimWorkflowSection,
  architecturalScanToBimWorkflowSteps,
} from "@/constants/architectural-scan-to-bim-content";
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

export async function ArchitecturalScanToBimServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page architectural-scan-to-bim-services-page point-cloud-to-bim-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...architecturalScanToBimHero}
          imageSize="compact"
          ctaHref={architecturalScanToBimHero.ctaHref}
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={architecturalScanToBimStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={architecturalScanToBimIntro} />
        <OurClientsSection section={architecturalScanToBimOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={architecturalScanToBimServicesSection}
          cards={architecturalScanToBimServiceCards}
          metrics={architecturalScanToBimServiceMetrics}
          scrollInteraction="hover"
          descriptionClassName="!max-w-[688px]"
        />
        <BimModelingWhyChooseSection
          section={architecturalScanToBimWhyChooseSection}
          items={architecturalScanToBimWhyChooseItems}
        />
        <DeferredMepWorkflowSection
          section={architecturalScanToBimWorkflowSection}
          steps={architecturalScanToBimWorkflowSteps}
        />
        <MepBimTechnologyStackSection
          section={architecturalScanToBimTechnologyStackSection}
          toolsRowOne={architecturalScanToBimTechnologyStackToolsRowOne}
          toolsRowTwo={architecturalScanToBimTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={architecturalScanToBimAdvantagesSection}
          cards={architecturalScanToBimAdvantagesCards}
        />
        <DeferredEngagementModelsSection cards={architecturalScanToBimEngagementCards} />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">
                Ready to Turn Your Point Cloud Data
                <br />
                Into a{" "}
              </span>
              <span className="font-light">{architecturalScanToBimProjectCta.titleLine2}</span>
            </>
          }
          description={architecturalScanToBimProjectCta.description}
          ctaLabel={architecturalScanToBimProjectCta.cta}
          ctaHref={architecturalScanToBimProjectCta.ctaHref}
          titleClassName="max-w-[945px] !text-[#111111]"
          descriptionClassName="max-w-[646px]"
        />
        <DeferredIndustriesSection
          intro={architecturalScanToBimIndustriesIntro.description}
          titleLine1={architecturalScanToBimIndustriesIntro.titleLine1}
          titleLine2={architecturalScanToBimIndustriesIntro.titleLine2}
          titleMaxWidth={architecturalScanToBimIndustriesIntro.titleMaxWidth}
          introMaxWidth={755}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={architecturalScanToBimResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={architecturalScanToBimTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={architecturalScanToBimFaqSection.tag}
          description={architecturalScanToBimFaqSection.description}
          items={architecturalScanToBimFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="architectural-scan-to-bim-page-contact"
          description={architecturalScanToBimContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
