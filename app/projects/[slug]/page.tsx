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
    "HVAC BIM Coordination for School Building, Austin, TX",
  "coordination-plumbing-bim-modeling-for-sport-club-facility-usa":
    "Coordinated Plumbing BIM Modeling for Sports Club Facility | Iowa, USA",
  "clash-free-bim-modeling-for-mechanical-plant-rom":
    "Clash-Free BIM Modeling for Plant Room Refurbishment Project, UK",
  "bim-coordination-for-beachside-resort-hawaii":
    "Clash-Free BIM Coordination for Beachside Resort | Hawaii, USA",
  "architectural-visualization-residential-villa-dubai":
    "Architectural Visualization for Residential Villa in Dubai",
  "multi-family-apartment-bim-visualization-las-vegas":
    "Multi-Family Apartment BIM Visualization | Las Vegas, USA",
  "bim-3d-model-clash-detection-and-coordination-for-government-building":
    "Clash Detection, Coordination & 3D Modeling | Infrastructure",
  "3d-bim-model-clash-detection-and-coordination-for-government-building":
    "Clash Detection, Coordination & 3D Modeling | Infrastructure",
  "architectural-structural-mepf-modeling-for-a-commercial-tower":
    "Architecture, Structure & MEPF Modeling | Commercial Building",
  "mepf-model-with-clash-detection-coordination-for-defence-institute":
    "Shop Drawings, Clash Detection & MEPF Modeling | Commercial",
  "cad-to-bim-conversion-for-a-commercial-project-in-new-york":
    "CAD to BIM Conversion & MEP Modeling | Commercial Building",
  "mepf-modeling-with-clash-detection-coordination-for-healthcare-institute":
    "Clash Detection, MEPF Coordination & Modeling | Healthcare",
  "3d-modeling-renderings-for-convention-center-in-minnesota":
    "3D Modeling & Rendering | Commercial Building",
  "schematic-design-to-construction-for-heritage-building-redevelopment":
    "Architecture, Structure & 3D Modeling | Historical Building",
  "architectural-and-structural-model-service-for-residential-project-usa":
    "Architecture, Structure 3D Model & Exterior Rendering | Residential",
  "3d-modeling-clash-detection-bim-coordination-for-a-metro-station":
    "Clash Detection & Structural Facade 3D Model | Infrastructure",
  "cad-to-bim-conversion-for-resort-adventure-park-uk":
    "CAD to BIM Conversion & 3D Modelling | Commercial Building",
  "cad-to-bim-conversion-for-a-construction-project-scarborough":
    "Architecture, Structure & MEPF Modeling | Residential Building",
  "cad-to-bim-conversion-for-residential-project-usa":
    "Cad to BIM Conversion & 3D Modeling | Residential Building",
  "3d-bim-modeling-with-clash-detection-coordination-for-residential-project":
    "Clash Detection, Coordination & 3D Modeling | Residential",
  "cad-to-bim-modeling-with-clash-detection-coordination-for-commercial-project":
    "CAD to BIM Conversion & 3D Modeling | Commercial Building",
  "3d-bim-model-clash-detection-coordination-for-nyc-school":
    "Clash Detection, Coordination & 3D BIM Modeling | Commercial Building",
  "structural-bim-modeling-quantity-take-off-for-road-infrastructure":
    "Structural 3D BIM Modeling | Infrastructure Building",
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
    "Learn how a Nevada-based architectural firm improved coordination and design clarity using our documentation support and 3D visualization for a 225,624 sq.ft. project.",
  "bim-3d-model-clash-detection-and-coordination-for-government-building":
    "Explore completed infrastructure projects featuring Clash Detection, Coordination & 3D Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "3d-bim-model-clash-detection-and-coordination-for-government-building":
    "Explore completed infrastructure projects featuring Clash Detection, Coordination & 3D Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "architectural-structural-mepf-modeling-for-a-commercial-tower":
    "Explore successful commercial projects with Architecture, Structural & MEPF BIM by top 1% architects and engineers. Onboard in 1 days with a 30-day guarantee.",
  "mepf-model-with-clash-detection-coordination-for-defence-institute":
    "Explore completed commercial projects with Shop Drawings, Clash Detection & MEPF Modeling by top 1% architects and engineers. Onboard in 1 days.",
  "cad-to-bim-conversion-for-a-commercial-project-in-new-york":
    "Explore completed commercial projects featuring CAD to BIM Conversion & MEPF Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "mepf-modeling-with-clash-detection-coordination-for-healthcare-institute":
    "Explore completed healthcare projects featuring Clash Detection, Coordination & MEPF Modeling by top 1% architects and engineers. Onboard in 1 days.",
  "3d-modeling-renderings-for-convention-center-in-minnesota":
    "Explore completed commercial projects featuring 3D Modeling & Rendering by top 1% architects and engineers. Onboard in just 1 days with a 30-day guarantee.",
  "schematic-design-to-construction-for-heritage-building-redevelopment":
    "Explore completed historical building projects featuring Architecture, Structural & 3D Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "architectural-and-structural-model-service-for-residential-project-usa":
    "Explore completed residential projects featuring Architecture, Structure, 3D Modeling & Exterior Rendering by top 1% architects and engineers. Onboard in 1 days.",
  "3d-modeling-clash-detection-bim-coordination-for-a-metro-station":
    "Explore completed infrastructure projects featuring Clash Detection, Coordination & Structural Facade 3D Modeling by top 1% architects and engineers. Onboard in 1 days.",
  "cad-to-bim-conversion-for-resort-adventure-park-uk":
    "Explore completed infrastructure projects featuring CAD to BIM Conversion & 3D Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "cad-to-bim-conversion-for-a-construction-project-scarborough":
    "Explore completed residential projects featuring Architecture, Structure & MEPF Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "cad-to-bim-conversion-for-residential-project-usa":
    "Explore completed residential projects featuring CAD to BIM Conversion & 3D Modeling by top 1% architects and engineers. Onboard in just 3 days.",
  "3d-bim-modeling-with-clash-detection-coordination-for-residential-project":
    "Explore completed residential projects featuring Clash Detection, Coordination & 3D Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "cad-to-bim-modeling-with-clash-detection-coordination-for-commercial-project":
    "Explore completed commercial projects featuring CAD to BIM Conversion & 3D Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "3d-bim-model-clash-detection-coordination-for-nyc-school":
    "Explore completed commercial projects featuring Clash Detection, Coordination & 3D BIM Modeling by top 1% architects and engineers. Onboard in just 1 days.",
  "structural-bim-modeling-quantity-take-off-for-road-infrastructure":
    "Explore completed infrastructure projects featuring Structural 3D BIM Modeling by top 1% architects and engineers. Onboard in just 1 days with a 30-day guarantee.",
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
