export type NavDropdownLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CapabilityCategory = {
  id: string;
  label: string;
  href?: string;
  services: NavDropdownLink[][];
};

/** Next.js route map — aligned with Gatsby URLs via redirects in next.config.ts */
export const ROUTES = {
  home: "/",
  capabilities: "/#capabilities",
  engagement: "/engagement-models",
  resources: "/resources",
  about: "/about-us",
  ourExpertise: "/our-expertise",
  contact: "/contact-us",
  blog: "/blog",
  webinar: "/webinar",
  leadership: "/leadership",
  careers: "/careers",
  lifeAtVbs: "/life-at-vbs",
  testimonials: "/testimonials",
  projects: "/projects",
  successStories: "/projects",
  mepServices: "/mep-bim-services",
  mepBimUsa: "/mep-bim-services-USA",
  mepModeling: "/mep-bim-services/mep-bim-modeling-services",
  scanToBimServices: "/scan-to-bim-services",
  architectureServices: "/architecture-services",
  dedicatedResource: "/build-your-team",
  dedicatedTeam: "/build-your-team",
  bimModeling: "/bim-modeling-services",
  bimModelingUsa: "/bim-modeling-services-usa",
  cadToBim: "/bim-modeling-services/cad-to-bim",
  cadToBimConversion: "/cad-to-bim-conversion-services",
  revitFamilies: "/bim-modeling-services/revit-family-creation",
  architecturalBim: "/bim-modeling-services/architectural-bim-services",
  architecturalBimUsa: "/architectural-bim-services-usa",
  fourDBimScheduling: "/4d-bim-scheduling-simulation-services",
  structuralBim: "/structural-bim-services",
  schematicDesign: "/schematic-design-services",
  designDevelopment: "/design-development-services",
  permitDrawing: "/permit-drawing-services",
  zoningAnalysis: "/zoning-analysis-services",
  constructionDocumentation: "/construction-documentation-services",
  shopDrawings: "/bim-modeling-services/shop-fabrication-drawings",
  cadDrafting: "/cad-drafting-services",
  twoDDrafting: "/cad-drafting-services/2d-drafting-services",
  pdfToCad: "/cad-drafting-services/pdf-to-cad-conversion-services",
  architecturalDrafting: "/architectural-drafting-services",
  architecturalDraftingUsa: "/architectural-drafting-services-usa",
  revitArchitecturalDrafting: "/revit-architectural-drafting-services",
  cadDraftingUsa: "/cad-drafting-services-usa",
  visualization: "/3d-visualization-services",
  bimForDataCenter: "/bim-for-data-center",
  threeDRendering: "/3d-rendering-services",
  threeDRenderingUsa: "/3d-rendering-services-usa",
  mepCadDrafting: "/cad-drafting-services",
  mepShopDrawings: "/mep-bim-services/mep-shop-drawing-services",
  mepSpoolDrawings: "/mep-bim-services/mep-spool-drawing-services",
  mepClashDetection: "/mep-bim-services/mep-clash-detection-services",
  mepCoordination: "/mep-bim-services/mep-coordination-services",
  mepRevitFamily: "/mep-bim-services/mep-revit-family-creation-services",
  mepBom: "/mep-bim-services/bill-of-material-services",
  mepPreBid: "/mep-bim-services/pre-bid-estimation-services",
  fiveDBimCost: "/mep-bim-services",
  mepDataCenter: "/mep-bim-services/mep-data-center-services",
  pointCloudToBim: "/point-cloud-to-bim-services",
  scanToCad: "/scan-to-cad-services",
  asBuiltModeling: "/as-built-modeling-services",
  asBuiltDrafting: "/as-built-drafting-services",
  floorPlan: "/floor-plan-services",
  laserScanning: "/bim-modeling-services/laser-scan-to-bim",
  whitepaper: "/whitepaper",
  whitepaperMepDc: "/whitepaper/mep-coordination-data-centers-bim-workflows",
  whitepaperHiddenCost: "/whitepaper/hidden-cost-of-late-stage-mep-coordination-failures",
  aiaConference: "/aia-conference-events",
  practice: "/practice",
  sixtyMinutesTeam: "/60-minutes-team",
  privacy: "/privacy-policy",
  terms: "/terms-of-use",
  cookies: "/cookie-policy",
  scanToBimPointCloud: "/point-cloud-to-bim-services",
  scanToBimAsBuilt: "/as-built-modeling-services",
  scanToBimArchitectural: "/architectural-scan-to-bim-services",
  scanToBimMepf: "https://www.scantobim.online/mepf-scan-to-bim-services/",
} as const;

export const MAIN_NAV = [
  { label: "Our Capabilities", href: ROUTES.capabilities, hasDropdown: "capabilities" as const },
  { label: "Engagement Model", href: ROUTES.engagement },
  { label: "Resources", href: ROUTES.resources, hasDropdown: "resources" as const },
  { label: "About", href: ROUTES.about, hasDropdown: "about" as const },
  { label: "Contact Us", href: ROUTES.contact },
] as const;

