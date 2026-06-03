export const navLinks = [
  "What We Do",
  "Success Stories",
  "Resources",
  "About Us",
  "Contact Us",
];

export const stats = [
  { value: "11+", label: "Years Embedded Inside U.S. AEC Delivery", color: "vbs-red" },
  { value: "2000+", label: "Projects Delivered Across BIM & VDC", color: "vbs-blue" },
  { value: "98%", label: "Client Retention Through Long-Term Partnerships", color: "vbs-green" },
  { value: "6+", label: "Disciplines Covered", color: "vbs-yellow" },
];

export const capabilities = [
  {
    title: "General Contractors",
    description:
      "Model support for phased execution, clash workflows, and site-driven coordination.",
  },
  {
    title: "MEP Contractors",
    description:
      "High-fidelity MEP modeling with fabrication alignment and constructability focus.",
  },
  {
    title: "Reality Capture & Survey Companies",
    description:
      "Point cloud to BIM pipelines designed for speed, consistency, and scale.",
  },
];

export const engagementModelCards = [
  {
    icon: "⚡",
    iconBg: "rgba(255, 240, 219, 0.5)",
    iconBorder: "#FF9000",
    audience: "Best for Small Firms",
    title: "Project-Based Support",
    description:
      "Flexible BIM support for one-time projects and fast-moving delivery requirements.",
    keyBenefits: [
      "Plug-and-play execution",
      "Immediate project kickoff",
      "No long-term commitment",
      "Flexible scope and duration",
    ],
    bestSuitedFor: ["Small architecture firms", "Pilot projects", "Short-term BIM needs"],
    cta: "Start a Project",
    borderColor: "#CBCCCD",
    shadow: true,
    ctaHighlighted: false,
  },
  {
    icon: "👥",
    iconBg: "rgba(223, 239, 255, 0.5)",
    iconBorder: "#294769",
    audience: "Best for Growing Firms",
    title: "Dedicated Resource Model",
    description: "Dedicated BIM professionals working as an extension of your internal team.",
    keyBenefits: [
      "Fixed monthly cost",
      "Dedicated resources",
      "Scalable team structure",
      "Consistent communication",
    ],
    bestSuitedFor: ["Mid-sized firms", "Ongoing project pipelines", "Long-term delivery support"],
    cta: "Build your Team",
    ctaHref: "/build-your-team",
    borderColor: "#CBCCCD",
    shadow: false,
    ctaHighlighted: false,
  },
  {
    icon: "🌍",
    iconBg: "rgba(211, 255, 211, 0.5)",
    iconBorder: "#094004",
    audience: "Best for Enterprise Firms",
    title: "Global Delivery Center",
    description:
      "A fully managed offshore BIM delivery center exclusively aligned with your business.",
    keyBenefits: [
      "Exclusive delivery team",
      "Enterprise scalability",
      "Standardized workflows",
      "Long-term operational efficiency",
    ],
    bestSuitedFor: [
      "Large global firms",
      "Multi-project delivery",
      "Strategic outsourcing partnerships",
    ],
    cta: "Explore GDC Model",
    borderColor: "#2299D6",
    shadow: false,
    badge: "Most Demanding",
    ctaHighlighted: true,
  },
] as const;

export const resources = [
  {
    type: "White Paper",
    title: "Why AutoCAD to BIM Conversion is Essential for Modern Construction",
    date: "12 Jan 2026",
  },
  {
    type: "Case Study",
    title: "How BIM Coordination Reduced Rework Across a Multi-Tower Project",
    date: "09 Jan 2026",
  },
  {
    type: "Guide",
    title: "A Practical Framework for Building a Reliable BIM Delivery Engine",
    date: "03 Jan 2026",
  },
];

export const faqs = [
  "What BIM services do you provide?",
  "Do you support U.S. code and standards?",
  "How quickly can your team start?",
  "Do you provide on-site talent?",
];

export const certificationSectionCopy = {
  tag: "Certification",
  titleLead: "Certification/",
  titleAccent: "Awards Recognition",
  description:
    "We offer two flexible engagement models that work best for our clients. Each year, we carefully select the",
} as const;

export const certificationLogos = [
  {
    alt: "Clutch recognition",
    src: "/images/Rectangle 1.png",
  },
  {
    alt: "Autodesk Certified Professional",
    src: "/images/autodesk-certified-professional.png",
  },
  {
    alt: "GoodFirms Top Digital Marketing Company",
    src: "/images/Goodfirms.co 1.png",
  },
  {
    alt: "Great Place To Work Certified",
    src: "/images/source/bg_removal [Background removed].png",
  },
] as const;
