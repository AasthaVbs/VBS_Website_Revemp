import { webinarYoutubeVideoUrlBySlug } from "@/constants/webinar-page-content";
import { portableTextToPlainText } from "@/lib/sanity-listing";
import { normalizeWebinarSlug } from "@/lib/resource-listing";
import { getSanityResourceWebinars } from "@/lib/sanity-snapshot";

export type SanityWebinarRecord = {
  _id?: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  eventDate?: string | null;
  location?: string | null;
  eventNote?: string | null;
  youtubeVideoUrl?: string | null;
  upcomingImageUrl?: string | null;
  _rawTitle?: unknown[];
  _rawBody?: unknown[];
  bannerImage?: { asset?: { url?: string } };
  youtubeThumbnail?: { asset?: { url?: string } };
  upcomingImage?: { asset?: { url?: string } };
  speaker?: {
    name?: string;
    _rawDescription?: unknown[];
    image?: { asset?: { url?: string } };
  };
  ctaButton?: {
    buttonText?: string;
    buttonUrl?: string;
    openInNewTab?: boolean;
  };
};

export type WebinarDetail = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  bannerImage?: string;
  youtubeThumbnail?: string;
  upcomingImage?: string;
  youtubeVideoUrl?: string;
  upcomingImageUrl?: string;
  eventDate?: string | null;
  location: string;
  eventNote?: string | null;
  rawTitle: unknown[];
  rawBody: unknown[];
  speaker?: {
    name: string;
    rawDescription?: unknown[];
    image?: string;
  };
  ctaButton?: {
    buttonText: string;
    buttonUrl: string;
    openInNewTab?: boolean;
  };
};

function resolveImageUrl(...sources: Array<{ asset?: { url?: string } } | undefined>) {
  for (const source of sources) {
    const url = source?.asset?.url;
    if (url) return url;
  }
  return undefined;
}

export function mapSanityWebinarToDetail(record: SanityWebinarRecord): WebinarDetail | undefined {
  const slug = normalizeWebinarSlug(record.slug);
  if (!slug) return undefined;

  const titleText = portableTextToPlainText(record._rawTitle) || "Webinar";

  return {
    slug,
    metaTitle: record.metaTitle || titleText,
    metaDescription:
      record.metaDescription || portableTextToPlainText(record._rawBody).slice(0, 160) || titleText,
    bannerImage: resolveImageUrl(record.bannerImage),
    youtubeThumbnail: resolveImageUrl(record.youtubeThumbnail),
    upcomingImage: resolveImageUrl(record.upcomingImage),
    youtubeVideoUrl: record.youtubeVideoUrl || webinarYoutubeVideoUrlBySlug[slug] || undefined,
    upcomingImageUrl: record.upcomingImageUrl || undefined,
    eventDate: record.eventDate || null,
    location: record.location || "Live Webinar",
    eventNote: record.eventNote || undefined,
    rawTitle: Array.isArray(record._rawTitle) ? record._rawTitle : [],
    rawBody: Array.isArray(record._rawBody) ? record._rawBody : [],
    speaker: record.speaker?.name
      ? {
          name: record.speaker.name,
          rawDescription: record.speaker._rawDescription,
          image: record.speaker.image?.asset?.url,
        }
      : undefined,
    ctaButton: record.ctaButton?.buttonUrl
      ? {
          buttonText: record.ctaButton.buttonText || "Register Now",
          buttonUrl: record.ctaButton.buttonUrl,
          openInNewTab: record.ctaButton.openInNewTab,
        }
      : undefined,
  };
}

function getWebinarFromSnapshot(slug: string): SanityWebinarRecord | null {
  const cleanSlug = normalizeWebinarSlug(slug);
  const webinar = getSanityResourceWebinars().find(
    (item) => normalizeWebinarSlug(item.slug) === cleanSlug,
  );
  if (!webinar) return null;

  return {
    _id: webinar._id,
    slug: webinar.slug,
    eventDate: webinar.eventDate,
    _rawTitle: webinar.title as unknown[],
    _rawBody: webinar.body as unknown[],
    bannerImage: webinar.bannerImage,
    youtubeThumbnail: webinar.youtubeThumbnail,
    upcomingImage: webinar.upcomingImage,
    youtubeVideoUrl: webinarYoutubeVideoUrlBySlug[cleanSlug] || undefined,
    location: "Live Webinar",
  };
}

export function getWebinarDetailBySlug(slug: string): WebinarDetail | undefined {
  const snapshotRecord = getWebinarFromSnapshot(slug);
  if (!snapshotRecord) return undefined;
  return mapSanityWebinarToDetail(snapshotRecord);
}

export async function resolveWebinarDetailBySlug(slug: string): Promise<WebinarDetail | undefined> {
  const { fetchSanityWebinarBySlug } = await import("@/lib/sanity-fetch");
  const liveRecord = await fetchSanityWebinarBySlug(slug);
  if (liveRecord) {
    const mapped = mapSanityWebinarToDetail(liveRecord);
    if (mapped) return mapped;
  }
  return getWebinarDetailBySlug(slug);
}

export async function getAllWebinarSlugsForBuild(): Promise<string[]> {
  const { fetchSanityWebinarSlugs } = await import("@/lib/sanity-fetch");
  const liveSlugs = await fetchSanityWebinarSlugs();
  const snapshotSlugs = getAllWebinarSlugs();
  return [...new Set([...liveSlugs, ...snapshotSlugs].map((slug) => normalizeWebinarSlug(slug)).filter(Boolean))];
}

function getAllWebinarSlugs(): string[] {
  const slugs = new Set<string>();
  for (const webinar of getSanityResourceWebinars()) {
    const slug = normalizeWebinarSlug(webinar.slug);
    if (slug) slugs.add(slug);
  }
  return [...slugs];
}

export function webinarSeo(webinar: WebinarDetail) {
  return {
    title: webinar.metaTitle,
    description: webinar.metaDescription,
    image: webinar.bannerImage || webinar.youtubeThumbnail || webinar.upcomingImage,
  };
}

