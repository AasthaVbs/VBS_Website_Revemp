"use client";

import { createDeferredSection } from "@/lib/create-deferred-section";

/** Below-fold sections — code-split + viewport-deferred for faster initial page loads. */

export const DeferredAboutUsSection = createDeferredSection(
  () => import("@/components/sections/about-us-section"),
  "AboutUsSection",
  { minHeight: 520 },
);

export const DeferredOurClientsSection = createDeferredSection(
  () => import("@/components/sections/our-clients-section"),
  "OurClientsSection",
  { minHeight: 280 },
);

export const DeferredBestBenefitsSection = createDeferredSection(
  () => import("@/components/sections/best-benefits-section"),
  "BestBenefitsSection",
  { minHeight: 520 },
);

export const DeferredEngagementModelsSection = createDeferredSection(
  () => import("@/components/sections/engagement-models-section"),
  "EngagementModelsSection",
  { minHeight: 640 },
);

export const DeferredIndustriesSection = createDeferredSection(
  () => import("@/components/sections/industries-section"),
  "IndustriesSection",
  { minHeight: 480 },
);

type MepResourcesSectionProps = {
  section?: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    viewAllHref: string;
    serviceFilter?: string;
  };
  filters?: readonly string[];
  allItems?: unknown[];
  serviceFilter?: string;
  badgeStyles?: Record<string, { bg: string; color: string; border: string }>;
  sectionId?: string;
  sectionClassName?: string;
};

export const DeferredMepResourcesSection = createDeferredSection<MepResourcesSectionProps>(
  () =>
    import("@/components/sections/mep/mep-resources-section") as unknown as Promise<
      Record<string, import("react").ComponentType<MepResourcesSectionProps>>
    >,
  "MepResourcesSection",
  { minHeight: 560 },
);

export const DeferredCertificationSection = createDeferredSection(
  () => import("@/components/sections/certification-section"),
  "CertificationSection",
  { minHeight: 320 },
);

export const DeferredCertificationAwardsSection = createDeferredSection(
  () => import("@/components/sections/certification-awards-section"),
  "CertificationAwardsSection",
  { minHeight: 360 },
);

export const DeferredClientSuccessStoriesSection = createDeferredSection(
  () => import("@/components/sections/client-success-stories-section"),
  "ClientSuccessStoriesSection",
  { minHeight: 480 },
);

export const DeferredEvaluateDeliveryCtaSection = createDeferredSection(
  () => import("@/components/sections/evaluate-delivery-cta-section"),
  "EvaluateDeliveryCtaSection",
  { minHeight: 320 },
);

export const DeferredFaqSection = createDeferredSection(
  () => import("@/components/sections/faq-section"),
  "FaqSection",
  { minHeight: 400 },
);

export const DeferredGetInTouchSection = createDeferredSection(
  () => import("@/components/sections/get-in-touch-section"),
  "GetInTouchSection",
  { minHeight: 520 },
);

export const DeferredSiteFooter = createDeferredSection(
  () => import("@/components/sections/site-footer"),
  "SiteFooter",
  { minHeight: 360, rootMargin: "480px 0px" },
);

export const DeferredStickyHorizontalServicesSection = createDeferredSection(
  () => import("@/components/sections/sticky-horizontal-services-section"),
  "StickyHorizontalServicesSection",
  { minHeight: 560 },
);

/** @deprecated Use DeferredStickyHorizontalServicesSection — kept for existing imports. */
export const DeferredMepFullSpectrumServicesSection = createDeferredSection(
  () => import("@/components/sections/mep/figma/mep-full-spectrum-services-section"),
  "MepFullSpectrumServicesSection",
  { minHeight: 560 },
);

export const DeferredMepDisciplinesSection = createDeferredSection(
  () => import("@/components/sections/mep/figma/mep-disciplines-figma-section"),
  "MepDisciplinesSection",
  { minHeight: 520 },
);

