import events2023_1 from "@/assets/images/2023-1.png";
import events2023_2 from "@/assets/images/2023-2.png";
import events2023_3 from "@/assets/images/2023-3.png";
import events2024_1 from "@/assets/images/2024-1.png";
import events2024_2 from "@/assets/images/2024-2.png";
import events2024_3 from "@/assets/images/2024-3.png";
import events2025_1 from "@/assets/images/2025-1.png";
import events2025_2 from "@/assets/images/2025-2.png";
import events2025_3 from "@/assets/images/2025-3.png";
import events2026_1 from "@/assets/images/2026-1.png";
import events2026_2 from "@/assets/images/2026-2.png";
import events2026_3 from "@/assets/images/2026-3.png";
import { ROUTES } from "@/constants/navigation";
import type { StatItem } from "@/constants/shared-sections";

/** Static assets in /public/image → served at /image/ */
function lifeAtImage(filename: string) {
  return `/image/${encodeURIComponent(filename)}`;
}

export const lifeAtVbsHeroCopy = {
  tag: "VBS Life",
  titleLead: "Life at ",
  titleAccent: "VBS",
  description:
    "More than just a place to work, VBS is a community where talent thrives, achievements are celebrated, and opportunities are limitless.",
  ctaLabel: "Contact Us Now",
  ctaHref: ROUTES.contact,
  imageAlt: "Virtual Building Studio team at a company celebration",
} as const;

export const lifeAtVbsStatsStrip: StatItem[] = [
  {
    value: "4000+",
    color: "text-vbs-red",
    label: "Concurrent Project Environments",
  },
  {
    value: "500+",
    color: "text-vbs-green",
    label: "Production Professionals Across Delivery Centers",
  },
  {
    value: "11+",
    color: "text-vbs-yellow",
    label: "Years Embedded Inside U.S. AEC Delivery",
  },
  {
    value: "6+",
    color: "text-vbs-blue",
    label: "Disciplines Covered",
  },
];

export const lifeAtVbsWhyWorkCopy = {
  tag: "Why We",
  titleLead: "More Than a ",
  titleAccent: "Workplace",
  description:
    "Discover a workplace where ambition is nurtured, contributions are valued, and every day brings opportunities to learn, innovate, and succeed.",
  ctaLabel: "View Current Openings",
  ctaHref: ROUTES.careers,
} as const;

export const lifeAtVbsEventsCopy = {
  tag: "Events we celebrate",
  titleLead: "Events ",
  titleAccent: "we celebrate",
  description:
    "From career milestones to team celebrations, we create experiences that make work rewarding and enjoyable.",
} as const;

const lifeAtVbsGalleryImages = [
  { file: "Frame 2147227078-1.png", alt: "Ganesh Chaturthi celebration at VBS office" },
  { file: "Frame 2147227078.png", alt: "Diwali celebration with rangoli at VBS" },
  { file: "Frame 2147227079-1.png", alt: "VBS team Christmas celebration selfie" },
  { file: "Frame 2147227079.png", alt: "VBS team at an outdoor sports outing" },
  { file: "Frame 2147227080-1.png", alt: "VBS team dancing at a company event" },
  { file: "Frame 2147227080.png", alt: "VBS team celebrating with a trophy" },
  { file: "Frame 2147227081-1.png", alt: "VBS team at an outdoor evening celebration" },
  { file: "Frame 2147227081.png", alt: "Ganesh Chaturthi group photo at VBS" },
  { file: "Frame 2147227082-1.png", alt: "Christmas decorations at VBS office" },
  { file: "Frame 2147227082.png", alt: "VBS Cricket Championship winners" },
  { file: "Frame 2147227083-1.png", alt: "VBS annual team gathering in banquet hall" },
  { file: "Frame 2147227083.png", alt: "VBS sports team with trophies on turf field" },
  { file: "Frame 2147227084-1.png", alt: "VBS team workshop and training session" },
  { file: "Frame 2147227084.png", alt: "Large VBS team group photo outdoors" },
  { file: "Frame 2147227085-1.png", alt: "VBS team at the AIA conference" },
  { file: "Frame 2147227085.png", alt: "VBS 10th anniversary celebration speech" },
  { file: "Frame 2147227086-1.png", alt: "VBS team culture and celebration moment" },
  { file: "Frame 2147227086.png", alt: "VBS team bonding at a company event" },
  { file: "Frame 2147227087-1.png", alt: "VBS workplace culture celebration" },
  { file: "Frame 2147227087.png", alt: "VBS team at a festive office gathering" },
  { file: "Frame 2147227088-1.png", alt: "VBS team group portrait" },
  { file: "Frame 2147227088.png", alt: "VBS employees at a team event" },
  { file: "Frame 2147227089-1.png", alt: "VBS team celebrating together" },
  { file: "Frame 2147227089.png", alt: "Life at Virtual Building Studio team moment" },
] as const;

