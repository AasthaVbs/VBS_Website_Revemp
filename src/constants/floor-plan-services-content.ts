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

const floorPlanBanner = "/image/2d-3d-floor-plan-banner.jpg";
const floorPlanOverview = "/image/2d-3d-floor-plan-overview.jpg";
const sitePlanRenderingImg = "/image/2d-3d-site-plan-rendering-services.jpg";
const twoDFloorPlanServiceImg = "/image/2d-floor-plan-service.jpg";
const twoDToThreeDFloorPlanConversionImg = "/image/2d-to-3d-floor-plan-conversion.jpg";
const threeDExteriorRenderingImg = "/image/3d-exterior-rendering-services.jpg";
const threeDFloorPlanServicesImg = "/image/3d-floor-plan-services.jpg";
const threeDInteriorRenderingImg = "/image/3d-interior-rendering-services.jpg";

export const floorPlanStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const floorPlanHero = {
  tag: "2D and 3D Floor",
  titleLead: "2D and 3D Floor Plan Services\nfor ",
  titleAccent: "Architecture, Real Estate and Construction Teams",
  description:
    "Manual floor plans slow approvals and confuse buyers. With AI-assisted workflows, our BIM architects provide accurate quality assured floor plans faster.",
  ctaLabel: "Contact with Us",
  imageSrc: floorPlanBanner,
  imageAlt: "2D and 3D floor plan views of a modern apartment layout",
  copyMaxWidth: 780,
  descriptionMaxWidth: 650,
  titleMaxWidth: 780,
};

export const floorPlanIntro = {
  tag: "Overview",
  titleLead: "Your 2D and 3D Floor Plan Company for ",
  titleAccent: "Faster Design Approval",
  titleStacked: false,
  titleMaxWidth: 882,
  descriptionMaxWidth: 845,
  description:
    "Architects and real estate teams lose hours to manual drawings and inconsistent measurements. Our 2D to 3D floor plan conversion services help you fix capacity gaps, coordination issues and tight deadline challenges.",
  sideDescription:
    "Our US-trained BIM architects manage every 2D Floor Plan and 3D Floor Plan through AI-assisted workflows, freeing your team for design decisions. We help you increase capacity, reduce rework and strengthen coordination across every floor plan drawing set.",
  featuresTitle: "Pre-Vetted Floor Plan Experts Ready to Support Your Firm",
  features: [
    "Full 2D to 3D floor plan conversion services covering sketches, CAD redlines, scanned drawings and finished renders.",
    "Drawings follow IBC, ADA and local jurisdiction codes for architecture and structural sets.",
    "Our teams model in Revit, AutoCAD and SketchUp matching your firm's existing standards.",
    "Teams collaborate through BIM 360 or ACC and keep every revision visible to your reviewers.",
    "Every drawing passes proven QC process before a senior reviewer signs off.",
    "Deliverables include plans, elevations, schedules and 3D renders in RVT, DWG or PDF.",
  ],
  mainImage: floorPlanOverview,
  imageAlt: "2D office floor plan with matching 3D interior views",
};

export const floorPlanOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  descriptionMaxWidth: 526,
  description:
    "We provide 2D and 3D floor services for architects, designers and construction professionals on all project types and workflows.",
};

export const floorPlanServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "2D and 3D Floor Plan Services",
  titleMaxWidth: 783,
  descriptionMaxWidth: 673,
  description:
    "From concept sketches to construction-ready sets, we support every stage of the process. Our team converts 2D floor plans to 3D models for permits and builds.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#floor-plan-page-contact",
  wideCards: true,
};

export const floorPlanServiceCards = [
  {
    title: "2D Floor Plan Service",
    text: "Our BIM experts draft clean, dimensioned 2D Floor Plan Service layouts from sketches, surveys or CAD files. All plans comply with your scale, symbols and annotation standards for permit or listing use.",
    image: twoDFloorPlanServiceImg,
  },
  {
    title: "3D Floor Plan Services",
    text: "Our 3D Floor Plan Services translate flat layouts into furnished, true to scale spaces that buyers and stakeholders can visualize instantly. These renders are used by teams for listings, presentations and design reviews.",
    image: threeDFloorPlanServicesImg,
  },
  {
    title: "2D to 3D Floor Plan Conversion",
    text: "We convert 2D floor plan to 3D model, making sure no new site visits or redesign work are necessary. This conversion allows remodelers, agents and developers to visualize a space before construction begins.",
    image: twoDToThreeDFloorPlanConversionImg,
  },
  {
    title: "3D Exterior Rendering Services",
    text: "Our team creates photorealistic exterior renders to show massing, materials and planting areas before the build. These renders assist with marketing, investor presentations and design approval meetings.",
    image: threeDExteriorRenderingImg,
  },
  {
    title: "3D Interior Rendering Services",
    text: "We model interiors with finishes, furniture and lighting so clients can test layouts before committing budget. With interior renderings, designers can try out material selections and spatial flow at an early stage.",
    image: threeDInteriorRenderingImg,
  },
  {
    title: "2D & 3D Site Plan Rendering Services",
    text: "Our teams prepare detailed 2D and 3D site plans covering all aspects of grading, planting areas, parking and utility layouts. These plans support your permitting, zoning and stakeholder presentations.",
    image: sitePlanRenderingImg,
  },
];

export const floorPlanAiBimWorkflowSection = {
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
  posterSrc: floorPlanBanner,
};

