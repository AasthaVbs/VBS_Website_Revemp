// @ts-nocheck
import designSupportDocumentationIcon from "@/assets/images/design-support-documentation.png";
import flexibleEngagementModelsIcon from "@/assets/images/flexible-engagement-models.png";
import iconBim from "@/assets/images/architecture-services/icon-bim.svg";
import iconCa from "@/assets/images/architecture-services/icon-ca.svg";
import iconCd from "@/assets/images/architecture-services/icon-cd.svg";
import iconDesignDev from "@/assets/images/architecture-services/icon-design-dev.svg";
import iconEngageDedicated from "@/assets/images/architecture-services/icon-engage-dedicated.svg";
import iconEngageStrategic from "@/assets/images/architecture-services/icon-engage-strategic.svg";
import iconPreDesign from "@/assets/images/architecture-services/icon-pre-design.svg";
import workflowLogo from "@/assets/images/architecture-services/workflow-logo.svg";
import logoIcon from "@/assets/images/logo-icon.svg";
import { ROUTES } from "@/constants/navigation";

/* ------------------------------------------------------------------ */
/* Challenge — Figma 3627:56808                                        */
/* ------------------------------------------------------------------ */

export const architectureChallengeSection = {
  tag: "Challenge",
  titleParts: [
    { text: "The Growth ", className: "text-section font-medium text-[#111111] capitalize" },
    { text: "Challenge", className: "text-section text-accent font-light capitalize" },
  ],
  paragraphs: [
    [
      { text: "For growing architecture firms, " },
      { text: "The real test", bold: true },
      { text: " is delivery rather than design." },
    ],
    [
      {
        text: "Winning new projects feels rewarding. Delivering them with the same quality every time gets harder as your firm grows.",
      },
    ],
    [
      { text: "As project volume climbs, so does the weight of " },
      {
        text: "documentation, coordination, review cycles, and the load on your senior architects.",
        bold: true,
      },
      {
        text: " They spend more of their day keeping production moving forward, and the standards are in place. This leaves fewer hours for ",
      },
      { text: "the design leadership", bold: true },
      { text: " that only they can provide." },
    ],
    [
      {
        text: "Adding architects or sending production outside gives you more capacity, though consistency remains a separate question. Everyone who joins has to learn your ",
      },
      { text: "firm's standards, your workflows, and your expectations", bold: true },
      { text: " before their work truly fits the way you do things." },
    ],
    [{ text: "That's the real challenge." }],
  ],
  callout: {
    text: "Growing your team is the simple part. Growing your delivery capability takes much more.",
  },
  image: "/image/architecture-services/challenge-overview.png",
  imageAlt: "Architect working on BIM project delivery",
};

/* ------------------------------------------------------------------ */
/* Way to Scale — Figma 3627:58230                                     */
/* ------------------------------------------------------------------ */

export const architectureScaleSection = {
  tag: "Way to Scale",
  titleParts: [
    { text: "A Better Way to Scale ", className: "text-section font-medium text-[#111111]" },
    { text: "Architecture Delivery", className: "text-section text-accent font-light" },
  ],
  description:
    "Before we produce a single drawing, we take time to understand how your firm works - your standards, workflows, communication, and delivery process. Because stronger project delivery isn't just about adding capacity; it's about becoming an extension of your team.",
  columns: ["What Most Firms Focus On", "What VBS Focuses On", "What It Means for You"],
  rows: [
    {
      values: [
        "Adding Resources",
        "Understanding how your practice delivers projects",
        "A team that fits your workflow not the other way around",
      ],
    },
    {
      values: [
        "Starting Work Immediately",
        "Learning your standards before production begins",
        "Faster onboarding with fewer revisions and rework",
      ],
    },
    {
      values: [
        "Delivering One Project",
        "Building knowledge that carries into future projects",
        "Every engagement becomes faster and more efficient",
      ],
    },
    {
      values: [
        "Following Generic Processes",
        "Adapting to your workflows, templates, and QA/QC",
        "Consistent documentation that reflects your firm's standards",
      ],
    },
    {
      values: [
        "Providing Temporary Support",
        "Becoming an extension of your delivery team",
        "A partnership that grows with your practice",
      ],
    },
    {
      values: [
        "Completing the Project",
        "Continuously improving how we work together",
        "Better collaboration and stronger delivery with every project",
      ],
    },
  ],
  footnote:
    "Every project helps us better understand your practice. That knowledge strengthens future collaboration, shortens onboarding, improves consistency, and creates a delivery partnership that becomes more valuable over time.",
};

