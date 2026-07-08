import careersBanner from "@/assets/images/carrer-banner.jpg";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";

export const careersHeroImages = {
  main: careersBanner.src,
};

export const careersHeroCopy = {
  tag: "Careers",
  titleLead: "Create. Innovate. ",
  titleAccent: "Grow.",
  description:
    "Be part of a culture that values learning, collaboration, and innovation while empowering you to make a meaningful impact every day.",
  ctaLabel: "Current Openings",
  ctaHref: "#current-openings",
} as const;

export const whyWorkVbsSectionCopy = {
  tag: "Why We",
  titleLead: "Why Join the ",
  titleAccent: "Team VBS",
  description:
    "At Virtual Building Studio, you will work with supportive teammates, take on exciting challenges, and build a career that grows with you.",
} as const;

export type WhyWorkPillar = {
  number: string;
  numberColor: string;
  title: string;
  description: string;
};

export const whyWorkVbsPillars: WhyWorkPillar[] = [
  {
    number: "01",
    numberColor: "#42AA32",
    title: "Grow With Every Project",
    description:
      "Work on diverse BIM and digital construction projects that challenge you, sharpen your skills, and keep learning exciting.",
  },
  {
    number: "02",
    numberColor: "#2299D6",
    title: "People First, Always",
    description:
      "Be part of a workplace where collaboration, respect, and open communication help everyone do their best work every day.",
  },
  {
    number: "03",
    numberColor: "#F0B300",
    title: "Make Your Work Matter",
    description:
      "Your ideas, expertise, and contributions directly support projects that help clients make smarter building decisions worldwide.",
  },
];

const CAREERS_BENEFIT_ICON_MUTED = benefitIconMuted;
const CAREERS_BENEFIT_ICON_COLORED = benefitIconColored;

export const careersBenefitsSectionCopy = {
  tag: "Benefits",
  titleLead: "Benefits of Working at ",
  titleAccent: "Virtual Building Studio",
  description:
    "We believe great work starts with a great workplace, supported by benefits that help you thrive professionally and personally.",
} as const;

export type CareerBenefit = {
  title: string;
  description: string;
  icon: string | { src: string };
  iconHover: string;
  featured?: boolean;
};

export const careersBenefits: CareerBenefit[] = [
  {
    title: "Health and Wellness Support",
    description:
      "We offer comprehensive health benefits that help you stay focused on your work while taking care of yourself and your family.",
    icon: CAREERS_BENEFIT_ICON_MUTED,
    iconHover: CAREERS_BENEFIT_ICON_COLORED,
  },
  {
    title: "Flexible Leave Policies",
    description:
      "Take the time you need to recharge, manage personal commitments, and maintain a healthy balance between work and life.",
    icon: CAREERS_BENEFIT_ICON_MUTED,
    iconHover: CAREERS_BENEFIT_ICON_COLORED,
  },
  {
    title: "Learning and Upskilling Programs",
    description:
      "From technical training to professional development programs, we invest in helping you build skills that move your career forward.",
    icon: CAREERS_BENEFIT_ICON_MUTED,
    iconHover: CAREERS_BENEFIT_ICON_COLORED,
  },
  {
    title: "Team Events and Knowledge Sharing",
    description:
      "Regular activities, workshops, and knowledge sessions create opportunities to connect, learn, and grow together as a team.",
    icon: CAREERS_BENEFIT_ICON_MUTED,
    iconHover: CAREERS_BENEFIT_ICON_COLORED,
  },
  {
    title: "Fair and Competitive Compensation",
    description:
      "Your hard work deserves recognition, which is why we provide competitive pay and a transparent approach to career growth.",
    icon: CAREERS_BENEFIT_ICON_MUTED,
    iconHover: CAREERS_BENEFIT_ICON_COLORED,
  },
  {
    title: "Celebrations, Retreats and Outings",
    description:
      "We believe strong teams are built beyond project deadlines, with memorable outings, celebrations, and shared experiences.",
    icon: CAREERS_BENEFIT_ICON_MUTED,
    iconHover: CAREERS_BENEFIT_ICON_COLORED,
  },
];

export type JobOpening = {
  id: string;
  title: string;
  experience: string;
  department: string;
  openings: string;
  highlighted?: boolean;
};

export const currentOpeningsSectionCopy = {
  tag: "Openings",
  titleLead: "Current ",
  titleAccent: "Openings",
  description:
    "We're looking for passionate professionals who are ready to solve complex challenges and build the future with us.",
} as const;

