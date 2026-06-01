import { SplitHeroSection } from "@/components/sections/split-hero-section";
import { contactHeroCopy, contactHeroImages } from "@/constants/contact-content";

/** Figma node 381:69009 — Contact page hero */
export function ContactHeroSection() {
  const { tag, titleLead, titleAccent, description, mainImageAlt, overlayImageAlt } =
    contactHeroCopy;

  return (
    <SplitHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      images={contactHeroImages}
      mainImageAlt={mainImageAlt}
      overlayImageAlt={overlayImageAlt}
    />
  );
}
