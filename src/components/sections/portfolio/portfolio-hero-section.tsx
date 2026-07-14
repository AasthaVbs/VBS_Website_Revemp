import caseStudyBannerImg from "@/assets/images/case-study-banner.jpg";
import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { portfolioPageHero } from "@/constants/portfolio-page-content";

/** Figma node 943:16079 — Portfolio hero */
export function PortfolioHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = portfolioPageHero;

  return (
    <ListingPageHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={caseStudyBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[597px]"
      descriptionMaxWidthClass="max-w-[583px]"
    />
  );
}