export const floorPlanWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "2D and 3D Floor Plan Services?",
  description:
    "Floor plan quality depends on who draws it. Our vetted architects bring deep domain expertise to every 2D and 3D deliverable your firm needs.",
  descriptionMaxWidth: 646,
  titleMaxWidth: 675,
  ctaLabel: "Start New Project",
  ctaHref: "#floor-plan-page-contact",
};

export const floorPlanWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Available In 24 Hours",
    description:
      "Access to experienced CAD drafters within 24 hours for quick workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Real Time Delivery",
    description:
      "Get your floor plans in real time per US codes, standards and whatever your project needs, all while ensuring smooth communication and teamwork throughout the entire process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% Greater Efficiency with AI-Driven Workflow",
    description:
      "Our architecture team is using AI-assisted checks to catch errors early. This means 30% more efficiency in the workflow process so floor plans move through QC faster and get to you sooner.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "Flexible Engagement & Risk-Free Trial",
    description:
      "Select the engagement models that best fit your project. And if you're unsure, there is a risk-free trial to test the expertise before you make a long-term commitment.",
  },
] as const;

export const floorPlanWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "2D and 3D Floor Plan Services",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "Every floor plan project moves through defined production stages. Each stage carries you from data intake to final delivery in your format.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const floorPlanWorkflowIntegrateSteps = [
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

export const floorPlanTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "2D and 3D Floor Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated 2D and 3D floor plans for architecture, real estate and construction teams.",
};

export const floorPlanTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const floorPlanTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const floorPlanAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "2D and 3D Floor Plan Services",
  titleMaxWidth: 819,
  descriptionMaxWidth: 669,
  description:
    "Firms that outsource 2D Floor Plan Services gain capacity without adding payroll. This keeps every deliverable consistent, code-aligned, and on schedule.",
  ctaLabel: "Contact Now",
  ctaHref: "#floor-plan-page-contact",
};

export const floorPlanAdvantagesCards = [
  {
    title: "Consistent, Error-Checked Layouts",
    text: "Every floor plan passes structured QC checkpoints, catching dimension and annotation errors before delivery. This keeps every layout clean and dependable across revision cycles and project phases.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Architecture and Structural Coordination",
    text: "Floor plans stay aligned with structural grids and wall assemblies, reducing coordination clashes between drawing sets. Architects and structural engineers work from the real estate floor plan conversions, cutting revision cycles.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "US Code and Standards Compliance",
    text: "Every plan follows IBC, ADA and local jurisdiction requirements relevant to architecture and structural work. This reduces permit rejections and keeps your submissions on schedule.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clear Visualization for Faster Decisions",
    text: "3D renders let clients, buyers and stakeholders walk through a space before construction starts. This shortens approval cycles and reduces costly design changes later in the project.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Organized, Delivery-Ready Documentation",
    text: "Every project includes labeled plans, schedules and layered files organized for easy handoff to your team. This saves your staff hours of file cleanup after every delivery.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Production Cost Through Data Reuse",
    text: "Floor plan data feeds directly into 3D models, renders and site plans without rebuilding from scratch. This cuts duplicate modeling work and lowers your total production cost.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const floorPlanEngagementModelsSection = {
  tag: "Engagement Models",
  stackTitle: false,
  titleParts: [
    {
      text: "Flexible Engagement Models Built Around\u00a0",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Your Delivery Needs",
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

export const floorPlanEngagementModelsCards = [
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
    ctaHref: "#floor-plan-page-contact",
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
    ctaHref: "#floor-plan-page-contact",
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

export const floorPlanProjectCta = {
  titleLine1: "Ready to Turn Your Floor Plans ",
  titleLine2: "Into Buildable Document?",
  description:
    "Stop chasing manual redraws and inconsistent layouts. Talk to our BIM experts and see how fast reliable floor plans move your project forward.",
  cta: "Contact Us",
  ctaHref: ROUTES.contact,
};

export const floorPlanIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "2D and 3D Floor Plan Services",
  titleMaxWidth: 858,
  description:
    "From iconic high-rises to large-scale infrastructure, our 2D and 3D floor plan services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const floorPlanResourcesSection = acsServicePagesResourcesSection;

export const floorPlanTestimonialsDescription =
  "Client stories set out how our drafting expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const floorPlanFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about 2D and 3D floor plan services, project requirements, workflows and deliverables.",
};

export const floorPlanFaqs = [
  {
    q: "What file formats do you deliver for 2D and 3D floor plans?",
    a: "We deliver files in RVT, DWG, PDF and JPG formats, depending on your project needs. Renders also export in high-resolution image formats for marketing use.",
  },
  {
    q: "Can you convert hand-drawn sketches into digital floor plans?",
    a: "Yes. Our BIM specialists digitalize scanned drawings and hand sketches into 2D drawings. These plans arrive clean, fully dimensioned and ready for permits, listings or renovation work.",
  },
  {
    q: "How long does a typical floor plan project take?",
    a: "Turnaround time varies depending on scope of project, complexity and number of drawings required. We review your files and deliverable list, and confirm an exact timeline.",
  },
  {
    q: "Do you follow US building codes for floor plans?",
    a: "Yes, every plan follows IBC, ADA and local jurisdiction codes relevant to architecture and structural drawings. This applies to every project regardless of size or region.",
  },
  {
    q: "Can you work from existing CAD or Revit files?",
    a: "Yes, our team works directly from your existing CAD, Revit or PDF files. We match your layers, standards, and file structure from the first draft.",
  },
];

export const floorPlanFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: floorPlanFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const floorPlanContactDescription =
  "Tell us about your 2D and 3D floor plan needs. Our BIM architects will help you convert sketches and CAD files into accurate, quality-assured plans faster.";
