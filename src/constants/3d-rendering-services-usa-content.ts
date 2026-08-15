import alecWhittenImg from "@/assets/images/3d-rendering-services-usa/alec-whitten.png";
import iconDelivery from "@/assets/images/3d-rendering-services-usa/icons/delivery.svg";
import iconExteriors from "@/assets/images/3d-rendering-services-usa/icons/exteriors.svg";
import iconFloorPlans from "@/assets/images/3d-rendering-services-usa/icons/floor-plans.svg";
import iconInteriors from "@/assets/images/3d-rendering-services-usa/icons/interiors.svg";
import iconQuality from "@/assets/images/3d-rendering-services-usa/icons/quality.svg";
import whittenLogoImg from "@/assets/images/3d-rendering-services-usa/whitten-logo.png";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";

export const threeDRenderingUsaHero = {
  tag: "3D Rendering",
  titleLead: "3D Rendering Service for entire Project – ",
  titleAccentLead: "Starting at ",
  titlePriceWas: "$3,200",
  titlePriceNow: "$1,600",
  description:
    "One price covers exteriors, interiors & floor plans – no per-image cost, no surprises.",
  image: "/image/3d-rendering-services-usa/hero-collage.png",
  imageAlt: "3D rendering collage of exterior, interiors, and floor plan",
};

export const threeDRenderingUsaStatsStrip = [
  { value: "200+", label: "Global Clients", color: "text-vbs-red" },
  { value: "1,500+", label: "Rendering Projects Delivered", color: "text-vbs-green" },
  { value: "2 Million+", label: "Sq. Ft. Rendered", color: "text-vbs-blue" },
] as const;

export const threeDRenderingUsaShowcaseSection = {
  tag: "Project Showcase",
  titleLead: "Our Rendering ",
  titleAccent: "Projects",
  description: "Explore interior and exterior renders delivered for leading firms.",
};

export const threeDRenderingUsaShowcaseProjects: {
  title: string;
  category: string;
  image: string;
}[] = [
  { title: "16 Old Smalleytown", category: "Exterior", image: "/image/3d-rendering-services-usa/showcase-16-old-smalleytown.png" },
  { title: "1827 8th Street", category: "Exterior", image: "/image/3d-rendering-services-usa/showcase-1827-8th-street.png" },
  { title: "Event Centre", category: "Interior", image: "/image/3d-rendering-services-usa/showcase-event-centre.png" },
  { title: "Zhongda Residence", category: "Interior", image: "/image/3d-rendering-services-usa/showcase-zhongda-residence.png" },
  { title: "K24", category: "Exterior", image: "/image/3d-rendering-services-usa/showcase-k24.png" },
];

export const threeDRenderingUsaProjectPriceSection = {
  tag: "Project Price",
  titleLead: "What's Included in ",
  titleAccent: "Your Project Price",
};

export const threeDRenderingUsaProjectPriceItems = [
  { title: "3D Floor Plans", icon: iconFloorPlans },
  { title: "Exteriors (Front + Back)", icon: iconExteriors },
  { title: "Interiors (Living, Kitchen, Bedroom, Bathroom)", icon: iconInteriors },
  { title: "Consistent Quality & Style", icon: iconQuality },
  { title: "Fast Delivery & Single Approval Cycle", icon: iconDelivery },
] as const;

export const threeDRenderingUsaPricingSection = {
  titleLead: "Transparent, ",
  titleAccent: "Simple Pricing",
  description: "Provide 3D Model & Get Extra 30% OFF",
  ctaLabel: "Start My project today",
  ctaHref: "#trs-usa-contact",
  tiers: [
    { price: "$1,600", label: "Up to 2000 sq. ft.", note: null },
    { price: "$2,300", label: "Above 2000 sq. ft.", note: "*" },
  ],
};

export const threeDRenderingUsaWhyTrustSection = {
  titleLead: "Why 500+ Architects & ",
  titleAccent: "Builders Trust Us",
  description:
    "Trusted by architects nationwide, we deliver precision, speed, and flexibility that keeps projects moving.",
  ctaLabel: "Start my project today",
  ctaHref: "#trs-usa-contact",
};

export const threeDRenderingUsaWhyTrustItems = [
  {
    title: "Project-based pricing (not per image)",
    description: "One fixed price covers your entire project - no surprises or hidden costs.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Predictable cost & faster turnaround",
    description: "Know your costs upfront and get faster delivery with our streamlined process.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Proven experience with global clients",
    description: "Trusted by 500+ architects and builders worldwide for quality and reliability.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "24x7 support for smooth communication",
    description: "Round-the-clock support ensures your project stays on track.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
] as const;

export const threeDRenderingUsaClientsSay = {
  titleLead: "What Our ",
  titleAccent: "Clients Say ?",
  name: "Alec Whitten",
  role: "Founder of Whitten Architects",
  quote:
    "What I appreciate most is consistency. Every render whether interior or exterior looks polished enough to present to our top clients.",
  avatar: alecWhittenImg,
  logo: whittenLogoImg,
};

export const threeDRenderingUsaContactDescription =
  "Share your project details and get a clear rendering scope with fixed project pricing.";
