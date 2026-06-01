export const industriesMarqueeItems = [
  { img: "industry-1.png", title: "Commercial & Mixed-Use" },
  { img: "industry-2.png", title: "Healthcare" },
  { img: "industry-3.png", title: "Educational" },
  { img: "industry-4.png", title: "Mission Critical" },
  { img: "industry-5.png", title: "Hospitality & Residential" },
  { img: "industry-6.png", title: "Industrial & Manufacturing" },
  { img: "industry-7.png", title: "Civic & Government Infrastructure" },
  { img: "industry-8.png", title: "Heritage, Religious & Cultural Spaces" },
] as const;

/** Duplicated tail items for seamless marquee loop (matches home page). */
export const industriesMarqueeTrack = [
  ...industriesMarqueeItems,
  { img: "industry-1.png" as const, title: "Commercial & Mixed-Use" },
  { img: "industry-2.png" as const, title: "Healthcare" },
] as const;

export const industriesSectionIntro =
  "Delivering accuracy driven BIM solutions tailored to the unique requirements of every construction sector we serve." as const;
