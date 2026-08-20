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

export const zoningAnalysisStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const zoningAnalysisHero = {
  tag: "Zoning Analysis",
  titleLead: "Zoning Analysis Services for ",
  titleAccent: "Architects Managing Compliance and Capacity\u00a0Gaps",
  description:
    "Zoning research slows site decisions and permit timelines. Our BIM specialists leverage AI-assisted workflows to deliver you code-verified zoning reports you can trust.",
  ctaLabel: "Contact with Us",
  imageSrc: "/image/zoning-analysis-banner.jpg",
  imageAlt: "Zoning Analysis Services",
  copyMaxWidth: 780,
  descriptionMaxWidth: 657,
};

export const zoningAnalysisIntro = {
  tag: "Overview",
  titleLead: "Site Feasibility Backed ",
  titleAccent: "by BIM Expertise",
  titleStacked: false,
  titleMaxWidth: 576,
  description:
    "Our zoning analysis services help architecture firms speed up site feasibility research. They also improve report reliability, strengthen the planning department coordination and reduce the time to deliver.",
  sideDescription:
    "Virtual Building Studio offers zoning analysis services using AI assisted workflows with our BIM architects. That gives design teams capacity and reduces rework due to missed code requirements. It fosters jurisdictional coordination and frees architects to focus on design fundamentals.",
  featuresTitle: "Pre-Vetted Zoning Analysts Ready to Support Your Firm",
  features: [
    "Full Zoning Services coverage, from county identification through FAR and lot coverage calculations",
    "Zoning reports aligned with local jurisdiction codes, IBC standards and AHJ requirements",
    "Zoning maps and survey plans reviewed using Revit, AutoCAD and GIS-linked research tools",
    "Real time collaboration through BIM 360 and ACC keeps your team updated at every stage",
    "Multi stage QA/QC checks verify every calculation against source zoning documents before delivery",
    "Deliverables include zoning reports, coverage calculations and development standard summaries ready for design teams",
  ],
  mainImage: "/image/zoning-analysis-overview.jpg",
  imageAlt: "Zoning analysis overview",
};

export const zoningAnalysisOurClientsSection = {
  tag: "Our Clients",
  titleLead: "Trusted by",
  titleAccent: "Top AEC Firms",
  titleAccentFirst: false,
  breakTitle: true,
  descriptionMaxWidth: 514,
  description:
    "We provide Zoning Consulting Services for architects, designers and construction professionals on all project types and workflows.",
};

export const zoningAnalysisServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Zoning Research Services",
  titleMaxWidth: 687,
  description:
    "Our zoning analysis services support every phase of site due diligence. Coverage runs from county and jurisdiction identification through final development standard verification.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#zoning-analysis-page-contact",
  wideCards: true,
};

export const zoningAnalysisServiceCards = [
  {
    title: "Zoning District Identification",
    text: "We use county GIS portals and municipal zoning maps to identify your site's exact zoning district. This confirms base rules controlling use, height and density before designing.",
    image: "/image/zoning-district-identification.jpg",
  },
  {
    title: "Zoning Map Extraction",
    text: "Our experts obtain the appropriate zoning maps by accessing from municipal and county planning websites. The zoning maps extracted are then checked against zoning codes in writing.",
    image: "/image/zoning-map-extraction.jpg",
  },
  {
    title: "Property Boundary Analysis",
    text: "We study survey drawings and legal descriptions to establish the exact boundaries of the property. This stage highlights any encroachment, easement or boundary discrepancies at early stage of design.",
    image: "/image/property-boundary-analysis.jpg",
  },
  {
    title: "Building Coverage Calculation",
    text: "We calculate the maximum building footprint your lot allows as per local zoning rules. This number defines the ground floor limit before your design team starts layout planning.",
    image: "/image/building-coverage-calculation.jpg",
  },
  {
    title: "Floor Area Ratio (FAR) Calculation",
    text: "We calculate the FAR limits which indicate how much total floor area you can build on your lot. This figure guides massing decisions before your team commits design hours to a scheme.",
    image: "/image/floor-area-ratio.jpg",
  },
  {
    title: "Impervious Coverage Calculation",
    text: "We calculate the total impervious surface area on your site including roofs, paving and driveways. This figure is used by local stormwater and drainage regulations to approve permits.",
    image: "/image/impervious-coverage-calculation.jpg",
  },
  {
    title: "Survey Data Analysis",
    text: "We go through survey information and current zoning requirements to identify any potential gaps before we start the design process. This comparison confirms that lot area, setbacks and existing site conditions are as per your records.",
    image: "/image/survey-data-analysis.jpg",
  },
  {
    title: "Development Standards Collection",
    text: "We pull together all of the relevant development standards for your zoning district from setbacks to parking ratios. This research provides your team with a complete picture before schematic design begins.",
    image: "/image/development-standards-collection.jpg",
  },
];

export const zoningAnalysisAiBimWorkflowSection = {
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
  posterSrc: "/image/zoning-analysis-overview.jpg",
};

export const zoningAnalysisWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for ",
  titleAccent: "Zoning Report Services?",
  description:
    "Partner with a zoning consulting services provider that is built by pre-vetted BIM architects who combine planning department experience with AI-assisted research workflows.",
  descriptionMaxWidth: 713,
  ctaLabel: "Start New Project",
  ctaHref: "#zoning-analysis-page-contact",
};

