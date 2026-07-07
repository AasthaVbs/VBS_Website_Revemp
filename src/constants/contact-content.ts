import { aboutHeroImages } from "@/constants/about-content";

/** Figma 381:69009 — same imagery as About hero */
export const contactHeroImages = aboutHeroImages;

export const contactHeroCopy = {
  tag: "Contact Us",
  titleLead: "Contact ",
  titleAccent: "Virtual Building Studio (VBS)",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale.",
  mainImageAlt: "Virtual Building Studio team collaboration",
  overlayImageAlt: "BIM building systems visualization",
} as const;

export const contactGetInTouchDescription =
  "Let's discuss your requirements and see how our expertise can help on your next project.";

export const contactGetInTouchDetails = {
  phone: "+1 (409) 800-6601",
  phoneHref: "tel:+14098006601",
  email: "contact@virtualbuildingstudio.com",
  emailHref: "mailto:contact@virtualbuildingstudio.com",
  addressLine1: "1004, 5605 N MacArthur Blvd #1000",
  addressLine2: "Irving, TX 75038, USA",
} as const;

export const ourLocationsSectionCopy = {
  tag: "Name Tag",
  titleLead: "Our",
  titleAccent: " Locations",
} as const;

export type OfficeLocation = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  mapImage: string;
  mapImageOffsetY: string;
  mapsUrl: string;
  mapLabel: string;
  showCardBorder?: boolean;
};

export const officeLocations: OfficeLocation[] = [
  {
    id: "new-jersey",
    name: "New Jersey",
    address: "111 Montross Ave Apartment E, Rutherford, NJ 07070, United States",
    phone: "+1 (409) 800-6601",
    email: "contact@virtualbuildingstudio.com",
    mapImage: "/images/contact/map-new-jersey.png",
    mapImageOffsetY: "-22.57%",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=111+Montross+Ave+Apartment+E,+Rutherford,+NJ+07070,+USA",
    mapLabel: "111 Montross Ave apartment e, Rutherford, NJ 07070, USA",
    showCardBorder: true,
  },
  {
    id: "texas",
    name: "Texas",
    address: "1004, 5605 N MacArthur Blvd #1000, Irving, TX 75038, United States",
    phone: "+1 (409) 800-6601",
    email: "contact@virtualbuildingstudio.com",
    mapImage: "/images/contact/map-texas.png",
    mapImageOffsetY: "-28.25%",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=5605+N+MacArthur+Blvd+%231000,+Irving,+TX+75038,+USA",
    mapLabel: "5605 N MacArthur Blvd, Irving, TX 75038, USA",
    showCardBorder: false,
  },
];
