import { SiteHeader } from "@/components/layout/site-header";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  LASER_SCAN_TO_BIM_CONTACT_ID,
  laserScanToBimAdvantagesCards,
  laserScanToBimAdvantagesSection,
  laserScanToBimContactDescription,
  laserScanToBimEngagementModelsHeader,
  laserScanToBimFaqSection,
  laserScanToBimFaqs,
  laserScanToBimHero,
  laserScanToBimIndustriesIntro,
  laserScanToBimIntro,
  laserScanToBimOurClientsSection,
  laserScanToBimResourcesSection,
  laserScanToBimServiceCards,
  laserScanToBimServiceMetrics,
  laserScanToBimServicesSection,
  laserScanToBimStatsStrip,
  laserScanToBimTechnologyStackSection,
  laserScanToBimTechnologyStackToolsRowOne,
  laserScanToBimTechnologyStackToolsRowTwo,
  laserScanToBimTestimonialsDescription,
  laserScanToBimWhyChooseItems,
  laserScanToBimWhyChooseSection,
} from "@/constants/laser-scan-to-bim-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function LaserScanToBimPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page laser-scan-to-bim-page point-cloud-to-bim-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...laserScanToBimHero}
          imageSize="compact"
          mobileLayout="copy-image-cta"
          ctaHref={`#${LASER_SCAN_TO_BIM_CONTACT_ID}`}
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4 max-lg:!pb-3"
        />
        <TrustStripSection
          stats={laserScanToBimStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={laserScanToBimIntro} />
        <OurClientsSection section={laserScanToBimOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={laserScanToBimServicesSection}
          cards={laserScanToBimServiceCards}
          metrics={laserScanToBimServiceMetrics}
          scrollInteraction="hover"
        />
        <BimModelingWhyChooseSection
          section={laserScanToBimWhyChooseSection}
          items={laserScanToBimWhyChooseItems}
          titleMaxWidth={650}
          descriptionMaxWidth={1127}
          breakTitle
        />
        <MepBimTechnologyStackSection
          section={laserScanToBimTechnologyStackSection}
          toolsRowOne={laserScanToBimTechnologyStackToolsRowOne}
          toolsRowTwo={laserScanToBimTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={laserScanToBimAdvantagesSection}
          cards={laserScanToBimAdvantagesCards}
        />
        <DeferredEngagementModelsSection
          tag={laserScanToBimEngagementModelsHeader.tag}
          titleLine1={laserScanToBimEngagementModelsHeader.titleLine1}
          titleAccent={laserScanToBimEngagementModelsHeader.titleAccent}
          description={laserScanToBimEngagementModelsHeader.description}
          breakTitle
          titleMaxWidth={884}
          descriptionMaxWidth={832}
        />
        <DeferredIndustriesSection
          intro={laserScanToBimIndustriesIntro.description}
          titleLine1={laserScanToBimIndustriesIntro.titleLine1}
          titleLine2={laserScanToBimIndustriesIntro.titleLine2}
          titleMaxWidth={laserScanToBimIndustriesIntro.titleMaxWidth}
          introMaxWidth={840}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={laserScanToBimResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={laserScanToBimTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={laserScanToBimFaqSection.tag}
          description={laserScanToBimFaqSection.description}
          items={laserScanToBimFaqs}
          defaultOpenIndex={0}
        />
        <DeferredGetInTouchSection
          sectionId={LASER_SCAN_TO_BIM_CONTACT_ID}
          description={laserScanToBimContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
