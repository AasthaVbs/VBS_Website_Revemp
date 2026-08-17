import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { clientSuccessStories } from "@/constants/client-success-stories-content";

const clientGlabeTaylor = "/image/cad-drafting-services-usa/client-glabe-taylor.png";
const clientGp = "/image/cad-drafting-services-usa/client-gp.png";
const clientLexent = "/image/cad-drafting-services-usa/client-lexent.png";
const clientRenz = "/image/cad-drafting-services-usa/client-renz.png";
const clientDownload3 = "/image/cad-drafting-services-usa/client-download-3.png";
const clientDownload5 = "/image/cad-drafting-services-usa/client-download-5.png";
const clientWhitten = "/image/cad-drafting-services-usa/client-whitten.png";

export const CAD_USA_CONTACT_ID = "cad-usa-contact";

export const cadDraftingUsaHero = {
  titleLead: "On-Demand CAD Drafting Service By ",
  titleAccent: "Remote Architect Level I, II & III",
  ctaLabel: "Connect with our CAD Experts",
  ctaHref: `#${CAD_USA_CONTACT_ID}`,
  image: "/image/cad-drafting-services-usa/hero.png",
  imageAlt: "Remote CAD drafting experts collaborating on architectural drawings",
};

export const cadDraftingUsaTestimonial = {
  titleLead: "Hear from Whitten Architects ",
  titleAccent: "Alec Whitten’s Experience",
  description:
    "From absorbing full production workloads to building a true right-hand partner. A Los Angeles architecture firm streamlined production with one dedicated resource—cutting delivery time by 75% and improving operational efficiency.",
  ctaLabel: "Book a Meeting",
  image: "/image/cad-drafting-services-usa/testimonial-card.png",
  imageAlt: "Alec Whitten testimonial for Virtual Building Studio",
  youtubeVideoId: clientSuccessStories[0]?.youtubeVideoId ?? "2NsLtpdtMto",
};

export const cadDraftingUsaExpertiseSection = {
  titleLead: "Our CAD ",
  titleAccent: "Expertise",
};

export const cadDraftingUsaExpertiseItems = [
  {
    title: "AutoCAD Drafting",
    caption:
      "Professional-grade AutoCAD drafting is provided by Top 1% CAD experts, ensuring compliance with US standards and high-quality results.",
    image: "/image/cad-drafting-services-usa/expertise-autocad.png",
  },
  {
    title: "3D and 2D Drawings",
    caption:
      "Clean 2D plans, sections, and coordinated 3D drawings across every project phase—from concept through construction documentation.",
    image: "/image/2D AutoCAD drawing.jpg",
  },
  {
    title: "CAD Elevation Drawings",
    caption:
      "Detailed elevation sets that communicate facade intent clearly, aligned with your templates, layers, and documentation standards.",
    image: "/image/cad-elevation-drawings-tabs-img.jpg",
  },
  {
    title: "Bulk Drawing Conversion & 2D Drafting",
    caption:
      "Convert PDFs, scans, and legacy drawings into editable CAD files at scale while preserving layers, dimensions, and title blocks.",
    image: "/image/bulk-drawing-conversion-2d-drafting-tabs-img.jpg",
  },
  {
    title: "Red Line Markup Services",
    caption:
      "Careful redline and markup incorporation with consistent annotation standards so project intent stays clear through every revision.",
    image: "/image/auto-cad-drafting-tabs-img.jpg",
  },
];

export const cadDraftingUsaClientsSection = {
  titleLead: "Our Trusted ",
  titleAccent: "Architecture Clients",
};

export const cadDraftingUsaClientLogos = [
  { name: "Glabe + Taylor Architecture", src: clientGlabeTaylor },
  { name: "GP Architecture", src: clientGp },
  { name: "Lexent Design", src: clientLexent },
  { name: "Renz Collaborative", src: clientRenz },
  { name: "Architecture Client", src: clientDownload3 },
  { name: "Architecture Partner", src: clientDownload5 },
  { name: "Whitten Architects", src: clientWhitten },
];

export const cadDraftingUsaWhyChooseSection = {
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
  ctaHref: `#${CAD_USA_CONTACT_ID}`,
  titleMaxWidth: 1440,
  gridRows: [3, 3] as [number, number],
};

export const cadDraftingUsaWhyChooseItems = [
  {
    title: "Top 1% US-Trained Talent",
    description: "Work with highly skilled professionals trained in the US.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "US Construction Codes Knowledge",
    description: "Experts well-versed in US building regulations.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "One-Month Risk-Free Trial",
    description: "Experience our services with no upfront risk.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "No Long-Term Commitments",
    description: "Flexible engagement tailored to your needs.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Access to a Vast Talent Pool",
    description: "Find the right expertise for every project.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Cultural Compatibility",
    description: "Seamless collaboration with architects who understand your workflow.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const cadDraftingUsaFaqs = [
  {
    q: "What if the Architect isn't available during US-time hours?",
    a: "Our architects are vetted to match your time zone needs, ensuring seamless support even if specific resources aren’t available during US hours.",
  },
  {
    q: "Can you quickly provide architects with diverse skill sets?",
    a: "Yes. We maintain a deep bench of US-trained architects and CAD specialists across software, project types, and documentation standards so you can scale the right skill mix quickly.",
  },
  {
    q: "What if an architect doesn’t meet project expectations?",
    a: "We monitor quality closely and will replace a resource promptly if expectations aren’t met—backed by our risk-free trial so you can evaluate fit with confidence.",
  },
  {
    q: "What if an architect leaves after a few months?",
    a: "We provide continuity planning and rapid replacement from our talent pool so project momentum isn’t disrupted if a resource transitions.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes. Start with our one-month risk-free trial. If you’re not satisfied, you get a full refund—no long-term commitment required.",
  },
  {
    q: "How can I discontinue the service with an architect if no longer needed?",
    a: "Engagements are flexible. You can scale down or discontinue with short notice—no long-term contracts locking you in.",
  },
];

export const cadDraftingUsaContactDescription =
  "Tell us about your CAD drafting needs. We’ll match you with the right remote architect level and share next steps.";
