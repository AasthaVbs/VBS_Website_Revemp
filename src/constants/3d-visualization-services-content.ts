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

const visualizationBanner = "/image/3d-visualisation-banner.jpg";
const visualizationOverview = "/image/3d-visualization-services-overview.jpg";
const exteriorRenderingImg = "/image/exterior-rendering.jpg";
const interiorRenderingImg = "/image/interior-rendering.jpg";
const walkthroughsFlythroughsImg = "/image/architectural-walkthroughs-flythroughs.jpg";
const panoramicVirtualToursImg = "/image/360-degree-panoramic-views-virtual-tours.jpg";
const urbanDesignMasterPlanImg = "/image/urban-design-visualization-master-plan.jpg";
const materialFinishSimulationsImg = "/image/material-finish-simulations.jpg";
const bim3dVisualizationImg = "/image/bim-3d-visualization.jpg";
const mechanicalPartAssemblyImg = "/image/mechanical-part-and-assembley.jpg";

export const visualizationStatsStrip = [
  { value: "4000+", color: "text-vbs-red", label: "Projects Delivered" },
  { value: "300+", color: "text-vbs-green", label: "Global Clients" },
  { value: "11+", color: "text-vbs-yellow", label: "Years of Experience" },
  { value: "500+", color: "text-vbs-blue", label: "US-trained Architects & Engineers" },
];

export const visualizationHero = {
  tag: "3D Visualization",
  titleLead: "Architectural Visualization Services in 3D for \n",
  titleAccent: "Faster Design Approvals",
  description:
    "Our pre-vetted visualization architects combine their expert skills with AI-assisted workflow to prepare photorealistic renders that help stakeholders to get design approval faster.",
  ctaLabel: "Connect With Us",
  imageSrc: visualizationBanner,
  imageAlt: "Photorealistic dusk rendering of a modern house for 3D visualization services",
  copyMaxWidth: 695,
  descriptionMaxWidth: 695,
  titleMaxWidth: 630,
};

export const visualizationIntro = {
  tag: "Overview",
  titleLead: "Transforming Your Designs ",
  titleAccent: "into Photorealistic Renders",
  titleStacked: true,
  titleMaxWidth: 812,
  descriptionMaxWidth: 781,
  description:
    "Our 3D Visualization Services help design teams work faster, catch errors earlier and allows all project participants to get one clear picture so projects move from concept to approval without delay.",
  sideDescription:
    "Virtual Building Studio is your trusted 3D visualization services partner, pairing trained visualization experts with AI driven rendering workflows. This combination increases production capacity, reduces rework, improves coordination and keeps your core team focused on design work. As a 3D Architectural Visualization Studio based in Houston, TX, we support AEC firms and manufacturers across the US market.",
  featuresTitle: "Pre-Vetted 3D Visualization Experts Ready to Support Your Firm",
  features: [
    "Full coverage from concept renders to final walkthrough animations",
    "Renders built to match your CAD and BIM source files exactly",
    "Work delivered in Autodesk 3ds Max, V-Ray, Lumion, and Unreal Engine",
    "Collaboration through your preferred file-sharing and review platforms",
    "Multi-stage QA/QC checks before every render leaves our studio",
    "Deliverables include stills, animations, 360° tours and VR/AR-ready files",
  ],
  mainImage: visualizationOverview,
  imageAlt: "Aerial 3D visualization of a commercial building and landscaped site",
};

export const visualizationOurClientsSection = {
  tag: "Our Clients",
  titleLead: " Leading AEC Firms",
  titleAccent: "Trusted by",
  titleAccentFirst: true,
  breakTitle: false,
  titleMaxWidth: 528,
  descriptionMaxWidth: 520,
  description:
    "Our Architectural 3D Visualization Services support architects, designers and construction teams across all project types and workflows.",
};

export const visualizationServicesSection = {
  tag: "Our Services",
  titleLine1: "Our Comprehensive Range of ",
  titleLine2: "Architectural 3D Visualization Services",
  titleMaxWidth: 918,
  descriptionMaxWidth: 620,
  description:
    "From early concept sketches to final marketing renders, our Architectural Visualization Services cover every stage of your project life cycle.",
  ctaLabel: "Let's Talk Now",
  ctaHref: "#3d-visualization-page-contact",
  wideCards: true,
};

