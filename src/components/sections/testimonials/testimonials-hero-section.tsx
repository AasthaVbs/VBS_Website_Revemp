import testimonialsBannerImg from "@/assets/images/testimonials-banner.jpg";
import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { testimonialsPageHero } from "@/constants/testimonials-page-content";

/** Figma 948:29895 — Testimonials hero */
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
      titleMaxWidthClass="max-w-[497px]"
      descriptionMaxWidthClass="max-w-[497px]"
    />
  );
}
