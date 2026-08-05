// @ts-nocheck — ported from Gatsby vbs-build-your-team-data.js

export const SIXTY_MINUTES_TEAM_BOOKING_URL =
  "https://booknow.virtualbuildingstudio.com/#/4689125000003512002";

/** Intro hero — YouTube video ID (https://youtu.be/lQFR-Cs-0Qs) */
export const SIXTY_MINUTES_INTRO_VIDEO_ID = "lQFR-Cs-0Qs";

/** Internal lead notification (wire to EmailJS / Zoho / API). */
export const SIXTY_MINUTES_TEAM_NOTIFY_EMAIL = "contact@virtualbuildingstudio.com";

/** Mapbox — set NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN in env (do not hardcode tokens). */
export const BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
  process.env.GATSBY_MAPBOX_ACCESS_TOKEN ||
  "";

/** Quick-submit — tap opens device camera on mobile */
export const SIXTY_MINUTES_QUICK_SUBMIT = {
  label: "Tap to open camera",
  hint: "Take a photo, review it, then tap Submit — no form required.",
  maxImageBytes: 10 * 1024 * 1024,
};

/** Cloudflare worker — quick-submit image upload before EmailJS send. */
export const SIXTY_MINUTES_IMAGE_UPLOAD_URL =
  process.env.NEXT_PUBLIC_SIXTY_MINUTES_IMAGE_UPLOAD_URL ||
  process.env.GATSBY_SIXTY_MINUTES_IMAGE_UPLOAD_URL ||
  "https://website-image-backend.virtualbuldingstudio.workers.dev/api/upload";

/** Google Static Maps — EmailJS template map preview; falls back to Mapbox token. */
export const SIXTY_MINUTES_TEAM_MAP_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_STATIC_MAPS_API_KEY ||
  process.env.GATSBY_GOOGLE_STATIC_MAPS_API_KEY ||
  process.env.GATSBY_GOOGLE_MAPS_API_KEY ||
  BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN;

/** @deprecated Use SIXTY_MINUTES_TEAM_MAP_API_KEY */
export const SIXTY_MINUTES_TEAM_GOOGLE_STATIC_MAPS_API_KEY = SIXTY_MINUTES_TEAM_MAP_API_KEY;

/** EmailJS — user summary (form flow only). */
export const SIXTY_MINUTES_TEAM_USER_SUMMARY_EMAILJS = {
  serviceId:
    process.env.NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_SERVICE_ID ||
    process.env.GATSBY_SIXTY_MINUTES_USER_SUMMARY_SERVICE_ID ||
    "service_l2rd21s",
  templateId:
    process.env.NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_TEMPLATE_ID ||
    process.env.GATSBY_SIXTY_MINUTES_USER_SUMMARY_TEMPLATE_ID ||
    "template_a20ff2v",
  publicKey:
    process.env.NEXT_PUBLIC_SIXTY_MINUTES_USER_SUMMARY_PUBLIC_KEY ||
    process.env.GATSBY_SIXTY_MINUTES_USER_SUMMARY_PUBLIC_KEY ||
    "7Zz8mADGX0_LQnMYH",
};

export const SIXTY_MINUTES_TEAM_LOGO_URL =
  "https://www.virtualbuildingstudio.com/static/vbs-logo-white.png";

/** EmailJS — 60-minute team submit (form + quick camera photo). */
export const SIXTY_MINUTES_TEAM_EMAILJS = {
  serviceId:
    process.env.NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_SERVICE_ID ||
    process.env.GATSBY_SIXTY_MINUTES_TEAM_SERVICE_ID ||
    process.env.GATSBY_SIXTY_MINUTES_QUICK_SUBMIT_SERVICE_ID ||
    "service_8vrhp0u",
  templateId:
    process.env.NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_TEMPLATE_ID ||
    process.env.GATSBY_SIXTY_MINUTES_TEAM_TEMPLATE_ID ||
    process.env.GATSBY_SIXTY_MINUTES_QUICK_SUBMIT_TEMPLATE_ID ||
    "template_1s5k8h6",
  publicKey:
    process.env.NEXT_PUBLIC_SIXTY_MINUTES_QUICK_SUBMIT_PUBLIC_KEY ||
    process.env.GATSBY_SIXTY_MINUTES_TEAM_PUBLIC_KEY ||
    process.env.GATSBY_SIXTY_MINUTES_QUICK_SUBMIT_PUBLIC_KEY ||
    "hAnNwo2uM0YHl8sO4",
};

