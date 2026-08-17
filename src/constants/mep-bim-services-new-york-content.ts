import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { clientSuccessStories } from "@/constants/client-success-stories-content";
import { locationServiceHref } from "@/constants/locations-content";

const mepBimNewYorkBanner = "/image/mep-bim-new-york-banner.jpg";
const mepBimNewYorkOverview = "/image/mep-bim-new-york-overview.jpg";

export const MEP_NY_CONTACT_ID = "mep-ny-contact";
export const MEP_NY_CONTACT_HASH = `#${MEP_NY_CONTACT_ID}`;

export const mepNyHero = {
  tag: "MEP BIM Services",
  titleLead: "MEP BIM ",
  titleAccent: "Services in New York",
  description:
    "Our expert MEP BIM modelers create precise models, prevent clashes, and help you cut rework, beat the delays, and keep your NYC projects running smoothly.",
  ctaLabel: "Get Your BIM Expert now",
  imageSrc: mepBimNewYorkBanner,
  imageAlt: "New York City skyline at sunset representing MEP BIM services in New York",
  copyMaxWidth: 730,
  descriptionMaxWidth: 616,
  titleMaxWidth: 560,
};

export const mepNyStatsStrip = [
  { value: "1000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "10+", color: "text-vbs-green", label: "Years in Industry" },
  { value: "Local", color: "text-vbs-yellow", label: "Code Expertise" },
  { value: "200+", color: "text-vbs-blue", label: "Vetted Architects" },
];

export const mepNyOverviewSection = {
  tag: "Overview",
  titleLines: [
    { text: "Providing the Best BIM Services to", accent: false },
    { text: "MEP Engineers & Contractors in New York", accent: true },
  ],
  description:
    "At Virtual Building Studio, we know what it's like to juggle tight schedules, changing NYC codes, and high expectations of clients. That's why our US-trained MEP BIM experts step in as an extension of your team, building accurate, clash-free, and code-compliant models using BIM software like Revit, Navisworks, Trimble SysQue, etc. With our dedicated BIM modelers on your side, you can cut rework, hit deadlines, and keep your projects running smoothly, without the budget stress.",
  ctaLabel: "Get your Free trial now",
  ctaHref: MEP_NY_CONTACT_HASH,
  image: mepBimNewYorkOverview,
  imageAlt: "MEP BIM coordination model for a New York building project",
  descriptionMaxWidth: 783,
};

export const mepNyNearYouSection = {
  titleLead: "The Best MEP BIM ",
  titleAccent: "Service Provider Near You",
  titleMaxWidth: 623,
  locations: [
    {
      name: "California",
      href: locationServiceHref("mep-bim-services", "california"),
    },
    {
      name: "Texas",
      href: locationServiceHref("mep-bim-services", "texas"),
    },
  ],
};

export const mepNyTestimonials = {
  tag: "Testimonials",
  titleLead: "Client ",
  titleAccent: "Success Stories",
  description:
    "Discover how our clients boosted efficiency and grew their teams fourfold with our proprietary DRM solution.",
  stories: clientSuccessStories,
};

export const mepNyWhyChooseSection = {
  tag: "Why Choose us",
  titleLine1: "Why Firms in New York Choose ",
  titleAccentLead: "",
  titleAccentRest: "Our BIM Services for MEP",
  titleParts: [
    { text: "Why Firms in New York Choose ", className: "mep-figma-why-choose__title-dark" },
    {
      text: "Our BIM Services for MEP",
      className: "mep-figma-why-choose__title-accent",
    },
  ],
  description:
    "We help MEP engineers and contractors across New York to simplify coordination, cut costly rework, and keep projects moving, even during tight deadlines.",
  ctaLabel: "Get BIM Expert support now",
  ctaHref: MEP_NY_CONTACT_HASH,
  titleMaxWidth: 760,
  descriptionMaxWidth: 650,
  gridRows: [3] as [number],
};

export const mepNyWhyChooseItems = [
  {
    title: "We Know NYC Codes & Requirements",
    description:
      "From local building codes to energy mandates and zoning regulations, our expert MEP modelers ensure your compliant MEP systems.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "We Worked Across New York",
    description:
      "From Manhattan high-rises to Brooklyn renovations and industrial facilities in the state, we address the city's MEP challenges with tailored solutions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Quick to Respond, Easy to Work With",
    description:
      "Our MEP team stays connected, communicates clearly, and works like an extension of yours.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const mepNyIndustriesIntro = {
  titleLine1: "Industries ",
  titleLine2: "We Serve in New York",
  description:
    "Supporting MEP Firms in New York with code-compliant, detailed BIM modeling services for their diverse project needs, like new construction, retrofit, or renovation.",
  titleMaxWidth: 817,
  introMaxWidth: 678,
};

export const mepNyEngagementSection = {
  tag: "Engagement Models",
  titleLine1: "Perfect Fit Solutions for ",
  titleAccent: "Every MEP BIM Project",
  description:
    "Whether you need a single MEP Engineer or a full-scale MEP team, our flexible resource models adapt seamlessly to your project scope, timeline, and technical requirements.",
};

export const mepNyContactDescription =
  "Tell us about your New York MEP BIM scope and timeline — we'll match you with vetted, code-compliant MEP modelers ready to start.";
