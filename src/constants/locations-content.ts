import { ROUTES } from "@/constants/navigation";

const locationBanner = "/image/location-banner.jpg";

export const LOCATIONS_CONTACT_ID = "locations-page-contact";
export const LOCATIONS_CONTACT_HASH = `#${LOCATIONS_CONTACT_ID}`;

export const locationServiceHref = (serviceSlug: string, locationSlug: string) =>
  `${ROUTES.locations}/${serviceSlug}-${locationSlug}`;

const LOCATION_SERVICES = [
  { label: "Architectural BIM Services", slug: "architectural-bim-services" },
  { label: "MEP BIM Services", slug: "mep-bim-services" },
  { label: "Architectural Drafting Services", slug: "architectural-drafting-services" },
  { label: "CAD Drafting Services", slug: "cad-drafting-services" },
] as const;

export const locationsHero = {
  tag: "Location",
  titleLead: "Still Losing Sleep Over",
  titleAccent: "Drawings and Deadlines?",
  description:
    "Balancing design, coordination, and documentation isn't that easy. Our dedicated CAD and BIM experts take care of your SD to CD, 2D to BIM with accuracy, so you can breathe easier and focus on creating great designs.",
  ctaLabel: "Contact us Now",
  imageSrc: locationBanner,
  imageAlt: "3D map of the United States showing Virtual Building Studio locations",
  copyMaxWidth: 635,
  descriptionMaxWidth: 635,
  titleMaxWidth: 620,
};

export const locationsStatsStrip = [
  { value: "1000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "100+", color: "text-vbs-green", label: "AEC Firms Trust Us" },
  { value: "10+", color: "text-vbs-yellow", label: "Years in Industry" },
  { value: "200+", color: "text-vbs-blue", label: "Vetted Experts" },
];

export const locationsNearYouSection = {
  titleLead: "Locate Our CAD Drafting and BIM ",
  titleAccent: "Services Near You",
  titleMaxWidth: 680,
  descriptionMaxWidth: 730,
  description:
    "Wherever you are, our dedicated architects and engineers are ready to support your projects with code-compliant CAD drawings, data-rich BIM models, and dependable communication.",
  cards: [
    {
      name: "New York",
      slug: "new-york",
    },
    {
      name: "California",
      slug: "california",
    },
    {
      name: "Texas",
      slug: "texas",
    },
  ].map((card) => ({
    ...card,
    services: LOCATION_SERVICES.map((service) => ({
      label: service.label,
      href: locationServiceHref(service.slug, card.slug),
    })),
  })),
};

export const locationsContactDescription =
  "Tell us where you need support. We'll match you with dedicated CAD and BIM experts for your next project.";
