import blogBannerImg from "@/assets/images/blog-banner.jpg";
import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { blogsPageHero } from "@/constants/blogs-page-content";

/** Figma node 405:73045 — Blogs hero */
export function BlogsHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = blogsPageHero;

  return (
    <ListingPageHeroSection
      sectionClassName="blogs-hero-section"
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={blogBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[497px]"
      descriptionMaxWidthClass="max-w-[568px]"
    />
  );
}
