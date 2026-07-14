import type { StaticImageData } from "next/image";

import civicGovernmentInfrastructureImg from "@/assets/images/civic-government-infrastructure.png";
import commercialMixedUseImg from "@/assets/images/commercial-mixed-use.png";
import educationalImg from "@/assets/images/educational.png";
import healthcareImg from "@/assets/images/healthcare.png";
import heritageReligiousCulturalSpacesImg from "@/assets/images/heritage-religious-cultural-spaces.png";
import hospitalityResidentialImg from "@/assets/images/hospitality-residential.png";
import industrialManufacturingImg from "@/assets/images/industrial-manufacturing.png";
import missionCriticalImg from "@/assets/images/mission-critical.png";

export type IndustryMarqueeItem = {
  src: StaticImageData;
  title: string;
  alt: string;
};

export const industriesMarqueeItems: IndustryMarqueeItem[] = [
  {
    src: commercialMixedUseImg,
    title: "Commercial & Mixed-Use",
    alt: "Aerial view of commercial mixed-use buildings under construction with cranes",
  },
  {
    src: healthcareImg,
    title: "Healthcare",
    alt: "Healthcare facility building with a large red medical cross on the facade",
  },
  {
    src: educationalImg,
    title: "Educational",
    alt: "Educational campus building with formal lawn, flags, and institutional facade",
  },
  {
    src: missionCriticalImg,
    title: "Mission Critical",
    alt: "Mission-critical industrial facility with distillation towers, storage tanks, and piping",
  },
  {
    src: hospitalityResidentialImg,
    title: "Hospitality & Residential",
    alt: "Modern high-rise hospitality and residential building with glass facade at dusk",
  },
  {
    src: industrialManufacturingImg,
    title: "Industrial & Manufacturing",
    alt: "Industrial manufacturing facility with storage silos and red-panelled warehouse",
  },
  {
    src: civicGovernmentInfrastructureImg,
    title: "Civic & Government Infrastructure",
    alt: "Neoclassical civic government building with stone columns and American flag",
  },
  {
    src: heritageReligiousCulturalSpacesImg,
    title: "Heritage, Religious & Cultural Spaces",
    alt: "Ornate heritage sandstone palace with carved balconies and domes against blue sky",
  },
];

/** Duplicated tail items for seamless marquee loop (matches home page). */
export const industriesMarqueeTrack: IndustryMarqueeItem[] = [
  ...industriesMarqueeItems,
  industriesMarqueeItems[0],
  industriesMarqueeItems[1],
];

export const industriesSectionIntro =
  "Delivering accuracy driven BIM solutions tailored to the unique requirements of every construction sector we serve." as const;
