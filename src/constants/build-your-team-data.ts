export type BuildYourTeamState = {
  type: string | null;
  stage: string | null;
  scope: string[];
  mode: "single" | "team" | null;
  profile: string | null;
  day: number | null;
  time: string | null;
};

export const BUILD_YOUR_TEAM_TOTAL_STEPS = 9;

export const BUILD_YOUR_TEAM_BOT_LABELS = [
  "Start your journey",
  "Project type",
  "Project stage",
  "Scope of work",
  "What do you need",
  "Matching your project…",
  "Select your profile",
  "Schedule your session",
  "All done",
] as const;

export const PROJECT_TYPES = [
  { id: "residential", l: "Residential", s: "Single & multi-family", i: "🏠" },
  { id: "commercial", l: "Commercial", s: "Office & retail", i: "🏢" },
  { id: "healthcare", l: "Healthcare", s: "Clinics & hospitals", i: "🏥" },
  { id: "mixed", l: "Mixed-use", s: "Hybrid developments", i: "🌆" },
  { id: "other", l: "Other", s: "Describe below", i: "📝" },
] as const;

export const PROJECT_STAGES = [
  { id: "concept", l: "Concept / SD", s: "Early ideation", i: "💡" },
  { id: "dd", l: "Design Dev", s: "DD phase", i: "📐" },
  { id: "cd", l: "Construction Doc", s: "CD & permit", i: "📋" },
  { id: "scan", l: "Existing / Scan", s: "As-built survey", i: "🔍" },
  { id: "other", l: "Other", s: "Describe below", i: "📝" },
] as const;

export const SCOPE_OPTIONS = [
  { id: "permit", l: "Permit Drawings" },
  { id: "cd", l: "Full CD Set" },
  { id: "bim", l: "BIM Modeling" },
  { id: "mep", l: "MEP BIM" },
  { id: "render", l: "Rendering / Walkthrough" },
  { id: "other", l: "Other" },
] as const;

export type SingleProfile = {
  id: string;
  ini: string;
  bg: string;
  name: string;
  role: string;
  pills: string[];
  tools: string;
  ai: string;
  speed: number;
  fit: number;
};

export type TeamProfile = {
  id: string;
  name: string;
  role: string;
  members: { i: string; bg: string }[];
  pills: string[];
  tools: string;
  ai: string;
  speed: number;
  fit: number;
  coord: number;
};

export const SINGLE_PROFILES: SingleProfile[] = [
  {
    id: "ps1",
    ini: "PC",
    bg: "#e5232b",
    name: "Permit & Code Specialist",
    role: "Individual · 8–12 yrs",
    pills: ["Zoning", "Permit Sets", "IBC Compliance"],
    tools: "Revit · AutoCAD · Bluebeam",
    ai: "Rule-based code validation · Drawing set acceleration",
    speed: 42,
    fit: 88,
  },
  {
    id: "ps2",
    ini: "BM",
    bg: "#089adf",
    name: "BIM Modeling Specialist",
    role: "Individual · 6–10 yrs",
    pills: ["3D Modeling", "Clash Detection", "LOD 300–400"],
    tools: "Revit · Navisworks · Dynamo",
    ai: "Model acceleration · Quantity extraction",
    speed: 38,
    fit: 82,
  },
  {
    id: "ps3",
    ini: "MC",
    bg: "#7c3aed",
    name: "MEP BIM Coordinator",
    role: "Individual · 8–14 yrs",
    pills: ["MEP Systems", "Coordination", "Shop Drawings"],
    tools: "Revit MEP · Navisworks",
    ai: "Clash detection assist · MEP documentation automation",
    speed: 45,
    fit: 85,
  },
  {
    id: "ps4",
    ini: "AD",
    bg: "#059669",
    name: "Arch Documentation Specialist",
    role: "Individual · 5–9 yrs",
    pills: ["Full Drawing Sets", "Sheet Org.", "Specifications"],
    tools: "Revit · AutoCAD · Bluebeam",
    ai: "Documentation QA · Template automation",
    speed: 36,
    fit: 79,
  },
];

export const TEAM_PROFILES: TeamProfile[] = [
  {
    id: "pt1",
    name: "Architecture + Structural + MEP",
    role: "Integrated · 3 disciplines",
    members: [
      { i: "AL", bg: "#e5232b" },
      { i: "SE", bg: "#089adf" },
      { i: "ME", bg: "#7c3aed" },
    ],
    pills: ["Full CD Set", "Cross-discipline", "Clash-aware"],
    tools: "Revit · Navisworks · AutoCAD",
    ai: "Clash detection · Model coordination acceleration",
    speed: 52,
    fit: 91,
    coord: 88,
  },
  {
    id: "pt2",
    name: "Architecture + MEP",
    role: "Integrated · 2 disciplines",
    members: [
      { i: "AL", bg: "#e5232b" },
      { i: "ME", bg: "#089adf" },
    ],
    pills: ["Permit Focus", "Mid-scale", "Faster Delivery"],
    tools: "Revit · AutoCAD · Bluebeam",
    ai: "Permit set acceleration · MEP documentation",
    speed: 44,
    fit: 85,
    coord: 78,
  },
  {
    id: "pt3",
    name: "Architecture + BIM Coordination",
    role: "Integrated · 2 disciplines",
    members: [
      { i: "AL", bg: "#e5232b" },
      { i: "BM", bg: "#059669" },
    ],
    pills: ["High-LOD Modeling", "Design Dev", "Parametric"],
    tools: "Revit · Dynamo · Navisworks",
    ai: "Model automation · Clash-aware review",
    speed: 40,
    fit: 80,
    coord: 82,
  },
];

export const LOADER_MESSAGES = [
  ["Analyzing your project…", "Processing inputs"],
  ["Mapping requirements…", "Evaluating scope + stage"],
  ["Filtering profiles…", "Finding best matches"],
  ["Almost ready…", "Preparing your options"],
] as const;

export const BOOKING_TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:30 PM",
  "4:00 PM",
  "5:00 PM",
] as const;

export const ORB_POSITIONS = [
  { t1: "top:-120px;right:-80px", t2: "bottom:-60px;left:-60px" },
  { t1: "top:-60px;right:-120px", t2: "bottom:-80px;left:20%" },
  { t1: "top:10%;right:-60px", t2: "bottom:0;left:-40px" },
  { t1: "top:-80px;right:30%", t2: "bottom:10%;left:-60px" },
  { t1: "top:20%;right:-100px", t2: "bottom:-40px;left:10%" },
  { t1: "top:-100px;right:-100px", t2: "bottom:-40px;left:40%" },
  { t1: "top:5%;right:-80px", t2: "bottom:5%;left:-60px" },
  { t1: "top:-60px;right:20%", t2: "bottom:-80px;left:-40px" },
  { t1: "top:20%;right:30%", t2: "bottom:20%;left:30%" },
] as const;
