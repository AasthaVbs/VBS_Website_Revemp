export type IndustryMarqueeItem = {
  src: string;
  title: string;
  alt: string;
};

const industryImg = (file: string) => encodeURI(`/image/${file}`);

export const industriesMarqueeItems: IndustryMarqueeItem[] = [
  {
    src: industryImg("commercial-mixed-use.png"),
    title: "Commercial & Mixed-Use",
    alt: "Aerial view of commercial mixed-use buildings under construction with cranes",
  },
  {
    src: industryImg("Healthcare.png"),
    title: "Healthcare",
    alt: "Healthcare facility building with a large red medical cross on the facade",
  },
  {
    src: industryImg("Educational.png"),
    title: "Educational",
    alt: "Educational campus building with formal lawn, flags, and institutional facade",
  },
  {
    src: industryImg("mission-critical.png"),
    title: "Mission Critical",
    alt: "Mission-critical industrial facility with distillation towers, storage tanks, and piping",
  },
  {
    src: industryImg("hospitality-residential.png"),
    title: "Hospitality & Residential",
    alt: "Modern high-rise hospitality and residential building with glass facade at dusk",
  },
  {
    src: industryImg("industrial-manufacturing.png"),
    title: "Industrial & Manufacturing",
    alt: "Industrial manufacturing facility with storage silos and red-panelled warehouse",
  },
  {
    src: industryImg("civic -government-infrastructure.png"),
    title: "Civic & Government Infrastructure",
    alt: "Neoclassical civic government building with stone columns and American flag",
  },
  {
    src: industryImg("heritage-religious-cultural-spaces.png"),
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
