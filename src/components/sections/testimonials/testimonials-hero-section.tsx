import { SplitHeroSection } from "@/components/sections/split-hero-section";
import { testimonialsPageHero } from "@/constants/testimonials-page-content";

/** Figma 948:29895 — same hero imagery as About Us */
export function TestimonialsHeroSection() {
  const {
    tag,
    titleLead,
    titleAccent,
    description,
    ctaLabel,
    images,
    mainImageAlt,
    overlayImageAlt,
  } = testimonialsPageHero;

  return (
    <SplitHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      images={images}
      mainImageAlt={mainImageAlt}
      overlayImageAlt={overlayImageAlt}
      showCta
      ctaLabel={ctaLabel}
      ctaHref="/contact"
    />
  );
}
