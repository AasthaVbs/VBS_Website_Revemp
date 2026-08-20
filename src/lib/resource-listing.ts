import { blogMepSlugs, blogServiceCategoryMap } from "@/constants/blogs-page-content";
import { ACS_RESOURCES_SERVICE_FILTER } from "@/constants/shared-sections";
import { buildSanityWebinarListingItems } from "@/lib/sanity-listing";
import {
  WEBINAR_SERVICE_ARCHITECTURE,
  WEBINAR_SERVICE_MEP,
  supplementalWebinarListingItems,
  webinarArchitectureSlugs,
  webinarHrefBySlug,
  webinarMepSlugs,
} from "@/constants/webinar-page-content";

export const resourceAllServicesLabel = "All Services";

export type ResourceFeedItem = {
  id?: string | null;
  type: "Blog" | "Webinar" | "Case Study" | "White Paper" | string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
  sortKey: number;
  service?: string | null;
  services?: string[] | null;
  categoryTitles?: string[];
  delivery?: string | null;
};

export type ResourceServiceFilterInput = {
  type?: string | null;
  id?: string | null;
  href?: string | null;
  service?: string | null;
  services?: string[] | null;
  categoryTitles?: string[];
};

function startOfDay(date: Date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function resolveListingReference(buildTimeOrDate?: Date | string | number) {
  if (buildTimeOrDate instanceof Date) return buildTimeOrDate;
  if (buildTimeOrDate) return new Date(buildTimeOrDate);
  return new Date();
}

export function isWebinarUpcoming(eventDate: Date | string | null | undefined, reference = new Date()) {
  if (!eventDate) return false;
  const event = eventDate instanceof Date ? eventDate : new Date(eventDate);
  if (Number.isNaN(event.getTime())) return false;
  return startOfDay(event).getTime() > startOfDay(reference).getTime();
}

export function resolveWebinarDelivery(eventDate: Date | string | null | undefined, reference = new Date()) {
  return isWebinarUpcoming(eventDate, reference) ? "Upcoming" : "On Demand";
}

export function isAllResourceServicesFilter(selectedService?: string | null) {
  return !selectedService || selectedService === resourceAllServicesLabel;
}

export function normalizeResourceServiceFilter(targetService?: string | null) {
  if (
    targetService === ACS_RESOURCES_SERVICE_FILTER ||
    targetService === "Reality Capture & Survey Companies"
  ) {
    return ACS_RESOURCES_SERVICE_FILTER;
  }
  return targetService;
}

function isAcsResourceServiceFilter(selectedService?: string | null) {
  return normalizeResourceServiceFilter(selectedService) === ACS_RESOURCES_SERVICE_FILTER;
}

function normalizeBlogSlug(slug?: string | null) {
  if (!slug) return null;
  return String(slug).replace(/^\/+|\/+$/g, "").split("/").pop() || null;
}

function getBlogSlugFromItem(item: { id?: string | null; href?: string | null }) {
  return normalizeBlogSlug(item.id) || normalizeBlogSlug(item.href?.replace(/^.*\/blogs?\//, ""));
}

function isMepCategoryTitle(title: string) {
  const normalized = title.trim().toLowerCase();
  return normalized === "mep" || normalized.startsWith("mep ");
}

export function isMepBlogItem(item: { id?: string | null; href?: string | null; categoryTitles?: string[] }) {
  const slug = getBlogSlugFromItem(item);
  if (slug && blogMepSlugs.has(slug)) return true;
  return (item.categoryTitles || []).some(isMepCategoryTitle);
}

export function matchesBlogServiceFilter(
  item: { id?: string | null; href?: string | null; categoryTitles?: string[]; service?: string | null },
  selectedService?: string | null,
) {
  if (isAllResourceServicesFilter(selectedService)) return true;

  const normalizedService = normalizeResourceServiceFilter(selectedService);
  const isMep = isMepBlogItem(item);

  if (normalizedService === "MEP Engineering Firms") {
    return isMep;
  }

  if (isAcsResourceServiceFilter(selectedService)) {
    if (isMep) return false;
    if (item.service === "Architecture Firms" || item.service === "Reality Capture & Survey Companies") {
      return true;
    }

    const acsCategories = blogServiceCategoryMap["Architecture Firms"].map((title) =>
      title.toLowerCase(),
    );
    const postCategories = (item.categoryTitles || []).map((title) => title.toLowerCase()).filter(Boolean);

    if (postCategories.length > 0) {
      return postCategories.some((title) => acsCategories.includes(title));
    }

    return item.service !== "MEP Engineering Firms";
  }

  return item.service === normalizedService;
}

export function matchesWhitepaperServiceFilter(
  item: { service?: string | null; services?: string[] | null },
  targetService?: string | null,
) {
  if (isAllResourceServicesFilter(targetService)) return true;

  const normalizedService = normalizeResourceServiceFilter(targetService);
  const primary = item.service || null;

  if (normalizedService === "MEP Engineering Firms") {
    return primary === "MEP Engineering Firms";
  }

  if (isAcsResourceServiceFilter(targetService)) {
    return primary === ACS_RESOURCES_SERVICE_FILTER;
  }

  return primary === normalizedService;
}

export function normalizeWebinarSlug(slug?: string | null) {
  return String(slug || "")
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();
}

function getWebinarSlugFromHref(href?: string | null) {
  if (!href) return null;
  const webinarMatch = href.match(/\/webinar\/([^/]+)\/?/i);
  if (webinarMatch) return webinarMatch[1];
  for (const slug of Object.keys(webinarHrefBySlug)) {
    if (href.includes(slug)) return slug;
  }
  return null;
}

function getWebinarItemSlug(item: { id?: string | null; href?: string | null }) {
  return normalizeWebinarSlug(getWebinarSlugFromHref(item.href)) || normalizeWebinarSlug(item.id);
}

function hrefMatchesMepWebinarSlug(href?: string | null) {
  if (!href) return false;
  for (const mepSlug of webinarMepSlugs) {
    if (href.includes(mepSlug)) return true;
  }
  return false;
}

export function matchesWebinarServiceFilter(
  item: { id?: string | null; href?: string | null; service?: string | null },
  targetService?: string | null,
) {
  const normalizedTarget = normalizeResourceServiceFilter(targetService);
  const slug = getWebinarItemSlug(item);

  if (normalizedTarget === WEBINAR_SERVICE_MEP) {
    return (
      item.service === WEBINAR_SERVICE_MEP ||
      (slug ? webinarMepSlugs.has(slug) : false) ||
      hrefMatchesMepWebinarSlug(item.href)
    );
  }

  if (normalizedTarget === WEBINAR_SERVICE_ARCHITECTURE) {
    return (slug ? webinarArchitectureSlugs.has(slug) : false) || item.service === WEBINAR_SERVICE_ARCHITECTURE;
  }

  return false;
}

export function matchesResourceServiceFilter(
  item: ResourceServiceFilterInput,
  targetService?: string | null,
) {
  if (isAllResourceServicesFilter(targetService)) return true;

  const normalizedService = normalizeResourceServiceFilter(targetService);
  const itemType = item.type ?? "";

  if (itemType === "Blog") {
    return matchesBlogServiceFilter(item, normalizedService);
  }
  if (itemType === "White Paper" || itemType === "Whitepapers") {
    return matchesWhitepaperServiceFilter(item, normalizedService);
  }
  if (itemType === "Webinar") {
    return matchesWebinarServiceFilter(item, normalizedService);
  }
  if (itemType === "Case Study" || itemType === "Case Studies") {
    return item.service === normalizedService;
  }
  if (itemType === "Portfolio" || itemType === "Testimonials" || itemType === "News") {
    return item.service === normalizedService;
  }
  return item.service === normalizedService;
}

export function buildBlogHref(slug: string) {
  const cleanSlug = String(slug).replace(/^\/+|\/+$/g, "");
  return `/blog/${cleanSlug}`;
}

export function buildWebinarHref(slug: string) {
  const cleanSlug = normalizeWebinarSlug(slug);
  if (!cleanSlug) return "/webinar";
  return webinarHrefBySlug[cleanSlug] ?? `/webinar/${cleanSlug}`;
}

export function resolveWebinarService(slug?: string | null) {
  const cleanSlug = normalizeWebinarSlug(slug);
  if (!cleanSlug) return null;
  if (webinarMepSlugs.has(cleanSlug)) return WEBINAR_SERVICE_MEP;
  if (webinarArchitectureSlugs.has(cleanSlug)) return WEBINAR_SERVICE_ARCHITECTURE;
  return null;
}

export function withWebinarDeliveryStatus<T extends { type?: string; delivery?: string; eventTimestamp?: number | null; publishedTimestamp?: number | null }>(
  item: T,
  reference: Date = new Date(),
) {
  if (!item || item.type !== "Webinar") return item;
  const eventTimestamp = item.eventTimestamp ?? item.publishedTimestamp ?? null;
  const eventDate = eventTimestamp ? new Date(eventTimestamp) : null;
  const delivery = resolveWebinarDelivery(eventDate, reference);
  return { ...item, delivery, category: delivery };
}

export function buildWebinarListingItems(
  webinars: Array<{
    id: string;
    title: string;
    excerpt: string;
    href: string;
    image: string;
    service?: string | null;
    delivery?: string;
    publishedAt?: string;
    eventTimestamp?: number;
    publishedTimestamp?: number;
    sortOrder: number;
  }>,
  referenceDate?: Date | string | number,
) {
  const reference = resolveListingReference(referenceDate);
  const supplementalSlugs = new Set(
    supplementalWebinarListingItems.map((item) => normalizeWebinarSlug(item.id)),
  );

  return webinars
    .filter((item) => !supplementalSlugs.has(normalizeWebinarSlug(item.id)))
    .map((item) =>
      withWebinarDeliveryStatus(
        {
          ...item,
          id: normalizeWebinarSlug(item.id),
          href: item.href || buildWebinarHref(item.id),
          service: item.service || resolveWebinarService(item.id),
        },
        reference,
      ),
    );
}

export function buildAllWebinarListingItems(referenceDate?: Date | string | number) {
  const reference = resolveListingReference(referenceDate);
  // Pass [] so client bundles never pull the multi-MB snapshot; server pages/API inject Sanity webinars.
  return buildSanityWebinarListingItems([], reference);
}
