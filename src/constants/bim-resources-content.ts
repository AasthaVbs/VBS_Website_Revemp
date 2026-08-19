export type BimResourcesHighlight = {
  title: string;
  body: string;
  extraBody?: string;
};

export type BimResourcesRelatedLink = {
  label: string;
  title: string;
  href: string;
};

export type BimResourcePageContent = {
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  highlightsHeading: string | null;
  highlights: BimResourcesHighlight[];
  closing?: string;
  additionalHeading: string;
  relatedLinks: BimResourcesRelatedLink[];
  form: {
    title: string;
    description: string;
    submitLabel: string;
  };
  /** Sent in gated PDF EmailJS as download_link */
  downloadUrl: string;
  /** Sent in gated PDF EmailJS as page */
  pageId: string;
  meta: {
    title: string;
    description: string;
  };
};

const DEFAULT_FORM = {
  title: "Download Now!",
  description:
    "After filling up this form, please check your Inbox/Spam for an email from Virtual Building Studio at VBS.",
  submitLabel: "Submit Now",
} as const;

const MEP_SHOP_RELATED: BimResourcesRelatedLink[] = [
  {
    label: "Services:-",
    title: "MEP Shop Drawing Services",
    href: "/bim-modeling-services/shop-fabrication-drawings",
  },
  {
    label: "Blog:-",
    title: "A Comprehensive Guide for HVAC Duct Shop Drawings",
    href: "/blog/ultimate-guide-for-hvac-duct-shop-drawings",
  },
];

/** Shared download-page copy — used by `/bim-resources/revit-families`. */
export const bimResourcesContent: BimResourcePageContent = {
  title: "2,200+ Revit Families for Your Design Projects",
  description:
    "Elevate your Revit design projects with a diverse collection of over 2,200 Revit families spanning various categories such as architecture, furniture, MEPF, and more. Boost your creative potential today.",
  heroImage: "/image/revit-families.jpg",
  heroImageAlt: "Revit Families for Your Design Projects download box mockup",
  highlightsHeading: "Key Highlights:",
  highlights: [
    {
      title: "Diverse Categories:",
      body: "This extensive library encompasses a wide range of Revit families, making it a valuable resource for architects, designers, and engineers. Whether you’re working on architectural projects, interior design, or mechanical systems, you’ll find families to suit your needs.",
    },
    {
      title: "Free Download:",
      body: "Access these 2,200+ Revit families for free and take your design projects to the next level without breaking the bank. It’s a cost-effective way to enhance your Revit capabilities.",
    },
    {
      title: "Unleash Your Creativity:",
      body: "These families are designed to empower your creative vision. Transform your design process and let your imagination run wild. With a vast selection of families at your fingertips, there are no limits to what you can achieve.",
    },
    {
      title: "Customization Available:",
      body: "Can’t find the specific family you need? No worries! Connect with us, and we’ll create custom families tailored to your unique design requirements. We’re here to help you bring your distinct design vision to life.",
      extraBody:
        "Enhance your Revit design projects by downloading this impressive collection of families. Your creative potential knows no bounds – unlock it today! If you need families not included in our collection, connect with us, and we can develop them for you. We’re dedicated to helping you realize your unique design vision.",
    },
  ],
  additionalHeading: "Check Out Our Additional Content",
  relatedLinks: [
    {
      label: "Services:-",
      title: "Revit Family Creation Services",
      href: "/bim-modeling-services/revit-family-creation",
    },
    {
      label: "Blog:-",
      title: "Importance of Revit Families Creation: Process and Benefits",
      href: "/blog/revit-family",
    },
  ],
  form: { ...DEFAULT_FORM },
  downloadUrl:
    "https://drive.google.com/file/d/1tqb2x4YAe1YaALsc5OR8V8EvzCpaechS/view?usp=sharing",
  pageId: "Revit_Families_Download",
  meta: {
    title: "2,200+ Revit Families for Your Design Projects | Virtual Building Studio",
    description:
      "Download 2,200+ free Revit families spanning architecture, furniture, MEPF, and more. Elevate your BIM design projects with Virtual Building Studio.",
  },
};

