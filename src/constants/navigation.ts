export type NavDropdownLink = {
  label: string;
  href: string;
};

export type CapabilityCategory = {
  id: string;
  label: string;
  services: NavDropdownLink[][];
};

/** @deprecated Use MAIN_NAV — kept for legacy Navbar component */
export const NAV_LINKS = [
  { label: "What We Do", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Resources", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const MAIN_NAV = [
  { label: "Home", href: "/" },
  { label: "Our Capabilities", href: "#capabilities", hasDropdown: "capabilities" as const },
  { label: "Engagement Model", href: "#engagement" },
  { label: "Resources", href: "#resources", hasDropdown: "resources" as const },
  { label: "About", href: "#about", hasDropdown: "about" as const },
  { label: "Contact Us", href: "#contact" },
] as const;

export const ABOUT_DROPDOWN_LINKS: NavDropdownLink[] = [
  { label: "About Us", href: "#about" },
  { label: "Leadership Team", href: "#leadership" },
  { label: "Careers", href: "#careers" },
  { label: "Life at VBS", href: "#life-at-vbs" },
];

export const RESOURCES_DROPDOWN_LINKS: NavDropdownLink[] = [
  { label: "Resources", href: "#resources" },
  { label: "Blog", href: "#blog" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Whitepapers", href: "#whitepapers" },
  { label: "Webinar", href: "#webinar" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "News & Updates", href: "#news" },
];

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: "architecture",
    label: "Architecture & Structure",
    services: [
      [
        { label: "Architectural BIM Modeling", href: "#" },
        { label: "Construction Documentation", href: "#" },
        { label: "Revit Family Creation", href: "#" },
        { label: "CAD Drafting", href: "#" },
        { label: "Permit Drawings", href: "#" },
      ],
      [
        { label: "2D to 3D Floor Plans", href: "#" },
        { label: "3D Visualization", href: "#" },
      ],
    ],
  },
  {
    id: "engineering",
    label: "Engineering & Construction",
    services: [
      [
        { label: "MEP BIM Modeling", href: "#" },
        { label: "Clash Detection & Coordination", href: "#" },
        { label: "Fabrication Drawings", href: "#" },
        { label: "Structural BIM Modeling", href: "#" },
      ],
      [
        { label: "Shop Drawings", href: "#" },
        { label: "As-Built Modeling", href: "#" },
      ],
    ],
  },
  {
    id: "reality-capture",
    label: "Reality Capture & Survey Companies",
    services: [
      [
        { label: "Scan to BIM", href: "#" },
        { label: "Point Cloud Processing", href: "#" },
        { label: "As-Built Documentation", href: "#" },
      ],
      [
        { label: "Survey to BIM", href: "#" },
        { label: "LOD Modeling", href: "#" },
      ],
    ],
  },
];
