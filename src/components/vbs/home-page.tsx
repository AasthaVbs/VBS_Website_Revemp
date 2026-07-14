import { SiteHeader } from "@/components/layout/site-header";
import { HomeCapabilitiesSection } from "@/components/sections/home-capabilities-section";
import { HomeHeroSection } from "@/components/sections/home-hero-section";
import {
  bestBenefitsSectionCopy,
  homeFaqDescription,
  homeFaqItems,
  homeResourcesSection,
} from "@/constants/home-content";
import {
  DeferredAboutUsSection,
  DeferredBestBenefitsSection,
  DeferredCertificationSection,
  DeferredClientSuccessStoriesSection,
  DeferredEngagementModelsSection,
  DeferredEvaluateDeliveryCtaSection,
  DeferredFaqSection,
  DeferredGetInTouchSection,
  DeferredIndustriesSection,
  DeferredMepResourcesSection,
  DeferredOurClientsSection,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";
import { getMepResourcesFeedItemsLive } from "@/lib/mep-resources";

export async function VbsHomePage() {
  const resourcesFeed = await getMepResourcesFeedItemsLive();

  return (
    <div className="vbs-home-page vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <HomeHeroSection />
      <HomeCapabilitiesSection />
      <DeferredAboutUsSection />
      <DeferredOurClientsSection />
      <DeferredBestBenefitsSection
        tag={bestBenefitsSectionCopy.tag}
        titleLead={bestBenefitsSectionCopy.titleLead}
        titleAccent={bestBenefitsSectionCopy.titleAccent}
        description={bestBenefitsSectionCopy.description}
        ctaHref="/contact"
      />
      <DeferredEngagementModelsSection sectionClassName="vbs-engagement-models-section--home" />
      <DeferredIndustriesSection />
      <DeferredMepResourcesSection
        section={homeResourcesSection}
        allItems={resourcesFeed}
        sectionClassName="mep-figma-resources vbs-home-resources"
      />
      <DeferredCertificationSection />
      <DeferredClientSuccessStoriesSection />
      <DeferredEvaluateDeliveryCtaSection cardOnMobile ctaHref="/contact" />
      <DeferredFaqSection variant="home" items={homeFaqItems} description={homeFaqDescription} />
      <DeferredGetInTouchSection />
      <DeferredSiteFooter />
    </div>
  );
}