export const bimResourceRevitFamiliesContent: BimResourcePageContent = {
  ...bimResourcesContent,
  meta: {
    title: "[Download FREE] 2,200+ Revit Families for Your Design Projects",
    description:
      "Elevate Revit design projects with 2,200+ Revit families across architecture, furniture, MEPF, and more. Find versatile BIM content for every project.",
  },
};

export const bimResourceMechanicalPipingContent: BimResourcePageContent = {
  title: "Optimized Mechanical/Piping Estimations with FREE Contractor Templates",
  description:
    "Enhance your mechanical and piping contracting process with our FREE estimation templates. Achieve precision, efficiency, and a competitive edge in your bids for mechanical and piping projects.",
  heroImage: "/image/mechanical-piping-estimations-templates.jpg",
  heroImageAlt: "Mechanical and piping estimation templates",
  highlightsHeading: "Key Highlights:",
  highlights: [
    {
      title: "Save Time and Effort:",
      body: "Our contractor estimation templates are designed to streamline the estimation process, reducing the time and effort needed to prepare precise bids. These templates are user-friendly and suitable for Mechanical, Plumbing, and General Contractors.",
    },
    {
      title: "Precision and Accuracy:",
      body: "Supported by advanced software tools such as QuoteSoft and Trimble AutoBid, our templates ensure pinpoint accuracy in your estimates. Bid with confidence, knowing that your calculations are reliable.",
    },
    {
      title: "Customizable for Your Projects:",
      body: "Every project has unique requirements. Our templates are easily adaptable to suit the specifics of your project, allowing you to customize estimates based on job requirements. This flexibility sets you apart from the competition",
    },
    {
      title: "Expert Guidance:",
      body: "When you download our templates, you gain access to our experienced Estimation Specialists. They are proficient in using advanced software and can assist you in fine-tuning your estimates for optimal results.",
    },
    {
      title: "Competitive Edge:",
      body: "Success in the contracting industry is highly competitive. Our templates and expert support give you the edge you need to secure more projects and boost your business.",
    },
    {
      title: "Revolutionize Your Estimation Process:",
      body: "The right estimation process can significantly impact the success of your projects. Download our templates and take the first step towards revolutionizing your estimation process. Be at the forefront of innovation in your industry.",
    },
  ],
  closing:
    "Don’t miss this opportunity to simplify and enhance your estimation process for Mechanical/Piping projects. Download our FREE contractor templates today and start bidding with confidence.",
  additionalHeading: "Check Out Our Additional Content",
  relatedLinks: MEP_SHOP_RELATED,
  form: { ...DEFAULT_FORM },
  downloadUrl:
    "https://docs.google.com/spreadsheets/d/1sIndwaWkAJHrPAIR7NPuLRMKTwygpj93/edit?usp=sharing&ouid=106789663677260500907&rtpof=true&sd=true",
  pageId: "Mechanical_Estimation_Template_Download",
  meta: {
    title: "[Download FREE] Mechanical/Piping Estimation Templates for Contractors",
    description:
      "Enhance your mechanical and piping contracting process with our FREE estimation templates. Achieve precision, efficiency, and a competitive..",
  },
};

