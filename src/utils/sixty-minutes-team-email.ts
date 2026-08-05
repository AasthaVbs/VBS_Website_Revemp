import emailjs from "@emailjs/browser";
import {
  BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN,
  SIXTY_MINUTES_TEAM_EMAILJS,
  SIXTY_MINUTES_TEAM_LOGO_URL,
  SIXTY_MINUTES_TEAM_USER_SUMMARY_EMAILJS,
  fmtAreaSummary,
  fmtTimelineSummary,
  teamSizeUnitFor,
} from "@/constants/sixty-minutes-team-data";

const SIXTY_MINUTES_TEAM_PATH = "/60-minutes-team";

function assertSixtyMinutesTeamPageOnly() {
  if (typeof window === "undefined") return;
  const path = window.location.pathname || "";
  if (!path.includes(SIXTY_MINUTES_TEAM_PATH.replace(/\/$/, ""))) {
    throw new Error("60-minute team emails can only be sent from /60-minutes-team/.");
  }
}

function assertSixtyMinutesEmailConfig({
  serviceId,
  templateId,
  publicKey,
}: {
  serviceId: string;
  templateId: string;
  publicKey: string;
}) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS is not configured for 60-minute team.");
  }
  if (
    serviceId === "service_dc1yhpj" ||
    templateId === "template_zuhm80w" ||
    publicKey === "9tqkzFBrsFIAvsU_H"
  ) {
    throw new Error("60-minute team cannot use gated PDF EmailJS credentials.");
  }
}

const MAPBOX_TOKEN_FALLBACK = BUILD_YOUR_TEAM_MAPBOX_ACCESS_TOKEN || "";

function locationCoord(location: unknown, key: string) {
  if (location && typeof location === "object" && (location as Record<string, unknown>)[key] != null) {
    return (location as Record<string, unknown>)[key];
  }
  return "";
}

function locationLabel(location: unknown) {
  if (typeof location === "string") return location;
  if (location && typeof location === "object") {
    const loc = location as Record<string, unknown>;
    return String(loc.label || loc.name || loc.city || "");
  }
  return "";
}

function toEmailJsValue(value: unknown) {
  if (value == null) return "";
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
}

function formatDeliverables(deliverables: unknown) {
  if (Array.isArray(deliverables)) {
    return deliverables.filter(Boolean).join(", ");
  }
  return toEmailJsValue(deliverables);
}

