import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { newsPageHero } from "@/constants/news-page-content";

import "@/styles/vbs-listing-hero-spacing.scss";
import "@/styles/vbs-news-listing.scss";

/** News listing hero — Figma listing layout with News & Updates banner. */
export function NewsHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, ctaHref, image, imageAlt } =
    newsPageHero;

  return (
    <ListingPageHeroSection
      sectionClassName="news-hero-section"
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      ctaHref={ctaHref}
      image={image}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[492px]"
      descriptionMaxWidthClass="max-w-[561px]"
    />
  );
}
