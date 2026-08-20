import { SiteHeader } from "@/components/layout/site-header";
import { EngagementModelsSection } from "@/components/sections/engagement-models-section";
import {
  ENGAGEMENT_MODELS_PAGE_CONTACT_ID,
  engagementModelsPageCards,
  engagementPageTestimonialsDescription,
} from "@/constants/engagement-models-page-content";
import {
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelAdvisorCtaSection,
  DeferredEngagementModelFinderSection,
  DeferredEngagementModelsCompareSection,
  DeferredEngagementStartsSection,
  DeferredGetInTouchSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export function EngagementModelsPage() {
  return (
    <div className="vbs-redesign-page engagement-model-page relative min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="relative z-0">
        <EngagementModelsSection
          id="engagement"
          sectionClassName="bg-[#FAFAFA]"
          cards={engagementModelsPageCards}
        />
        <DeferredEngagementModelFinderSection />
        <DeferredEngagementModelsCompareSection />
        <DeferredEngagementStartsSection />
        <DeferredEngagementModelAdvisorCtaSection />
        <DeferredClientSuccessStoriesSection description={engagementPageTestimonialsDescription} />
        <DeferredGetInTouchSection sectionId={ENGAGEMENT_MODELS_PAGE_CONTACT_ID} />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
