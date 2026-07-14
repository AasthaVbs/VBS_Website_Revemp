import webinarBannerImg from "@/assets/images/webinar-banner.jpg";
import { ListingPageHeroSection } from "@/components/sections/listing-page-hero-section";
import { webinarPageHero } from "@/constants/webinar-page-content";

/** Figma node 405:73954 — Webinars hero */
export function WebinarHeroSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, imageAlt } = webinarPageHero;

  return (
    <ListingPageHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      ctaLabel={ctaLabel}
      image={webinarBannerImg}
      imageAlt={imageAlt}
      titleMaxWidthClass="max-w-[566px]"
      descriptionMaxWidthClass="max-w-[583px]"
    />
  );
}
