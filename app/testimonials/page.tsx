import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { JoinTeamCtaSection } from "@/components/sections/join-team-cta-section";
import { TestimonialsHeroSection } from "@/components/sections/testimonials/testimonials-hero-section";
import { TestimonialsReviewsSection } from "@/components/sections/testimonials/testimonials-reviews-section";
import { SiteFooter } from "@/components/sections/site-footer";

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
        <TestimonialsReviewsSection />
        <JoinTeamCtaSection />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
