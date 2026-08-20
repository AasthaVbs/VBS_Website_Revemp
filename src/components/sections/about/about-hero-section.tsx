import { SplitHeroSection } from "@/components/sections/split-hero-section";
import { aboutHeroImages } from "@/constants/about-content";
import { ROUTES } from "@/constants/navigation";

const aboutHeroCopy = {
  tag: "About us",
  titleLead: "About ",
  titleAccent: "Virtual Building Studio (VBS)",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  mainImageAlt: "Virtual Building Studio team collaboration",
} as const;

/** Figma node 325:20127 — About page hero */
export function AboutHeroSection() {
  return (
    <SplitHeroSection
      {...aboutHeroCopy}
      images={aboutHeroImages}
      showCta
      ctaLabel="Contact Us"
      ctaHref={ROUTES.contact}
      sectionClassName="about-hero-section pt-10 md:pt-16 lg:pt-[100px]"
    />
  );
}
