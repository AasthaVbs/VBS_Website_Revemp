import { ROUTES } from "@/constants/navigation";
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

export type LeadershipTabId = "board" | "operations" | "sales";

export const leadershipTeamTabs: { id: LeadershipTabId; label: string }[] = [
  { id: "board", label: "Board of Directors" },
  { id: "operations", label: "Operations & Management" },
  { id: "sales", label: "Sales & Marketing" },
];

export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  featured?: boolean;
  compact?: boolean;
  viewMoreHref?: string;
};

export const leadershipMembersByTab: Record<LeadershipTabId, LeadershipMember[]> = {
  board: [
    {
      name: "Ar. Ankit Kansara",
      role: "Founder & CEO",
      bio: "A Gold Medalist Architect with 15+ years of global experience, leading VBS with purpose-driven innovation.",
      image: encodeURI("/image/Ankit Kansara-Founder & CEO.jpg"),
      featured: true,
      viewMoreHref: `${ROUTES.about}#founder`,
    },
    {
      name: "Poonam Kansara",
      role: "Director",
      bio: "People-first leader fostering trust, empathy, and teamwork across VBS.",
      image: "/image/Poonam Kansara.jpg",
      featured: false,
      viewMoreHref: ROUTES.about,
    },
    {
      name: "Rama Kansara",
      role: "Director",
      bio: "Pillar of integrity and continuity guiding VBS culture and values.",
      image: "/image/Rama Kansara.jpg",
      featured: false,
      viewMoreHref: ROUTES.about,
    },
    {
      name: "Ravi Jain",
      role: "Independent Director - Business Excellence & Finance",
      bio: "Independent Director bringing business excellence, finance and governance expertise.",
      image: "/image/Ravi Jain.jpg",
      featured: false,
      compact: true,
      viewMoreHref: ROUTES.about,
    },
  ],
  operations: [],
  sales: [],
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
