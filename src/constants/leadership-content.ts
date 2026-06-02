import { aboutHeroImages } from "@/constants/about-content";
import type { StatItem } from "@/constants/shared-sections";

export const leadershipHeroImages = aboutHeroImages;

export const leadershipHeroCopy = {
  tag: "Name Tag",
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
  { value: "2000+", color: "text-vbs-green", label: "Production professionals across delivery centers" },
  { value: "5+", color: "text-vbs-blue", label: "Years Average Engagement Length" },
  { value: "6+", color: "text-vbs-yellow", label: "Disciplines Covered" },
];

export const leadershipTeamSectionCopy = {
  tag: "Our Team",
  titleLead: "Leadership That ",
  titleAccent: "Inspires Excellence",
  description:
    "Meet the visionaries and experts who guide Virtual Building Studio's mission to revolutionize the AEC industry through innovation and dedication.",
  tabs: ["Board of Directors", "Operations & Management", "Sales & Marketing"],
} as const;

export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  featured?: boolean;
};

export const leadershipMembers: LeadershipMember[] = [
  {
    name: "Ar. Ankit Kansara",
    role: "Founder & CEO",
    bio: "A Gold Medalist Architect with 15+ years of global experience, leading VBS with purpose-driven innovation.",
    image: "/images/Ankit Kansara.png",
    featured: true,
  },
  {
    name: "Poonam Kansara",
    role: "Director",
    bio: "People-first leader fostering trust, empathy, and teamwork across VBS.",
    image: "/images/Poonam Kansara-.png",
  },
  {
    name: "Rama Kansara",
    role: "Director",
    bio: "Pillar of integrity and continuity guiding VBS culture and values.",
    image: "/images/Rama Kansara.png",
  },
  {
    name: "Ravi Jain",
    role: "Independent Director - Business Excellence & Finance",
    bio: "Independent Director bringing business excellence, finance and governance expertise.",
    image: "/images/Ravi Jain-.png",
  },
];

export const leadershipJoinTeamCopy = {
  titleLine1: "Join ",
  titleAccent: "the Team",
  description:
    "Join our team 150+ Architecture from the across the globe and contribute to groundbreaking projects with top-tier architects and engineers.",
  ctaLabel: "Explore Current Openings",
} as const;
