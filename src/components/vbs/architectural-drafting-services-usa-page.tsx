import { SiteHeader } from "@/components/layout/site-header";
import { ArchitecturalDraftingUsaHeroSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-hero-section";
import { ArchitecturalDraftingUsaShowcaseSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-showcase-section";
import { ArchitecturalDraftingUsaWhoWeAreSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-who-we-are-section";
import { ArchitecturalDraftingUsaWorkflowSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-workflow-section";
import { CadDraftingToolsSection } from "@/components/sections/cad-landing/cad-drafting-tools-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  architecturalDraftingUsaContactDescription,
  architecturalDraftingUsaIndustriesIntro,
  architecturalDraftingUsaOurClientsLogos,
  architecturalDraftingUsaOurClientsSection,
  architecturalDraftingUsaStatsStrip,
  architecturalDraftingUsaTestimonials,
  architecturalDraftingUsaToolLogos,
  architecturalDraftingUsaToolsSection,
  architecturalDraftingUsaWhyChooseItems,
  architecturalDraftingUsaWhyChooseSection,
  architecturalDraftingUsaWorkflowSection,
  architecturalDraftingUsaWorkflowSteps,
} from "@/constants/architectural-drafting-services-usa-content";
import {
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepWhyChooseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function ArchitecturalDraftingServicesUsaPage() {
  return (
    <div className="vbs-redesign-page architectural-drafting-services-usa-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <ArchitecturalDraftingUsaHeroSection />
        <TrustStripSection
          stats={architecturalDraftingUsaStatsStrip}
          className="vbs-mep-stats-strip ads-usa-trust bg-white"
        />
        <OurClientsSection
          section={architecturalDraftingUsaOurClientsSection}
          logos={architecturalDraftingUsaOurClientsLogos}
        />
        <ClientSuccessStoriesSection
          className="!bg-[#FAFAFA]"
          tag={architecturalDraftingUsaTestimonials.tag}
          titleLead={architecturalDraftingUsaTestimonials.titleLead}
          titleAccent={architecturalDraftingUsaTestimonials.titleAccent}
          description={architecturalDraftingUsaTestimonials.description}
          stories={architecturalDraftingUsaTestimonials.stories}
          showViewAll={false}
        />
        <ArchitecturalDraftingUsaWhoWeAreSection />
        <ArchitecturalDraftingUsaShowcaseSection />
        <CadDraftingToolsSection
          section={architecturalDraftingUsaToolsSection}
          logos={architecturalDraftingUsaToolLogos}
        />
        <DeferredMepWhyChooseSection
          section={architecturalDraftingUsaWhyChooseSection}
          items={architecturalDraftingUsaWhyChooseItems}
        />
        <DeferredIndustriesSection
          intro={architecturalDraftingUsaIndustriesIntro.description}
          titleLine1={architecturalDraftingUsaIndustriesIntro.titleLine1}
          titleLine2={architecturalDraftingUsaIndustriesIntro.titleLine2}
          titleMaxWidth={architecturalDraftingUsaIndustriesIntro.titleMaxWidth}
          className="!bg-[#FAFAFA]"
        />
        <ArchitecturalDraftingUsaWorkflowSection
          section={architecturalDraftingUsaWorkflowSection}
          steps={architecturalDraftingUsaWorkflowSteps}
          id="ads-usa-workflow"
        />
        <DeferredGetInTouchSection
          sectionId="ads-usa-contact"
          description={architecturalDraftingUsaContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