export const DeferredMepWorkflowSection = createDeferredSection(
  () => import("@/components/sections/mep/figma/mep-workflow-figma-section"),
  "MepWorkflowSection",
  { minHeight: 480 },
);

export const DeferredMepQualityAssuranceSection = createDeferredSection(
  () => import("@/components/sections/mep/figma/mep-quality-assurance-section"),
  "MepQualityAssuranceSection",
  { minHeight: 520 },
);

export const DeferredMepServiceBenefitsSection = createDeferredSection(
  () => import("@/components/sections/mep/figma/mep-service-benefits-section"),
  "MepServiceBenefitsSection",
  { minHeight: 520 },
);

export const DeferredMepWhyChooseSection = createDeferredSection(
  () => import("@/components/sections/mep/figma/mep-why-choose-figma-section"),
  "MepWhyChooseSection",
  { minHeight: 480 },
);

export const DeferredMepEngagementProcessSection = createDeferredSection(
  () => import("@/components/sections/mep/figma/mep-engagement-process-figma-section"),
  "MepEngagementProcessSection",
  { minHeight: 480 },
);

export const DeferredVisionMissionSection = createDeferredSection(
  () => import("@/components/sections/about/vision-mission-section"),
  "VisionMissionSection",
  { minHeight: 360 },
);

export const DeferredCoreValuesSection = createDeferredSection(
  () => import("@/components/sections/about/core-values-section"),
  "CoreValuesSection",
  { minHeight: 400 },
);

export const DeferredFounderSection = createDeferredSection(
  () => import("@/components/sections/about/founder-section"),
  "FounderSection",
  { minHeight: 520 },
);

export const DeferredJoinTeamCtaSection = createDeferredSection(
  () => import("@/components/sections/join-team-cta-section"),
  "JoinTeamCtaSection",
  { minHeight: 280 },
);

export const DeferredEngagementModelFinderSection = createDeferredSection(
  () => import("@/components/sections/engagement-models/engagement-model-finder-section"),
  "EngagementModelFinderSection",
  { minHeight: 400 },
);

export const DeferredEngagementModelsCompareSection = createDeferredSection(
  () => import("@/components/sections/engagement-models/engagement-models-compare-section"),
  "EngagementModelsCompareSection",
  { minHeight: 480 },
);

export const DeferredEngagementStartsSection = createDeferredSection(
  () => import("@/components/sections/engagement-models/engagement-starts-section"),
  "EngagementStartsSection",
  { minHeight: 360 },
);

export const DeferredEngagementModelAdvisorCtaSection = createDeferredSection(
  () => import("@/components/sections/engagement-models/engagement-model-advisor-cta-section"),
  "EngagementModelAdvisorCtaSection",
  { minHeight: 280 },
);

export const DeferredLeadershipTeamSection = createDeferredSection(
  () => import("@/components/sections/leadership/leadership-team-section"),
  "LeadershipTeamSection",
  { minHeight: 520 },
);

export const DeferredCareersWhyWorkSection = createDeferredSection(
  () => import("@/components/sections/careers/careers-why-work-section"),
  "CareersWhyWorkSection",
  { minHeight: 400 },
);

export const DeferredCareersBenefitsSection = createDeferredSection(
  () => import("@/components/sections/careers/careers-benefits-section"),
  "CareersBenefitsSection",
  { minHeight: 400 },
);

export const DeferredCareersOpeningsSection = createDeferredSection(
  () => import("@/components/sections/careers/careers-openings-section"),
  "CareersOpeningsSection",
  { minHeight: 400 },
);

export const DeferredCareersCareerFormSection = createDeferredSection(
  () => import("@/components/sections/careers/careers-career-form-section"),
  "CareersCareerFormSection",
  { minHeight: 480 },
);

export const DeferredOurLocationsSection = createDeferredSection(
  () => import("@/components/sections/contact/our-locations-section"),
  "OurLocationsSection",
  { minHeight: 320 },
);