export const bimResourcePlumbingEstimationContent: BimResourcePageContent = {
  title: "Streamlined Plumbing Estimations with FREE Contractor Templates",
  description:
    "Simplify your plumbing contracting process with our FREE estimation templates. Achieve precision, efficiency, and a competitive edge in your plumbing bids.",
  heroImage: "/image/plumbing-estimation-templates.jpg",
  heroImageAlt: "Plumbing estimation templates",
  highlightsHeading: "Key Highlights:",
  highlights: [
    {
      title: "Save Time and Effort:",
      body: "Our contractor estimation templates are designed to streamline the estimation process, reducing the time and effort needed to prepare precise bids. These templates are user-friendly and suitable for Mechanical, Plumbing, and General Contractors.",
    },
    {
      title: "Precision and Accuracy:",
      body: "Supported by advanced software tools such as QuoteSoft and Trimble AutoBid, our templates ensure pinpoint accuracy in your estimates. Bid with confidence, knowing that your calculations are reliable.",
    },
    {
      title: "Customizable for Your Projects:",
      body: "Every project has unique requirements. Our templates are easily adaptable to suit the specifics of your project, allowing you to customize estimates based on job requirements. This flexibility sets you apart from the competition ",
    },
    {
      title: "Expert Guidance:",
      body: "When you download our templates, you gain access to our experienced Estimation Specialists.They are proficient in using advanced software and can assist you in fine-tuning your estimates for optimal results.",
    },
    {
      title: "Competitive Edge:",
      body: "Success in the contracting industry is highly competitive. Our templates and expert support give you the edge you need to secure more projects and boost your business.",
    },
    {
      title: "Revolutionize Your Estimation Process:",
      body: "The right estimation process can significantly impact the success of your projects. Download our templates and take the first step towards revolutionizing your estimation process. Be at the forefront of innovation in your industry.",
    },
  ],
  closing:
    "Don’t miss this opportunity to simplify and enhance your estimation process for Plumbing projects. Download our FREE contractor templates today and start bidding with confidence. ",
  additionalHeading: "Check Out Our Additional Content",
  relatedLinks: MEP_SHOP_RELATED,
  form: { ...DEFAULT_FORM },
  downloadUrl:
    "https://docs.google.com/spreadsheets/d/1SKoUBWXlv0UrXP7aXhl8HTJBvpXKN4sy/edit?usp=sharing&ouid=106789663677260500907&rtpof=true&sd=true",
  pageId: "Plumbing_Estimation_Template_Download",
  meta: {
    title: "[Download FREE] Plumbing Estimation Templates for Contractors",
    description:
      "Simplify your plumbing contracting process with our FREE Plumbing estimation templates. Achieve precision, efficiency, and a competitive edge in your plumbing bids.",
  },
};

export const bimResourceHvacEstimationContent: BimResourcePageContent = {
  title: "[Download FREE] HVAC Estimation Templates for Contractors",
  description:
    "Streamline your contracting process with our FREE HVAC estimation templates. Achieve accuracy, efficiency, and competitive advantage in your bids.",
  heroImage: "/image/hvac-estimation-templates.jpg",
  heroImageAlt: "HVAC estimation templates",
  highlightsHeading: "Key Highlights:",
  highlights: [
    {
      title: "Save Time and Effort:",
      body: "Our contractor estimation templates are designed to streamline the estimation process, reducing the time and effort needed to prepare precise bids. These templates are user-friendly and suitable for Mechanical, Plumbing, and General Contractors.",
    },
    {
      title: "Precision and Accuracy:",
      body: "Supported by advanced software tools such as QuoteSoft and Trimble AutoBid, our templates ensure pinpoint accuracy in your estimates. Bid with confidence, knowing that your calculations are reliable.",
    },
    {
      title: "Customizable for Your Projects:",
      body: "Every project has unique requirements. Our templates are easily adaptable to suit the specifics of your project, allowing you to customize estimates based on job requirements. This flexibility sets you apart from the competition",
    },
    {
      title: "Expert Guidance:",
      body: "When you download our templates, you gain access to our experienced Estimation Specialists. They are proficient in using advanced software and can assist you in fine-tuning your estimates for optimal results.",
    },
    {
      title: "Competitive Edge:",
      body: "Success in the contracting industry is highly competitive. Our templates and expert support give you the edge you need to secure more projects and boost your business.",
    },
    {
      title: "Revolutionize Your Estimation Process:",
      body: "The right estimation process can significantly impact the success of your projects. Download our templates and take the first step towards revolutionizing your estimation process. Be at the forefront of innovation in your industry.",
    },
  ],
  closing:
    "Don’t miss this opportunity to simplify and enhance your estimation process for HVAC, Plumbing, and Mechanical/Piping projects. Download our FREE contractor templates today and start bidding with confidence.",
  additionalHeading: "Check Out Our Additional Content",
  relatedLinks: MEP_SHOP_RELATED,
  form: { ...DEFAULT_FORM },
  downloadUrl:
    "https://drive.google.com/file/d/1DCdJ2yJ0shJ505d_tvgEq3VnCYFAr58B/view?usp=sharing",
  pageId: "HVAC_Template_Download",
  meta: {
    title: "[Download FREE] HVAC Estimation Templates for Contractors",
    description:
      "Streamline your contracting process with our Download FREE HVAC estimation templates. Achieve accuracy, efficiency, and competitive advantage in your bids.",
  },
};