export const SUBMIT_MODES = [
  {
    id: "form",
    label: "Fill the form",
    sub: "Get summary by email",
    icon: "ti-mail",
  },
  {
    id: "image",
    label: "Quick submit",
    sub: "Take a photo to send",
    icon: "ti-camera",
  },
];

/** Screens: 0 intro, 1–7 form steps, 8 thank you */
export const BUILD_YOUR_TEAM_TOTAL_SCREENS = 9;
export const BUILD_YOUR_TEAM_FORM_STEPS = 7;

export const BUILD_YOUR_TEAM_BOT_LABELS = [
  "Start your project journey",
  "Project type",
  "Project details",
  "Project stage",
  "Your deliverables",
  "Finding your team",
  "Team & timeline",
  "Your details",
  "All set",
];

export const PROJECT_TYPES = [
  { id: "residential", l: "Residential", s: "Single & multi-family", i: "🏠" },
  { id: "commercial", l: "Commercial", s: "Office & retail", i: "🏢" },
  { id: "healthcare", l: "Healthcare", s: "Clinics & hospitals", i: "🏥" },
  { id: "mixed", l: "Mixed-use", s: "Hybrid developments", i: "🌆" },
  { id: "hospitality", l: "Hospitality", s: "Hotels & resorts", i: "🏨" },
  { id: "other", l: "Other", s: "Describe below", i: "📝" },
];

export const FLOOR_OPTIONS = ["1", "2", "3", "4–6", "7–15", "15+"];

export const PROJECT_STAGES = [
  {
    id: "sd",
    l: "Schematic Design (SD)",
    d: "Early design concepts & massing",
    i: "ti-bulb",
    popular: false,
  },
  {
    id: "dd",
    l: "Design Development (DD)",
    d: "Refined design & systems",
    i: "ti-ruler-measure",
    popular: false,
  },
  {
    id: "cd",
    l: "Construction Documents (CD)",
    d: "Full permit & build documentation",
    i: "ti-file-stack",
    popular: false,
  },
  {
    id: "permit",
    l: "SD Through Permit Set",
    d: "End-to-end: concept to permit-ready",
    i: "ti-rocket",
    popular: true,
  },
];

export const DELIVERABLES_BY_STAGE = {
  sd: [
    "Site Plan",
    "Floor Plans",
    "Roof Plan",
    "Building Massing",
    "Preliminary Elevations",
    "Area Calculations",
  ],
  dd: [
    "Refined Floor Plans",
    "Building Sections",
    "Detailed Elevations",
    "Wall Types",
    "Door & Window Schedules",
    "Outline Specifications",
  ],
  cd: [
    "Full CD Set",
    "Construction Details",
    "Permit Drawings",
    "Structural Coordination",
    "MEP Coordination",
    "Code Compliance Sheets",
  ],
  permit: [
    "Site Plan",
    "Floor Plans",
    "Building Massing",
    "Refined Elevations",
    "Full CD Set",
    "Permit Drawings",
    "Code Compliance",
    "Area Calculations",
  ],
};

