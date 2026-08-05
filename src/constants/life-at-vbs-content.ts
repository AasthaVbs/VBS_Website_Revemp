import { ROUTES } from "@/constants/navigation";

/** Static assets in /public/image → served at /image/ */
function lifeAtImage(filename: string) {
  return `/image/${encodeURIComponent(filename)}`;
}

export const lifeAtVbsHeroCopy = {
  tag: "VBS Life",
  titleLead: "Life At ",
  titleAccent: "VBS",
  description:
    "More than just a place to work, VBS is a community where talent thrives, achievements are celebrated, and opportunities are limitless.",
  image: "/image/Life-at-VBS.jpg",
  imageAlt: "Virtual Building Studio team at a company celebration",
} as const;

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
  tag: "Events",
  titleLead: "Events we ",
  titleAccent: "celebrate",
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
        src: lifeAtImage("Cricket-2026.jpg"),
        alt: "VBS Cricket Championship 2026",
        objectPosition: "center",
      },
      {
        src: lifeAtImage("Event-2024.jpg"),
        alt: "VBS company event 2024",
        objectPosition: "center",
        featured: true,
      },
      {
        src: lifeAtImage("Fun-Friday-2026.jpg"),
        alt: "Fun Friday celebration at VBS 2026",
        objectPosition: "center",
      },
    ],
  },
  {
    year: "2025",
    slides: [
      {
        src: lifeAtImage("Navratri-2025.jpg"),
        alt: "Navratri celebration at VBS 2025",
        objectPosition: "center",
      },
      {
        src: lifeAtImage("Team-2025.jpg"),
        title: "Udaipur",
        alt: "VBS team gathering 2025",
        objectPosition: "center",
        featured: true,
      },
      {
        src: lifeAtImage("Event-2025.jpg"),
        alt: "VBS company event 2025",
        objectPosition: "center",
      },
    ],
  },
  {
    year: "2024",
    slides: [
      {
        src: lifeAtImage("Ganesh-Utsav-2024.jpg"),
        alt: "Ganesh Utsav celebration at VBS 2024",
        objectPosition: "center",
      },
      {
        src: lifeAtImage("Year-2024.jpg"),
        title: "Udaipur",
        alt: "VBS year-end team gathering 2024",
        objectPosition: "center",
      },
      {
        src: lifeAtImage("Team-2026.jpg"),
        title: "Udaipur",
        alt: "VBS team gathering 2026",
        objectPosition: "center",
        featured: true,
      },
    ],
  },
  {
    year: "2023",
    slides: [
      {
        src: lifeAtImage("2023-2.png"),
        alt: "VBS festive celebration at the office 2023",
        objectPosition: "center",
      },
      {
        src: lifeAtImage("2023-1.png"),
        alt: "VBS team gift celebration in the office 2023",
        objectPosition: "center",
        featured: true,
      },
      {
        src: lifeAtImage("2023-3.png"),
        alt: "VBS team group photo at a company event 2023",
        objectPosition: "center",
      },
    ],
  },
];
