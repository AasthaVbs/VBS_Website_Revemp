import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { whitepapersPageHero } from "@/constants/whitepapers-page-content";

const whitePaperBannerImg = "/image/white-paper-banner.jpg";

export function WhitepapersHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = whitepapersPageHero;

  return (
    <ListingPageHeroSection
      sectionClassName="resources-listing-hero"
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={whitePaperBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[597px]"
      descriptionMaxWidthClass="max-w-[583px]"
    />
  );
}
