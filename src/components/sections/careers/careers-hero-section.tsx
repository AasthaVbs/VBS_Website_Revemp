import { SplitHeroSection } from "@/components/sections/split-hero-section";
import {
  careersHeroCopy,
  careersHeroImages,
} from "@/constants/careers-content";

/** Figma node 636:9312 — Careers hero (same layout as About) */
export function CareersHeroSection() {
  return (
    <SplitHeroSection
      tag={careersHeroCopy.tag}
      titleLead={careersHeroCopy.titleLead}
      titleAccent={careersHeroCopy.titleAccent}
      description={careersHeroCopy.description}
      images={careersHeroImages}
      mainImageAlt="Virtual Building Studio careers"
      overlayImageAlt="Team at Virtual Building Studio"
      showCta
      ctaLabel={careersHeroCopy.ctaLabel}
      ctaHref={careersHeroCopy.ctaHref}
    />
  );
}
