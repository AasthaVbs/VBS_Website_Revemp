import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { bimResourcesPageHero } from "@/constants/bim-resources-content";

import "@/styles/vbs-listing-hero-spacing.scss";

const resourceBannerImg = "/image/resource-banner.jpg";

/** Figma node 1983:22623 — BIM Resources hub hero */
export function BimResourcesHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = bimResourcesPageHero;

  return (
    <ListingPageHeroSection
      sectionClassName="bim-resources-hero-section"
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={resourceBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[634px]"
      descriptionMaxWidthClass="max-w-[634px]"
    />
  );
}
