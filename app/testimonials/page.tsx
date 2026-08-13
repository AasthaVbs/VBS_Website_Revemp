import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { TestimonialsHeroSection } from "@/components/sections/testimonials/testimonials-hero-section";
import { testimonialsJoinTeamCta } from "@/constants/testimonials-page-content";
import {
  DeferredGetInTouchSection,
  DeferredJoinTeamCtaSection,
  DeferredSiteFooter,
  DeferredTestimonialsReviewsSection,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "Review and Testimonial for our Global Clients – VBS",
  description:
    "Read client reviews and success stories from architecture and engineering firms working with Virtual Building Studio (VBS).",
};

export default function TestimonialsPage() {
  const { titleLine1, titleAccent, description, ctaLabel, ctaHref } = testimonialsJoinTeamCta;

  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <TestimonialsHeroSection />
        <DeferredTestimonialsReviewsSection />
        <DeferredJoinTeamCtaSection
          titleLine1={titleLine1}
          titleAccent={titleAccent}
          description={description}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          accentAsLight
        />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
