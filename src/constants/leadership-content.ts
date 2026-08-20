import { ROUTES } from "@/constants/navigation";
import { founderSectionCopy } from "@/constants/about-content";
import type { StatItem } from "@/constants/shared-sections";

export const leadershipHeroImages = {
  main: "/image/Leadership.jpg",
} as const;

export const leadershipHeroCopy = {
  tag: "Leadership",
  titleLead: "Leadership ",
  titleAccent: "@VBS",
  descriptionLead:
    "Field-level rework and uncoordinated submittals frequently derail project timelines and inflate budgets. Virtual Building Studio functions as a technical extension of your team, providing access to a team of",
  descriptionHighlight: "200+ dedicated remote BIM modelers.",
  descriptionTail:
    "As a specialized MEP BIM modeling service provider in the USA, we ensure your building systems are clash-free and fabrication-ready.",
  ctaLabel: "Contact Us",
} as const;

export const leadershipStats: StatItem[] = [
  { value: "11+", color: "text-vbs-red", label: "Years Embedded Inside U.S. AEC Delivery" },
  { value: "2000+", color: "text-vbs-green", label: "Concurrent Project Environments" },
  { value: "5+", color: "text-vbs-blue", label: "Years Average Engagement Length" },
  { value: "6+", color: "text-vbs-yellow", label: "Disciplines Covered" },
];

export const leadershipTeamSectionCopy = {
  tag: "Our Team",
  titleLead: "Leadership That ",
  titleAccent: "Inspires Excellence",
  description:
    "Meet the visionaries and experts who guide Virtual Building Studio's mission to revolutionize the AEC industry through innovation and dedication.",
} as const;

export const leadershipCompanyLinkedinHref =
  "https://www.linkedin.com/company/virtual-building-studio-inc/";

export type LeadershipTabId = "operations" | "board";

export const leadershipTeamTabs: { id: LeadershipTabId; label: string }[] = [
  { id: "operations", label: "Operations & Management" },
  { id: "board", label: "Board of Directors" },
];

export type LeadershipMember = {
  name: string;
  role: string;
  bio?: string;
  image: string;
  featured?: boolean;
  row?: number;
  viewMoreHref?: string;
  linkedinHref?: string;
};

export const leadershipMembersByTab: Record<LeadershipTabId, LeadershipMember[]> = {
  operations: [
    {
      name: "AK - Ar. Ankit Kansara",
      role: "Founder & CEO",
      image: "/image/ankit-kansara.png",
      featured: true,
      row: 1,
      viewMoreHref: `${ROUTES.about}#founder`,
      linkedinHref: founderSectionCopy.linkedinHref,
    },
    {
      name: "Sean - Sounak Banerjee",
      role: "EVP - Sales",
      image: "/image/sounak-banerjee.png",
      row: 1,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Maddy - Manish Dey",
      role: "Sales Head - Architecture",
      image: "/image/manish-dey.png",
      row: 2,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Ar. Hitesh Negi",
      role: "Production Head - Architecture",
      image: "/image/hitesh-negi.png",
      row: 2,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Ian - Ishan Vora",
      role: "Marketing Head - Architecture",
      image: "/image/ishan-vora.png",
      row: 2,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Shawn - Saurabh",
      role: "Sales Head - MEPF",
      image: "/image/saurash.png",
      row: 3,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Akshay Khatri",
      role: "Production Head - MEPF",
      image: "/image/akshay-khatari.png",
      row: 3,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Samuel - Saumil Trivedi",
      role: "Marketing Head - MEPF",
      image: "/image/saumil-trivedi.png",
      row: 3,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Victor - Gajendra Choudhary",
      role: "Sales Head - Scan to BIM",
      image: "/image/gajendra-choudhary.png",
      row: 4,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Chirag Sharma",
      role: "Production Head - Scan to BIM",
      image: "/image/chirag-sharma.png",
      row: 4,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Miles - Mahipalsinh Jadeja",
      role: "Marketing Head - Scan to BIM",
      image: "/image/mahipalsinh-jadeja.png",
      row: 4,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Nik - Nisarg Kansara",
      role: "Head - Strategic Accounts",
      image: "/image/nisarg-kansara.png",
      row: 5,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
    {
      name: "Yogesh Chokhra",
      role: "Head - Accounts",
      image: "/image/yogesh-chokhra.png",
      row: 5,
      linkedinHref: leadershipCompanyLinkedinHref,
    },
  ],
  board: [
    {
      name: "Ar. Ankit Kansara",
      role: "Founder & CEO",
      bio: "A Gold Medalist Architect with 15+ years of global experience, leading VBS with purpose-driven innovation.",
      image: encodeURI("/image/Ankit Kansara-Founder & CEO.jpg"),
      featured: true,
      row: 1,
      viewMoreHref: `${ROUTES.about}#founder`,
    },
    {
      name: "Poonam Kansara",
      role: "Director",
      bio: "People-first leader fostering trust, empathy, and teamwork across VBS.",
      image: "/image/Poonam Kansara.jpg",
      row: 1,
      viewMoreHref: ROUTES.about,
    },
    {
      name: "Rama Kansara",
      role: "Director",
      bio: "Pillar of integrity and continuity guiding VBS culture and values.",
      image: "/image/Rama Kansara.jpg",
      row: 1,
      viewMoreHref: ROUTES.about,
    },
    {
      name: "Ravi Jain",
      role: "Independent Director - Business Excellence & Finance",
      bio: "Independent Director bringing business excellence, finance and governance expertise.",
      image: "/image/Ravi Jain.jpg",
      row: 2,
      viewMoreHref: ROUTES.about,
    },
  ],
};

/** @deprecated Use leadershipMembersByTab */
export const leadershipMembers = leadershipMembersByTab.board;

export const leadershipJoinTeamCopy = {
  titleLine1: "Join ",
  titleAccent: "the Team",
  description:
    "Join our team of architects and engineers from across the globe and contribute to groundbreaking projects with top-tier professionals.",
  ctaLabel: "Explore Current Openings",
} as const;
