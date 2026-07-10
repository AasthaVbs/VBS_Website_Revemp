import leadershipBanner from "@/assets/images/leadership-banner.jpg";
import akshayKhatariImg from "@/assets/images/akshay-khatari.png";
import ankitKansaraImg from "@/assets/images/ankit-kansara.png";
import chiragSharmaImg from "@/assets/images/chirag-sharma.png";
import gajendraChoudharyImg from "@/assets/images/gajendra-choudhary.png";
import hiteshNegiImg from "@/assets/images/hitesh-negi.png";
import ishanVoraImg from "@/assets/images/ishan-vora.png";
import mahipalsinhJadejaImg from "@/assets/images/mahipalsinh-jadeja.png";
import manishDeyImg from "@/assets/images/manish-dey.png";
import nisargKansaraImg from "@/assets/images/nisarg-kansara.png";
import poonamKansaraImg from "@/assets/images/poonam-kansara.png";
import ramaKansaraImg from "@/assets/images/rama-kansara.png";
import saumilTrivediImg from "@/assets/images/saumil-trivedi.png";
import saurabhImg from "@/assets/images/saurash.png";
import sounakBanerjeeImg from "@/assets/images/sounak-banerjee.png";
import yogeshChokhraImg from "@/assets/images/yogesh-chokhra.png";
import type { StatItem } from "@/constants/shared-sections";

export const leadershipHeroImages = {
  main: leadershipBanner.src,
} as const;

export const leadershipHeroCopy = {
  tag: "Leaders Board",
  titleLead: "Leadership ",
  titleAccent: "@VBS",
  descriptionLead:
    "Field-level rework and uncoordinated submittals frequently derail project timelines and inflate budgets. Virtual Building Studio functions as a technical extension of your team, providing access to a team of",
  descriptionHighlight: "150+ dedicated remote BIM modelers.",
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
} as const;

export type LeadershipTabId = "operations" | "board";

export const leadershipTeamTabs: { id: LeadershipTabId; label: string }[] = [
  { id: "operations", label: "Operations & Management" },
  { id: "board", label: "Board of Directors" },
];

export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  featured?: boolean;
  linkedinHref?: string;
};

export const leadershipOperationsMembers: LeadershipMember[] = [
  {
    id: "ankit-kansara",
    name: "AK - Ar. Ankit Kansara",
    role: "Founder & CEO",
    image: ankitKansaraImg.src,
    featured: true,
  },
  {
    id: "sounak-banerjee",
    name: "Sean - Sounak Banerjee",
    role: "EVP - Sales",
    image: sounakBanerjeeImg.src,
  },
  {
    id: "manish-dey",
    name: "Maddy - Manish Dey",
    role: "Sales Head - Architecture",
    image: manishDeyImg.src,
    featured: true,
  },
  {
    id: "hitesh-negi",
    name: "Ar. Hitesh Negi",
    role: "Production Head - Architecture",
    image: hiteshNegiImg.src,
  },
  {
    id: "ishan-vora",
    name: "Ian - Ishan Vora",
    role: "Marketing Head - Architecture",
    image: ishanVoraImg.src,
  },
  {
    id: "saurabh",
    name: "Shawn - Saurabh",
    role: "Sales Head - MEPF",
    image: saurabhImg.src,
    featured: true,
  },
  {
    id: "akshay-khatari",
    name: "Akshay Khatri",
    role: "Production Head - MEPF",
    image: akshayKhatariImg.src,
  },
  {
    id: "saumil-trivedi",
    name: "Samuel - Saumil Trivedi",
    role: "Marketing Head - MEPF",
    image: saumilTrivediImg.src,
  },
  {
    id: "gajendra-choudhary",
    name: "Victor - Gajendra Choudhary",
    role: "Sales Head - Scan to BIM",
    image: gajendraChoudharyImg.src,
    featured: true,
  },
  {
    id: "chirag-sharma",
    name: "Chirag Sharma",
    role: "Production Head - Scan to BIM",
    image: chiragSharmaImg.src,
  },
  {
    id: "mahipalsinh-jadeja",
    name: "Miles - Mahipalsinh Jadeja",
    role: "Marketing Head - Scan to BIM",
    image: mahipalsinhJadejaImg.src,
    featured: true,
  },
  {
    id: "nisarg-kansara",
    name: "Nik - Nisarg Kansara",
    role: "Head - Strategic Accounts",
    image: nisargKansaraImg.src,
  },
  {
    id: "yogesh-chokhra",
    name: "Yogesh Chokhra",
    role: "Head - Accounts",
    image: yogeshChokhraImg.src,
  },
];

export const leadershipBoardMembers: LeadershipMember[] = [
  {
    id: "poonam-kansara",
    name: "Poonam Kansara",
    role: "Director",
    image: poonamKansaraImg.src,
    featured: true,
  },
  {
    id: "rama-kansara",
    name: "Rama Kansara",
    role: "Director",
    image: ramaKansaraImg.src,
  },
];

export const leadershipMembersByTab: Record<LeadershipTabId, LeadershipMember[]> = {
  operations: leadershipOperationsMembers,
  board: leadershipBoardMembers,
};

export const leadershipJoinTeamCopy = {
  titleLine1: "Join ",
  titleAccent: "the Team",
  description:
    "Join our team 150+ Architecture from the across the globe and contribute to groundbreaking projects with top-tier architects and engineers.",
  ctaLabel: "Explore Current Openings",
} as const;