const lifeAtVbsGalleryMosaicPattern = [
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "wide" as const },
  { size: "wide" as const },
  { size: "tall" as const },
  { size: "tall" as const },
  { size: "wide" as const },
  { size: "wide" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "square" as const },
  { size: "wide" as const },
  { size: "wide" as const },
  { size: "tall" as const },
  { size: "tall" as const },
  { size: "wide" as const },
  { size: "wide" as const },
];

export type LifeAtVbsGalleryTile = {
  id: string;
  src: string;
  alt: string;
  size: "square" | "wide" | "tall";
  objectPosition?: string;
};

export const lifeAtVbsGalleryTiles: LifeAtVbsGalleryTile[] = lifeAtVbsGalleryMosaicPattern.map(
  (pattern, index) => {
    const image = lifeAtVbsGalleryImages[index % lifeAtVbsGalleryImages.length];
    return {
      id: `life-at-gallery-${index + 1}`,
      src: lifeAtImage(image.file),
      alt: image.alt,
      size: pattern.size,
    };
  },
);

export type LifeAtVbsEventSlide = {
  src: string;
  alt: string;
  objectPosition?: string;
  featured?: boolean;
  title?: string;
};

export type LifeAtVbsEventYear = {
  year: string;
  slides: LifeAtVbsEventSlide[];
};

export const lifeAtVbsEventYears: LifeAtVbsEventYear[] = [
  {
    year: "2026",
    slides: [
      {
        src: events2026_2.src,
        alt: "VBS team celebrating at an outdoor evening event 2026",
        objectPosition: "center",
      },
      {
        src: events2026_1.src,
        alt: "VBS annual team gathering in banquet hall 2026",
        objectPosition: "center",
        featured: true,
      },
      {
        src: events2026_3.src,
        alt: "VBS colleagues celebrating together at a company event 2026",
        objectPosition: "center",
      },
    ],
  },
  {
    year: "2025",
    slides: [
      {
        src: events2025_2.src,
        alt: "VBS team at an outdoor sports outing 2025",
        objectPosition: "center",
      },
      {
        src: events2025_1.src,
        alt: "VBS team group photo outdoors 2025",
        objectPosition: "center",
        featured: true,
      },
      {
        src: events2025_3.src,
        alt: "VBS team celebrating with a trophy 2025",
        objectPosition: "center",
      },
    ],
  },
  {
    year: "2024",
    slides: [
      {
        src: events2024_2.src,
        alt: "VBS team dancing at a company celebration 2024",
        objectPosition: "center",
      },
      {
        src: events2024_1.src,
        alt: "VBS annual team gathering in banquet hall 2024",
        objectPosition: "center",
        featured: true,
      },
      {
        src: events2024_3.src,
        alt: "VBS colleagues at a cricket championship event 2024",
        objectPosition: "center",
      },
    ],
  },
  {
    year: "2023",
    slides: [
      {
        src: events2023_2.src,
        alt: "VBS festive celebration at the office 2023",
        objectPosition: "center",
      },
      {
        src: events2023_1.src,
        alt: "VBS team gift celebration in the office 2023",
        objectPosition: "center",
        featured: true,
      },
      {
        src: events2023_3.src,
        alt: "VBS team group photo at a company event 2023",
        objectPosition: "center",
      },
    ],
  },
];
