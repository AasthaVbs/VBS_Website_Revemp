import { SplitHeroSection } from "@/components/sections/split-hero-section";
import {
  careersHeroCopy,
  careersHeroImages,
} from "@/constants/careers-content";

/** Figma node 636:9312 — Careers hero */
export function CareersHeroSection() {
  return (
    <SplitHeroSection
      tag={careersHeroCopy.tag}
      titleLead={careersHeroCopy.titleLead}
      titleAccent={careersHeroCopy.titleAccent}
      description={careersHeroCopy.description}
      images={careersHeroImages}
      mainImageAlt="Virtual Building Studio careers"
      showCta
      ctaLabel={careersHeroCopy.ctaLabel}
      ctaHref={careersHeroCopy.ctaHref}
      sectionClassName="about-hero-section careers-hero-section vbs-careers-hero py-0 md:py-0 lg:py-0"
    />
  );
}
