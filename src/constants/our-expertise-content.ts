import { clientSuccessStories } from "@/constants/client-success-stories-content";
import {
  engagementModelCards,
  type EngagementModelCard,
} from "@/constants/engagement-models-content";
import { ROUTES } from "@/constants/navigation";

export const OUR_EXPERTISE_CONTACT_ID = "our-expertise-contact";
export const OUR_EXPERTISE_CONTACT_HASH = `#${OUR_EXPERTISE_CONTACT_ID}`;
export const OUR_EXPERTISE_CAPABILITIES_ID = "our-expertise-capabilities";

export const ourExpertiseHero = {
  titleLead: "You name it",
  titleAccent: "We cover them all.",
  description: "Expertise of Top 1% Architects & Engineers",
  ctaLabel: "What you're looking for?",
  ctaHref: `#${OUR_EXPERTISE_CAPABILITIES_ID}`,
  image: "/image/our-expertise-banner-image.jpg",
  imageAlt: "Top 1% architects and engineers collaborating across architecture, engineering, and survey work",
  breakTitle: true,
  titleMaxWidth: 620,
  descriptionMaxWidth: 635,
};

export const ourExpertiseCapabilitiesSection = {
  titleLead: "Unlock the Capabilities of ",
  titleAccent: "Top 1% Architects and Engineers",
};

export const ourExpertiseCapabilityCards = [
  {
    title: "Architecture & Structure",
    description:
      "From schematic design to construction documentation, we help AEC firms, architects, structural engineers, and contractors deliver precise, code-compliant BIM models faster.",
    image: "/image/architecture-structure.png",
    href: ROUTES.architectureServices,
  },
  {
    title: "Engineering & Construction",
    description:
      "From pre-bid estimation to clash-free coordination and as-built models we help contractors and AEC firms deliver projects faster and more efficiently.",
    image: "/image/engineering-construction.jpg",
    href: ROUTES.mepServices,
  },
  {
    title: "Reality Capture & Survey",
    description:
      "We convert point cloud data into construction-ready scan-to-BIM models in Revit for renovation, coordination, and facility management, be it heritage restoration or complex MEP retrofits.",
    image: "/image/reality-capture-survey.png",
    href: ROUTES.scanToBimServices,
  },
] as const;

export const ourExpertiseExpertsSection = {
  titleLead: "Find the ",
  titleAccent: "Top 1% of Experts",
  ctaLabel: "get the top 1% experts in 3 days",
  ctaHref: OUR_EXPERTISE_CONTACT_HASH,
};

export const ourExpertiseExpertRoles = [
  {
    label: "Architectural Staff",
    panelTitle: "Architectural Staff - Level I, II, III",
    skills: [
      "Schematic Design (SD)",
      "Construction Documentation (CD)",
      "Space Planning",
      "3D Rendering (Interior & Exterior)",
      "BOQ and Material Take-Off",
      "Design Development (DD)",
      "Drafting",
      "Interior Drawings",
      "AR/VR",
      "Clash Detection & Coordination",
    ],
  },
  {
    label: "Mechanical Design Engineers",
    panelTitle: "Mechanical Design Engineers - Level I, II, III",
    skills: [
      "HVAC Load Calculations",
      "Ductwork Modeling",
      "Equipment Schedules",
      "Hydronic & Steam Piping",
      "Mechanical BIM (LOD 300–400)",
      "Mechanical Shop Drawings",
      "Energy Modeling Support",
      "Revit Family Creation",
      "Code-Compliant HVAC Design",
      "Clash Detection & Coordination",
    ],
  },
  {
    label: "Electrical Design Engineers",
    panelTitle: "Electrical Design Engineers - Level I, II, III",
    skills: [
      "Power Distribution",
      "Lighting Design",
      "Low-Voltage Systems",
      "Panel Schedules",
      "Electrical BIM Modeling",
      "Conduit & Cable Tray",
      "Fire Alarm Coordination",
      "Lighting Calculations",
      "Electrical Shop Drawings",
      "Clash Detection & Coordination",
    ],
  },
  {
    label: "Plumbing Engineers",
    panelTitle: "Plumbing Engineers - Level I, II, III",
    skills: [
      "Domestic Water Systems",
      "Sanitary / Waste / Vent",
      "Storm Drainage",
      "Fixture Schedules",
      "Plumbing BIM Modeling",
      "Pipe Sizing",
      "Medical Gas (as applicable)",
      "Plumbing Shop Drawings",
      "Code-Compliant Plumbing Design",
      "Clash Detection & Coordination",
    ],
  },
  {
    label: "Fire Protection Design Engineers",
    panelTitle: "Fire Protection Design Engineers - Level I, II, III",
    skills: [
      "Sprinkler System Design",
      "Fire Pump Layout",
      "Hydraulic Calculations",
      "Standpipe Systems",
      "Fire Protection BIM",
      "NFPA Code Analysis",
      "Equipment Schedules",
      "Fire Protection Shop Drawings",
      "MEP Coordination",
      "Clash Detection & Coordination",
    ],
  },
  {
    label: "Civil (Structural) Engineers",
    panelTitle: "Civil (Structural) Engineers - Level I, II, III",
    skills: [
      "Structural BIM Modeling",
      "Foundation Design Support",
      "Steel & Concrete Detailing",
      "Connection Details",
      "Rebar Modeling",
      "Structural Analysis Coordination",
      "Shop Drawing Support",
      "Load Path Documentation",
      "Construction Documentation",
      "Clash Detection (Structure vs MEP)",
    ],
  },
] as const;

