export const portfolioPageHero = {
  tag: "Case Study",
  titleLead: "Real Projects. ",
  titleAccent: "Measurable Results.",
  description:
    "Discover how our expertise has helped clients improve accuracy, accelerate delivery, and optimize project outcomes across diverse building projects.",
  ctaLabel: "Contact Us",
  imageAlt: "Team reviewing architectural case study model",
} as const;

export const portfolioProjectsIntro = {
  tag: "Our Projects",
  titleLead: "BIM & MEP ",
  titleAccent: "Project Highlights",
  description:
    "Explore coordinated BIM, MEP, and visualization work delivered for architecture and engineering firms across the United States.",
  ctaLabel: "Contact Us",
  seeAllProjectsHref: "/projects/all-projects",
  mapImage: "/image/meet-our-company.png",
  mapAlt: "United States project coverage",
} as const;

/** Figma 948:26341 — All Projects page hero + listing */
export const allProjectsIntro = {
  tag: "Our All Projects",
  titleLead: "Complete Coverage for ",
  titleAccent: "MEP BIM Modeling Services",
  description:
    "Explore coordinated BIM, MEP, and visualization work delivered for architecture and engineering firms across the United States.",
  mapAlt: "BIM project dashboard and delivery metrics",
} as const;

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

/** Featured portfolio cards on /portfolio — matches Gatsby vbs-portfolio-page-content */
export const portfolioProjectItems: PortfolioProjectItem[] = [
  {
    id: "hvac-school-austin",
    title: "HVAC BIM Coordination for School Building, Austin, TX",
    description:
      "Clash-free HVAC coordination for a multi-unit school facility with coordinated Revit models and shop-ready documentation.",
    image: "/image/HVAC-Coordination (1).png",
    projectType: "MEP BIM",
    location: "Austin, TX",
    projectSize: "Education",
    href: "/projects/hvac-bim-coordination-for-school-building-austin/",
  },
  {
    id: "mepf-industrial-florida",
    title: "MEPF BIM Coordination for Industrial Office Building, Florida, USA",
    description:
      "Full MEPF coordination for an industrial office building with clash detection and fabrication-ready deliverables.",
    image: "/image/MEPF-BIM-Coordination-for-Industrial-Office-Building-Florida,-USA.png",
    projectType: "MEP BIM",
    location: "Florida, USA",
    projectSize: "Commercial",
    href: "/projects/mepf-bim-coordination-for-industrial-office-building/",
  },
  {
    id: "affordable-housing-revere",
    title: "Clash-Free MEPF Coordination for 56-Unit Residential Development: Revere, MA",
    description:
      "Residential MEPF coordination across 56 units with clash-free models and coordinated shop documentation.",
    image: "/image/Clash-Free-MEPF-Coordination-for-56-Unit-Residential-Development.png",
    projectType: "MEP BIM",
    location: "Revere, MA",
    projectSize: "Residential",
    href: "/projects/mepf-coordination-for-affordable-housing/",
  },
  {
    id: "beachside-resort-hawaii",
    title: "Clash-Free BIM Coordination for Beachside Resort | Hawaii, USA",
    description:
      "Multi-building resort coordination with MEPF models aligned to design intent and construction sequencing.",
    image: "/image/Clash-Free-BIM-Coordination-for-Multi-Building-Beachside-Resort.png",
    projectType: "BIM Coordination",
    location: "Hawaii, USA",
    projectSize: "Hospitality",
    href: "/projects/bim-coordination-for-beachside-resort-hawaii/",
  },
  {
    id: "site-utility-caldwell",
    title: "High-Precision Site Utility Modeling for Large-Scale Residential Project | Caldwell, ID",
    description:
      "Site utility BIM modeling for a large-scale residential development with coordinated underground systems.",
    image: "/image/High-Precision-Site-Utility-Modeling-for-Large-Scale-Residence-Caldwell,-ID.png",
    projectType: "MEP BIM",
    location: "Caldwell, ID",
    projectSize: "Residential",
    href: "/projects/site-utility-modeilng-for-large-scale-residential-building-caldwell/",
  },
  {
    id: "data-center-malaysia",
    title: "BIM Coordination for a Large-Scale Mission-Critical Data Center in Malaysia",
    description:
      "LOD 350 MEP coordination for a 235,750 sq. ft. data center with complex mechanical, electrical, plumbing, and ICT systems.",
    image: "/image/data-center-bim-mep-coordination-malaysia.png",
    projectType: "MEP BIM",
    location: "Malaysia",
    projectSize: "Data Center",
    href: "/projects/data-center-bim-mep-coordination-malaysia/",
  },
  {
    id: "las-vegas-multifamily",
    title: "From Redlines to Renders: Multi-Family Apartment, Las Vegas",
    description:
      "Architectural visualization and BIM documentation for a multi-family residential development.",
    image: "/image/Architectural 3D Visualization_Banner.jpg",
    projectType: "Architecture",
    location: "Las Vegas, NV",
    projectSize: "Residential",
    href: "/projects/multi-family-apartment-bim-visualization-las-vegas/",
  },
  {
    id: "dubai-villa-viz",
    title: "High-Fidelity Architectural Visualization: Residential Villa, Dubai",
    description:
      "Photorealistic rendering and design visualization for a luxury residential villa project.",
    image: "/image/3D Visualization Banner.jpg",
    projectType: "Visualization",
    location: "Dubai",
    projectSize: "Residential",
    href: "/projects/architectural-visualization-residential-villa-dubai/",
  },
];
