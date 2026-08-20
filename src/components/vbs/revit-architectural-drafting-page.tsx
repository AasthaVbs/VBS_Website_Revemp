import { SiteHeader } from "@/components/layout/site-header";
import { ArchitecturalDraftingUsaHeroSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-hero-section";
import { ArchitecturalDraftingUsaShowcaseSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-showcase-section";
import { ArchitecturalDraftingUsaWhoWeAreSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-who-we-are-section";
import { ArchitecturalDraftingUsaWorkflowSection } from "@/components/sections/architectural-drafting/architectural-drafting-usa-workflow-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  revitArchitecturalDraftingContactDescription,
  revitArchitecturalDraftingHero,
  revitArchitecturalDraftingIndustriesIntro,
  revitArchitecturalDraftingOurClientsLogos,
  revitArchitecturalDraftingOurClientsSection,
  revitArchitecturalDraftingShowcaseProjects,
  revitArchitecturalDraftingShowcaseSection,
  revitArchitecturalDraftingStatsStrip,
  revitArchitecturalDraftingTestimonials,
  revitArchitecturalDraftingWhoWeAreItems,
  revitArchitecturalDraftingWhoWeAreSection,
  revitArchitecturalDraftingWhyChooseItems,
  revitArchitecturalDraftingWhyChooseSection,
  revitArchitecturalDraftingWorkflowSection,
  revitArchitecturalDraftingWorkflowSteps,
} from "@/constants/revit-architectural-drafting-content";
import {
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepWhyChooseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function RevitArchitecturalDraftingPage() {
  return (
    <div className="vbs-redesign-page revit-architectural-drafting-page architectural-drafting-services-usa-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <ArchitecturalDraftingUsaHeroSection content={revitArchitecturalDraftingHero} />
        <TrustStripSection
          stats={revitArchitecturalDraftingStatsStrip}
          className="vbs-mep-stats-strip ads-usa-trust bg-white"
        />
        <OurClientsSection
          section={revitArchitecturalDraftingOurClientsSection}
          logos={revitArchitecturalDraftingOurClientsLogos}
        />
        <ClientSuccessStoriesSection
          className="!bg-[#FAFAFA]"
          tag={revitArchitecturalDraftingTestimonials.tag}
          titleLead={revitArchitecturalDraftingTestimonials.titleLead}
          titleAccent={revitArchitecturalDraftingTestimonials.titleAccent}
          titleMaxWidth={revitArchitecturalDraftingTestimonials.titleMaxWidth}
          description={revitArchitecturalDraftingTestimonials.description}
          stories={revitArchitecturalDraftingTestimonials.stories}
          showViewAll={false}
        />
        <ArchitecturalDraftingUsaWhoWeAreSection
          section={revitArchitecturalDraftingWhoWeAreSection}
          items={revitArchitecturalDraftingWhoWeAreItems}
        />
        <ArchitecturalDraftingUsaShowcaseSection
          section={revitArchitecturalDraftingShowcaseSection}
          projects={revitArchitecturalDraftingShowcaseProjects}
        />
        <DeferredMepWhyChooseSection
          className=""
          section={revitArchitecturalDraftingWhyChooseSection as never}
          items={revitArchitecturalDraftingWhyChooseItems as never}
        />
        <DeferredIndustriesSection
          intro={revitArchitecturalDraftingIndustriesIntro.description}
          titleLine1={revitArchitecturalDraftingIndustriesIntro.titleLine1}
          titleLine2={revitArchitecturalDraftingIndustriesIntro.titleLine2}
          titleMaxWidth={revitArchitecturalDraftingIndustriesIntro.titleMaxWidth}
          introMaxWidth={revitArchitecturalDraftingIndustriesIntro.introMaxWidth}
          className="!bg-[#FAFAFA]"
        />
        <ArchitecturalDraftingUsaWorkflowSection
          section={revitArchitecturalDraftingWorkflowSection}
          steps={revitArchitecturalDraftingWorkflowSteps}
          id="rad-workflow"
        />
        <DeferredGetInTouchSection
          sectionId="rad-contact"
          description={revitArchitecturalDraftingContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
