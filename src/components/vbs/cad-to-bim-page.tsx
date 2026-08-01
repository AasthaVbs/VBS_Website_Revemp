import { SiteHeader } from "@/components/layout/site-header";
import { ArchitectureAiBimWorkflowSection } from "@/components/sections/architecture/architecture-ai-bim-workflow-section";
import { BimModelingOverviewSection } from "@/components/sections/bim-modeling/bim-modeling-overview-section";
import { BimModelingWhyChooseSection } from "@/components/sections/bim-modeling/bim-modeling-why-choose-section";
import { MepFullSpectrumServicesSection } from "@/components/sections/mep/figma/mep-full-spectrum-services-section";
import { MepBimTechnologyStackSection } from "@/components/sections/mep/mep-bim-technology-stack-section";
import { MepPageHeroSection } from "@/components/sections/mep/mep-page-hero-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  cadToBimAiBimWorkflowSection,
  cadToBimContactDescription,
  cadToBimFaqSection,
  cadToBimFaqs,
  cadToBimHero,
  cadToBimIndustriesIntro,
  cadToBimIntro,
  cadToBimKeyPointsCards,
  cadToBimKeyPointsSection,
  cadToBimOurClientsSection,
  cadToBimProjectCta,
  cadToBimResourcesSection,
  cadToBimServiceCards,
  cadToBimServicesSection,
  cadToBimStatsStrip,
  cadToBimTechnologyStackSection,
  cadToBimTechnologyStackToolsRowOne,
  cadToBimTechnologyStackToolsRowTwo,
  cadToBimTestimonialsDescription,
  cadToBimWhyChooseItems,
  cadToBimWhyChooseSection,
  cadToBimWorkflowSection,
  cadToBimWorkflowSteps,
} from "@/constants/cad-to-bim-content";
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

export async function CadToBimPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page cad-to-bim-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...cadToBimHero}
          imageSize="compact"
          ctaHref="#cad-to-bim-page-contact"
          containerClassName="!pt-0 sm:!pt-1 lg:!pt-4"
        />
        <TrustStripSection
          stats={cadToBimStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={cadToBimIntro} />
        <OurClientsSection section={cadToBimOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={cadToBimServicesSection}
          cards={cadToBimServiceCards}
          scrollInteraction="hover"
        />
        <ArchitectureAiBimWorkflowSection section={cadToBimAiBimWorkflowSection} />
        <BimModelingWhyChooseSection
          section={cadToBimWhyChooseSection}
          items={cadToBimWhyChooseItems}
        />
        <DeferredMepWorkflowSection
          section={cadToBimWorkflowSection}
          steps={cadToBimWorkflowSteps}
        />
        <MepBimTechnologyStackSection
          section={cadToBimTechnologyStackSection}
          toolsRowOne={cadToBimTechnologyStackToolsRowOne}
          toolsRowTwo={cadToBimTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="key-points"
          section={cadToBimKeyPointsSection}
          cards={cadToBimKeyPointsCards}
        />
        <DeferredEngagementModelsSection />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{cadToBimProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{cadToBimProjectCta.titleLine2}</span>
            </>
          }
          description={cadToBimProjectCta.description}
          ctaLabel={cadToBimProjectCta.cta}
          ctaHref={cadToBimProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111] capitalize"
          descriptionClassName="max-w-[602px]"
        />
        <DeferredIndustriesSection
          intro={cadToBimIndustriesIntro.description}
          titleLine1={cadToBimIndustriesIntro.titleLine1}
          titleLine2={cadToBimIndustriesIntro.titleLine2}
          titleMaxWidth={cadToBimIndustriesIntro.titleMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={cadToBimResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={cadToBimTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={cadToBimFaqSection.tag}
          description={cadToBimFaqSection.description}
          items={cadToBimFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="cad-to-bim-page-contact"
          description={cadToBimContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
