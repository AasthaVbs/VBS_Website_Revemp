import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { TestimonialsHeroSection } from "@/components/sections/testimonials/testimonials-hero-section";
import {
  DeferredGetInTouchSection,
  DeferredJoinTeamCtaSection,
  DeferredSiteFooter,
  DeferredTestimonialsReviewsSection,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "Testimonials | Virtual Building Studio",
  description:
    "Read client reviews and success stories from architecture and engineering firms working with Virtual Building Studio.",
};

export default function TestimonialsPage() {
  return (
    <div className="vbs-redesign-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <TestimonialsHeroSection />
        <DeferredTestimonialsReviewsSection />
        <DeferredJoinTeamCtaSection />
        <DeferredGetInTouchSection />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
