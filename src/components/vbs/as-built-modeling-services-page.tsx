import { SiteHeader } from "@/components/layout/site-header";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  asBuiltModelingAdvantagesCards,
  asBuiltModelingAdvantagesSection,
  asBuiltModelingContactDescription,
  asBuiltModelingFaqSection,
  asBuiltModelingFaqs,
  asBuiltModelingHero,
  asBuiltModelingIndustriesIntro,
  asBuiltModelingIntro,
  asBuiltModelingOurClientsSection,
  asBuiltModelingProjectCta,
  asBuiltModelingResourcesSection,
  asBuiltModelingServiceCards,
  asBuiltModelingServiceMetrics,
  asBuiltModelingServicesSection,
  asBuiltModelingStatsStrip,
  asBuiltModelingTechnologyStackSection,
  asBuiltModelingTechnologyStackToolsRowOne,
  asBuiltModelingTechnologyStackToolsRowTwo,
  asBuiltModelingTestimonialsDescription,
  asBuiltModelingWhyChooseItems,
  asBuiltModelingWhyChooseSection,
  asBuiltModelingWorkflowSection,
  asBuiltModelingWorkflowSteps,
} from "@/constants/as-built-modeling-content";
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

export async function AsBuiltModelingServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page as-built-modeling-services-page point-cloud-to-bim-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...asBuiltModelingHero}
          imageSize="compact"
          ctaHref="#as-built-modeling-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={asBuiltModelingStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={asBuiltModelingIntro} />
        <OurClientsSection section={asBuiltModelingOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={asBuiltModelingServicesSection}
          cards={asBuiltModelingServiceCards}
          metrics={asBuiltModelingServiceMetrics}
          scrollInteraction="hover"
          descriptionClassName="!max-w-[620px]"
        />
        <BimModelingWhyChooseSection
          section={asBuiltModelingWhyChooseSection}
          items={asBuiltModelingWhyChooseItems}
        />
        <DeferredMepWorkflowSection
          section={asBuiltModelingWorkflowSection}
          steps={asBuiltModelingWorkflowSteps}
        />
        <MepBimTechnologyStackSection
          section={asBuiltModelingTechnologyStackSection}
          toolsRowOne={asBuiltModelingTechnologyStackToolsRowOne}
          toolsRowTwo={asBuiltModelingTechnologyStackToolsRowTwo}
          titleLayout="inline"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={asBuiltModelingAdvantagesSection}
          cards={asBuiltModelingAdvantagesCards}
        />
        <DeferredEngagementModelsSection />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">
                Ready to Turn Your Scan Data
                <br />
                Into a{" "}
              </span>
              <span className="font-light text-[#111111]">
                {asBuiltModelingProjectCta.titleLine2}
              </span>
            </>
          }
          description={asBuiltModelingProjectCta.description}
          ctaLabel={asBuiltModelingProjectCta.cta}
          ctaHref={asBuiltModelingProjectCta.ctaHref}
          titleClassName="max-w-[945px]"
          descriptionClassName="max-w-[675px]"
        />
        <DeferredIndustriesSection
          intro={asBuiltModelingIndustriesIntro.description}
          titleLine1={asBuiltModelingIndustriesIntro.titleLine1}
          titleLine2={asBuiltModelingIndustriesIntro.titleLine2}
          titleMaxWidth={asBuiltModelingIndustriesIntro.titleMaxWidth}
          introMaxWidth={730}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={asBuiltModelingResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={asBuiltModelingTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={asBuiltModelingFaqSection.tag}
          description={asBuiltModelingFaqSection.description}
          items={asBuiltModelingFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="as-built-modeling-page-contact"
          description={asBuiltModelingContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