export const jobOpenings: JobOpening[] = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI Engineer",
    experience: "4-6 Years",
    department: "Engineering",
    openings: "2 Openings",
    highlighted: true,
  },
  {
    id: "product-manager-ai",
    title: "Product Manager — AI Products",
    experience: "6-10 Years",
    department: "Product",
    openings: "1 Openings",
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer (Next.js)",
    experience: "4-6 Years",
    department: "Engineering",
    openings: "2 Openings",
  },
  {
    id: "sdr",
    title: "Sales Development Representative",
    experience: "5-8 Years",
    department: "Sales",
    openings: "2 Openings",
  },
];

export const careersJoinTeamCtaCopy = {
  titleLine1: "Join the ",
  titleAccent: "Team",
  description:
    "Join our team 150+ Architecture from the across the globe and contribute to groundbreaking projects with top-tier architects and engineers.",
  ctaLabel: "Contact Us",
} as const;

export const careersFormSectionCopy = {
  tag: "Career Form",
  titleLead: "No Current ",
  titleAccent: "Openings?",
  description:
    "Didn't find a role that fits your profile? We're always excited to connect with talented people.",
  submitLabel: "Apply Now",
} as const;

export const careersDetailedHeroCopy = {
  backLabel: "Go back To Careers",
  title: "Senior AI Engineer",
  stats: [
    { label: "Experience:", value: "4-6 Years" },
    { label: "Open Position:", value: "2" },
  ],
  sections: [
    {
      title: "Your potential, unleashed.",
      paragraphs: [
        "India's impact on the global economy has increased at an exponential rate and Deloitte presents an opportunity to unleash and realize your potential amongst cutting edge leaders, and organizations shaping the future of the region, and indeed, the world beyond.",
        "At Deloitte, your whole self to work, every day. Combine that with our drive to propel with purpose and you have the perfect playground to collaborate, innovate, grow, and make an impact that matters.",
      ],
    },
    {
      title: "The team",
      paragraphs: [
        "Deloitte helps organizations prevent cyberattacks and protect valuable assets. We believe in being secure, vigilant, and resilient-not only by looking at how to prevent and respond to attacks, but at how to manage cyber risk in a way that allows you to unleash new opportunities. Embed cyber risk at the start of strategy development for more effective management of information and technology risks.",
      ],
    },
    {
      title: "Role Summary",
      bullets: [
        "6 years of experience",
        "Management and Upkeeping of Security solutions.",
        "Track performance, uptime, and data integrity of security tools.",
        "Ensure proper log ingestion, parsing, and normalization from various sources.",
        "Act as an SME for designated technology within SOC",
        "Perform upgrades & DR drill exercise",
        "Perform periodic reconciliation exercises",
        "Run discovery in network to identify the gaps w.r.t. SIEM integration, account onboarding",
        "Perform regular backup and restoration exercise of solutions including configuration and log backups. Perform configurations to cater Service & Change Request.",
      ],
    },
    {
      title: "Desired qualifications",
      paragraphs: [
        "Education B. E / B.Tech (Tier 1/2) in Computer Science, Information Technology or related fields",
      ],
    },
  ],
  growthBlocks: [
    {
      title: "Connect for impact",
      content:
        "Our exceptional team of professionals across the globe are solving some of the world's most complex business problems, as well as directly supporting our communities, the planet, and each other. Know more in our Global Impact Report and our India Impact Report.",
    },
    {
      title: "Empower to lead",
      content:
        "You can be a leader irrespective of your career level. Our colleagues are characterised by their ability to inspire, support, and provide opportunities for people to deliver their best and grow both as professionals and human beings. Know more about Deloitte and our One Young World partnership.",
    },
    {
      title: "Inclusion for all",
      content:
        "At Deloitte, people are valued and respected for who they are and are trusted to add value to their clients, teams and communities in a way that reflects their own unique capabilities. Know more about everyday steps that you can take to be more inclusive. At Deloitte, we believe in the unique skills, attitude and potential each and every one of us brings to the table to make an impact that matters.",
    },
    {
      title: "Drive your career",
      content:
        "At Deloitte, you are encouraged to take ownership of your career. We recognise there is no one size fits all career path, and global, cross-business mobility and up / re-skilling are all within the range of possibilities to shape a unique and fulfilling career. Know more about Life at Deloitte.",
    },
    {
      title: "Everyone's welcome... entrust your happiness to us",
      content:
        "Our workspaces and initiatives are geared towards your 360-degree happiness. This includes specific needs you may have in terms of accessibility, flexibility, safety and security, and caregiving. Here's a glimpse of things that are in store for you.",
    },
    {
      title: "Interview tips",
      content:
        "We want job seekers exploring opportunities at Deloitte to feel prepared, confident and comfortable. To help you with your interview, we suggest that you do your research, know some background about the organisation and the business area you're applying to. Check out recruiting tips from Deloitte professionals.",
    },
  ],
  card: {
    title: "Senior AI Engineer",
    date: "March 18, 2026",
    designation: "Assistant AI Engineer",
    ctaLabel: "Apply Now",
  },
} as const;