/* ------------------------------------------------------------------ */
/* Stage Services — Figma 3627:56847                                   */
/* ------------------------------------------------------------------ */

export const architectureStageServicesSection = {
  tag: "Services",
  titleLine1: "Architecture Services That Support ",
  titleLine2: "Every Stage of Project Delivery",
  description:
    "Every project moves through different stages, and each stage asks for a different level of architectural support. Our architecture services are built to fit your workflow, giving you the right expertise at the right stage while your firm keeps working exactly as it does today.",
  note: {
    text: "Whether you want help at one stage or across the whole project lifecycle, our architecture services fit into your practice, build up your delivery capability, and protect the standards that define your firm.",
  },
};

export const architectureStageServicesCards = [
  {
    title: "Pre-design Support",
    icon: iconPreDesign,
    items: [
      "Existing Conditions Documentation",
      "Scan to BIM",
      "Existing Building Modeling",
      "Site Documentation",
      "Existing Conditions Verification",
      "As-Built Documentation Support",
    ],
  },
  {
    title: "Design Support",
    icon: designSupportDocumentationIcon,
    items: [
      "Space Planning Support",
      "Massing Study Support",
      "Design Option Visualization",
      "Concept Modeling Support",
      "Early Stage BIM Support",
      "Design Iteration Support",
    ],
  },
  {
    title: "Design Development Support",
    icon: iconDesignDev,
    items: [
      "Floor Plans & Elevations",
      "Sections",
      "Architectural Detailing",
      "Material Coordination",
      "Multidisciplinary Coordination",
      "Design Development Documentation",
    ],
  },
  {
    title: "Construction Documentation Support",
    icon: iconCd,
    items: [
      "Construction Drawing & documentation",
      "Wall Sections & Details",
      "Door & Window Schedules",
      "Finish Schedules",
      "Redline Updates",
      "Permit Documentation",
    ],
  },
  {
    title: "Construction Administration Support",
    icon: iconCa,
    items: [
      "Drawing Updates",
      "Detail Revisions",
      "Construction Documentation Revisions",
      "Additional Documentation",
      "RFI Documentation Support",
      "Field Coordination Documentation",
    ],
  },
  {
    title: "BIM, Visualization & Digital Production",
    icon: iconBim,
    items: [
      "Architectural BIM Modeling",
      "CAD to BIM Conversion",
      "BIM Documentation",
      "LOD 200 to 500 Modeling",
      "Design Visualization",
      "Architectural Renderings",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Integrate Workflow — Figma 3696:55343                               */
/* ------------------------------------------------------------------ */

export const architectureWorkflowIntegrateSection = {
  tag: "Service Workflow",
  titleParts: [
    { text: "How We Integrate with ", className: "text-section font-medium text-[#111111] capitalize" },
    { text: "Your Practice", className: "text-section text-accent font-light capitalize" },
  ],
  description:
    "Every architecture firm has its standards, workflows, and way of delivering projects. Rather than asking your team to change for us, we fit into the way your firm already works. We shaped our onboarding to learn your practice first, get in step with your team, and set up a working relationship built to last for years.",
  note: {
    text: 'Our process is designed to get your projects moving quickly. We don\'t wait until onboarding is "finished" to create value—we begin production as soon as the essential alignment is complete and continue improving the partnership with every project.',
  },
  centerLogo: workflowLogo,
};

export const architectureWorkflowIntegrateSteps = [
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

/* ------------------------------------------------------------------ */
/* Why Choose VBS — Figma 3627:57067                                   */
/* ------------------------------------------------------------------ */

const WHY_CONTINUE_DEFAULT_CAPTION =
  "Predictable outcomes across every project and milestone.";

export const architectureWhyContinueSection = {
  tag: "Why choose VBS",
  titleParts: [
    { text: "Why Firms Continue ", className: "text-section font-medium text-[#111111]" },
    { text: "Working with VBS", className: "text-section text-accent font-light" },
  ],
  description:
    "We measure our success by the confidence our clients feel to take on more projects, far more than by the number of drawings we produce.",
  image: "/image/architecture-services/why-choose-visual.png",
  imageAlt: "Architecture delivery partnership outcomes",
  defaultCaption: WHY_CONTINUE_DEFAULT_CAPTION,
};

export const architectureWhyContinueItems = [
  { title: "Consistent project delivery", caption: WHY_CONTINUE_DEFAULT_CAPTION },
  { title: "Documentation aligned with firm standards", caption: WHY_CONTINUE_DEFAULT_CAPTION },
  { title: "Flexible and scalable delivery capacity", caption: WHY_CONTINUE_DEFAULT_CAPTION },
  { title: "Reduced operational complexity", caption: WHY_CONTINUE_DEFAULT_CAPTION },
  { title: "Long-term integrated partnerships", caption: WHY_CONTINUE_DEFAULT_CAPTION },
];

/* ------------------------------------------------------------------ */
/* The VBS Difference                                                  */
/* ------------------------------------------------------------------ */

export const architectureDifferenceSection = {
  tag: "The VBS Difference",
  titleParts: [
    { text: "What Changes When ", className: "text-section font-medium text-[#111111]" },
    {
      text: "VBS Becomes Part of Your Practice",
      className: "text-section text-accent font-light",
    },
  ],
  description:
    "The right delivery partner gives you more than extra capacity. By fitting into your practice, Virtual Building Studio helps lift consistency, ease daily complexity, and give your team the confidence to take on more work while quality stays high.",
  note: {
    text: "The result goes beyond extra capacity. It is a sturdier, more resilient delivery capability that lets your firm grow with more confidence, more consistency, and more control.",
  },
};

export const architectureDifferenceCards = [
  {
    icon: logoIcon,
    iconHover: workflowLogo,
    title: "Protect Your Design Intent",
    body: "Your firm's design philosophy is central to every project. By following your standards, your workflows, and your review process, we help keep your documentation true to your design intent.",
  },
  {
    icon: logoIcon,
    iconHover: workflowLogo,
    title: "Scale Without Hiring",
    body: "Grow your delivery capacity while you skip the delays, overhead, and guesswork that come with recruiting, onboarding, and managing extra in-house staff.",
  },
  {
    icon: logoIcon,
    iconHover: workflowLogo,
    title: "Reduce Review Cycles",
    body: "Because our team keeps learning your standards and preferences, deliverables need lighter explanation, fewer revisions, and grow more predictable over time.",
  },
  {
    icon: logoIcon,
    iconHover: workflowLogo,
    title: "Flexible Delivery Capacity",
    body: "Whether you need support for one project, a dedicated team, or extra capacity during busy stretches, our engagement models adapt to your business, and you remain in control.",
  },
  {
    icon: logoIcon,
    iconHover: workflowLogo,
    title: "Support Across The Project Lifecycle",
    body: "We support projects end to end, from pre-design to construction administration, adding delivery capacity exactly where your team needs it most.",
  },
  {
    icon: logoIcon,
    iconHover: workflowLogo,
    title: "Focus on Higher Value Work",
    body: "By owning production support and documentation, we free your architects to spend more time on design leadership, client collaboration, fresh ideas, and project decisions.",
  },
];

/* ------------------------------------------------------------------ */
/* Engagement Models — Figma 3627:57194                                */
/* ------------------------------------------------------------------ */

export const architectureEngagementModelsSection = {
  tag: "Engagement Models",
  titleParts: [
    {
      text: "Flexible Engagement Models ",
      className: "text-section font-medium text-[#111111] capitalize",
    },
    {
      text: "Built Around Your Practice",
      className: "text-section text-accent font-light capitalize",
    },
  ],
  description:
    "Every architecture firm has its way of working. Whether you want support for one project, extra capacity during busy stretches, or a lasting extension of your team, our engagement models bend to your workflow.",
  note: {
    text: "Every strategic partnership begins with one successful project. Each engagement helps us understand your practice more deeply, making every future collaboration faster, smoother, and more valuable.",
  },
};

export const architectureEngagementModelsCards = [
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
    ctaHref: "#architecture-page-contact",
    ctaVariant: "outline",
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
    ctaVariant: "solid",
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
    ctaVariant: "outline",
    featured: false,
  },
];