export const ABOUT_DROPDOWN_LINKS: NavDropdownLink[] = [
  { label: "About VBS", href: ROUTES.about },
  { label: "Our Expertise", href: ROUTES.ourExpertise },
  { label: "Leadership Team", href: ROUTES.leadership },
  { label: "Careers", href: ROUTES.careers },
  { label: "Life at VBS", href: ROUTES.lifeAtVbs },
];

export const RESOURCES_DROPDOWN_LINKS: NavDropdownLink[] = [
  { label: "Case Studies", href: ROUTES.projects },
  { label: "Blog", href: ROUTES.blog },
  { label: "White Paper", href: ROUTES.whitepaper },
  { label: "Webinar", href: ROUTES.webinar },
  { label: "Testimonials", href: ROUTES.testimonials },
];

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: "architecture",
    label: "Architecture & Structure",
    href: ROUTES.architectureServices,
    services: [
      [
        { label: "BIM Modeling Services", href: ROUTES.bimModeling },
        { label: "Architecture BIM Services", href: ROUTES.architecturalBim },
        { label: "Architecture Drafting", href: ROUTES.architecturalDrafting },
        { label: "Schematic Design Services", href: ROUTES.schematicDesign },
        { label: "Design Development Services", href: ROUTES.designDevelopment },
        { label: "Permit Drawing Services", href: ROUTES.permitDrawing },
        { label: "Zoning Analysis Services", href: ROUTES.zoningAnalysis },
        { label: "Construction Documentation Services", href: ROUTES.constructionDocumentation },
        { label: "Revit Architectural Drafting", href: ROUTES.revitArchitecturalDrafting },
        { label: "CAD Drafting", href: ROUTES.cadDrafting },
        { label: "2D Drafting", href: ROUTES.twoDDrafting },
        { label: "As-Built Drafting Services", href: ROUTES.asBuiltDrafting },
        { label: "Floor Plan Services", href: ROUTES.floorPlan },
      ],
      [
        { label: "PDF to CAD", href: ROUTES.pdfToCad },
        { label: "CAD to BIM", href: ROUTES.cadToBim },
        { label: "Revit Family Creation", href: ROUTES.revitFamilies },
        { label: "3D Visualization", href: ROUTES.visualization },
        { label: "BIM for Data Center", href: ROUTES.bimForDataCenter },
        { label: "3D Rendering", href: ROUTES.threeDRendering },
        { label: "3D Rendering Services USA", href: ROUTES.threeDRenderingUsa },
      ],
    ],
  },
  {
    id: "engineering",
    label: "Engineering & Construction",
    href: ROUTES.mepServices,
    services: [
      [
        { label: "MEP BIM Modeling Services", href: ROUTES.mepModeling },
        { label: "MEP Revit Family Creation Services", href: ROUTES.mepRevitFamily },
        { label: "MEP Shop Drawing Services", href: ROUTES.mepShopDrawings },
        { label: "MEP Spool Drawing Services", href: ROUTES.mepSpoolDrawings },
        { label: "Bill of Material (BOM) Services", href: ROUTES.mepBom },
      ],
      [
        { label: "Pre-Bid Estimation Services", href: ROUTES.mepPreBid },
        { label: "MEP Clash Detection Services", href: ROUTES.mepClashDetection },
        { label: "MEP Coordination Services", href: ROUTES.mepCoordination },
        { label: "MEP Data Center Services", href: ROUTES.mepDataCenter },
      ],
    ],
  },
  {
    id: "reality-capture",
    label: "Reality Capture & Survey Companies",
    href: ROUTES.scanToBimServices,
    services: [
      [
        { label: "Point Cloud to BIM", href: ROUTES.scanToBimPointCloud },
        { label: "Scan to CAD", href: ROUTES.scanToCad },
        { label: "As-Built Modeling", href: ROUTES.scanToBimAsBuilt },
        {
          label: "Architectural Scan to BIM",
          href: ROUTES.scanToBimArchitectural,
        },
        { label: "Laser Scan to BIM", href: ROUTES.laserScanning },
      ],
      [{ label: "MEP Scan to BIM", href: ROUTES.scanToBimMepf, external: true }],
    ],
  },
];

export const VBS_FOOTER_URLS = {
  capabilities: ROUTES.capabilities,
  aboutUs: ROUTES.about,
  contactUs: ROUTES.contact,
  blog: ROUTES.blog,
  webinar: ROUTES.webinar,
  leadershipTeam: ROUTES.leadership,
  careers: ROUTES.careers,
  lifeAtVbs: ROUTES.lifeAtVbs,
  dedicatedTeam: ROUTES.engagement,
  projects: ROUTES.projects,
  successStories: ROUTES.successStories,
  testimonials: ROUTES.testimonials,
  bimResources: ROUTES.resources,
  whitepaper: ROUTES.whitepaper,
  privacyPolicy: ROUTES.privacy,
  termsOfUse: ROUTES.terms,
  cookiePolicy: ROUTES.cookies,
};

/** @deprecated Use MAIN_NAV */
export const NAV_LINKS = [
  { label: "What We Do", href: ROUTES.capabilities },
  { label: "Success Stories", href: ROUTES.successStories },
  { label: "Resources", href: ROUTES.resources },
  { label: "About Us", href: ROUTES.about },
  { label: "Contact Us", href: ROUTES.contact },
];
