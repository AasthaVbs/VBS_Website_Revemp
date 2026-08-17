import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import type { MepBimTechnologyTool } from "@/constants/mep-bim-modelling-content";
import {
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
} from "@/constants/mep-bim-modelling-content";
import { ROUTES } from "@/constants/navigation";
import { acsServicePagesResourcesSection } from "@/constants/shared-sections";

const flexibleEngagementModelsIcon = "/image/flexible-engagement-models.png";
const iconEngageDedicated = "/image/architecture-services/icon-engage-dedicated.svg";
const iconEngageStrategic = "/image/architecture-services/icon-engage-strategic.svg";
const workflowLogo = "/image/architecture-services/workflow-logo.svg";

export const structuralBimStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const structuralBimHero = {
  tag: "Structural BIM",
  titleLead: "Structural BIM Services for AEC Teams Fighting ",
  titleAccent: "Against Project Deadlines",
  description:
    "Our BIM specialists merge Revit structural modeling with AI-driven workflows for quicker, code-compliant models.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/structural-bim-banner.jpg",
  imageAlt: "Structural BIM Services",
  copyMaxWidth: 670,
  descriptionMaxWidth: 557,
};

export const structuralBimIntro = {
  tag: "Overview",
  titleLead: "Structural Modeling Services Company Built for ",
  titleAccent: "Faster, Coordinated Delivery",
  titleStacked: false,
  titleMaxWidth: 911,
  description:
    "Helping engineering firms increase productivity and model quality, while maintaining delivery schedules, without increasing headcount.",
  sideDescription:
    "Virtual Building Studio is one of the top Structural BIM Services providers that combine the expertise of BIM specialists with AI-supported workflows. Companies get more capacity, remove rework from clash-prone models, better coordination across teams and remain focused on core design work.",
  featuresTitle: "Pre-Vetted Structural BIM Modelers to Support Your Firm",
  features: [
    "End-to-end structural BIM support from concept models to fabrication ready drawings",
    "All deliverables shall comply with AISC, ACI and IBC standards",
    "Our BIM Structural Modeling capabilities include Revit Structural, Tekla and Navisworks platforms.",
    "Collaborate with your team in BIM 360, ACC and shared cloud models",
    "QA and QC checks at each LOD milestone before handover",
    "Deliverables will consist of coordinated models, shop drawings, rebar schedules, and quantity takeoffs",
  ],
  mainImage: "/image/structural-bim-overview.jpg",
  imageAlt: "Structural BIM overview",
};

export const structuralBimOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const structuralBimServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Structural BIM Modeling Services",
  description:
    "Our Structural 3D Modeling Services cover projects from early concept models through fabrication drawings. Coverage extends through every phase up to construction delivery.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#structural-bim-page-contact",
  wideCards: true,
};

export const structuralBimServiceCards = [
  {
    title: "Structural 3D Modeling",
    text: "Our structural BIM modeling team builds coordinated 3D models covering steel, concrete, and foundation systems. BIM structural modeling gives firms clash-checked, construction-ready models at any LOD stage.",
    image: "/image/structural-3d-modeling.jpg",
  },
  {
    title: "Structural Steel Detailing",
    text: "Our detailers model steel connections, beams and columns down to fabrication-level detail. Revit structural modeling supports bolted and welded connections that shop teams can build from directly.",
    image: "/image/structural-steel-detailing.jpg",
  },
  {
    title: "Rebar Detailing & Bar Bending Schedule",
    text: "Our rebar detailers produce reinforcement layouts, splice details and bar bending schedules for slabs, beams and columns. Every schedule follows ACI 318 for cutting and placement on site.",
    image: "/image/rebar-detailing-bar-bending-schedule.jpg",
  },
  {
    title: "Structural Fabrication Shop Drawings",
    text: "Our team generates shop-ready drawings straight from the coordinated model for fabricators and erectors. Connection details, bolt lists and piece marks stay consistent across every sheet.",
    image: "/image/structural-fabrication-shop-drawings.jpg",
  },
  {
    title: "Precast Concrete Modeling & Detailing",
    text: "Our modelers build precast panels, beams and connections with embed and lifting details included. Erection drawings and piece schedules ship ready for plant production and site sequencing.",
    image: "/image/precast-concrete-modeling-detailing.jpg",
  },
  {
    title: "Reinforced Concrete Modeling",
    text: "Our engineers model cast-in-place walls, slabs, columns and foundations with full rebar coordination built in. Our team catches formwork clashes early, before pours start on site.",
    image: "/image/reinforced-concrete-modeling.jpg",
  },
  {
    title: "4D BIM Planning & Scheduling",
    text: "Our planners link construction sequences to the structural model so teams can see the build order early. Our team catches scheduling conflicts well before the crew arrives on site.",
    image: "/image/4d-bim-planning-and-scheduling.jpg",
  },
  {
    title: "5D Quantity Takeoffs & Cost Estimation",
    text: "Our estimators pull material quantities straight from the coordinated model for steel, concrete and rebar. Cost teams get reliable numbers without counting manually from drawings for every bid.",
    image: "/image/5d-quantity-takeoffs-cost-estimation.jpg",
  },
];

