import { SplitHeroSection } from "@/components/sections/split-hero-section";
import { aboutHeroImages } from "@/constants/about-content";

const aboutHeroCopy = {
  tag: "About us",
  titleLead: "About ",
  titleAccent: "Virtual Building Studio (VBS)",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  mainImageAlt: "Virtual Building Studio team collaboration",
  overlayImageAlt: "BIM building systems visualization",
} as const;

/** Figma node 325:20127 — About page hero */
export function AboutHeroSection() {
  return (
    <SplitHeroSection
      {...aboutHeroCopy}
      images={aboutHeroImages}
      showCta
      ctaLabel="Contact Us"
    />
  );
}
