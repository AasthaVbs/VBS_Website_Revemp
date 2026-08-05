export const contactHeroImages = {
  main: "/image/Contact%20Virtual%20Building%20Studio.jpg",
} as const;

export const contactHeroCopy = {
  tag: "Contact Us",
  titleLead: "Contact ",
  titleAccent: "Virtual Building Studio (VBS)",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale.",
  mainImageAlt:
    "Professional architect holding blueprints and a hard hat, reviewing a 3D architectural building model",
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
  tag: "We're Available Here",
  titleLead: "Our",
  titleAccent: " Locations",
} as const;

export type OfficeLocation = {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  phone: string;
  email: string;
  mapEmbedUrl: string;
  mapsUrl: string;
};

export const officeLocations: OfficeLocation[] = [
  {
    id: "texas",
    name: "Texas",
    addressLine1: "1004, 5605 N MacArthur Blvd #1000",
    addressLine2: "Irving, TX 75038, USA",
    phone: "+1 (409) 800-6601",
    email: "contact@virtualbuildingstudio.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.643850754084!2d-96.97086732536843!3d32.88114132037475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e8326d59d6049%3A0xa7431dd56e5fc45b!2sVirtual%20Building%20Studio%20Inc.!5e0!3m2!1sen!2sin!4v1770034127098!5m2!1sen!2sin",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1004,+5605+N+MacArthur+Blvd+%231000,+Irving,+TX+75038,+USA",
  },
  {
    id: "new-jersey",
    name: "New Jersey",
    addressLine1: "111 Montross Ave Apartment E,",
    addressLine2: "Rutherford, NJ 07070, USA",
    phone: "+1 (409) 800-6601",
    email: "contact@virtualbuildingstudio.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.7085175213524!2d-74.11380432287548!3d40.83436566686787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f92b9e5c222d%3A0xc4d7a53a2d988f72!2sVirtual%20Building%20Studio%20Inc.!5e0!3m2!1sen!2sin!4v1770034019938!5m2!1sen!2sin",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=111+Montross+Ave+Apartment+E,+Rutherford,+NJ+07070,+USA",
  },
];
