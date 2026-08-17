import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { portfolioPageHero } from "@/constants/portfolio-page-content";

const caseStudyBannerImg = "/image/case-study-banner.jpg";

/** Case Study listing hero — same pattern as /blog (ListingPageHeroSection). */
export function PortfolioHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = portfolioPageHero;

  return (
    <ListingPageHeroSection
      sectionClassName="portfolio-hero-section resources-listing-hero"
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={caseStudyBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[497px]"
      descriptionMaxWidthClass="max-w-[460px]"
    />
  );
}