export const visualizationServiceCards = [
  {
    title: "Exterior Rendering",
    text: "We build lifelike exteriors, showing facades, landscaping and surrounding context in daylight and after dark. Before construction clients, investors and planning authorities have a clear view.",
    image: exteriorRenderingImg,
  },
  {
    title: "Interior Rendering",
    text: "Our team prepares renders for interiors with realistic lighting, textures and furniture layouts. Residential, commercial and hospitality clients use these renders to confirm design direction and win approval.",
    image: interiorRenderingImg,
  },
  {
    title: "Architectural Walkthroughs & Flythroughs",
    text: "We create cinematic walkthroughs that let stakeholders move through a space before it exists. These animations work well for client presentations and marketing campaigns alike.",
    image: walkthroughsFlythroughsImg,
  },
  {
    title: "360 Degree Panoramic Views & Virtual Tours",
    text: "Our experts develop interactive 360 degree tours that facilitate clients to see every angle of a project from any device. These tours work on VR headsets and regular web browsers.",
    image: panoramicVirtualToursImg,
  },
  {
    title: "Urban Design Visualization & Master Plan",
    text: "We present large scale developments in full context, with site layouts, green spaces and surrounding infrastructure. Planning submissions and investor presentations both benefit from this clarity.",
    image: urbanDesignMasterPlanImg,
  },
  {
    title: "Material & Finish Simulations",
    text: "Our team shows multiple material, texture and color options for walls, floors and furnishings side by side. This helps your clients to make faster, better design choices.",
    image: materialFinishSimulationsImg,
  },
  {
    title: "BIM 3D Visualization",
    text: "We convert BIM data into detailed, presentation-ready renders that stay true to the underlying model. This closes the gap between technical data and easy to understand client-facing visuals.",
    image: bim3dVisualizationImg,
  },
  {
    title: "Mechanical Part & Assembly Visualization",
    text: "Our specialists produce detailed 3D visuals for mechanical components and assemblies, including day and night lighting studies where needed. Manufacturers use these renders to review designs and get further approvals.",
    image: mechanicalPartAssemblyImg,
  },
];

export const visualizationAiBimWorkflowSection = {
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
  posterSrc: visualizationBanner,
};

export const visualizationWhyChooseSection = {
  tag: "Why Choose Us",
  titleLead: "Why Choose Us for 3D ",
  titleAccent: "Architectural Visualization Services",
  description:
    "We pair experienced US-trained visualization specialists with AI-assisted rendering tools, giving your team top talent and deep domain expertise on every project.",
  descriptionMaxWidth: 653,
  titleMaxWidth: 826,
  ctaLabel: "Start New Project",
  ctaHref: "#3d-visualization-page-contact",
};

