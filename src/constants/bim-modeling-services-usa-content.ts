import heroImage from "@/assets/images/bim-modeling-services-usa/hero.png";
import expertiseArchitectural from "@/assets/images/bim-modeling-services-usa/expertise-architectural-bim.png";
import {
  cadDraftingUsaClientLogos,
  cadDraftingUsaClientsSection,
  cadDraftingUsaFaqs,
  cadDraftingUsaTestimonial,
  cadDraftingUsaWhyChooseItems,
} from "@/constants/cad-drafting-services-usa-content";

export const BIM_USA_CONTACT_ID = "bim-modeling-usa-contact";

export const bimModelingUsaHero = {
  titleLead: "BIM Modeling Service By ",
  titleAccent: "BIM Architects & Engineers",
  ctaLabel: "Connect with our BIM Experts",
  ctaHref: `#${BIM_USA_CONTACT_ID}`,
  image: heroImage,
  imageAlt:
    "BIM architect reviewing a 3D structural model on screen in a professional studio",
};

export const bimModelingUsaTestimonial = cadDraftingUsaTestimonial;

export const bimModelingUsaExpertiseSection = {
  titleLead: "Our BIM ",
  titleAccent: "Architect’s Expertise",
};

export const bimModelingUsaExpertiseItems = [
  {
    title: "Architectural BIM Services",
    caption:
      "Our Level I, II, and III architects provide drafting, SD to CD stage documentation, and rendering to ensure project excellence.",
    image: expertiseArchitectural,
  },
  {
    title: "Structural BIM Services",
    caption:
      "Coordinated steel, concrete, and timber models built to US standards—ready for clash review, documentation, and construction handoff.",
    image: "/image/Structural-BIM-Modeling.png",
  },
  {
    title: "MEP/HVAC BIM Modeling",
    caption:
      "Trade-accurate mechanical, electrical, plumbing, and HVAC models that support coordination, clash detection, and constructible deliverables.",
    image: "/image/mep-hvac-bim-modeling-tabs-img.jpg",
  },
];

export const bimModelingUsaClientsSection = cadDraftingUsaClientsSection;
export const bimModelingUsaClientLogos = cadDraftingUsaClientLogos;

export const bimModelingUsaWhyChooseSection = {
  tag: "",
  titleLine1: "Why Architecture ",
  titleAccentLead: "",
  titleAccentRest: "Firms Choose Us",
  titleParts: [
    {
      text: "Why Architecture ",
      className: "mep-figma-why-choose__title-dark",
    },
    {
      text: "Firms Choose Us",
      className: "mep-figma-why-choose__title-accent",
    },
  ],
  description: "",
  ctaLabel: "Book a Meeting",
  ctaHref: `#${BIM_USA_CONTACT_ID}`,
  titleMaxWidth: 1440,
  gridRows: [3, 3] as [number, number],
};

export const bimModelingUsaWhyChooseItems = cadDraftingUsaWhyChooseItems;
export const bimModelingUsaFaqs = cadDraftingUsaFaqs;

export const bimModelingUsaContactDescription =
  "Tell us about your BIM modeling needs. We’ll match you with the right BIM architects and engineers and share next steps.";
