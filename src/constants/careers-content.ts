import { aboutHeroImages } from "@/constants/about-content";

export const careersHeroImages = aboutHeroImages;

export const careersHeroCopy = {
  tag: "Careers",
  titleLead: "Careers ",
  titleAccent: "Virtual Building Studio (VBS)",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale.",
  ctaLabel: "Current Openings",
  ctaHref: "#current-openings",
} as const;

export const whyWorkVbsSectionCopy = {
  tag: "Name Tag",
  titleLead: "Why Work ",
  titleAccent: "VBS",
  description:
    "Delivering accuracy driven BIM solutions tailored to the unique requirements of every construction sector we serve.",
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
    title: "Collaborate & Create & Have Fun",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    number: "02",
    numberColor: "#2299D6",
    title: "Learn & Grow & Leveling",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    number: "03",
    numberColor: "#F0B300",
    title: "Balanced Work Culture Yes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
];

export const careersBenefitsSectionCopy = {
  tag: "Name Tag",
  titleLead: "Benefits of Working at ",
  titleAccent: "VBS",
  description:
    "MEP BIM Services transform every phase of your project from design to facility management. Virtual Building Studio delivers measurable outcomes across coordination, cost, and construction efficiency.",
} as const;

export type CareerBenefit = {
  title: string;
  description: string;
  featured?: boolean;
};

export const careersBenefits: CareerBenefit[] = [
  {
    title: "Comprehensive Health Coverage",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    featured: true,
  },
  {
    title: "Competitive & Transparent Pay",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    title: "Learning & Upskilling Support",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    title: "Team Activities & Knowledge Sessions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    title: "Flexible Leave Policies",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  },
  {
    title: "Team Retreats & Outings",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
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
  tag: "Name Tag",
  titleLead: "Current ",
  titleAccent: "Openings",
  description:
    "MEP BIM Services transform every phase of your project from design to facility management.",
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

export const careersFormSectionCopy = {
  tag: "Career Form",
  titleLead: "No Current ",
  titleAccent: "Openings?",
  description:
    "Didn't find a role that fits your profile? We're always excited to connect with talented people.",
  submitLabel: "Apply Now",
} as const;
