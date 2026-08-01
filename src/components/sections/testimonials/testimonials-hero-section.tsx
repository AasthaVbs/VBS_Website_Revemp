import testimonialsBannerImg from "@/assets/images/testimonials-banner.png";
import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { testimonialsPageHero } from "@/constants/testimonials-page-content";

/** Figma — Testimonials hero */
export function TestimonialsHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = testimonialsPageHero;

  return (
    <ListingPageHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={testimonialsBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[680px]"
      descriptionMaxWidthClass="max-w-[582px]"
    />
  );
}
