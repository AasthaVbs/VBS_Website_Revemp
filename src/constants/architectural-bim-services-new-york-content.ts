import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { clientSuccessStories } from "@/constants/client-success-stories-content";
import { locationServiceHref } from "@/constants/locations-content";

const acsBimNewYorkBanner = "/image/acs-bim-new-york-banner.jpg";
const acsBimOverview = "/image/acs-bim-overview.jpg";

export const ACS_NY_CONTACT_ID = "acs-ny-contact";
export const ACS_NY_CONTACT_HASH = `#${ACS_NY_CONTACT_ID}`;

export const acsNyHero = {
  tag: "Architectural BIM",
  titleLead: "Architectural BIM ",
  titleAccent: "Services in New York",
  description:
    "Fix staffing shortages, rework, or deadline issues with our US-trained licensed architects who help you deliver accurate, clash-free, code-compliant BIM models.",
  ctaLabel: "Contact us Now",
  imageSrc: acsBimNewYorkBanner,
  imageAlt: "New York City skyline at sunset representing Architectural BIM services in New York",
  copyMaxWidth: 730,
  descriptionMaxWidth: 573,
  titleMaxWidth: 549,
};

export const acsNyStatsStrip = [
  { value: "1000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "10+", color: "text-vbs-green", label: "Years in Industry" },
  { value: "Local", color: "text-vbs-yellow", label: "Code Expertise" },
  { value: "200+", color: "text-vbs-blue", label: "Vetted Architects" },
];

export const acsNyOverviewSection = {
  tag: "Overview",
  titleLines: [
    { text: "Providing the Best", accent: false },
    { text: "Architectural BIM Services to", accent: false },
    { text: "the Firms in New York", accent: true },
  ],
  description:
    "At Virtual Building Studio, we help architecture firms in New York address staffing shortages, meet tight project deadlines, and prevent costly rework due to evolving codes by connecting to the top 1% of BIM architects. We provide immediate, on-demand access to licensed architects who use BIM software like Revit, Navisworks, Archicad, Trimble Connect, Tekla Structure, etc., to produce accurate, clash-free, code-compliant BIM Models that help you get the project back on schedule.",
  ctaLabel: "Get your Free trial now",
  ctaHref: ACS_NY_CONTACT_HASH,
  image: acsBimOverview,
  imageAlt: "Architectural BIM model of a multi-story commercial building",
};

export const acsNyNearYouSection = {
  titleLead: "The Best Architectural BIM Service ",
  titleAccent: "Provider Near You",
  titleMaxWidth: 623,
  locations: [
    {
      name: "California",
      href: locationServiceHref("architectural-bim-services", "california"),
    },
    {
      name: "Texas",
      href: locationServiceHref("architectural-bim-services", "texas"),
    },
  ],
};

export const acsNyTestimonials = {
  tag: "Testimonials",
  titleLead: "Client ",
  titleAccent: "Success Stories",
  description:
    "Discover how our clients boosted efficiency and grew their teams fourfold with our proprietary DRM solution.",
  stories: clientSuccessStories,
};

export const acsNyWhyChooseSection = {
  tag: "Why Choose us",
  titleLine1: "Why Firms in New York Choose ",
  titleAccentLead: "",
  titleAccentRest: "Our Architectural BIM Services",
  titleParts: [
    { text: "Why Firms in New York Choose ", className: "mep-figma-why-choose__title-dark" },
    {
      text: "Our Architectural BIM Services",
      className: "mep-figma-why-choose__title-accent",
    },
  ],
  description:
    "We help NY-based architectural firms tackle challenges like tight deadlines, staffing gaps, or escalating costs with on-demand, customized BIM support.",
  ctaLabel: "Get BIM Expert support now",
  ctaHref: ACS_NY_CONTACT_HASH,
  titleMaxWidth: 680,
  descriptionMaxWidth: 1020,
  gridRows: [3] as [number],
};

export const acsNyWhyChooseItems = [
  {
    title: "We Know New York Codes Inside Out",
    description:
      "From NYC building codes to local zoning and compliance requirements, our team ensures constructible BIM models.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "We Have Worked on New York Projects",
    description:
      "From Manhattan high-rises to Brooklyn mixed-use developments, we bring hands-on local experience to every architectural project.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Quick to Respond, Easy to Work With",
    description: "Our team stays connected, communicates clearly, and works like an extension of yours.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const acsNyIndustriesIntro = {
  titleLine1: "Industries We Serve with ",
  titleLine2: "Architectural BIM Expertise",
  description:
    "Supporting New York Architects Across Commercial, Residential, and Institutional Projects with Accurate, Code-Compliant BIM Solutions.",
  titleMaxWidth: 817,
  introMaxWidth: 678,
};

export const acsNyEngagementSection = {
  tag: "Engagement Models",
  titleLine1: "Perfect Fit Solutions for ",
  titleAccent: "Every Architectural BIM Project",
  description:
    "Whether you need a single Architect or a full-scale architectural team, our flexible resource models adapt seamlessly to your project scope, timeline, and technical requirements.",
};

export const acsNyContactDescription =
  "Tell us about your New York Architectural BIM scope and timeline — we'll match you with vetted, code-compliant architects ready to start.";
