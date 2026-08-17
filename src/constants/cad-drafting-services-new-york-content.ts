import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { clientSuccessStories } from "@/constants/client-success-stories-content";
import { locationServiceHref } from "@/constants/locations-content";

const acsBimNewYorkBanner = "/image/acs-bim-new-york-banner.jpg";
const cadDraftingNewYorkOverview = "/image/cad-drafting-new-york-overview.jpg";

export const CAD_NY_CONTACT_ID = "cad-ny-contact";
export const CAD_NY_CONTACT_HASH = `#${CAD_NY_CONTACT_ID}`;

export const cadNyHero = {
  tag: "CAD Drafting Services",
  titleLead: "CAD Drafting ",
  titleAccent: "Services in New York",
  description:
    "Frustrated with design errors, coordination headaches, or last-minute changes? Our CAD drafting experts help architects and engineers in New York get code-compliant, permit-ready drawings.",
  ctaLabel: "Get Your BIM Expert now",
  imageSrc: acsBimNewYorkBanner,
  imageAlt: "New York City skyline at sunset representing CAD drafting services in New York",
  copyMaxWidth: 730,
  descriptionMaxWidth: 616,
  titleMaxWidth: 485,
};

export const cadNyStatsStrip = [
  { value: "1000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "10+", color: "text-vbs-green", label: "Years in Industry" },
  { value: "Local", color: "text-vbs-yellow", label: "Code Expertise" },
  { value: "200+", color: "text-vbs-blue", label: "Vetted Architects" },
];

export const cadNyOverviewSection = {
  tag: "Overview",
  titleLines: [
    { text: "Helping New York Architects and Engineers", accent: false },
    { text: "Get Schematic Design Drafting to Permitting", accent: true },
  ],
  description:
    "At Virtual Building Studio, we know what it's like to juggle tight deadlines, missing documentation, last-minute redline updates, and as-built revisions, all while trying to coordinate multiple teams across a fast-paced New York project. Our US-trained CAD drafters create precise CAD drawings that reflect your design intent, reduce errors, and make collaboration and planning far less stressful. With our on-demand CAD drafting services, you can stay fully compliant with New York building codes, avoid costly delays, and keep projects moving smoothly, without the expense or stress of hiring a full-time local drafter.",
  ctaLabel: "Get your Free trial now",
  ctaHref: CAD_NY_CONTACT_HASH,
  image: cadDraftingNewYorkOverview,
  imageAlt: "3D house model emerging from CAD blueprints and elevation drawings",
  descriptionMaxWidth: 783,
};

export const cadNyNearYouSection = {
  titleLead: "The Best CAD Drafting ",
  titleAccent: "Service Provider Near You",
  titleMaxWidth: 623,
  locations: [
    {
      name: "California",
      href: locationServiceHref("cad-drafting-services", "california"),
    },
    {
      name: "Texas",
      href: locationServiceHref("cad-drafting-services", "texas"),
    },
  ],
};

export const cadNyTestimonials = {
  tag: "Testimonials",
  titleLead: "Client ",
  titleAccent: "Success Stories",
  description:
    "Discover how our clients boosted efficiency and grew their teams fourfold with our proprietary DRM solution.",
  stories: clientSuccessStories,
};

export const cadNyWhyChooseSection = {
  tag: "Why Choose us",
  titleLine1: "Why AEC Firms in New York Choose ",
  titleAccentLead: "",
  titleAccentRest: "Our CAD Drawing Services",
  titleParts: [
    { text: "Why AEC Firms in New York Choose ", className: "mep-figma-why-choose__title-dark" },
    {
      text: "Our CAD Drawing Services",
      className: "mep-figma-why-choose__title-accent",
    },
  ],
  description:
    "Whether it's updating redlines, creating as-built drawings, converting CAD files, or preparing permit-ready plans, we help New York AEC firms stay on track, avoid costly mistakes, and keep projects moving without stress.",
  ctaLabel: "Get BIM Expert support now",
  ctaHref: CAD_NY_CONTACT_HASH,
  titleMaxWidth: 831,
  descriptionMaxWidth: 884,
  gridRows: [3] as [number],
};

export const cadNyWhyChooseItems = [
  {
    title: "We Know New York Codes",
    description:
      "NYC building rules, energy standards, and local regulations can be tricky, and we make sure every drawing is compliant so you can avoid costly surprises and delays.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Hands-On Local Experience",
    description:
      "From Manhattan high-rises to Brooklyn hospitals and industrial sites, we have been helping firms solve the real challenges of New York projects.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Fast, Clear Communication",
    description:
      "We stay connected, answer questions promptly, and work alongside your team like an extension to keep projects on schedule.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const cadNyIndustriesIntro = {
  titleLine1: "Industries ",
  titleLine2: "We Serve in New York",
  description:
    "From high-rise and healthcare facilities to industrial plants, we help New York architectural and engineering firms create accurate, code-compliant, permit-ready CAD drawings that keep every project on time and on budget.",
  titleMaxWidth: 817,
  introMaxWidth: 890,
};

export const cadNyEngagementSection = {
  tag: "Engagement Models",
  titleLine1: "Access the",
  titleAccent: "Top 1% CAD Drafting Experts",
  titleTrail: " in 3 Steps",
  description: "Complete integration and onboarding within 48 hours, not months.",
};

export const cadNyContactDescription =
  "Tell us about your New York CAD drafting scope and timeline — we'll match you with vetted, code-compliant drafters ready to start.";
