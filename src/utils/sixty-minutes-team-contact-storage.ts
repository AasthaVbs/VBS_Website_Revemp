import { SIXTY_MINUTES_TEAM_BOOKING_URL } from "@/constants/sixty-minutes-team-data";

const STORAGE_KEY = "vbs-sixty-minutes-team-contact";

export function loadSixtyMinutesTeamContact() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;

    return {
      firstName: String(parsed.firstName || "").trim(),
      lastName: String(parsed.lastName || "").trim(),
      email: String(parsed.email || "").trim(),
      mobile: String(parsed.mobile || "").trim(),
    };
  } catch {
    return null;
  }
}

export function saveSixtyMinutesTeamContact({
  firstName = "",
  lastName = "",
  email = "",
  mobile = "",
}: {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
} = {}) {
  if (typeof window === "undefined") return;

  const data = {
    firstName: String(firstName).trim(),
    lastName: String(lastName).trim(),
    email: String(email).trim(),
    mobile: String(mobile).trim(),
  };

  if (!data.firstName && !data.lastName && !data.email && !data.mobile) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore quota / private browsing
  }
}

/** Booking portal expects First Name, Last Name, Email, Contact Number query params. */
export function buildSixtyMinutesTeamBookingUrl({
  firstName = "",
  lastName = "",
  email = "",
  mobile = "",
}: {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
} = {}) {
  const trimmedFirst = String(firstName).trim();
  const trimmedLast = String(lastName).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMobile = String(mobile).trim();

  if (!trimmedFirst && !trimmedLast && !trimmedEmail && !trimmedMobile) {
    return SIXTY_MINUTES_TEAM_BOOKING_URL;
  }

  const parts = [];
  if (trimmedFirst) parts.push(`First%20Name=${encodeURIComponent(trimmedFirst)}`);
  if (trimmedLast) parts.push(`Last%20Name=${encodeURIComponent(trimmedLast)}`);
  if (trimmedEmail) parts.push(`Email=${encodeURIComponent(trimmedEmail)}`);
  if (trimmedMobile) parts.push(`Contact%20Number=${encodeURIComponent(trimmedMobile)}`);

  return `${SIXTY_MINUTES_TEAM_BOOKING_URL}?${parts.join("&")}`;
}

export function resolveSixtyMinutesTeamBookingUrl({
  firstName = "",
  lastName = "",
  email = "",
  mobile = "",
}: {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
} = {}) {
  const stored = loadSixtyMinutesTeamContact();

  return buildSixtyMinutesTeamBookingUrl({
    firstName: firstName || stored?.firstName || "",
    lastName: lastName || stored?.lastName || "",
    email: email || stored?.email || "",
    mobile: mobile || stored?.mobile || "",
  });
}