function formatDeliverablesSummary(deliverables: unknown) {
  if (Array.isArray(deliverables)) {
    return deliverables.filter(Boolean).join(" · ");
  }
  return String(deliverables || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .join(" · ");
}

function buildInitials(firstName: string, lastName: string) {
  const first = String(firstName || "").trim();
  const last = String(lastName || "").trim();
  const initials = `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  return initials.replace(/[^A-Z]/g, "");
}

function resolveMapApiKey(override?: string) {
  const candidates = [
    override,
    process.env.NEXT_PUBLIC_GOOGLE_STATIC_MAPS_API_KEY,
    process.env.GATSBY_GOOGLE_STATIC_MAPS_API_KEY,
    process.env.GATSBY_GOOGLE_MAPS_API_KEY,
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    process.env.GATSBY_MAPBOX_ACCESS_TOKEN,
    MAPBOX_TOKEN_FALLBACK,
  ];

  for (const candidate of candidates) {
    const value = String(candidate ?? "").trim();
    if (value) return value;
  }

  return MAPBOX_TOKEN_FALLBACK;
}

function buildStaticMapUrl(lat: unknown, lng: unknown, accessToken: string) {
  const latVal = Number(lat);
  const lngVal = Number(lng);
  const token = String(accessToken || "").trim();

  if (!token || Number.isNaN(latVal) || Number.isNaN(lngVal)) return "";

  return (
    "https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/" +
    `pin-l+e5232b(${lngVal},${latVal})/${lngVal},${latVal},12,0/600x300@2x` +
    `?access_token=${encodeURIComponent(token)}`
  );
}

/** Internal lead notification — form + quick-image flows. */
export function buildSixtyMinutesTeamEmailParams({
  imagePassed = false,
  firstName = "",
  lastName = "",
  email = "",
  projectType = "",
  area = "",
  noOfFloors = "",
  projectStage = "",
  teamSize = "",
  deliverables = "",
  location = "",
  image = "",
  mapApiKey,
}: {
  imagePassed?: boolean | string;
  firstName?: string;
  lastName?: string;
  email?: string;
  projectType?: unknown;
  area?: unknown;
  noOfFloors?: unknown;
  projectStage?: unknown;
  teamSize?: unknown;
  deliverables?: unknown;
  location?: unknown;
  image?: string;
  mapApiKey?: string;
}) {
  const hasImage = imagePassed === true || imagePassed === "true";
  const trimmedFirstName = toEmailJsValue(firstName);
  const trimmedLastName = toEmailJsValue(lastName);
  const resolvedMapApiKey = resolveMapApiKey(mapApiKey);
  const latitude = toEmailJsValue(locationCoord(location, "lat"));
  const longitude = toEmailJsValue(locationCoord(location, "lng"));

  const params: Record<string, string> = {
    imagePassed: toEmailJsValue(imagePassed),
    firstName: trimmedFirstName,
    lastName: trimmedLastName,
    email: toEmailJsValue(email),
    initials: buildInitials(trimmedFirstName, trimmedLastName),
    projectType: toEmailJsValue(projectType),
    area: toEmailJsValue(area),
    noOfFloors: toEmailJsValue(noOfFloors),
    projectStage: toEmailJsValue(projectStage),
    teamSize: toEmailJsValue(teamSize),
    teamSizeUnit: teamSizeUnitFor(teamSize),
    deliverables: formatDeliverables(deliverables),
    projectLocation: toEmailJsValue(locationLabel(location)),
    latitude,
    longitude,
    mapApiKey: resolvedMapApiKey,
    staticMapUrl: buildStaticMapUrl(latitude, longitude, resolvedMapApiKey),
  };

  if (hasImage) {
    params.image = toEmailJsValue(image);
  }

  return params;
}

/** User-facing project summary — form flow only. */
export function buildSixtyMinutesTeamUserSummaryEmailParams({
  firstName = "",
  lastName = "",
  email = "",
  projectType = "",
  area = "",
  noOfFloors = "",
  projectLocation = "",
  projectStage = "",
  teamSize = "",
  timeline = "",
  deliverables = "",
  logoUrl = SIXTY_MINUTES_TEAM_LOGO_URL,
}: {
  firstName?: string;
  lastName?: string;
  email?: string;
  projectType?: unknown;
  area?: unknown;
  noOfFloors?: unknown;
  projectLocation?: unknown;
  projectStage?: unknown;
  teamSize?: unknown;
  timeline?: unknown;
  deliverables?: unknown;
  logoUrl?: string;
}) {
  return {
    firstName: toEmailJsValue(firstName),
    lastName: toEmailJsValue(lastName),
    email: toEmailJsValue(email),
    logoUrl: toEmailJsValue(logoUrl),
    projectType: toEmailJsValue(projectType),
    area: fmtAreaSummary(area),
    noOfFloors: toEmailJsValue(noOfFloors),
    projectLocation: toEmailJsValue(projectLocation),
    projectStage: toEmailJsValue(projectStage),
    teamSize: toEmailJsValue(teamSize),
    teamSizeUnit: teamSizeUnitFor(teamSize),
    timeline: fmtTimelineSummary(timeline),
    deliverables: formatDeliverablesSummary(deliverables),
  };
}

export async function sendSixtyMinutesTeamEmail(templateParams: Record<string, string>) {
  assertSixtyMinutesTeamPageOnly();
  const { serviceId, templateId, publicKey } = SIXTY_MINUTES_TEAM_EMAILJS;
  assertSixtyMinutesEmailConfig({ serviceId, templateId, publicKey });

  emailjs.init(publicKey);
  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}

export async function sendSixtyMinutesTeamUserSummaryEmail(templateParams: Record<string, string>) {
  assertSixtyMinutesTeamPageOnly();
  const { serviceId, templateId, publicKey } = SIXTY_MINUTES_TEAM_USER_SUMMARY_EMAILJS;
  assertSixtyMinutesEmailConfig({ serviceId, templateId, publicKey });

  emailjs.init(publicKey);
  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}
