import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import {
  engagementModelCards,
  type EngagementModelCard,
} from "@/constants/engagement-models-content";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

const workflowLogo = "/image/architecture-services/workflow-logo.svg";

const renderingBanner = "/image/3d-rendering-services-banner.jpg";
const renderingOverview = "/image/3d-rendering-services-overview.jpg";
const exteriorRenderingImg = "/image/3d-exterior-rendering.jpg";
const interiorRenderingImg = "/image/3d-interior-rendering.jpg";
const architecturalWalkthroughImg = "/image/3d-architectural-walkthrough.jpg";
const vr360PanoramaImg = "/image/vr-and-360-panorama-rendering.jpg";
const aerialSiteContextImg = "/image/aerial-and-site-context-rendering.jpg";
const conceptDesignDevelopmentImg = "/image/concept-and-design-development-rendering.jpg";
const realEstateMarketingImg = "/image/real-estate-marketing-rendering.jpg";
const interiorDesignPresentationImg = "/image/interior-design-presentation-rendering.jpg";

export const THREE_D_RENDERING_CONTACT_HASH = "#3d-rendering-page-contact";

export const threeDRenderingStatsStrip = [
  { value: "400+", color: "text-vbs-red", label: "US-Trained Architects & Engineers" },
  { value: "4000+", color: "text-vbs-green", label: "Projects Delivered" },
  { value: "500+", color: "text-vbs-yellow", label: "Global AEC Clients" },
  { value: "11+", color: "text-vbs-blue", label: "Years of Industry Experience" },
];

export const threeDRenderingHero = {
  tag: "3D Rendering",
  titleLead: "3D Rendering Services for ",
  titleAccent: "Firms Awaiting Design Approvals",
  description:
    "Our US-trained BIM experts use AI-powered workflows to deliver exterior, interior and walkthrough visuals faster, without losing design quality.",
  ctaLabel: "Contact with Us",
  imageSrc: renderingBanner,
  imageAlt: "Photorealistic 3D rendering of a modern house at dusk",
  copyMaxWidth: 670,
  descriptionMaxWidth: 605,
  titleMaxWidth: 567,
};

export const threeDRenderingIntro = {
  tag: "Overview",
  titleLead: "3D Rendering Company Built ",
  titleAccent: "Around Your Design Timeline",
  titleStacked: false,
  titleMaxWidth: 768,
  descriptionMaxWidth: 940,
  description:
    "Architecture firms lose weeks waiting on renders instead of moving projects forward. Our architectural rendering services help your team work faster, coordinate design changes clearly, and hit delivery timelines without adding headcount.",
  sideDescription:
    "Virtual Building Studio is a 3D rendering service provider where BIM experts use AI-assisted workflows to produce renders 30% faster and scale output as project loads grow. Our pre-vetted rendering experts work as an extension of your team, integrating into your workflow. Firms gain capacity, cut rework, coordinate better and stay focused on design.",
  featuresTitle: "Pre-Vetted 3D Rendering Experts Ready to Support Your Firm",
  features: [
    "Full coverage from concept renders to final marketing visuals, all under one team",
    "Renders follow IBC and ADA design standards so drawings and visuals match",
    "Our artists work in 3ds Max, SketchUp, V-Ray, Corona, D5 Render and Enscape",
    "We collaborate through BIM 360, ACC and Navisworks alongside your project team",
    "Every render goes through a QA/QC review before it reaches your inbox",
    "Deliverables include stills, animations, 360 panoramas, VR walkthroughs and print-ready files",
  ],
  mainImage: renderingOverview,
  imageAlt: "3D architectural rendering overview of a modern house",
};

export const threeDRenderingOurClientsSection = {
  tag: "Our Clients",
  titleLead: " Leading AEC Firms",
  titleAccent: "Trusted by",
  titleAccentFirst: true,
  breakTitle: false,
  titleMaxWidth: 528,
  descriptionMaxWidth: 496,
  description:
    "Supporting a wide variety of project types and workflows for architecture, engineering, construction, and reality capture companies. We work with your standards, delivery processes and project requirements to offer you reliable rendering support that grows with your business.",
};

