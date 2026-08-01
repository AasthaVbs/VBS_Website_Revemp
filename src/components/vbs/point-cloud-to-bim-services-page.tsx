import { SiteHeader } from "@/components/layout/site-header";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  pointCloudToBimAdvantagesCards,
  pointCloudToBimAdvantagesSection,
  pointCloudToBimContactDescription,
  pointCloudToBimFaqSection,
  pointCloudToBimFaqs,
  pointCloudToBimHero,
  pointCloudToBimIndustriesIntro,
  pointCloudToBimIntro,
  pointCloudToBimOurClientsSection,
  pointCloudToBimProjectCta,
  pointCloudToBimResourcesSection,
  pointCloudToBimServiceCards,
  pointCloudToBimServiceMetrics,
  pointCloudToBimServicesSection,
  pointCloudToBimStatsStrip,
  pointCloudToBimTechnologyStackSection,
  pointCloudToBimTechnologyStackToolsRowOne,
  pointCloudToBimTechnologyStackToolsRowTwo,
  pointCloudToBimTestimonialsDescription,
  pointCloudToBimWhyChooseItems,
  pointCloudToBimWhyChooseSection,
  pointCloudToBimWorkflowSection,
  pointCloudToBimWorkflowSteps,
} from "@/constants/point-cloud-to-bim-content";
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

export async function PointCloudToBimServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page point-cloud-to-bim-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...pointCloudToBimHero}
          imageSize="compact"
          ctaHref="#point-cloud-to-bim-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={pointCloudToBimStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={pointCloudToBimIntro} />
        <OurClientsSection section={pointCloudToBimOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={pointCloudToBimServicesSection}
          cards={pointCloudToBimServiceCards}
          metrics={pointCloudToBimServiceMetrics}
          scrollInteraction="hover"
        />
        <BimModelingWhyChooseSection
          section={pointCloudToBimWhyChooseSection}
          items={pointCloudToBimWhyChooseItems}
        />
        <DeferredMepWorkflowSection
          section={pointCloudToBimWorkflowSection}
          steps={pointCloudToBimWorkflowSteps}
        />
        <MepBimTechnologyStackSection
          section={pointCloudToBimTechnologyStackSection}
          toolsRowOne={pointCloudToBimTechnologyStackToolsRowOne}
          toolsRowTwo={pointCloudToBimTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={pointCloudToBimAdvantagesSection}
          cards={pointCloudToBimAdvantagesCards}
        />
        <DeferredEngagementModelsSection />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">
                Ready to Turn Your Point Cloud Data
                <br />
                Into a{" "}
              </span>
              <span className="font-light">{pointCloudToBimProjectCta.titleLine2}</span>
            </>
          }
          description={pointCloudToBimProjectCta.description}
          ctaLabel={pointCloudToBimProjectCta.cta}
          ctaHref={pointCloudToBimProjectCta.ctaHref}
          titleClassName="max-w-[945px] !text-[#111111]"
          descriptionClassName="max-w-[659px]"
        />
        <DeferredIndustriesSection
          intro={pointCloudToBimIndustriesIntro.description}
          titleLine1={pointCloudToBimIndustriesIntro.titleLine1}
          titleLine2={pointCloudToBimIndustriesIntro.titleLine2}
          titleMaxWidth={pointCloudToBimIndustriesIntro.titleMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={pointCloudToBimResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={pointCloudToBimTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={pointCloudToBimFaqSection.tag}
          description={pointCloudToBimFaqSection.description}
          items={pointCloudToBimFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="point-cloud-to-bim-page-contact"
          description={pointCloudToBimContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
