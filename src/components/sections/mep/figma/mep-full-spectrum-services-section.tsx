"use client";

import {
  StickyHorizontalServicesSection,
  type StickyHorizontalServicesSectionProps,
} from "@/components/sections/sticky-horizontal-services-section";
import {
  mepFullSpectrumCards,
  mepFullSpectrumSection,
} from "@/constants/mep-engineers-content";

export type MepFullSpectrumServicesSectionProps = Partial<
  Pick<StickyHorizontalServicesSectionProps, "scrollInteraction" | "sectionId" | "className">
> & {
  section?: StickyHorizontalServicesSectionProps["section"];
  cards?: StickyHorizontalServicesSectionProps["cards"];
};

/**
 * MEP Full-Spectrum Services — thin wrapper around StickyHorizontalServicesSection.
 * Pass `section` and `cards` for dynamic content; defaults to MEP BIM services data.
 */
export function MepFullSpectrumServicesSection({
  section = mepFullSpectrumSection,
  cards = mepFullSpectrumCards,
  scrollInteraction = "hover",
  sectionId = "services",
  className,
}: MepFullSpectrumServicesSectionProps) {
  return (
    <StickyHorizontalServicesSection
      section={section}
      cards={cards}
      scrollInteraction={scrollInteraction}
      sectionId={sectionId}
      className={className}
    />
  );
}