export const threeDRenderingServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Complete Range of ",
  titleLine2: "3D Architectural Rendering Services",
  titleMaxWidth: 783,
  descriptionMaxWidth: 746,
  description:
    "Our 3D architectural rendering services cover every project stage, from concept studies through design development to final marketing visuals. Renders match your current design phase, whether you need one still or a full walkthrough.",
  ctaLabel: "Let's Talk Now",
  ctaHref: THREE_D_RENDERING_CONTACT_HASH,
  wideCards: true,
};

export const threeDRenderingServiceCards = [
  {
    title: "3D Exterior Rendering",
    text: "Our 3D exterior rendering services show your building's facade, materials and site context under daylight, dusk or night lighting. Clients see the finished look early, ask fewer questions, and approve designs faster.",
    image: exteriorRenderingImg,
  },
  {
    title: "3D Interior Rendering",
    text: "Our 3D interior rendering services capture room layouts, finishes, furniture and lighting so clients can picture the space before it exists. Interior designers use these renders to test material and color choices.",
    image: interiorRenderingImg,
  },
  {
    title: "3D Architectural Walkthrough",
    text: "Our 3D architectural walkthrough services turn static floor plans into moving tours through hallways, lobbies and rooms. Buyers and stakeholders understand flow and scale better than they do from flat drawings.",
    image: architecturalWalkthroughImg,
  },
  {
    title: "VR and 360 Panorama Rendering",
    text: "VR and 360 panorama renders let clients look around a room or site from any angle on a phone or headset. This helps remote stakeholders join design reviews without traveling to the site.",
    image: vr360PanoramaImg,
  },
  {
    title: "Aerial and Site Context Rendering",
    text: "Aerial renders place your building within its neighborhood. These renders show roads, landscaping and neighboring structures from above. Planning boards, investors and city reviewers use these views to judge site fit.",
    image: aerialSiteContextImg,
  },
  {
    title: "Concept and Design Development Rendering",
    text: "Concept renders help architects test massing, materials and layout ideas before design development locks in. Design teams use quick renders to compare options, get client buy-in, and pick a direction early.",
    image: conceptDesignDevelopmentImg,
  },
  {
    title: "Real Estate Marketing Rendering",
    text: "Marketing renders give developers and brokers sale-ready images before a single unit is built. These visuals appear in brochures, listing sites and sales galleries, helping teams drive early reservations.",
    image: realEstateMarketingImg,
  },
  {
    title: "Interior Design Presentation Rendering",
    text: "Interior design renders show furniture layouts, finishes and color palettes for client presentations and mood boards. Designers use these visuals to get sign-off before ordering materials or starting construction.",
    image: interiorDesignPresentationImg,
  },
];

export const threeDRenderingAiBimWorkflowSection = {
  tag: "AI + BIM Experts",
  titleParts: [
    {
      text: "AI-Assisted Workflows. ",
      className: "text-section font-medium capitalize text-[#111111]",
    },
    {
      text: "Expert-Led Rendering Delivery.",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Technology should accelerate production, not replace technical expertise. Our AI-assisted workflows automate repetitive modeling tasks, while experienced rendering specialists oversee model development, coordination, quality reviews, and final deliverables to ensure every project meets your standards and project requirements.",
  videoAriaLabel: "Play AI-assisted rendering delivery video",
  posterSrc: renderingBanner,
  titleMaxWidth: 590,
};

export const threeDRenderingWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Leading AEC Firms Trust ",
  titleAccent: "Our 3D Rendering Services",
  description:
    "Virtual Building Studio is an architectural rendering company built on US-trained architects and engineers who understand real project deadlines. Our team works as per your standards, so renders arrive ready for client review.",
  descriptionMaxWidth: 712,
  titleMaxWidth: 675,
  ctaLabel: "Start New Project",
  ctaHref: THREE_D_RENDERING_CONTACT_HASH,
};

export const threeDRenderingWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "US-Trained Rendering Specialists Available When You Need Them",
    description:
      "Use a network of seasoned US-trained Architects to rapidly scale up work demands within 24 hours, helping with project deadlines, workload surges and other production needs without sacrificing quality or continuity of your projects.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "3D Renders Compliant with US Code",
    description:
      "Get coordinated 3D renders that are compliant with US standards and your project requirements, so that architecture, engineering and construction teams can collaborate seamlessly.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "AI-Powered Workflows. Expert-Led Delivery.",
    description:
      "Our rendering experts use AI workflows to speed up repetitive drafting activities such as line extraction and geometry recognition. Every drawing still passes through manual verification, layer validation, dimension checks, and quality reviews before final delivery.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "Flexible Engagement Models that work for you",
    description:
      "Select the engagement model that suits your project needs. Whether you need assistance for a single project, a dedicated architecture team or a long-term delivery partner. Start with a no-risk trial and grow as your project needs change.",
  },
] as const;

