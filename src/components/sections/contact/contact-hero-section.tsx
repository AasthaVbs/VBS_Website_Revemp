import { SplitHeroSection } from "@/components/sections/split-hero-section";
import { contactHeroCopy, contactHeroImages } from "@/constants/contact-content";

/** Figma node 381:69009 — Contact page hero */
export function ContactHeroSection() {
  const { tag, titleLead, titleAccent, description, mainImageAlt } = contactHeroCopy;

  return (
    <SplitHeroSection
      tag={tag}
      titleLead={titleLead}
      titleAccent={titleAccent}
      description={description}
      images={contactHeroImages}
      mainImageAlt={mainImageAlt}
      sectionClassName="contact-hero-section py-12 md:py-16 lg:py-[100px]"
      rowClassName="vbs-split-hero__row--contact"
      descriptionClassName="w-full max-w-[497px] text-[16px] font-normal leading-6 text-[#808080] max-lg:max-w-none"
    />
  );
}