export const structuralBimAiBimWorkflowSection = {
  tag: "AI + BIM Experts",
  titleParts: [
    {
      text: "How We Deliver BIM Projects with ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "AI-Driven Workflows",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "Explore the workflow that combines proprietary AI tools with expert BIM oversight to accelerate production, maintain quality and support scalable project delivery.",
  videoAriaLabel: "Play AI-driven BIM workflow video",
  posterSrc: "/image/structural-bim-banner.jpg",
};

export const structuralBimWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Structural 3D BIM Modeling Services?",
  description:
    "We bring top structural BIM engineers and deep domain expertise to every project, helping firms deliver coordinated, code-compliant models without adding headcount.",
  descriptionMaxWidth: 671,
  ctaLabel: "Start New Project",
  ctaHref: "#structural-bim-page-contact",
};

export const structuralBimWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Available In 24 Hours",
    description:
      "Access to experienced architects within 24 hours for quick workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Real Time Delivery",
    description:
      "Get your schematic designs in real-time, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% More Efficient with AI-Powered Workflow",
    description:
      "With AI helping out, you get workflow efficiency 30% better, resulting in faster project development, quicker QC and improved coordination that keeps everything consistent.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "Flexible Engagement & Risk-Free Trial",
    description:
      "You can pick engagement models that work best for your project. And if you're unsure, there's a risk-free trial to check out the expertise before you make a long-term commitment.",
  },
] as const;

export const structuralBimWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "BIM Structural Services",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "We move every structural BIM project through defined 4 stages, from setup to handover. Your team stays informed at each step along the way.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const structuralBimWorkflowIntegrateSteps = [
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
      ["Continuous process refinement"],
    ],
  },
];

export const structuralBimTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Structural BIM Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible structural models for complex projects.",
};

export const structuralBimTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const structuralBimTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const structuralBimAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of ",
  titleLine2: "Structural BIM Outsourcing",
  titleMaxWidth: 625,
  descriptionMaxWidth: 880,
  description:
    "Outsourcing structural 3D BIM modeling services gives your firm reliable models, tighter coordination and faster delivery. You avoid the cost of growing an in-house team.",
  ctaLabel: "Contact Now",
  ctaHref: "#structural-bim-page-contact",
};