export const threeDRenderingWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "3D Rendering Services",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "From CAD or BIM file intake to final delivery, our team follows a fixed review process at every stage. You approve camera angles and material choices before final rendering begins, so no surprises show up late.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const threeDRenderingWorkflowIntegrateSteps = [
  {
    id: "discover",
    color: "#F0B300",
    tint: "rgba(240, 179, 0, 0.10)",
    position: "top-left",
    number: "01. Discover",
    title: "Understanding Your Practice",
    body: "Before production begins, we take time to understand how your team works so we can align with your expectations from day one.",
    tagRows: [
      ["Project Goals", "Workflow", "Standards", "QA/QC", "Communication"],
      ["Technology Stack"],
    ],
  },
  {
    id: "integrate",
    color: "#2299D6",
    tint: "rgba(34, 153, 214, 0.10)",
    position: "top-right",
    number: "02. Integrate",
    title: "Align, Onboard & Start Production",
    body: "We integrate with your team, configure project standards, and begin production as soon as the initial onboarding is complete. From this point forward, delivery and continuous learning happen together.",
    tagRows: [
      ["Team Alignment", "Templates", "File Structure", "Pilot Validation"],
      ["Communication Rhythm", "Production Begins"],
    ],
  },
  {
    id: "deliver",
    color: "#D70416",
    tint: "#FBE6E8",
    position: "bottom-right",
    number: "03. Deliver",
    title: "Reliable Project Delivery",
    body: "With production underway, we focus on delivering consistent, high-quality work while maintaining complete transparency throughout the project.",
    tagRows: [
      [
        { label: "BIM Production", tint: "#FBE6E8" },
        { label: "Documentation", tint: "#FBE6E8" },
        { label: "Coordination", tint: "#FBE6E8" },
        { label: "QA/QC", tint: "#FBE6E8" },
      ],
      [
        { label: "Milestone Reviews", tint: "rgba(215, 4, 22, 0.10)" },
        { label: "Progress Updates", tint: "#FBE6E8" },
      ],
    ],
  },
  {
    id: "improve",
    color: "#42AA32",
    tint: "rgba(66, 170, 50, 0.10)",
    position: "bottom-left",
    number: "04. Improve",
    title: "Growing Stronger Together",
    body: "As we complete projects together, we refine workflows, improve efficiency, and expand support making every project smoother than the last.",
    tagRows: [
      ["Feedback", "Workflow Optimization", "Efficiency", "Scalability"],
      ["Continuous Improvement", "Knowledge Sharing"],
    ],
  },
];

export const threeDRenderingTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "3D Rendering Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const threeDRenderingTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const threeDRenderingTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const threeDRenderingAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "What Changes When Outsourcing ",
  titleLine2: "Architectural 3D Rendering Services to VBS",
  titleParts: [
    {
      text: "What Changes When Outsourcing ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "Architectural 3D Rendering Services to VBS",
      className: "text-section text-accent font-light",
    },
  ],
  titleMaxWidth: 1011,
  descriptionMaxWidth: 948,
  description:
    "Once our pre-vetted architects join your workflow, renders stop being a bottleneck. Your team gets predictable turnaround, fewer revision rounds and more time for design work that actually needs your attention and expertise.",
  note: {
    text: "The result is not only faster renders. It's a stronger, more reliable production process that lets your team grow with more confidence and control.",
  },
  ctaLabel: "Contact Now",
  ctaHref: THREE_D_RENDERING_CONTACT_HASH,
};

