/** All portfolio / project pages — used by resources Portfolio filter and /projects/ listing */

function projectIdFromHref(href: string) {
  return href.replace(/^\/(?:projects|portfolio)\//, "").replace(/\/$/, "");
}

function toPortfolioHref(href: string) {
  return href.replace(/^\/(?:projects|portfolio)\//, "/projects/");
}

export { toPortfolioHref };

function projectListingItem(
  project: {
    href: string;
    category: string;
    title: string;
    image: string;
    location?: string;
  },
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
    // New-to-old sort uses this; keep array newest-first (mixed MEP / Architecture).
    publishedTimestamp: 5000 - index,
    badgeLabel: "Portfolio",
  };
}

/**
 * Order = newest first. Interleave MEP + Architecture so /projects page 1 is not
 * all one category (sort is date/order based, not category grouped).
 */
export const allPortfolioProjects = [
  {
    title: "BIM Coordination for a Large-Scale Mission-Critical Data Center in Malaysia",
    href: "/projects/data-center-bim-mep-coordination-malaysia/",
    image: "/image/data-center-bim-mep-coordination-malaysia.png",
    category: "MEP",
    location: "Malaysia",
  },
  {
    title: "End-to-End Construction Documentation: Commercial Project, California",
    href: "/projects/construction-documentation-commercial-building-california/",
    image: "/image/3D Visualizaton_-Banner.jpg",
    category: "Architecture",
    location: "California",
  },
  {
    title: "High-Precision Site Utility Modeling for Large-Scale Residential Project | Caldwell, ID",
    href: "/projects/site-utility-modeilng-for-large-scale-residential-building-caldwell/",
    image: "/image/High-Precision-Site-Utility-Modeling-for-Large-Scale-Residence-Caldwell,-ID.png",
    category: "MEP",
    location: "Caldwell, ID",
  },
  {
    title: "Multi-Discipline BIM Modeling from Scratch: Public Safety Facility, Atlanta, GA",
    href: "/projects/multi-discipline-bim-modeling-for-public-sector-atlanta/",
    image: "/image/police3D Visualization Banner.jpg",
    category: "Architecture",
    location: "Atlanta, GA",
  },
  {
    title: "Clash-Free BIM Coordination for Beachside Resort | Hawaii, USA",
    href: "/projects/bim-coordination-for-beachside-resort-hawaii/",
    image: "/image/Clash-Free-BIM-Coordination-for-Multi-Building-Beachside-Resort.png",
    category: "MEP",
    location: "Hawaii, USA",
  },
  {
    title: "High-Fidelity Architectural Visualization: Residential Villa, Dubai",
    href: "/projects/architectural-visualization-residential-villa-dubai/",
    image: "/image/3D Visualization Banner.jpg",
    category: "Architecture",
    location: "Dubai",
  },
  {
    title: "Coordinated Plumbing BIM Modeling for Sports Club Facility | Iowa, USA",
    href: "/projects/coordination-plumbing-bim-modeling-for-sport-club-facility-usa/",
    image: "/image/Coordinated-Plumbing-BIM-Modeling-for-Sports-Club-Facility.png",
    category: "MEP",
    location: "Iowa, USA",
  },
  {
    title: "From Redlines to Renders: Multi-Family Apartment, Las Vegas",
    href: "/projects/multi-family-apartment-bim-visualization-las-vegas/",
    image: "/image/Architectural 3D Visualization_Banner.jpg",
    category: "Architecture",
    location: "Las Vegas, NV",
  },
  {
    title: "Clash-Free BIM Modeling for Plant Room Refurbishment Project, UK",
    href: "/projects/clash-free-bim-modeling-for-mechanical-plant-rom/",
    image: "/image/Clash-Free-BIM-Modeling-for-Plant-Room-Refurbishment-Project.png",
    category: "MEP",
    location: "UK",
  },
  {
    title: "Architectural BIM & Rendering",
    href: "/projects/3d-modeling-renderings-for-convention-center-in-minnesota/",
    image: "/image/3d-rendering-banner.jpg",
    category: "Architecture",
    location: "Minnesota",
  },
  {
    title: "Clash-Free MEPF Coordination for 56-Unit Residential Development: Revere, MA",
    href: "/projects/mepf-coordination-for-affordable-housing/",
    image: "/image/Clash-Free-MEPF-Coordination-for-56-Unit-Residential-Development.png",
    category: "MEP",
    location: "Revere, MA",
  },
  {
    title: "Architecture Drafting & SD, DD, CD Stage Documentation",
    href: "/projects/schematic-design-to-construction-for-heritage-building-redevelopment/",
    image: "/image/architectural-structureal-banner.jpg",
    category: "Architecture",
  },
  {
    title: "MEPF BIM Coordination for Industrial Office Building, Florida, USA",
    href: "/projects/mepf-bim-coordination-for-industrial-office-building/",
    image: "/image/MEPF-BIM-Coordination-for-Industrial-Office-Building-Florida,-USA.png",
    category: "MEP",
    location: "Florida, USA",
  },
  {
    title: "Architectural BIM with Interior & Exterior Rendering",
    href: "/projects/architectural-and-structural-model-service-for-residential-project-usa/",
    image: "/image/revit-model-front-view-banner.jpg",
    category: "Architecture",
    location: "USA",
  },
  {
    title: "HVAC BIM Coordination for School Building, Austin, TX",
    href: "/projects/hvac-bim-coordination-for-school-building-austin/",
    image: "/image/HVAC-Coordination (1).png",
    category: "MEP",
    location: "Austin, TX",
  },
  {
    title: "Structural and Facade 3D Modeling with Clash Detection",
    href: "/projects/3d-modeling-clash-detection-bim-coordination-for-a-metro-station/",
    image: "/image/architecture-structure-3d-models-banner.jpg",
    category: "Architecture",
  },
  {
    title: "LOD 400 ACS & MEPF Modeling with Clash Detection & Coordination",
    href: "/projects/architectural-structural-mepf-modeling-for-a-commercial-tower/",
    image: "/image/architectural-banner.jpg",
    category: "MEP",
  },
  {
    title: "LOD 500 As-Built Modeling",
    href: "/projects/bim-3d-model-clash-detection-and-coordination-for-government-building/",
    image: "/image/lod-500-as-built%20modeling-banner.jpg",
    category: "Architecture",
  },
  {
    title: "LOD 400 ACS & MEPF Modeling with Shop Drawings & Clash Detection & Coordination",
    href: "/projects/mepf-model-with-clash-detection-coordination-for-defence-institute/",
    image: "/image/architecture-mepf-3d-model-banner.jpg",
    category: "MEP",
  },
  {
    title: "CAD to BIM with LOD 400",
    href: "/projects/cad-to-bim-conversion-for-resort-adventure-park-uk/",
    image: "/image/cad-to-bom-lod-model-banner.jpg",
    category: "Architecture",
    location: "UK",
  },
  {
    title: "CAD to BIM Modeling with MEP Coordination",
    href: "/projects/cad-to-bim-conversion-for-a-commercial-project-in-new-york/",
    image: "/image/cad-to-bim-project-banner.jpg",
    category: "MEP",
    location: "New York",
  },
  {
    title: "CAD to BIM with LOD 300",
    href: "/projects/cad-to-bim-conversion-for-a-construction-project-scarborough/",
    image: "/image/cad-to-bom-lod-model-banner.jpg",
    category: "Architecture",
    location: "Scarborough",
  },
  {
    title: "MEPF Modeling with Clash Detection & Coordination",
    href: "/projects/mepf-modeling-with-clash-detection-coordination-for-healthcare-institute/",
    image: "/image/architecture-3d-model-banner.jpg",
    category: "MEP",
  },
  {
    title: "CAD to BIM",
    href: "/projects/cad-to-bim-conversion-for-residential-project-usa/",
    image: "/image/architectural-3d-modeling-banner.jpg",
    category: "Architecture",
    location: "USA",
  },
  {
    title: "LOD 300 MEPF Modeling",
    href: "/projects/cad-to-bim-modeling-with-clash-detection-coordination-for-commercial-project/",
    image: "/image/lod-300-mepf-banner.jpg",
    category: "MEP",
  },
  {
    title: "CAD to BIM with LOD 350",
    href: "/projects/3d-bim-modeling-with-clash-detection-coordination-for-residential-project/",
    image: "/image/cad-to-bim-lod-500-banners.jpg",
    category: "Architecture",
  },
  {
    title: "LOD 300 MEPF Modeling with Clash Detection & Coordination",
    href: "/projects/3d-bim-model-clash-detection-coordination-for-nyc-school/",
    image: "/image/structure-3d-model-banner.jpg",
    category: "MEP",
    location: "NYC",
  },
  {
    title: "LOD 350 with Structural BIM Modeling & 4D Simulation",
    href: "/projects/structural-bim-modeling-quantity-take-off-for-road-infrastructure/",
    image: "/image/4d-simulation-project-banner.jpg",
    category: "Architecture",
  },
].map(projectListingItem);
