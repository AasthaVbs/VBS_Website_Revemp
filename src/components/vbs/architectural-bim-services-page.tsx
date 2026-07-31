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
  architecturalBimAdvantagesCards,
  architecturalBimAdvantagesSection,
  architecturalBimAiBimWorkflowSection,
  architecturalBimContactDescription,
  architecturalBimFaqSection,
  architecturalBimFaqs,
  architecturalBimHero,
  architecturalBimIndustriesIntro,
  architecturalBimIntro,
  architecturalBimOurClientsSection,
  architecturalBimProjectCta,
  architecturalBimResourcesSection,
  architecturalBimServiceCards,
  architecturalBimServicesSection,
  architecturalBimStatsStrip,
  architecturalBimTechnologyStackSection,
  architecturalBimTechnologyStackToolsRowOne,
  architecturalBimTechnologyStackToolsRowTwo,
  architecturalBimTestimonialsDescription,
  architecturalBimWhyChooseItems,
  architecturalBimWhyChooseSection,
} from "@/constants/architectural-bim-services-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredMepServiceBenefitsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function ArchitecturalBimServicesPage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-redesign-page architectural-bim-services-page bim-modeling-services-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <MepPageHeroSection
          {...architecturalBimHero}
          imageSize="compact"
          ctaHref="#architectural-bim-page-contact"
          containerClassName="!pt-0 sm:!pt-2 lg:!pt-10"
        />
        <TrustStripSection
          stats={architecturalBimStatsStrip}
          className="vbs-mep-stats-strip bg-white"
        />
        <BimModelingOverviewSection intro={architecturalBimIntro} />
        <OurClientsSection section={architecturalBimOurClientsSection} />
        <MepFullSpectrumServicesSection
          section={architecturalBimServicesSection}
          cards={architecturalBimServiceCards}
          scrollInteraction="hover"
          titleLine2ClassName="block"
          descriptionClassName="max-w-[766px]"
        />
        <ArchitectureAiBimWorkflowSection
          section={architecturalBimAiBimWorkflowSection}
        />
        <BimModelingWhyChooseSection
          section={architecturalBimWhyChooseSection}
          items={architecturalBimWhyChooseItems}
        />
        <MepBimTechnologyStackSection
          section={architecturalBimTechnologyStackSection}
          toolsRowOne={architecturalBimTechnologyStackToolsRowOne}
          toolsRowTwo={architecturalBimTechnologyStackToolsRowTwo}
          titleLayout="stacked"
          descriptionMaxWidth={539}
        />
        <DeferredMepServiceBenefitsSection
          id="advantages"
          section={architecturalBimAdvantagesSection}
          cards={architecturalBimAdvantagesCards}
        />
        <DeferredEngagementModelsSection />
        <DeferredEvaluateDeliveryCtaSection
          cardOnMobile
          title={
            <>
              <span className="font-medium">{architecturalBimProjectCta.titleLine1}</span>
              <br />
              <span className="font-light">{architecturalBimProjectCta.titleLine2}</span>
            </>
          }
          description={architecturalBimProjectCta.description}
          ctaLabel={architecturalBimProjectCta.cta}
          ctaHref={architecturalBimProjectCta.ctaHref}
          titleClassName="max-w-[835px] !text-[#111111] capitalize"
          descriptionClassName="max-w-[835px]"
        />
        <DeferredIndustriesSection
          intro={architecturalBimIndustriesIntro.description}
          titleLine1={architecturalBimIndustriesIntro.titleLine1}
          titleLine2={architecturalBimIndustriesIntro.titleLine2}
          titleMaxWidth={architecturalBimIndustriesIntro.titleMaxWidth}
          breakTitle
        />
        <DeferredMepResourcesSection
          section={architecturalBimResourcesSection}
          allItems={resourcesFeed}
        />
        <DeferredClientSuccessStoriesSection
          description={architecturalBimTestimonialsDescription}
        />
        <DeferredFaqSection
          variant="mep"
          tag={architecturalBimFaqSection.tag}
          description={architecturalBimFaqSection.description}
          items={architecturalBimFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="architectural-bim-page-contact"
          description={architecturalBimContactDescription}
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
