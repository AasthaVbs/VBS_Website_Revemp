import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { testimonialsPageHero } from "@/constants/testimonials-page-content";

const testimonialsBannerImg = "/image/testimonials-banner.png";

/** Figma — Testimonials hero */
export function TestimonialsHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, ctaHref, imageAlt } =
    testimonialsPageHero;

  return (
    <ListingPageHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      image={testimonialsBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[680px]"
      descriptionMaxWidthClass="max-w-[582px]"
    />
  );
}
