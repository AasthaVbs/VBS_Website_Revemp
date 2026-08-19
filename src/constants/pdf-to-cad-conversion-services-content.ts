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

export const PDF_TO_CAD_CONTACT_SECTION_ID = "pdf-to-cad-page-contact";

export const pdfToCadStatsStrip = [
  { value: "400+", color: "text-vbs-red", label: "US-Trained Architects & Engineers" },
  { value: "4000+", color: "text-vbs-green", label: "Projects Delivered" },
  { value: "500+", color: "text-vbs-yellow", label: "Global AEC Clients" },
  { value: "11+", color: "text-vbs-blue", label: "Years of Industry Experience" },
];

export const pdfToCadHero = {
  tag: "PDF to CAD Conversion",
  titleLead: "PDF to CAD Conversion Services for ",
  titleAccent: "Production-Ready CAD Files",
  description:
    "Our AutoCAD specialists use AI-powered workflows to convert PDF files into accurate CAD drawings with a faster turnaround, reliable quality and production support that scales to your workload.",
  ctaLabel: "Connect With Us",
  imageSrc: "/image/pdf-to-cad-conversion-banner.jpg",
  imageAlt: "PDF to CAD Conversion Services",
  copyMaxWidth: 670,
  descriptionMaxWidth: 661,
};

export const pdfToCadIntro = {
  tag: "Overview",
  titleLead: "PDF to CAD Conversion Company for ",
  titleAccent: "Faster Drafting, Better Project Delivery",
  titleStacked: true,
  titleMaxWidth: 1012,
  description:
    "Coordination and editing become a challenge once architects and engineers get the PDF drawings. Our PDF to AutoCAD Conversion Services convert scanned or digital files into structured CAD drawings to enhance drawing accuracy, allow better coordination, reduce production time and keep project teams on schedule.",
  sideDescription:
    "Virtual Building Studio offers 2D to 3D CAD Conversion Services. Our CAD specialists use AI-assisted production and technical expertise to convert your 2D drawings to 3D models. Our team transforms architectural & structural drawings into editable DWG files. With our Paper to CAD Conversion service companies can increase production, reduce rework, maintain drafting standards and spend more time on design and client collaboration.",
  featuresTitle: "Pre-Vetted PDF to CAD Experts Ready to Support Your Firm",
  features: [
    "Architectural conversion of floor plans, elevations, sections, structural drawings and construction documents from PDF into editable CAD files.",
    "Produce drawings in accordance with AIA drafting standards, client CAD standards, layering standards, title blocks, dimension and annotation standards.",
    "Work with AutoCAD, Revit, Bluebeam, Autodesk Construction Cloud, BIM 360, SharePoint and other client collaboration platforms.",
    "Perform QA/QC reviews to ensure accuracy in drawings, dimensions, layers, line weights, symbols, text and more prior to handing over.",
    "DWG, DXF, CAD editable plotting sheets, plans, drawings and design work ready documentation.",
  ],
  mainImage: "/image/pdf-to-cad-conversion-services-overiew.jpg",
  imageAlt: "PDF to CAD conversion overview",
};

export const pdfToCadOurClientsSection = {
  tag: "Our Clients",
  titleLead: " Leading AEC Firms",
  titleAccent: "Trusted by",
  titleAccentFirst: true,
  breakTitle: false,
  titleMaxWidth: 528,
  description:
    "Supporting architecture, engineering, construction, and reality capture teams across diverse project types and workflows.",
};

export const pdfToCadServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Complete Range of ",
  titleLine2: "PDF to CAD Conversion Services",
  titleMaxWidth: 711,
  descriptionMaxWidth: 769,
  description:
    "Architectural and structural projects move through multiple design stages before construction begins. We can take you through the whole process from conversion of legacy drawings and scanned plans to coordinated CAD documentation for design updates and project delivery.",
  ctaLabel: "let's Talk Now",
  ctaHref: `#${PDF_TO_CAD_CONTACT_SECTION_ID}`,
  wideCards: true,
};