export const visualizationWhyChooseItems = [
  {
    prefix: "0",
    suffix: "1",
    prefixColor: "#D70416",
    title: "On-Demand Team Ready in 24 Hours",
    description:
      "Get access to experienced BIM professionals within 24 hours to quickly address workload spikes, project deadlines and resource shortages.",
  },
  {
    prefix: "0",
    suffix: "2",
    prefixColor: "#42AA32",
    title: "US Code-Compliant Delivery in Realtime",
    description:
      "Get your 3D visualizations in real time, all while sticking to US codes, standards and whatever your project needs, making sure smooth communication and teamwork throughout the process.",
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

export const visualizationWorkflowIntegrateSection = {
  tag: "Workflow",
  titleParts: [
    {
      text: "Our Architectural 3D Visualization ",
      className: "text-section font-medium text-[#111111]",
    },
    {
      text: "Services Workflow",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "We apply a systematic 4-step process to each project from the first review of data to the final delivery, ensuring consistent quality at each step.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const visualizationWorkflowIntegrateSteps = [
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

export const visualizationTechnologyStackSection = {
  tag: "Tools & Platforms",
  titleLine1: "We Use to Deliver ",
  titleAccent: "3D Visualization Services",
  description:
    "Leveraging industry-leading BIM software to create accurate, coordinated, and constructible MEP models for complex projects.",
};

export const visualizationTechnologyStackToolsRowOne: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowOne;

export const visualizationTechnologyStackToolsRowTwo: MepBimTechnologyTool[] =
  mepBimTechnologyStackToolsRowTwo;

export const visualizationAdvantagesSection = {
  tag: "Advantages",
  titleLine1: "Advantages of Architectural ",
  titleLine2: "3D Visualization Services",
  titleMaxWidth: 834,
  descriptionMaxWidth: 571,
  description:
    "Bringing 3D Visualization Services into your workflow changes how your team presents, reviews and sells design work at every project stage.",
  ctaLabel: "Contact Now",
  ctaHref: "#3d-visualization-page-contact",
};

export const visualizationAdvantagesCards = [
  {
    title: "Sharper Design Detail",
    text: "3D visualization shows exact dimensions, proportions and spatial relationships before construction starts. This added detail reduces the potential for misinterpreting drawings and expensive rework on site.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Better Client Communication",
    text: "Photorealistic renders help the clients to understand the design without having to decode technical drawings themselves. This clarity helps shorten feedback loops and speed final decisions.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Lower Costs and Faster Timelines",
    text: "Catching design problems in a render rather than on site helps teams avoid expensive rework down the line. It's a preventative measure and keeps the project moving forward.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Versatile Presentation Formats",
    text: "Depending on client requirements, teams can choose between static renders, walkthroughs or 360 degree tours. This flexibility is great for investor pitches, marketing and stakeholder reviews.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Stronger Marketing & Sales Support",
    text: "High quality renders and animations are added to marketing materials which help properties or products stand out in competitive markets. Sales teams use them to create early interest.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
  {
    title: "Built in BIM Integration",
    text: "Using BIM data in our visualization work means we can keep the technical detail and produce renders ready for client presentation. It's an integration that links design directly to execution.",
    icon: benefitIconMuted,
    iconHover: benefitIconColored,
  },
];

export const visualizationEngagementModelsSection = {
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

export const visualizationEngagementModelsCards = [
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
    ctaHref: "#3d-visualization-page-contact",
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

export const visualizationProjectCta = {
  titleLine1: "Ready to See Your Next ",
  titleLine2: "Project Before It's Built?",
  description:
    "Our Architectural Visualization Company works as an extension of your team, turning drawings into renders your clients and stakeholders will actually understand.",
  cta: "Contact Us",
  ctaHref: "#3d-visualization-page-contact",
};

export const visualizationIndustriesIntro = {
  titleLine1: "Industries We Support with ",
  titleLine2: "Architectural 3D Visualization Services",
  titleMaxWidth: 931,
  description:
    "From iconic high-rises to large-scale infrastructure, our 3D Visualization Services empower diverse industries with smart, scalable solutions tailored to their unique project goals and challenges.",
};

export const visualizationResourcesSection = acsServicePagesResourcesSection;

export const visualizationTestimonialsDescription =
  "Client stories set out how our BIM solutions reduced costs improved coordination and sped project delivery by way collaboration";

export const visualizationFaqSection = {
  tag: "FAQs",
  description:
    "Everything you need to know about Architectural Visualization Services, project requirements, workflows, and deliverables.",
};

export const visualizationFaqs = [
  {
    q: "Do you provide one-off 3D visualization projects?",
    a: "No. We give you access to our top 1% visualization specialists, skilled in Architectural Visualization Services and 3D Product Visualization Services. They join your team within 3 days.",
  },
  {
    q: "Can you match our project's technical and branding requirements?",
    a: "Yes. Our on-demand resource model helps you ramp up pretty fast to big portfolios or those ongoing visualization needs, without sacrificing the steady quality and keeping delivery timelines in line.",
  },
  {
    q: "How do you ensure quality when using AI?",
    a: "All deliverables are subject to our structured quality assurance process. Senior BIM leads review models, drawings and documentation prior to project delivery. We make sure that the final output meets the project requirements and the client’s standards.",
  },
  {
    q: "Do you support both architectural and product visualization?",
    a: "Yes, we do both. We provide services for a wide variety of visualization needs from building exterior and interior visualization to detailed product rendering and animation.",
  },
  {
    q: "What software and tools do you use for 3D visualization?",
    a: "We employ Autodesk 3ds Max, V-Ray, Corona Renderer, Lumion, Enscape and Unreal Engine to produce high quality renders optimized for your preferred output format.",
  },
];

export const visualizationFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: visualizationFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const visualizationContactDescription =
  "Tell us about your architectural visualization needs. Our visualization architects will help you turn drawings into photorealistic renders that get design approval faster.";
