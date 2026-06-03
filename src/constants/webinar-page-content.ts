import {
  figmaBlogListingItems,
  type ResourceListingItem,
  type ResourceService,
} from "@/constants/resources-page-content";

export const webinarPageHero = {
  tag: "Webinar",
  titleLead: "Webinars ",
  titleAccent: "Virtual Building Studio (VBS) Resource",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  ctaLabel: "Contact Us",
  image: "/images/figma/resource-3.png",
  imageAlt: "Virtual Building Studio webinars",
} as const;

export const webinarsBrowseIntro = {
  tag: "Webinars",
  titleLead: "Webinars ",
  titleAccent: "Virtual Building Studio (VBS) Resource",
  description: webinarPageHero.description,
} as const;

export const webinarTypeFilters = ["On Demand", "Upcoming"] as const;

export type WebinarDelivery = (typeof webinarTypeFilters)[number];

export type WebinarListingItem = ResourceListingItem & {
  delivery: WebinarDelivery;
};

/** Figma 405:74005 — webinar grid (mirrors blog cards, Webinar badge) */
export const figmaWebinarListingItems: WebinarListingItem[] = figmaBlogListingItems.map(
  (item, index) => ({
    ...item,
    type: "Webinar" as const,
    badgeLabel: "Webinar",
    delivery: (index < 4 ? "On Demand" : "Upcoming") as WebinarDelivery,
    service: item.service as ResourceService,
  }),
);