export const structuralBimAdvantagesCards = [
  {
    title: "Reliable, Code-Compliant Models",
    text: "Our QC team checks every structural model against project codes and your internal standards before delivery. Firms receive clean, coordinated models ready for design and construction use.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Cross-trade Coordination",
    text: "From day one our BIM modelers coordinate structural models with architectural and site data. Teams identify clashes early to avoid costly changes once construction begins on site.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Complete Compliance with U.S. codes",
    text: "Our engineers model all structural elements to IBC, ACI and AISC requirements. Companies that apply for permits are assured that every detail meets current code.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clear Visualization for All Stakeholders",
    text: "Coordinated 3D models allow architects, engineers and contractors to see the structure before it is built. When everyone is working on the same model in real time, design reviews are faster.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Full Construction ready Documentation",
    text: "Our team produces shop drawings, schedules and rebar layouts directly from the coordinated model. Contractors and fabricators prepare documents for immediate use in the field or shop.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Data, Reduced Cost",
    text: "Structural BIM Modeling helps estimators get accurate material quantities straight from the model, taking the guesswork out of budgets. Resulting in no material over-ordering onsite and procurement ahead of schedule.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const structuralBimEngagementModelsSection = {
  tag: "Engagement Models",
  titleParts: [
    {
      text: "Flexible Engagement Models ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Built Around Your Delivery Needs",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Whether you need project-based BIM support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
  descriptionMaxWidth: 750,
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const structuralBimEngagementModelsCards = [
  {
    icon: flexibleEngagementModelsIcon,
    title: "Project Engagement",
    headline: "Best for immediate project support.",
    idealLabel: "Ideal for firms that:",
    idealItems: [
      "Have won a larger or more complex project.",
      "Need additional delivery capacity.",
      "Want to evaluate VBS before expanding.",
    ],
    nextLabel: "What happens next?",
    nextText:
      "While we deliver your project, we learn your standards, workflows, and preferences—creating a stronger foundation for future collaboration.",
    ctaLabel: "Start a Project",
    ctaHref: "#structural-bim-page-contact",
    ctaVariant: "outline" as const,
    featured: false,
  },
  {
    icon: iconEngageDedicated,
    title: "Dedicated Architecture Team",
    headline: "Best when delivery support becomes ongoing.",
    idealLabel: "Ideal for firms that:",
    idealItems: [
      "Consistent project pipelines.",
      "Multiple active projects.",
      "Long-term production requirements.",
    ],
    nextLabel: "What changes?",
    nextText:
      "Your dedicated team becomes increasingly familiar with your practice, improving consistency, efficiency, and communication with every project.",
    ctaLabel: "Build your Team",
    ctaHref: ROUTES.dedicatedTeam,
    ctaVariant: "solid" as const,
    featured: true,
    badge: "Most Demanding",
  },
  {
    icon: iconEngageStrategic,
    title: "Strategic Delivery Partnership",
    headline: "Built on trust, not contracts.",
    idealLabel: "Ideal for firms focused on:",
    idealItems: [
      "Sustainable growth.",
      "Standardized delivery.",
      "Long-term operational scalability.",
    ],
    nextLabel: "The result",
    nextText:
      "VBS becomes a trusted extension of your practice, helping you increase delivery capability while preserving your firm's identity.",
    ctaLabel: "Explore GDC Model",
    ctaHref: ROUTES.engagement,
    ctaVariant: "outline" as const,
    featured: false,
  },
];

export const structuralBimProjectCta = {
  titleLine1: "Ready to Move Your ",
  titleLine2: "Structural BIM Work Forward?",
  description:
    "Let us share your structural BIM workload and build a dedicated team that stays with your firm project after project, not just once.",
  cta: "Contact Us",
  ctaHref: "#structural-bim-page-contact",
};

export const structuralBimIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Structural 3D BIM Modeling Services",
  titleMaxWidth: 858,
  description:
    "From iconic high-rises to large-scale infrastructure, our Revit structural modeling empowers diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const structuralBimResourcesSection = acsServicePagesResourcesSection;

export const structuralBimTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const structuralBimFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about Structural BIM Services, project requirements, workflows, and deliverables.",
};

export const structuralBimFaqs = [
  {
    q: "Can you work in our Revit standards, templates, and CDE environment?",
    a: "Yes. Our team adopts your Revit templates, naming conventions, and shared parameters. We work directly inside BIM 360, ACC, or your preferred common data environment.",
  },
  {
    q: "Can you work from existing CAD, PDF, or point cloud data?",
    a: "Yes. We can start from CAD, PDF, or point cloud inputs, convert or remodel as needed, then deliver coordinated structural BIM models aligned to your LOD and delivery standards.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "AI accelerates production steps, while US-trained structural BIM experts run QA/QC at each LOD milestone. Models are checked against codes, coordination rules, and your office standards before handover.",
  },
  {
    q: "What is your pricing for Structural BIM Outsourcing services?",
    a: "Pricing depends on scope, LOD, discipline mix, and engagement model. Share your drawings or model requirements and we will propose a clear fixed-fee or dedicated-resource option.",
  },
  {
    q: "Can we do a pilot project before committing long term?",
    a: "Yes. Most firms start with a pilot package or risk-free trial so you can evaluate quality, turnaround, and collaboration before expanding to ongoing delivery.",
  },
];

export const structuralBimContactDescription =
  "Tell us about your structural modeling needs. Our BIM specialists will help you scale delivery with coordinated, code-compliant models.";
