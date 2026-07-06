/** All portfolio / project pages — used by resources Portfolio filter and /projects/ listing */

function projectIdFromHref(href: string) {
  return href.replace(/^\/(?:projects|portfolio)\//, "").replace(/\/$/, "");
}

function toPortfolioHref(href: string) {
  return href.replace(/^\/projects\//, "/portfolio/");
}

export { toPortfolioHref };

function projectListingItem(
  project: { href: string; category: string; title: string; image: string; location?: string },
  index: number,
) {
  const service =
    project.category === "MEP" ? "MEP Engineering Firms" : "Architecture Firms";

  return {
    id: projectIdFromHref(project.href),
    title: project.title,
    excerpt: `${project.category} project highlighting coordinated BIM delivery for architecture and engineering firms.`,
    type: "Portfolio",
    service,
    href: toPortfolioHref(project.href),
    image: project.image,
    category: project.category,
    location: project.location || null,
    sortOrder: index + 1,
    publishedTimestamp: 5000 - index,
    badgeLabel: "Portfolio",
  };
}

export const allPortfolioProjects = [
  {
    title: "From Redlines to Renders: Multi-Family Apartment, Las Vegas",
    href: "/projects/multi-family-apartment-bim-visualization-las-vegas/",
    image: "/image/Architectural 3D Visualization_Banner.jpg",
    category: "Architecture",
    location: "Las Vegas, NV",
  },
  {
    title: "High-Fidelity Architectural Visualization: Residential Villa, Dubai",
    href: "/projects/architectural-visualization-residential-villa-dubai/",
    image: "/image/3D Visualization Banner.jpg",
    category: "Architecture",
    location: "Dubai",
  },
  {
    title: "Multi-Discipline BIM Modeling from Scratch: Public Safety Facility, Atlanta, GA",
    href: "/projects/multi-discipline-bim-modeling-for-public-sector-atlanta/",
    image: "/image/police3D Visualization Banner.jpg",
    category: "Architecture",
    location: "Atlanta, GA",
  },
  {
    title: "End-to-End Construction Documentation: Commercial Project, California",
    href: "/projects/construction-documentation-commercial-building-california/",
    image: "/image/3D Visualizaton_-Banner.jpg",
    category: "Architecture",
    location: "California",
  },
  {
    title: "HVAC BIM Coordination for School Building, Austin, TX",
    href: "/projects/hvac-bim-coordination-for-school-building-austin/",
    image: "/image/HVAC-Coordination (1).png",
    category: "MEP",
    location: "Austin, TX",
  },
  {
    title: "MEPF BIM Coordination for Industrial Office Building, Florida, USA",
    href: "/projects/mepf-bim-coordination-for-industrial-office-building/",
    image: "/image/MEPF-BIM-Coordination-for-Industrial-Office-Building-Florida,-USA.png",
    category: "MEP",
    location: "Florida, USA",
  },
  {
    title: "Clash-Free MEPF Coordination for 56-Unit Residential Development: Revere, MA",
    href: "/projects/mepf-coordination-for-affordable-housing/",
    image: "/image/Clash-Free-MEPF-Coordination-for-56-Unit-Residential-Development.png",
    category: "MEP",
    location: "Revere, MA",
  },
  {
    title: "Clash-Free BIM Modeling for Plant Room Refurbishment Project, UK",
    href: "/projects/clash-free-bim-modeling-for-mechanical-plant-rom/",
    image: "/image/Clash-Free-BIM-Modeling-for-Plant-Room-Refurbishment-Project.png",
    category: "MEP",
    location: "UK",
  },
  {
    title: "Coordinated Plumbing BIM Modeling for Sports Club Facility | Iowa, USA",
    href: "/projects/coordination-plumbing-bim-modeling-for-sport-club-facility-usa/",
    image: "/image/Coordinated-Plumbing-BIM-Modeling-for-Sports-Club-Facility.png",
    category: "MEP",
    location: "Iowa, USA",
  },
  {
    title: "Clash-Free BIM Coordination for Beachside Resort | Hawaii, USA",
    href: "/projects/bim-coordination-for-beachside-resort-hawaii/",
    image: "/image/Clash-Free-BIM-Coordination-for-Multi-Building-Beachside-Resort.png",
    category: "MEP",
    location: "Hawaii, USA",
  },
  {
    title: "High-Precision Site Utility Modeling for Large-Scale Residential Project | Caldwell, ID",
    href: "/projects/site-utility-modeilng-for-large-scale-residential-building-caldwell/",
    image: "/image/High-Precision-Site-Utility-Modeling-for-Large-Scale-Residence-Caldwell,-ID.png",
    category: "MEP",
    location: "Caldwell, ID",
  },
  {
    title: "BIM Coordination for a Large-Scale Mission-Critical Data Center in Malaysia",
    href: "/projects/data-center-bim-mep-coordination-malaysia/",
    image: "/image/data-center-bim-mep-coordination-malaysia.png",
    category: "MEP",
    location: "Malaysia",
  },
  {
    title: "LOD 400 ACS & MEPF Modeling with Clash Detection & Coordination",
    href: "/projects/architectural-structural-mepf-modeling-for-a-commercial-tower/",
    image: "/image/banner-design-1.png",
    category: "MEP",
  },
  {
    title: "LOD 400 ACS & MEPF Modeling with Shop Drawings & Clash Detection & Coordination",
    href: "/projects/mepf-model-with-clash-detection-coordination-for-defence-institute/",
    image: "/image/banner-design-2.png",
    category: "MEP",
  },
  {
    title: "CAD to BIM Modeling with MEP Coordination",
    href: "/projects/cad-to-bim-conversion-for-a-commercial-project-in-new-york/",
    image: "/image/feature-img-project-3.jpg",
    category: "MEP",
    location: "New York",
  },
  {
    title: "MEPF Modeling with Clash Detection & Coordination",
    href: "/projects/mepf-modeling-with-clash-detection-coordination-for-healthcare-institute/",
    image: "/image/feature-img-project-4.jpg",
    category: "MEP",
  },
  {
    title: "Architectural BIM & Rendering",
    href: "/projects/3d-modeling-renderings-for-convention-center-in-minnesota/",
    image: "/image/feature-img-project-5.jpg",
    category: "Architecture",
    location: "Minnesota",
  },
  {
    title: "Architecture Drafting & SD, DD, CD Stage Documentation",
    href: "/projects/schematic-design-to-construction-for-heritage-building-redevelopment/",
    image: "/image/feature-img-project-6.jpg",
    category: "Architecture",
  },
  {
    title: "Architectural BIM with Interior & Exterior Rendering",
    href: "/projects/architectural-and-structural-model-service-for-residential-project-usa/",
    image: "/image/feature-img-project-7.jpg",
    category: "Architecture",
    location: "USA",
  },
  {
    title: "Structural and Facade 3D Modeling with Clash Detection",
    href: "/projects/3d-modeling-clash-detection-bim-coordination-for-a-metro-station/",
    image: "/image/feature-img-project-8.jpg",
    category: "Architecture",
  },
  {
    title: "LOD 500 As-Built Modeling",
    href: "/projects/3d-bim-model-clash-detection-and-coordination-for-government-building/",
    image: "/image/feature-img-project-9.jpg",
    category: "Architecture",
  },
  {
    title: "CAD to BIM with LOD 400",
    href: "/projects/cad-to-bim-conversion-for-resort-adventure-park-uk/",
    image: "/image/feature-img-project-10.jpg",
    category: "Architecture",
    location: "UK",
  },
  {
    title: "CAD to BIM with LOD 300",
    href: "/projects/cad-to-bim-conversion-for-a-construction-project-scarborough/",
    image: "/image/feature-img-project-11.jpg",
    category: "Architecture",
    location: "Scarborough",
  },
  {
    title: "CAD to BIM",
    href: "/projects/cad-to-bim-conversion-for-residential-project-usa/",
    image: "/image/feature-img-project-12.jpg",
    category: "Architecture",
    location: "USA",
  },
  {
    title: "CAD to BIM with LOD 350",
    href: "/projects/3d-bim-modeling-with-clash-detection-coordination-for-residential-project/",
    image: "/image/feature-img-project-13.jpg",
    category: "Architecture",
  },
  {
    title: "LOD 300 MEPF Modeling",
    href: "/projects/cad-to-bim-modeling-with-clash-detection-coordination-for-commercial-project/",
    image: "/image/feature-img-project-14.jpg",
    category: "MEP",
  },
  {
    title: "LOD 300 MEPF Modeling with Clash Detection & Coordination",
    href: "/projects/3d-bim-model-clash-detection-coordination-for-nyc-school/",
    image: "/image/feature-img-project-15.jpg",
    category: "MEP",
    location: "NYC",
  },
  {
    title: "LOD 350 with Structural BIM Modeling & 4D Simulation",
    href: "/projects/structural-bim-modeling-quantity-take-off-for-road-infrastructure/",
    image: "/image/feature-img-project-16.jpg",
    category: "Architecture",
  },
].map(projectListingItem);