export const DeferredContactGetInTouchSection = createDeferredSection(
  () => import("@/components/sections/contact/contact-get-in-touch-section"),
  "ContactGetInTouchSection",
  { minHeight: 520 },
);

export const DeferredMepBimLodCarouselSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-lod-carousel-section"),
  "MepBimLodCarouselSection",
  { minHeight: 400 },
);

export const DeferredMepBimServiceCoverageGridSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-service-coverage-grid-section"),
  "MepBimServiceCoverageGridSection",
  { minHeight: 400 },
);

export const DeferredMepBimTechnologyStackSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-technology-stack-section"),
  "MepBimTechnologyStackSection",
  { minHeight: 360 },
);

export const DeferredMepBimDeliverablesSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-deliverables-section"),
  "MepBimDeliverablesSection",
  { minHeight: 400 },
);

export const DeferredMepBimModellingProcessSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-modelling-process-section"),
  "MepBimModellingProcessSection",
  { minHeight: 480 },
);

export const DeferredMepBimUseCasesSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-use-cases-section"),
  "MepBimUseCasesSection",
  { minHeight: 400 },
);

export const DeferredMepBimMeasurableResultsSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-measurable-results-section"),
  "MepBimMeasurableResultsSection",
  { minHeight: 360 },
);

export const DeferredMepFaqSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-faq-section"),
  "MepFaqSection",
  { minHeight: 400 },
);

export const DeferredMepBimServiceFeaturesSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-service-features-section"),
  "MepBimServiceFeaturesSection",
  { minHeight: 400 },
);

export const DeferredMepBimModellingIntroSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-bim-modelling-intro-section"),
  "MepBimModellingIntroSection",
  { minHeight: 360 },
);

export const DeferredMepTrustedByStripSection = createDeferredSection(
  () => import("@/components/sections/mep/mep-trusted-by-strip-section"),
  "MepTrustedByStripSection",
  { minHeight: 120 },
);

export const DeferredResourcesBrowseSection = createDeferredSection(
  () => import("@/components/sections/resources/resources-browse-section"),
  "ResourcesBrowseSection",
  { minHeight: 560 },
);

export const DeferredTestimonialsReviewsSection = createDeferredSection(
  () => import("@/components/sections/testimonials/testimonials-reviews-section"),
  "TestimonialsReviewsSection",
  { minHeight: 520 },
);

export const DeferredPortfolioProjectsSection = createDeferredSection(
  () => import("@/components/sections/portfolio/portfolio-projects-section"),
  "PortfolioProjectsSection",
  { minHeight: 560 },
);

export const DeferredAllProjectsSection = createDeferredSection(
  () => import("@/components/sections/portfolio/all-projects-section"),
  "AllProjectsSection",
  { minHeight: 560 },
);

export const DeferredBlogsBrowseSection = createDeferredSection(
  () => import("@/components/sections/blogs/blogs-browse-section"),
  "BlogsBrowseSection",
  { minHeight: 560 },
);

export const DeferredCaseStudiesBrowseSection = createDeferredSection(
  () => import("@/components/sections/portfolio/case-studies-browse-section"),
  "CaseStudiesBrowseSection",
  { minHeight: 560 },
);

export const DeferredWebinarBrowseSection = createDeferredSection(
  () => import("@/components/sections/webinar/webinar-browse-section"),
  "WebinarBrowseSection",
  { minHeight: 560 },
);

export const DeferredWhitepapersBrowseSection = createDeferredSection(
  () => import("@/components/sections/whitepapers/whitepapers-browse-section"),
  "WhitepapersBrowseSection",
  { minHeight: 560 },
);

export const DeferredBuildYourTeamImmersive = createDeferredSection(
  () => import("@/components/sections/build-your-team/build-your-team-immersive"),
  "BuildYourTeamImmersive",
  { minHeight: 640 },
);