export const bimResourceBimExecutionPlanContent: BimResourcePageContent = {
  title: "[Download FREE] BIM Execution Plan (BEP)",
  description:
    "This BIM Execution Plan (BEP) is your comprehensive guide to achieving excellence in construction. It’s meticulously prepared by Virtual Building Studio (VBS) and offers a streamlined approach to project management, enhanced collaboration among stakeholders, and unmatched precision in project execution. Here’s what you will find in the BEP:",
  heroImage: "/image/bim-execution-plan.jpg",
  heroImageAlt: "BIM Execution Plan download",
  highlightsHeading: null,
  highlights: [
    {
      title: "Terms & Abbreviation:",
      body: "A glossary of key terms and abbreviations for clear communication.",
    },
    {
      title: "Introduction:",
      body: "An overview of the BEP’s purpose and importance.",
    },
    {
      title: "Project Information:",
      body: "Details about your specific project, milestones, and organizational structure.",
    },
    {
      title: "BIM Process Management:",
      body: "Insights into managing BIM processes, coordination meetings, and progress reporting.",
    },
    {
      title: "BIM Implementation Plan:",
      body: "Strategies for implementing BIM, including project settings, model segregation, and clash detection procedures.",
    },
    {
      title: "BIM Standard & Specification:",
      body: "Information about industry standards and specifications.",
    },
    {
      title: "BIM Guidelines & Codes:",
      body: "Specific guidelines and codes relevant to the project.",
    },
    {
      title: "Model Quality Assurance & Control:",
      body: "Procedures for maintaining the quality and accuracy of BIM models.",
    },
    {
      title: "BIM Deliverables:",
      body: "Information on the BIM deliverables to be produced during the project.",
    },
    {
      title: "Appendix:",
      body: "Additional reference materials that support the BEP.",
    },
  ],
  closing:
    "These sections collectively serve as a roadmap for successful construction project execution using Building Information Modeling (BIM) techniques and principles.",
  additionalHeading: "Check Out Our Additional Content",
  relatedLinks: MEP_SHOP_RELATED,
  form: { ...DEFAULT_FORM },
  downloadUrl:
    "https://drive.google.com/file/d/1rbFLh6pTadneZskih8TXilDXOYT8LTJT/view?usp=sharing",
  pageId: "BIM_Execution_Plan_Template_Download",
  meta: {
    title: "[Download FREE] BIM Execution Plan (BEP)",
    description:
      "Elevate construction excellence with a BIM Execution Plan (BEP) guide that streamlines project management, improves collaboration, and ensures precision.",
  },
};

export const bimResourceDynamoScriptsContent: BimResourcePageContent = {
  title: "Top 10 Dynamo Scripts for Revit",
  description:
    "Explore these top 10 Dynamo scripts to enhance your Autodesk Revit experience. These scripts offer valuable solutions to common design and project management challenges, making your workflow more efficient and productive.",
  heroImage: "/image/dynamo-scripts-for-revit.jpg",
  heroImageAlt: "Dynamo scripts for Revit",
  highlightsHeading: null,
  highlights: [
    {
      title: "Script 1:",
      body: "Unique Number with Prefix — This script lets you add unique numbering sequences to chosen parameters, offering precise data control for better project organization.",
    },
    {
      title: "Script 2:",
      body: "Join Geometry from Interference Check — Using Revit’s interference check report, Dynamo seamlessly merges two elements, ensuring they integrate without conflicts.",
    },
    {
      title: "Script 3:",
      body: "Opening by Interference Check for Objects — Create precise openings around pipes and objects, improving design accuracy and integration.",
    },
    {
      title: "Script 4:",
      body: "Resolve Overlap Elements Warning — Dynamo resolves conflicts between overlapping elements, keeping your design clean and efficient.",
    },
    {
      title: "Script 5:",
      body: "Resolve Room Missing Warning — Effortlessly remove unnecessary rooms, streamlining project management by extracting them from schedules.",
    },
    {
      title: "Script 6:",
      body: "Slightly Off-Axis Warning Resolved — Dynamo corrects slightly off-axis elements, ensuring alignment and a seamless project outcome.",
    },
    {
      title: "Script 7:",
      body: "Imported CAD Deletion — Efficiently remove imported CAD files, decluttering your workspace and simplifying your design process.",
    },
    {
      title: "Script 8:",
      body: "Identical Instances Eliminated — Dynamo eliminates duplicate elements, reducing identical instance warnings and ensuring a cleaner project.",
    },
    {
      title: "Script 9:",
      body: "Room Dimension Enhancement — This script enhances room dimensions with size information, going beyond basic measurements.",
    },
    {
      title: "Script 10:",
      body: "Workset Creation — Easily generate worksets using Excel data, streamlining project management and collaboration.",
    },
  ],
  additionalHeading: "Check Out Our Additional Content",
  relatedLinks: [
    {
      label: "Services:-",
      title: "CAD to BIM Modeling Services",
      href: "/bim-modeling-services/cad-to-bim",
    },
    {
      label: "Blog:-",
      title: "CAD to BIM Services: Empowering the AEC Industry",
      href: "/blog/cad-to-bim-services-aec-industry",
    },
  ],
  form: { ...DEFAULT_FORM },
  downloadUrl:
    "https://drive.google.com/file/d/1XoK1hqr6A7M9wvjJaT-phP7--1mq_50o/view?usp=drive_link",
  pageId: "Dynamo_Script_Download",
  meta: {
    title: "[Download FREE] Top 10 Dynamo Scripts for Revit",
    description:
      "Boost your Revit experience with these 10 essential Dynamo scripts for better project organization, efficiency, automation, and productivity.",
  },
};

