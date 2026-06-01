import { SiteHeader } from "@/components/layout/site-header";
import { ClientSuccessStoriesSection } from "@/components/sections/client-success-stories-section";
import { EngagementModelsSection } from "@/components/sections/engagement-models-section";
import { EngagementModelAdvisorCtaSection } from "@/components/sections/engagement-models/engagement-model-advisor-cta-section";
import { EngagementModelFinderSection } from "@/components/sections/engagement-models/engagement-model-finder-section";
import { EngagementModelsCompareSection } from "@/components/sections/engagement-models/engagement-models-compare-section";
import { EngagementStartsSection } from "@/components/sections/engagement-models/engagement-starts-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { engagementPageTestimonialsDescription } from "@/constants/engagement-models-page-content";

export function EngagementModelsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="relative z-0">
        <EngagementModelsSection
          id="engagement"
          sectionClassName="bg-[#FAFAFA] pt-24 lg:pt-[120px]"
        />
        <EngagementModelFinderSection />
        <EngagementModelsCompareSection />
        <EngagementStartsSection />
        <EngagementModelAdvisorCtaSection />
        <ClientSuccessStoriesSection description={engagementPageTestimonialsDescription} />
        <GetInTouchSection />
      </main>

      <SiteFooter />
    </div>
  );
}
