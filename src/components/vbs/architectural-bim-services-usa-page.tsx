import { SiteHeader } from "@/components/layout/site-header";
import { ArchitecturalBimUsaCaseStudiesSection } from "@/components/sections/architectural-bim/architectural-bim-usa-case-studies-section";
import { ArchitecturalBimUsaHeroSection } from "@/components/sections/architectural-bim/architectural-bim-usa-hero-section";
import { ArchitecturalBimUsaOverviewSection } from "@/components/sections/architectural-bim/architectural-bim-usa-overview-section";
import { ArchitecturalBimUsaServicesSection } from "@/components/sections/architectural-bim/architectural-bim-usa-services-section";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { OurClientsSection } from "@/components/sections/our-clients-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";
import {
  architecturalBimUsaAdvantagesItems,
  architecturalBimUsaAdvantagesSection,
  architecturalBimUsaContactDescription,
  architecturalBimUsaEngagementSection,
  architecturalBimUsaFaqSection,
  architecturalBimUsaFaqs,
  architecturalBimUsaIndustriesIntro,
  architecturalBimUsaOurClientsLogos,
  architecturalBimUsaOurClientsSection,
  architecturalBimUsaStatsStrip,
  architecturalBimUsaTestimonials,
  architecturalBimUsaWhyChooseItems,
  architecturalBimUsaWhyChooseSection,
} from "@/constants/architectural-bim-services-usa-content";
import {
  DeferredEngagementModelsSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepWhyChooseSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function ArchitecturalBimServicesUsaPage() {
  return (
    <div className="vbs-redesign-page architectural-bim-services-usa-page mep-bim-services-page">
      <SiteHeader />
      <main>
        <ArchitecturalBimUsaHeroSection />
        <TrustStripSection
          stats={architecturalBimUsaStatsStrip}
          className="vbs-mep-stats-strip abs-usa-trust bg-white"
        />
        <OurClientsSection
          section={architecturalBimUsaOurClientsSection}
          logos={architecturalBimUsaOurClientsLogos}
        />
        <ArchitecturalBimUsaOverviewSection />
        <ClientSuccessStoriesSection
          className="!bg-[#FAFAFA]"
          tag={architecturalBimUsaTestimonials.tag}
          titleLead={architecturalBimUsaTestimonials.titleLead}
          titleAccent={architecturalBimUsaTestimonials.titleAccent}
          description={architecturalBimUsaTestimonials.description}
          stories={architecturalBimUsaTestimonials.stories}
          showViewAll={false}
        />
        <ArchitecturalBimUsaServicesSection />
        <DeferredMepWhyChooseSection
          id="abs-usa-key-advantages"
          className="abs-usa-key-advantages"
          section={architecturalBimUsaAdvantagesSection}
          items={architecturalBimUsaAdvantagesItems}
        />
        <ArchitecturalBimUsaCaseStudiesSection />
        <DeferredMepWhyChooseSection
          id="abs-usa-why-choose"
          className="abs-usa-why-choose"
          section={architecturalBimUsaWhyChooseSection}
          items={architecturalBimUsaWhyChooseItems}
        />
        <DeferredIndustriesSection
          intro={architecturalBimUsaIndustriesIntro.description}
          titleLine1={architecturalBimUsaIndustriesIntro.titleLine1}
          titleLine2={architecturalBimUsaIndustriesIntro.titleLine2}
          titleMaxWidth={architecturalBimUsaIndustriesIntro.titleMaxWidth}
          introMaxWidth={architecturalBimUsaIndustriesIntro.introMaxWidth}
          breakTitle
          className="abs-usa-industries !bg-[#FAFAFA]"
        />
        <DeferredEngagementModelsSection
          tag={architecturalBimUsaEngagementSection.tag}
          titleLine1={architecturalBimUsaEngagementSection.titleLine1}
          titleAccent={architecturalBimUsaEngagementSection.titleAccent}
          description={architecturalBimUsaEngagementSection.description}
        />
        <DeferredFaqSection
          variant="mep"
          tag={architecturalBimUsaFaqSection.tag}
          description={architecturalBimUsaFaqSection.description}
          items={architecturalBimUsaFaqs}
        />
        <DeferredGetInTouchSection
          sectionId="abs-usa-contact"
          description={architecturalBimUsaContactDescription}
          sectionClassName="scroll-mt-24"
        />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
