import heroImage from "@/assets/images/cad-to-bim-conversion-services/hero.png";
import expertiseCadToBim from "@/assets/images/cad-to-bim-conversion-services/expertise-cad-to-bim.png";
import {
  cadDraftingUsaClientLogos,
  cadDraftingUsaClientsSection,
  cadDraftingUsaFaqs,
  cadDraftingUsaTestimonial,
  cadDraftingUsaWhyChooseItems,
} from "@/constants/cad-drafting-services-usa-content";

export const CAD_TO_BIM_CONTACT_ID = "cad-to-bim-conversion-contact";

export const cadToBimConversionHero = {
  titleLead: "CAD to BIM Conversion Service By ",
  titleAccent: "BIM Architects",
  ctaLabel: "Connect with our BIM Experts",
  ctaHref: `#${CAD_TO_BIM_CONTACT_ID}`,
  image: heroImage,
  imageAlt: "CAD to BIM conversion — 2D drawings transformed into 3D BIM models",
};

export const cadToBimConversionTestimonial = cadDraftingUsaTestimonial;

export const cadToBimConversionExpertiseSection = {
  titleLead: "Our CAD to ",
  titleAccent: "BIM Expertise",
};

export const cadToBimConversionExpertiseItems = [
  {
    title: "CAD to BIM Conversion",
    caption:
      "We convert 2D or 3D CAD data into detailed, accurate BIM models using Revit or AutoCAD to enhance project efficiency.",
    image: expertiseCadToBim,
  },
  {
    title: "PDF to BIM Conversion",
    caption:
      "Transform PDF drawings into intelligent Revit models with accurate geometry, layers, and project data ready for coordination.",
    image: "/image/cad-to-bim-conversion-tabs-img.jpg",
  },
  {
    title: "BIM Coordination",
    caption:
      "Federate multi-discipline models and resolve routing conflicts early so teams can issue coordinated sets with fewer RFIs.",
    image: "/image/cad-to-bim-banner.png",
  },
  {
    title: "Clash Detection",
    caption:
      "Run systematic hard and soft clash reviews across architecture, structure, and MEP to catch conflicts before construction.",
    image: "/image/CAD-to-BIM-Conversion.png",
  },
  {
    title: "BIM Lifecycle Modeling",
    caption:
      "Build models that support design, construction, and facilities handoff with data structured for the full project lifecycle.",
    image: "/image/cad-to-bim-servies.jpg",
  },
  {
    title: "BIM Object Tagging & Labeling",
    caption:
      "Apply consistent object tagging and labeling standards so quantities, schedules, and asset data stay reliable across deliverables.",
    image: "/image/cad-to-bim-conversion-services.png",
  },
];

export const cadToBimConversionClientsSection = cadDraftingUsaClientsSection;
export const cadToBimConversionClientLogos = cadDraftingUsaClientLogos;

export const cadToBimConversionWhyChooseSection = {
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
  ctaHref: `#${CAD_TO_BIM_CONTACT_ID}`,
  titleMaxWidth: 1440,
  gridRows: [3, 3] as [number, number],
};

export const cadToBimConversionWhyChooseItems = cadDraftingUsaWhyChooseItems;
export const cadToBimConversionFaqs = cadDraftingUsaFaqs;

export const cadToBimConversionContactDescription =
  "Tell us about your CAD to BIM conversion needs. We’ll match you with the right BIM architects and share next steps.";
