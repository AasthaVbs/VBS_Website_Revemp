export const portfolioPageHero = {
  tag: "Portfolio",
  titleLead: "Portfolio ",
  titleAccent: "Virtual Building Studio (VBS) About",
  description:
    "Since 2015, we've been the trusted partner for Architecture and Engineering firms, helping them rapidly scale their BIM teams and deliver award-winning projects every time.",
  ctaLabel: "Contact Us",
  image: "/images/Image.png",
  imageAlt: "Virtual Building Studio portfolio",
} as const;

export const portfolioProjectsIntro = {
  tag: "Our Projects",
  titleLead: "Complete Coverage for ",
  titleAccent: "MEP BIM Modeling Services",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
  ctaLabel: "See All Projects",
  seeAllProjectsHref: "/portfolio/all-projects",
  mapImage: "/images/Map Image.png",
  mapAlt: "United States project coverage map",
} as const;

/** Figma 948:26341 — All Projects page hero + listing */
export const allProjectsIntro = {
  tag: "Our All Projects",
  titleLead: "Complete Coverage for ",
  titleAccent: "MEP BIM Modeling Services",
  description:
    "Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows",
  mapImage: "/images/Map Image.png",
  mapAlt: "United States project coverage map",
} as const;

const projectTitle = "Why AutoCAD to BIM Conversion is Essential for Modern Construction";
const projectDescription = `${projectTitle}. ${projectTitle}`;

export const portfolioProjectImages = [
  "/images/Image.png",
  "/images/2165b37db37fe017164b05d8b30fd67b5215bceb-1460x926 1.png",
  "/images/image 4.png",
  "/images/image 5.png",
  "/images/image 6.png",
  "/images/image 7.png",
  "/images/image 9.png",
  "/images/Image-1.png",
  "/images/Image-2.png",
  "/images/Image-3.png",
  "/images/Image-4.png",
  "/images/source/97b6f45d50b28e983ebcaaa5f3901977bb53b930.jpg",
  "/images/source/2165b37db37fe017164b05d8b30fd67b5215bceb-1460x926.png",
] as const;

export type PortfolioProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  projectType: string;
  location: string;
  projectSize: string;
  href: string;
};

/** Figma 943:16097 — featured project cards */
export const portfolioProjectItems: PortfolioProjectItem[] = portfolioProjectImages.map(
  (image, index) => ({
    id: `portfolio-${index + 1}`,
    title: projectTitle,
    description: projectDescription,
    image,
    projectType: "BIM Design",
    location: "Texas",
    projectSize: "1000+ Square Feet",
    href: "#",
  }),
);
