import resourceBannerImg from "@/assets/images/resource-banner.jpg";
import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { resourcesPageHero } from "@/constants/resources-page-content";

/** Figma node 337:36551 — Resources hero */
export function ResourcesHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = resourcesPageHero;

  return (
    <ListingPageHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={resourceBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[597px]"
      descriptionMaxWidthClass="max-w-[597px]"
    />
  );
}