export const ourExpertiseTestimonial = {
  titleLead: "Hear from Our Customer ",
  titleAccent: "Who Has Tried our Solution",
  description: clientSuccessStories[1]?.quote ?? "",
  ctaLabel: "Book a Meeting",
  image: clientSuccessStories[1]?.thumbnail ?? "/image/lexent-desing-youtube-2.jpg",
  imageAlt: clientSuccessStories[1]?.thumbnailAlt ?? "Client video testimonial for Virtual Building Studio",
  youtubeVideoId: clientSuccessStories[1]?.youtubeVideoId ?? "uyaBPQrNhW0",
  breakTitle: true,
};

export const ourExpertiseEngagementModelsHeader = {
  tag: "",
  titleLine1: "Flexible Engagement Model",
  titleAccent: "that works for you.",
  description:
    "Through a rigorous process, we select the top 1% of architects and engineers. From over 1 lacs annual applications, candidates undergo online tests, HR interviews, written tests, and technical interviews, ensuring only the best join our team.",
};

export const ourExpertiseEngagementCards = [
  {
    ...engagementModelCards[0],
    ctaHref: OUR_EXPERTISE_CONTACT_HASH,
    shadow: true,
  },
  engagementModelCards[1],
  {
    ...engagementModelCards[2],
    description:
      "A fully managed offshore BIM delivery center exclusively aligned with your business.",
    shadow: true,
  },
] as unknown as EngagementModelCard[];

export const ourExpertiseToolsSection = {
  titleLead: "Our Top 1% Architects and Engineers are Proficient in ",
  titleAccent: "the Leading A&E Tools",
};

export const ourExpertiseToolCategories = [
  {
    title: "BIM Modeling & Documentation",
    canvas: "/image/arch-drafting-lp/tools-bim.png",
    canvasAlt:
      "Autodesk Forma, Autodesk Revit, Rhino, and AutoCAD for BIM modeling and documentation",
    row: 1,
  },
  {
    title: "Visualization",
    canvas: "/image/arch-drafting-lp/tools-visualization.png",
    canvasAlt: "Lumion, Enscape, Twinmotion, and D5 Render for visualization",
    row: 1,
  },
  {
    title: "Design & Presentation",
    canvas: "/image/arch-drafting-lp/tools-design.png",
    canvasAlt: "SketchUp and Adobe Photoshop for design and presentation",
    row: 2,
  },
  {
    title: "Coordination",
    canvas: "/image/arch-drafting-lp/tools-coordination.png",
    canvasAlt: "Navisworks for coordination",
    row: 2,
  },
  {
    title: "Documentation & Collaboration",
    canvas: "/image/arch-drafting-lp/tools-documentation.png",
    canvasAlt:
      "Bluebeam, Microsoft Office Suite, and Autodesk Docs for documentation and collaboration",
    row: 2,
  },
] as const;

export const ourExpertiseFaqs = [
  {
    q: "Do you provide on-site talent?",
    a: "Yes, we do offer on-site talent, although the pricing may vary. Rest assured, our on-site services are designed to optimize both cost savings and efficiency.",
  },
  {
    q: "Why should we trust your service?",
    a: "We pair firms with the top 1% of US-trained architects and engineers, selected through a rigorous process from over 100,000 annual applications. Delivery is backed by 11+ years of AEC experience, 4,000+ projects, and a one-month risk-free trial.",
  },
  {
    q: "What sets your service apart from other providers?",
    a: "You work with dedicated, US-trained talent who follow your standards, templates, and timezone—not a rotating project queue. AI-assisted BIM workflows and flexible engagement models let you add capacity without losing quality or control.",
  },
  {
    q: "What distinguishes Dedicated Resource Model (DRM) from outsourcing?",
    a: "DRM embeds dedicated architects and engineers as an extension of your internal team, with a fixed monthly cost, consistent communication, and people who learn your workflow. Traditional outsourcing typically assigns rotating resources per project without that continuity.",
  },
  {
    q: "Will hiring through your service increase costs?",
    a: "Most firms reduce overhead compared with hiring full-time local staff. You gain production capacity without long-term employment costs, and you can scale up or down as project demand changes.",
  },
  {
    q: "Is there a money-back guarantee available?",
    a: "Yes. Start with our one-month risk-free trial. If you’re not satisfied, you get a full refund—no long-term commitment required.",
  },
  {
    q: "What if the talent doesn't pass the interview process?",
    a: "We present additional pre-vetted candidates at no extra cost until you approve the right fit. You only move forward with talent that meets your interview and quality bar.",
  },
  {
    q: "What if the talent isn't available during US-time hours?",
    a: "Our architects and engineers are vetted to match your time zone needs, ensuring seamless support even if specific resources aren’t available during US hours.",
  },
  {
    q: "What happens if the talent doesn't meet the project's expectations?",
    a: "We monitor quality closely and will replace a resource promptly if expectations aren’t met—backed by our risk-free trial so you can evaluate fit with confidence.",
  },
];

export const ourExpertiseContactDescription =
  "Tell us what expertise you need. We’ll match you with top 1% architects and engineers and share next steps within 3 days.";