export const pdfToCadServiceCards = [
  {
    title: "Architectural PDF to CAD Conversion",
    text: "Turn architectural floor plans, elevations, roof plans, sections and reflected ceiling plans into editable CAD drawings with accurate layers, dimensions, symbols and annotations for renovation, design development and construction documentation.",
    image: "/image/architectural-pdf-to-cad-conversion.jpg",
  },
  {
    title: "Structural PDF to CAD Conversion",
    text: "Organize structural plans, framing layouts, foundation drawings, beam schedules, and structural details into CAD files that help engineers with revising designs, coordinating documentation, and maintaining consistency within the drawings.",
    image: "/image/structural-pdf-to-cad-conversion.jpg",
  },
  {
    title: "PDF to AutoCAD Conversion",
    text: "Convert raster or vector PDF drawings to editable AutoCAD files without compromising drawing scale, geometry, annotations, layers and title blocks for quicker revisions throughout the project lifecycle.",
    image: "/image/pdf-to-autocad-conversion.jpg",
  },
  {
    title: "Paper to CAD Conversion Services",
    text: "Scan documents, hand marked drawings, printed blueprints and archived plans to accurate CAD files to simplify document management and extend the value of legacy project records.",
    image: "/image/paper-to-cad-conversion-services.jpg",
  },
  {
    title: "PDF to DWG Conversion",
    text: "We turn your architectural and structural PDFs into clean DWG files with organised layer structures, editable linework, dimensions, text and drawing elements ready for production.",
    image: "/image/pdf-to-dwg-conversion.jpg",
  },
  {
    title: "PDF to DXF Conversion",
    text: "Our CAD drafters prepare editable DXF files for CAD interoperability between different design platforms, easing the exchange of architectural and structural drawing data between project teams.",
    image: "/image/pdf-to-dxf-conversion.jpg",
  },
  {
    title: "PDF to CAD Drafting Services",
    text: "Redraw poor-quality or marked-up PDF drawings into production-ready CAD documentation representing current project revisions and client drafting standards.",
    image: "/image/pdf-to-cad-drafting-services.jpg",
  },
  {
    title: "2D to 3D CAD Conversion Services",
    text: "We transform your approved 2D architectural and structural CAD drawings into 3D CAD models for visualization, design validation, planning and future BIM development.",
    image: "/image/2d-to-3d-cad-conversion.jpg",
  },
];

export const pdfToCadAiBimWorkflowSection = {
  tag: "AI + BIM Experts",
  titleParts: [
    {
      text: "AI-Assisted Workflows. ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Expert-Led CAD Conversion.",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Technology should accelerate production, not replace technical expertise. Our AI-assisted workflows automate repetitive modeling tasks, while experienced CAD specialists oversee model development, coordination, quality reviews, and final deliverables to ensure every project meets your standards and project requirements.",
  videoAriaLabel: "Play AI-assisted CAD conversion workflow video",
};

export const pdfToCadWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Leading AEC Firms Trust ",
  titleAccent: "Our PDF to CAD Conversion Services",
  description:
    "Your CAD partner should understand architectural documentation, structural detailing, and your drafting standards. Our BIM specialists combine AI-assisted production with technical reviews to deliver editable CAD drawings that fit smoothly into your design and construction workflow.",
  descriptionMaxWidth: 873,
  ctaLabel: "Start New Project",
  ctaHref: `#${PDF_TO_CAD_CONTACT_SECTION_ID}`,
};

export const pdfToCadWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "US-Trained BIM Specialists Available When You Need Them",
    description:
      "Use a network of seasoned US-trained CAD drafters to rapidly scale up work demands within 24 hours, helping with project deadlines, workload surges and other production needs without sacrificing quality or continuity of your projects.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "BIM Delivery Compliant with US Code",
    description:
      "Get CAD drawings that are compliant with US drafting standards and your project requirements, so that architecture, engineering and construction teams can collaborate seamlessly.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "AI-Assisted Workflows. Expert-Led Delivery.",
    description:
      "Our BIM specialists use AI-workflows to speed up repetitive drafting activities such as line extraction and geometry recognition. Every drawing still passes through manual verification, layer validation, dimension checks, and quality reviews before final delivery.",
  },
  {
    prefix: "0",
    suffix: "4",
    prefixColor: "#F0B300",
    title: "Flexible Engagement Models that work for you",
    description:
      "Select the engagement model that suits your project needs. Whether you need assistance for a single project, a dedicated CAD team or a long-term delivery partner. Start with a no-risk trial and grow as your project needs change.",
  },
] as const;

export const pdfToCadWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "PDF to AutoCAD Conversion Services",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "Each drawing is developed through a disciplined process to assure accuracy, consistency and conformance to your project standards. From file review to final QC, each step makes sure your CAD documentation is ready for design development and project delivery.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const pdfToCadWorkflowIntegrateSteps = [
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

export const pdfToCadTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "PDF to CAD Conversion Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const pdfToCadTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const pdfToCadTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const pdfToCadAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "What Changes When VBS Becomes ",
  titleLine2: "Part of Your Delivery Team",
  titleMaxWidth: 920,
  descriptionMaxWidth: 955,
  description:
    "Reliable CAD production creates more than editable drawings. Your team gains additional production capacity, predictable delivery schedules and consistent documentation that supports every phase of architectural and structural project execution.",
  ctaLabel: "Contact Now",
  ctaHref: `#${PDF_TO_CAD_CONTACT_SECTION_ID}`,
};

