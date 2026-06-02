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
