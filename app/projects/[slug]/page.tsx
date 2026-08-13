import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPortfolioProjects } from "@/constants/projects-catalog-content";
import { loadProjectPage, projectPageSlugs } from "@/lib/project-pages-registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** Meta titles from virtual-building-studio (Gatsby) for matching project URLs. */
const PROJECT_SEO_TITLES: Record<string, string> = {
  "construction-documentation-commercial-building-california":
    "Construction Documentation Support for Commercial Building,CA",
  "data-center-bim-mep-coordination-malaysia":
    "Data Center BIM: LOD 350 MEP Coordination | Malaysia",
  "site-utility-modeilng-for-large-scale-residential-building-caldwell":
    "High-Precision Utility Modeling for Caldwell Residences",
  "multi-discipline-bim-modeling-for-public-sector-atlanta":
    "Multi-Discipline BIM Modeling, Public sector, Atlanta, GA",
  "mepf-coordination-for-affordable-housing":
    "Clash-Free MEPF Coordination for 56-Unit Residential Development: Revere, MA",
  "mepf-bim-coordination-for-industrial-office-building":
    "MEPF BIM Coordination for Industrial Office Building, Florida, USA",
  "hvac-bim-coordination-for-school-building-austin":
    "HVAC BIM Coordination for School Building, Austin, TX | Virtual Building Studio",
  "coordination-plumbing-bim-modeling-for-sport-club-facility-usa":
    "Coordinated Plumbing BIM Modeling for Sports Club Facility | Iowa, USA",
  "clash-free-bim-modeling-for-mechanical-plant-rom":
    "Clash-Free BIM Modeling for Plant Room Refurbishment Project, UK",
  "bim-coordination-for-beachside-resort-hawaii":
    "Clash-Free BIM Coordination for Beachside Resort | Hawaii, USA",
  "architectural-visualization-residential-villa-dubai":
    "Architectural Visualization for Residential Villa in Dubai ",
  "multi-family-apartment-bim-visualization-las-vegas":
    "Multi-Family Apartment BIM Visualization | Las Vegas, USA",
  "bim-3d-model-clash-detection-and-coordination-for-government-building":
    "3D BIM Model Clash Detection Coordination Government Building",
  "architectural-structural-mepf-modeling-for-a-commercial-tower":
    "Architectural, Structural and MEPF Modeling for a Commercial Tower",
  "mepf-model-with-clash-detection-coordination-for-defence-institute":
    "MEPF Model with Clash Detection Coordination for Defense Institute USA",
  "cad-to-bim-conversion-for-a-commercial-project-in-new-york":
    "CAD to BIM Conversion for a Commercial Project in New York",
  "mepf-modeling-with-clash-detection-coordination-for-healthcare-institute":
    "MEPF Modeling with Clash Detection Coordination - Healthcare",
  "3d-modeling-renderings-for-convention-center-in-minnesota":
    "3D Modeling Renderings for Convention Center in Minnesota",
  "schematic-design-to-construction-for-heritage-building-redevelopment":
    "Schematic Design to Construction for Heritage Building Redevelopment",
  "architectural-and-structural-model-service-for-residential-project-usa":
    "Architectural & Structural Model Service for Residential Project USA",
  "3d-modeling-clash-detection-bim-coordination-for-a-metro-station":
    "3D Model Clash Detection Coordination Metro Station Malaysia",
  "cad-to-bim-conversion-for-resort-adventure-park-uk":
    "CAD to BIM Conversion for Resort and Adventure Park UK- VBS",
  "cad-to-bim-conversion-for-a-construction-project-scarborough":
    "CAD to BIM Conversion for a Construction Project In Canada",
  "cad-to-bim-conversion-for-residential-project-usa":
    "CAD to BIM Conversion for Residential Project USA- VBS",
  "3d-bim-modeling-with-clash-detection-coordination-for-residential-project":
    "3D BIM Modeling with Clash Detection & Coordination for Residential Project",
  "cad-to-bim-modeling-with-clash-detection-coordination-for-commercial-project":
    "CAD to BIM with Clash Detection & Coordination for Commercial Project",
  "3d-bim-model-clash-detection-coordination-for-nyc-school":
    "3D BIM Model & Clash Detection and Coordination for NYC School",
  "structural-bim-modeling-quantity-take-off-for-road-infrastructure":
    "Structural BIM Modeling - Quantity Take-off for Public Road Infrastructure",
};