export const threeDRenderingAdvantagesCards = [
  {
    title: "Coordinate Renders to Match Design Intent",
    text: "Our renders carry your design intent through every phase, from concept to final marketing visuals. We work as per your standards, workflows and QC process so renders always fulfill your expectations.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Scale Without Hiring",
    text: "Add rendering capacity without the delay, overhead and uncertainty of hiring, onboarding and managing more in-house staff.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Shorten Review Cycles",
    text: "As we work on each project, our team learns more about your style, standards and expectations. This means less explanation of feedback, less revision, more predictability in delivery over time.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Flexible Delivery Ability",
    text: "Whether you need one-off rendering support, a dedicated rendering team or extra capacity during busy times, our engagement models are flexible around your business, not the other way round.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Support for All Phases of Rendering Production",
    text: "Rendering support is available at all stages of a project, including concept studies, design development renders, final marketing visuals and client presentations.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "AI-Powered. Human-Driven.",
    text: "Our specialists use AI to automate repetitive lighting and material setup tasks, but they still handle composition, coordination, quality review and final delivery themselves. We use technology to improve delivery. It doesn't replace expert judgment.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const threeDRenderingEngagementModelsHeader = {
  tag: "Engagement Models",
  titleLine1: "Flexible Engagement Models Built Around",
  titleAccent: "Your Delivery Needs",
  description:
    "We have developed our engagement models such a way that grow with your business. Whether you need project-based support, a dedicated remote team or a fully managed global delivery centre we can support.",
};

export const threeDRenderingEngagementCards = [
  {
    ...engagementModelCards[0],
    ctaHref: THREE_D_RENDERING_CONTACT_HASH,
  },
  {
    ...engagementModelCards[1],
    ctaHref: THREE_D_RENDERING_CONTACT_HASH,
  },
  {
    ...engagementModelCards[2],
    description:
      "A fully managed offshore BIM delivery center exclusively aligned with your business.",
    ctaHref: ROUTES.engagement,
  },
] as unknown as EngagementModelCard[];

export const threeDRenderingProjectCta = {
  titleLine1: "Ready to See Your ",
  titleLine2: "Next Project Before It's Built?",
  description:
    "Connect with our team and get renders that help your firm win approvals faster. Our rendering architects handle exterior, interior and walkthrough visuals, so you present finished designs to clients with more confidence, every time.",
  cta: "Contact Us",
  ctaHref: ROUTES.contact,
};

export const threeDRenderingIndustriesIntro = {
  titleLine1: "3D Rendering Services ",
  titleLine2: "Supporting Diverse AEC Projects",
  titleMaxWidth: 761,
  introMaxWidth: 802,
  description:
    "From commercial buildings to complex infrastructure, our 3D exterior rendering services and interior rendering support architecture, engineering, construction, and reality capture teams with coordinated BIM models tailored to their project requirements, workflows, and delivery standards.",
};

export const threeDRenderingResourcesSection = acsServicePagesResourcesSection;

export const threeDRenderingTestimonialsDescription =
  "Client stories set out how our drafting expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const threeDRenderingFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about 3D rendering services, project requirements, workflows, and deliverables.",
};

export const threeDRenderingFaqs = [
  {
    q: "What are 3D architectural rendering services?",
    a: "3D architectural rendering services turn drawings or BIM models into realistic images, animations and walkthroughs. Clients, investors and planning boards use them to review a project before construction starts.",
  },
  {
    q: "Why choose an architectural rendering company over a freelancer?",
    a: "An architectural rendering company gives you a full team, backup coverage and steady quality. A single freelancer cannot match that capacity during busy production periods.",
  },
  {
    q: "Do you offer 3D interior rendering services for design firms?",
    a: "Yes, our 3D interior rendering services cover furniture layouts, finishes, and lighting studies for interior designers. We also handle exterior, walkthrough and marketing renders for the same project.",
  },
  {
    q: "Can we outsource just one project instead of a long-term contract?",
    a: "Yes. Many firms start by outsourcing architectural 3D rendering services for a single project, then expand into a dedicated monthly team once workload grows.",
  },
  {
    q: "How do you price 3D rendering service provider work?",
    a: "As your 3D rendering service provider, we don't charge per render. Our architectural rendering services run through a dedicated monthly engagement, and your team handles revisions within that scope.",
  },
];

export const threeDRenderingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: threeDRenderingFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const threeDRenderingContactDescription =
  "Tell us about your rendering needs. Our US-trained rendering architects will help you deliver exterior, interior and walkthrough visuals faster so your firm can win design approvals with more confidence.";