/** area bracket -> stage -> {1,3,5} weeks; null = N/A */
export const TEAM_TIMELINES = {
  "0-5K": {
    sd: { 1: "3 wks", 3: "1 wk", 5: null },
    dd: { 1: "4 wks", 3: "2 wks", 5: null },
    cd: { 1: "6 wks", 3: "3 wks", 5: null },
    permit: { 1: "12 wks", 3: "5 wks", 5: null },
  },
  "5-15K": {
    sd: { 1: "6 wks", 3: "2 wks", 5: "1 wk" },
    dd: { 1: "8 wks", 3: "3 wks", 5: "2 wks" },
    cd: { 1: "10 wks", 3: "5 wks", 5: "3 wks" },
    permit: { 1: "20 wks", 3: "8 wks", 5: "6 wks" },
  },
  "15-30K": {
    sd: { 1: "8 wks", 3: "3 wks", 5: "2 wks" },
    dd: { 1: "10 wks", 3: "4 wks", 5: "3 wks" },
    cd: { 1: "14 wks", 3: "7 wks", 5: "4 wks" },
    permit: { 1: "28 wks", 3: "12 wks", 5: "8 wks" },
  },
};

export const AREA_BRACKET_LABELS = {
  "0-5K": "0–5K sq ft",
  "5-15K": "5K–15K sq ft",
  "15-30K": "15K–30K sq ft",
};

export const TEAM_AVATARS = {
  1: [{ i: "A", bg: "#e5232b" }],
  3: [
    { i: "A", bg: "#e5232b" },
    { i: "S", bg: "#089adf" },
    { i: "M", bg: "#7c3aed" },
  ],
  5: [
    { i: "A", bg: "#e5232b" },
    { i: "S", bg: "#089adf" },
    { i: "M", bg: "#7c3aed" },
    { i: "B", bg: "#059669" },
    { i: "D", bg: "#f59e0b" },
  ],
};

export const AUTO_ANALYSIS_STEPS = [
  { t: "Reviewing your project details", s: "ti-adjustments" },
  { t: "Matching scope to your stage", s: "ti-route" },
  { t: "Calculating team size options", s: "ti-users-group" },
  { t: "Estimating delivery timelines", s: "ti-clock" },
  { t: "Preparing team recommendations", s: "ti-users" },
];

export const AUTO_ANALYSIS_MESSAGES = [
  ["Finding your team…", "Reviewing your project details"],
  ["Matching team options…", "Based on your scope and area"],
  ["Calculating timelines…", "Estimating delivery for your bracket"],
  ["Almost ready…", "Preparing your team recommendations"],
];

export const ORB_POSITIONS = [
  { a: "top:-130px;right:-90px", b: "bottom:-70px;left:-70px" },
  { a: "top:-60px;right:-130px", b: "bottom:-80px;left:20%" },
  { a: "top:10%;right:-60px", b: "bottom:0;left:-40px" },
  { a: "top:-80px;right:30%", b: "bottom:10%;left:-60px" },
  { a: "top:20%;right:-100px", b: "bottom:-40px;left:10%" },
  { a: "top:-100px;right:-100px", b: "bottom:-40px;left:40%" },
  { a: "top:5%;right:-80px", b: "bottom:5%;left:-60px" },
  { a: "top:-60px;right:20%", b: "bottom:-80px;left:-40px" },
  { a: "top:20%;right:30%", b: "bottom:20%;left:30%" },
];

export function bracketForArea(area) {
  if (area <= 5000) return "0-5K";
  if (area <= 15000) return "5-15K";
  return "15-30K";
}

export function fmtArea(value) {
  if (value >= 100000) return "1 lakh sq ft";
  return `${value.toLocaleString("en-IN")} sq ft`;
}

export function fmtAreaSummary(value) {
  const num = Number(value);
  if (Number.isNaN(num)) return String(value ?? "");
  if (num >= 100000) return "1,00,000";
  return num.toLocaleString("en-US");
}

export function teamSizeUnitFor(teamSize) {
  return Number(teamSize) === 1 ? "member" : "members";
}

export function fmtTimelineSummary(timeline) {
  const value = String(timeline || "").trim();
  if (!value) return "";
  return value.replace(/\bwks\b/gi, "weeks").replace(/\bwk\b/gi, "week");
}

export function areaSliderPct(value) {
  return `${((value - 500) / (100000 - 500)) * 100}%`;
}