const PROJECT_SEO_DESCRIPTIONS: Record<string, string> = {
  "construction-documentation-commercial-building-california":
    "Explore how a California architecture firm scaled documentation for a 58,000 sq. ft. commercial project using BIM, QA workflows, and a dedicated team",
  "data-center-bim-mep-coordination-malaysia":
    "Discover how our team developed coordinated BIM models for a large-scale Malaysia data center spanning 235,750 sq. ft. over a two-year engagement.",
  "site-utility-modeilng-for-large-scale-residential-building-caldwell":
    "Discover how we delivered LOD 300 BIM modeling of site drainage and water main systems for a 251-unit residential development in 10 days.",
  "multi-discipline-bim-modeling-for-public-sector-atlanta":
    "Explore how our dedicated BIM team delivered fully coordinated Architectural and Structural models for 20,800 sq. ft. Public Service facility in Atlanta.",
  "mepf-coordination-for-affordable-housing":
    "Delivered precise LOD 350 BIM coordination across complex MEPF systems for a multi-story affordable housing project.",
  "mepf-bim-coordination-for-industrial-office-building":
    "Explore how we delivered clash-free LOD 350 Plumbing, HVAC, and Fire Protection Revit models for a 4-storey commercial office building in Florida, USA.",
  "hvac-bim-coordination-for-school-building-austin":
    "Discover how HVAC BIM coordination enabled clash-free execution for a 65,000 sq. ft. school project in Austin, TX, with improved timelines and cost savings",
  "coordination-plumbing-bim-modeling-for-sport-club-facility-usa":
    "Discover how our LOD 350 plumbing modeling and clash coordination resolved complex structural conflicts for a 38,000 sq. ft. sports facility in LeClaire, IA.",
  "clash-free-bim-modeling-for-mechanical-plant-rom":
    "Delivered precise LOD 300 BIM modeling and coordination for complex mechanical plant room systems within a tight two-week timeline.",
  "bim-coordination-for-beachside-resort-hawaii":
    "Explore how we delivered clash-free LOD 350 Architectural, Structural, and MEP Revit models for a 40,000 sq. ft. multi-building beachside resort in the USA.",
  "architectural-visualization-residential-villa-dubai":
    "Discover high-quality 3D interior and exterior rendering for a 10,000 sq. ft. Dubai villa. Photorealistic visuals, walkthroughs, and fast delivery.",
  "multi-family-apartment-bim-visualization-las-vegas":
    "Learn how a Nevada-based architectural firm improved coordination and design clarity using our documentation support and 3D visualization for a 225,624 sq.ft. project. ",
  "bim-3d-model-clash-detection-and-coordination-for-government-building":
    "Virtual Building Studio successfully delivered LOD 500 As-built model for a Government Building. Our services included inter-discipline clash detection and coordination, 5D quantity take-off, and CAD to BIM conversion.",
  "architectural-structural-mepf-modeling-for-a-commercial-tower":
    "Virtual Building Studio successfully delivered LOD 400 MEPF Modeling for Commercial Tower in India. Detailed models with clash detection, 4D simulation, and construction documentation for efficient project management and execution.",
  "mepf-model-with-clash-detection-coordination-for-defence-institute":
    "Virtual Building Studio successfully delivered LOD 400 Mechanical, Electrical, Plumbing, and Firefighting BIM modeling services for a Defense Institute in USA.",
  "cad-to-bim-conversion-for-a-commercial-project-in-new-york":
    "Virtual Building Studio provided CAD to BIM services, delivering a coordinated LOD 400 model integrating architectural, structural, and MEPF elements. Our detailed shop drawings, hanger drawings, and sleeve drawings ensured precise fabrication, installation, and coordination of MEPF systems.",
  "mepf-modeling-with-clash-detection-coordination-for-healthcare-institute":
    "Virtual Building Studio successfully delivered LOD 300 MEPF BIM modeling services for a Healthcare Institute in the USA. Our team conducted inter-discipline clash detection and coordination, creating detailed shop drawings and fabrication drawings.",
  "3d-modeling-renderings-for-convention-center-in-minnesota":
    "Using CAD to BIM conversion, Virtual Building Studio delivered a comprehensive LOD 450 BIM model for a venue, accurately representing its architecture and interior spaces. Our visually stunning renderings and immersive walkthrough video showcase the intricate design details.",
  "schematic-design-to-construction-for-heritage-building-redevelopment":
    "Virtual Building Studio delivered LOD 300 BIM modeling services for a Heritage Building Redevelopment. Our detailed 3D models facilitated effective coordination and documentation. Collaborative design changes, accurate quantity estimation, and high-quality renderings enhanced the project's success.",
  "architectural-and-structural-model-service-for-residential-project-usa":
    "Virtual Building Studio successfully delivered LOD 300 Architecture, Structure BIM modeling services for a Residential Project in the USA. Our comprehensive services included CAD to BIM conversion, rigorous clash detection, and interior and exterior rendering.",
  "3d-modeling-clash-detection-bim-coordination-for-a-metro-station":
    "Virtual Building Studio successfully delivered LOD 400 Architecture, Structure, and Facade BIM modeling services for a Metro Station in Malaysia. Our detailed 3D modelling facilitated coordination and clash detection, ensuring constructability and reducing conflicts on-site. Accurate material estimation supported cost planning and procurement.",
  "cad-to-bim-conversion-for-resort-adventure-park-uk":
    "Virtual Building Studio delivered CAD to BIM, LOD 400 Architecture BIM modeling for UK Resort & Adventure Park. Detailed model with parametric data for efficient..",
  "cad-to-bim-conversion-for-a-construction-project-scarborough":
    "Virtual Building Studio successfully delivered CAD to BIM LOD 300 model for Construction Project to Architecture, Structure, and MEPF. Detailed construction documents, accurate quantity extraction for cost estimation and procurement. Experience our expertise in streamlined project coordination.",
  "cad-to-bim-conversion-for-residential-project-usa":
    "Virtual Building Studio created a comprehensive 3D BIM model for a residential building Project in the USA, capturing detailed architectural components…",
  "3d-bim-modeling-with-clash-detection-coordination-for-residential-project":
    "Virtual Building Studio successfully delivered LOD 350 Architecture, Structure, and MEPF BIM modeling services for a Residential Township Project. Our expert team created a detailed model from CAD files, incorporating Clash Detection, Interdisciplinary Coordination, Construction Scheduling, and Project Tracking for enhanced project management.",
  "cad-to-bim-modeling-with-clash-detection-coordination-for-commercial-project":
    "Virtual Building Studio provided CAD to BIM LOD 300 MEP BIM modeling services for a UK-based Commercial Project. our detailed model incorporated clash detection",
  "3d-bim-model-clash-detection-coordination-for-nyc-school":
    "Virtual Building Studio successfully delivered LOD 300 MEPF BIM Modeling for a New York school project. Accurate spatial information, clash detection, and coordination resolution for precise construction planning and execution.",
  "structural-bim-modeling-quantity-take-off-for-road-infrastructure":
    "Virtual Building Studio successfully delivered LOD 350 Structure BIM Modeling for Public Road Infrastructure. Integrated 4D simulation for construction visualization and clash detection. Accurate quantity take-offs for cost estimation and resource planning.",
};

function projectMetaForSlug(slug: string) {
  return allPortfolioProjects.find((project) => project.id === slug);
}

export function generateStaticParams() {
  return projectPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectMetaForSlug(slug);
  const seoTitle = PROJECT_SEO_TITLES[slug];
  const seoDescription = PROJECT_SEO_DESCRIPTIONS[slug];

  return {
    title: seoTitle || project?.title || "Project Case Study | Virtual Building Studio",
    description:
      seoDescription ||
      project?.excerpt ||
      "Explore coordinated BIM and MEP project delivery from Virtual Building Studio.",
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const module = await loadProjectPage(slug);

  if (!module) {
    notFound();
  }

  const Page = module.default;

  return <Page />;
}