export const bimResourcesPageHero = {
  tag: "Resources",
  titleLead: "Resources & ",
  titleAccent: "Industry Insights",
  description:
    "Explore expert perspectives, practical guides, case studies, and the latest trends in Scan to BIM, BIM modeling, MEP coordination, and digital project delivery.",
  ctaLabel: "Contact Us",
  imageAlt: "BIM resources and industry insights on a laptop at an architecture desk",
} as const;

export type BimResourceHubItem = {
  id: string;
  href: string;
  title: string;
  excerpt: string;
  image: string;
  service: "Architecture Firms" | "MEP Engineering Firms" | "Reality Capture & Survey Companies";
  sortOrder: number;
};

/** Listing cards for `/bim-resources` — one item per download detail page. */
export const bimResourceHubItems: BimResourceHubItem[] = [
  {
    id: "revit-families",
    href: "/bim-resources/revit-families",
    title: bimResourceRevitFamiliesContent.title,
    excerpt: bimResourceRevitFamiliesContent.description,
    image: bimResourceRevitFamiliesContent.heroImage,
    service: "Architecture Firms",
    sortOrder: 6,
  },
  {
    id: "mechanical-piping",
    href: "/bim-resources/mechanical-piping-estimations-templates",
    title: bimResourceMechanicalPipingContent.title,
    excerpt: bimResourceMechanicalPipingContent.description,
    image: bimResourceMechanicalPipingContent.heroImage,
    service: "MEP Engineering Firms",
    sortOrder: 5,
  },
  {
    id: "plumbing-estimation",
    href: "/bim-resources/download-plumbing-estimation-templates",
    title: bimResourcePlumbingEstimationContent.title,
    excerpt: bimResourcePlumbingEstimationContent.description,
    image: bimResourcePlumbingEstimationContent.heroImage,
    service: "MEP Engineering Firms",
    sortOrder: 4,
  },
  {
    id: "hvac-estimation",
    href: "/bim-resources/hvac-estimation-templates",
    title: bimResourceHvacEstimationContent.title,
    excerpt: bimResourceHvacEstimationContent.description,
    image: bimResourceHvacEstimationContent.heroImage,
    service: "MEP Engineering Firms",
    sortOrder: 3,
  },
  {
    id: "bim-execution-plan",
    href: "/bim-resources/bim-execution-plan",
    title: bimResourceBimExecutionPlanContent.title,
    excerpt: bimResourceBimExecutionPlanContent.description,
    image: bimResourceBimExecutionPlanContent.heroImage,
    service: "Architecture Firms",
    sortOrder: 2,
  },
  {
    id: "dynamo-scripts",
    href: "/bim-resources/dynamo-scripts-for-revit",
    title: bimResourceDynamoScriptsContent.title,
    excerpt: bimResourceDynamoScriptsContent.description,
    image: bimResourceDynamoScriptsContent.heroImage,
    service: "Architecture Firms",
    sortOrder: 1,
  },
];