export const pdfToCadAdvantagesCards = [
  {
    title: "CAD Drawings That Reflect Your Standards",
    text: "Every drawing follows your layering system, annotation style, title blocks, and drafting standards. Your architects and engineers get documentation that fits your existing project workflows with minimal adjustments.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Scale Production Without Expanding Your Team",
    text: "Increase production capacities with the demand of the project. Our CAD drafters become an extension of your team. They help you manage deadlines, renovation projects and drawing backlogs so you do not have to hire more staff.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Reduce Review Time",
    text: "Consistent drafting standards and structured QA reduce unwanted revisions. As our team becomes familiar with your documentation preferences, reviews become faster and project delivery becomes more predictable.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Flexible Delivery for Every Project",
    text: "Every project requires different production capacity. Whether you need Paper to CAD Conversion Services for archived drawings or need on-going support for large documentation packages, we have engagement models to suit your delivery needs.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Support Across Every Project Phase",
    text: "Our specialists help with concept developments, design documentation, renovations, record drawing updates and construction documentation. This provides your team with reliable CAD production when you need the additional drafting capacity.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "AI-Powered. Human-Driven.",
    text: "AI helps in repetitive drafting activities, while experienced CAD professionals take technical decisions, review drawings and do quality checks. This balance increases the efficiency of production but not a substitute for the engineering or architectural expertise.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Get More Time for Design and Client Collaboration",
    text: "Production drafting can be delegated, allowing architects and structural engineers to spend more time on design development, coordination meetings, client communications and technical decision making. Your team spends less time redrawing, more time moving projects forward.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const pdfToCadEngagementModelsSection = {
  tag: "Engagement Models",
  titleParts: [
    {
      text: "Flexible Engagement Models Built Around ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Your Delivery Needs",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  stackTitle: false,
  description:
    "Whether you need project-based BIM support, a dedicated remote team, or a fully managed global delivery center, our engagement models are designed to scale with your business.",
  descriptionMaxWidth: 750,
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const pdfToCadEngagementModelsCards = [
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
    ctaHref: `#${PDF_TO_CAD_CONTACT_SECTION_ID}`,
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

export const pdfToCadProjectCta = {
  titleLine1: "Ready to Convert Your ",
  titleLine2: "PDF Drawings into Editable CAD Files?",
  description:
    "You need a single drawing package converted or require ongoing production support, our specialists are ready to provide you with accurate CAD documentation that meets your standards, deadlines and project workflow.",
  cta: "Contact Us",
  ctaHref: `#${PDF_TO_CAD_CONTACT_SECTION_ID}`,
};

export const pdfToCadIndustriesIntro = {
  titleLine1: "PDF to CAD Services Supporting ",
  titleLine2: "Diverse AEC Projects",
  titleMaxWidth: 780,
  descriptionMaxWidth: 850,
  description:
    "From commercial buildings to complex infrastructure, our PDF to CAD Conversion Services support architecture, engineering, construction, and reality capture teams with coordinated BIM models tailored to their project requirements, workflows, and delivery standards.",
};

export const pdfToCadResourcesSection = acsServicePagesResourcesSection;

export const pdfToCadTestimonialsDescription =
  "Client stories set out how our BIM solutions reduced costs, improved coordination and sped project delivery through collaboration.";

export const pdfToCadFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about PDF to CAD services, project requirements, workflows, and deliverables.",
};

export const pdfToCadFaqs = [
  {
    q: "What types of drawings can you convert through your PDF to CAD Conversion Services?",
    a: "We convert architectural floor plans, elevations, sections, site plans, roof plans, structural plans, foundation plans, framing plans, and other construction drawings into editable CAD files while maintaining your drafting standards.",
  },
  {
    q: "Can you convert scanned paper drawings into CAD files?",
    a: "Yes. Our Paper to CAD Conversion Services convert scanned blueprints, hand-marked drawings, and archived paper documents into accurate CAD files, checking dimensions, annotations, and drawing details where possible.",
  },
  {
    q: "Which CAD file formats do you deliver?",
    a: "We can provide drawings in DWG, DXF, and other CAD formats you need. Whether you need PDF to DWG Conversion or PDF to DXF Conversion, the deliverables follow your layering, naming, and documentation standards.",
  },
  {
    q: "How do you maintain drawing accuracy during conversion?",
    a: "Each drawing is subject to technical reviews that check dimensions, line work, annotations, symbols, layers, and title blocks. Our specialists cross-check the final CAD files with the source drawings before delivering the project.",
  },
  {
    q: "How does AI assist you in your PDF to CAD conversion?",
    a: "Our specialists use AI workflows to automate repetitive drafting tasks and drawing recognition. Before delivering CAD files, each drawing is reviewed by experienced CAD drafters to resolve technical issues and complete quality checks.",
  },
  {
    q: "Can your team handle large drawing conversion projects?",
    a: "Yes. We support clients with single projects, renovation programs, portfolio-wide drawing updates, and high-volume production requirements. Our scalable delivery model can handle different workloads without compromising drawing quality.",
  },
  {
    q: "Do you support revisions after the first CAD delivery?",
    a: "Yes. We incorporate client comments, markups, and redlines directly into the CAD drawings, keeping the drafting consistent throughout the documentation package.",
  },
];

export const pdfToCadFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pdfToCadFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const pdfToCadContactDescription =
  "Share your project requirements and our team will help you convert PDF and paper drawings into accurate, production-ready CAD files.";
