import contactUsBanner from "@/assets/images/contact-us-banner.jpg";

export const contactHeroImages = {
  main: contactUsBanner.src,
} as const;

export const contactHeroCopy = {
  tag: "Lets Connect",
  titleLead: "Contact ",
  titleAccent: "Virtual Building Studio (VBS)",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale.",
  mainImageAlt: "Virtual Building Studio reception area",
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
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1004,+5605+N+MacArthur+Blvd+%231000,+Irving,+TX+75038,+USA",
} as const;

export const ourLocationsSectionCopy = {
  tag: "We Available Here",
  titleLead: "Our",
  titleAccent: " Locations",
  description: "We have offices and teams all around the world.",
} as const;

export type OfficeLocation = {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  mapImage?: string;
  mapEmbedUrl?: string;
  mapImageOffsetY?: string;
  mapsUrl: string;
  mapLabel?: string;
  flagIcon?: string;
};

export const officeLocations: OfficeLocation[] = [
  {
    id: "texas",
    name: "Texas",
    addressLine1: "1004, 5605 N MacArthur Blvd #1000, Irving, TX 75038,",
    addressLine2: "United States",
    mapImage: "/images/contact/map-texas.png",
    mapImageOffsetY: "-28.25%",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=5605+N+MacArthur+Blvd+%231000,+Irving,+TX+75038,+USA",
    flagIcon: "/icons/circle-flags_us.svg",
  },
  {
    id: "new-jersey",
    name: "New Jersey",
    addressLine1: "111 Montross Ave Apartment E, Rutherford, NJ 07070,",
    addressLine2: "United States",
    mapImage: "/images/contact/map-new-jersey.png",
    mapImageOffsetY: "-22.57%",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=111+Montross+Ave+Apartment+E,+Rutherford,+NJ+07070,+USA",
    mapLabel: "111 Montross Ave apartment e, Rutherford, NJ 07070, USA",
    flagIcon: "/icons/circle-flags_us.svg",
  },
  {
    id: "india",
    name: "India",
    addressLine1: "Siddhi Vinayak Towers, B 603-604, S G Highway,",
    addressLine2: "Makarba, Ahmedabad, Gujarat 380051",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Siddhi+Vinayak+Towers,+B+603-604,+SG+Highway,+Makarba,+Ahmedabad,+Gujarat+380051&z=15&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Siddhi+Vinayak+Towers,+SG+Highway,+Makarba,+Ahmedabad,+Gujarat+380051",
    flagIcon: "india",
  },
];
