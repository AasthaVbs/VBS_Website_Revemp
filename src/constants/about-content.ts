import aboutUsBanner from "@/assets/images/about-us-banner.jpg";

export const aboutHeroImages = {
  main: aboutUsBanner.src,
} as const;

export const aboutVisionImage = "/image/about-vision-main.jpg";

export const visionMissionCards = [
  {
    title: "Vision",
    description: "To digitally transform how the World builds.",
    iconSrc: "/images/about/icon-vision.svg",
  },
  {
    title: "Mission",
    description:
      "Build digital solutions that make building faster, smarter, and more scalable.",
    iconSrc: "/images/about/icon-mission.svg",
  },
] as const;

export const visionMissionSectionCopy = {
  tag: "Our Vision",
  titleLead: "Company's ",
  titleAccent: "Vision & Mission",
  description:
    "Guiding the future of construction through digital innovation, scalable solutions, and a commitment to transforming how buildings are designed, delivered, and managed.",
} as const;

export const coreValuesChartDesktop = "/image/Core%20Values.png";
export const coreValuesChartMobile = "/image/Core%20Values%201.png";

export const coreValuesSectionCopy = {
  tag: "Core Values",
  titleLead: "Driven by Purpose, Guided by ",
  titleAccent: "Values",
  description:
    "Our commitment to integrity, innovation, and excellence forms the foundation of every project and client relationship.",
} as const;

/** @deprecated Chart image used instead of zigzag layout */
export const coreValues = [
  { letter: "C", label: "Client First Thinking", labelWidth: 140, labelFirst: false },
  { letter: "H", label: "High Performance Mindset", labelWidth: 152, labelFirst: true },
  { letter: "A", label: "Accountability & Ownership", labelWidth: 140, labelFirst: false },
  { letter: "M", label: "Move with Speed", labelWidth: 93, labelFirst: true },
  { letter: "P", label: "Process & Systems Driven", labelWidth: 130, labelFirst: false },
  { letter: "I", label: "Innovation through Technology", labelWidth: 140, labelFirst: true },
  { letter: "O", label: "One Team, One Goal", labelWidth: 101, labelFirst: false },
  { letter: "N", label: "Never Stop Improving", labelWidth: 140, labelFirst: true },
  { letter: "S", label: "Scalable Thinking", labelWidth: 117, labelFirst: false },
] as const;

export const founderSectionCopy = {
  tag: "About CEO",
  titleLead: "Meet the Founder & CEO ",
  titleAccent: "Ar. Ankit Kansara",
  linkedinLabel: "Linkedin",
  linkedinHref: "https://www.linkedin.com/in/ankitkumarkansara/",
} as const;

export const founderImages = {
  main: "/image/Ankit-Kansara-About-Us.jpg",
  overlayBg: "/images/about/founder-overlay-bg.png",
  book: "/images/about/founder-book-df6def.png",
} as const;

export const joinTeamCtaCopy = {
  titleLine1: "Join",
  titleAccent: "the Team",
  description:
    "Join our team 150+ Architecture from the across the globe and contribute to groundbreaking projects with top-tier architects and engineers.",
  ctaLabel: "Contact Us",
} as const;

export const founderHighlights = [
  "Founder & CEO, Virtual Building Studio Inc.",
  "15+ Years of Experience",
  "Gold Medalist Architect with over 15 years of experience",
  "International Expertise: Singapore, UK, USA, and India",
  "Startup Mentor, Dedicated to Fostering Innovation",
  "Visionary Leader & BIM Guru",
  'Author of Upcoming Book "Outsource or Out"',
  "Awarded Entrepreneur of the Year 2023 by IAF",
  "Recognized as Top 10 BIM Solution Provider, 2023",
] as const;

export const founderBio =
  "Ankit Kansara, founder of Virtual Building Studio, is a gold medalist architect with global experience in the USA, UK, and Singapore. His passion for digital technologies and commitment to BIM workflows drive his efforts to revolutionize the industry. Ankit built an offshore team for AECOM, expanding it from 1 to 20 members in just eight months in 2015, supporting seamless operations at AECOM's global delivery center in India.";