export const zoningAnalysisWhyChooseItems = [
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
      "Get your zoning reports in real time per US codes, standards and whatever your project needs, all while ensuring smooth communication and teamwork throughout the entire process.",
  },
  {
    prefix: "0",
    suffix: "3",
    prefixColor: "#2299D6",
    title: "30% Greater Efficiency with AI-Driven Workflow",
    description:
      "Our drafting team is using AI-assisted checks to catch errors early. This means 30% more efficiency in the workflow process so zoning reports move through QC faster and get to you sooner.",
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

export const zoningAnalysisWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Process Flow for ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Zoning Analysis",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every zoning analysis project follows a clearly structured 4 step process, from survey review to final report delivery for your full team.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const zoningAnalysisWorkflowIntegrateSteps = [
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

export const zoningAnalysisTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "Zoning Analysis Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible zoning reports for complex projects.",
};

export const zoningAnalysisTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const zoningAnalysisTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const zoningAnalysisAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Outsourcing ",
  titleLine2: "Zoning Analysis Services",
  titleMaxWidth: 808,
  descriptionMaxWidth: 729,
  description:
    "Architecture firms outsource their zoning analysis services as it helps you reduce the risk of costly compliance errors and project delays and you can concentrate on design work.",
  ctaLabel: "Contact Now",
  ctaHref: "#zoning-analysis-page-contact",
};

export const zoningAnalysisAdvantagesCards = [
  {
    title: "Reliable, Verified Zoning Calculations",
    text: "Every FAR, coverage and setback figure are checked following source documents before delivery. This helps to reduce guesswork and gives your team numbers they can trust.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Coordination with Planning Departments",
    text: "Zoning research is organized with clear source citations and jurisdiction contacts. This makes follow-up questions with planning staff faster and far less frustrating for your team.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Full US Code and Jurisdiction Compliance",
    text: "Zoning reports get checked carefully against IBC standards, local ordinances and AHJ requirements before handoff. This lowers the chance of code-related surprises during permit review.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Clear Zoning Envelope Visualization",
    text: "Massing models show your buildable envelope, setbacks and height limits, that helps your team test design options before committing to a direction.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Organized, Audit-Ready Documentation",
    text: "Every zoning report includes source citations, calculation sheets and jurisdiction contact records in one file. This keeps your project ready for permit review or future audits.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Research Costs Through Data-Driven Workflows",
    text: "County records and zoning code can take hours to dig through. But AI-assisted research is a time saver. AI workflow reduces your overall research spend without sacrificing report quality and turnaround.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const zoningAnalysisEngagementModelsSection = {
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

export const zoningAnalysisEngagementModelsCards = [
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
    ctaHref: "#zoning-analysis-page-contact",
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
    ctaHref: "#zoning-analysis-page-contact",
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

export const zoningAnalysisProjectCta = {
  titleLine1: "Let's Take the Guesswork Out of ",
  titleLine2: "Your Next Zoning Report.",
  description:
    "Stop chasing zoning codes across county websites. Our BIM experts turn scattered zoning data into a clear, permit-ready report your team can act on.",
  cta: "Contact Us",
  ctaHref: ROUTES.contact,
};

export const zoningAnalysisIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Zoning Analysis Services",
  titleMaxWidth: 858,
  description:
    "From iconic high rises to large scale infrastructure, our zoning planning services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const zoningAnalysisResourcesSection = acsServicePagesResourcesSection;

export const zoningAnalysisTestimonialsDescription =
  "Client stories set out how our BIM expertise reduced costs, improved coordination and sped project delivery through collaboration.";

export const zoningAnalysisFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about zoning analysis services, project requirements, workflows and deliverables.",
};

export const zoningAnalysisFaqs = [
  {
    q: "What is included in your zoning analysis services?",
    a: "Our zoning services cover county and jurisdiction identification, district research and map extraction. We also handle boundary analysis and full development standard calculations for your project.",
  },
  {
    q: "How long does a typical zoning report take to complete?",
    a: "Most zoning report services take three to five business days. Timelines depend on jurisdiction complexity and how quickly county records become available for your project.",
  },
  {
    q: "Do you offer Zoning Consulting Services for projects in multiple jurisdictions?",
    a: "Yes, our Zoning Consulting Services support projects across multiple counties and states. Each jurisdiction gets researched individually to confirm correct, current requirements apply to your site.",
  },
  {
    q: "What does Survey Data Analysis involve in zoning research?",
    a: "Survey Data Analysis compares your existing survey against current zoning requirements. This step determines lot area, setbacks and existing site conditions must match official county records.",
  },
  {
    q: "Can you handle zoning research services for out-of-state projects?",
    a: "Yes. Our zoning research services cover jurisdictions across the United States. Remote research through county portals and GIS data keeps projects moving regardless of location.",
  },
  {
    q: "What format do your Zoning Report Services come in?",
    a: "Zoning Report Services are delivered as clear PDF reports with supporting maps, calculation sheets and source citations. Visuals and massing models in Revit are also available on request for your team.",
  },
];

export const zoningAnalysisFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: zoningAnalysisFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const zoningAnalysisContactDescription =
  "Tell us about your site and jurisdiction. Our BIM architects will help you turn scattered zoning data into a permit-ready report.";
