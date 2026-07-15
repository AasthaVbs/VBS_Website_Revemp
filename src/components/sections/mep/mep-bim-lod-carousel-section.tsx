"use client";

import {
  StickyHorizontalServicesSection,
  type StickyHorizontalServicesSectionProps,
} from "@/components/sections/sticky-horizontal-services-section";
import { mepBimLodStickyCards, mepBimLodStickySection } from "@/constants/mep-bim-modelling-content";

export type MepBimLodCarouselSectionProps = Partial<
  Pick<
    StickyHorizontalServicesSectionProps,
    "scrollInteraction" | "sectionId" | "className" | "carouselAriaLabel"
  >
> & {
  section?: StickyHorizontalServicesSectionProps["section"];
  cards?: StickyHorizontalServicesSectionProps["cards"];
};

/** LOD carousel — thin wrapper around StickyHorizontalServicesSection. */
export function MepBimLodCarouselSection({
  section = mepBimLodStickySection,
  cards = mepBimLodStickyCards,
  scrollInteraction = "hover",
  sectionId = "services",
  className = "mep-figma-services--lod-carousel",
  carouselAriaLabel = "Level of development offerings",
}: MepBimLodCarouselSectionProps) {
  return (
    <StickyHorizontalServicesSection
      section={section}
      cards={cards}
      scrollInteraction={scrollInteraction}
      sectionId={sectionId}
      className={className}
      carouselAriaLabel={carouselAriaLabel}
      cardVariant="lod"
      showCarouselFades
      titleClassName="mep-section-heading max-w-[1028px]"
      titleLine1ClassName="font-medium"
      titleLine2ClassName="text-accent font-light"
      descriptionClassName="mep-bim-lod-carousel__desc"
    />
  );
}
