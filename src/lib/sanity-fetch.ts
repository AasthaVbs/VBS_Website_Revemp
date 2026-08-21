import { unstable_cache } from "next/cache";

import { hasSanityCredentials } from "@/lib/sanity-env";
import { previewSanityClient, publishedSanityClient, publicSanityClient } from "@/lib/sanity-client";
import {
  SANITY_POST_BY_SLUG_QUERY,
  SANITY_POST_LISTING_QUERY,
  SANITY_PREVIEW_BY_ID_QUERY,
  SANITY_PREVIEW_BY_SLUG_QUERY,
  SANITY_REDIRECTS_QUERY,
  SANITY_WEBINAR_BY_SLUG_QUERY,
  SANITY_WEBINAR_LISTING_QUERY,
  SANITY_WEBINAR_SLUGS_QUERY,
} from "@/lib/sanity-queries";
import type { SanityPostRecord } from "@/lib/sanity-blog";
import type { SanityWebinarRecord } from "@/lib/sanity-webinar";
import {
  getSanityResourcePosts,
  getSanityResourceWebinars,
  type SanitySnapshotPost,
  type SanitySnapshotWebinar,
} from "@/lib/sanity-snapshot";

export type SanityListingSnapshot = {
  posts: SanitySnapshotPost[];
  webinars: SanitySnapshotWebinar[];
};

function slugQueryParams(slug: string) {
  const cleanSlug = decodeURIComponent(String(slug || "")).replace(/^\/+|\/+$/g, "");
  return { slug: cleanSlug, slugWithSlash: `${cleanSlug}/` };
}

const SANITY_FETCH_TIMEOUT_MS = 2500;

async function withTimeout<T>(promise: Promise<T>, ms = SANITY_FETCH_TIMEOUT_MS): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(`Sanity fetch timed out after ${ms}ms`)), ms);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

/** Published content: public CDN first (fast), token client as fallback. */
async function fetchPublishedContent<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T | null> {
  try {
    return await withTimeout(publicSanityClient.fetch<T>(query, params));
  } catch (error) {
    console.error("[sanity] public fetch failed, trying token client:", error);
  }

  if (hasSanityCredentials()) {
    try {
      return await withTimeout(publishedSanityClient.fetch<T>(query, params));
    } catch (error) {
      console.error("[sanity] token fetch failed:", error);
    }
  }

  return null;
}

async function fetchPublishedListing<T>(query: string): Promise<T | null> {
  return fetchPublishedContent<T>(query);
}

async function fetchFromSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  return fetchPublishedContent<T>(query, params);
}

function snapshotListing(): SanityListingSnapshot {
  return {
    posts: getSanityResourcePosts(),
    webinars: getSanityResourceWebinars(),
  };
}

/** Posts + webinars for resource listings — published Sanity only, JSON snapshot fallback. */
async function fetchSanityResourceListingUncached(): Promise<SanityListingSnapshot> {
  const [posts, webinars] = await Promise.all([
    fetchPublishedListing<SanitySnapshotPost[]>(SANITY_POST_LISTING_QUERY),
    fetchPublishedListing<SanitySnapshotWebinar[]>(SANITY_WEBINAR_LISTING_QUERY),
  ]);

  const fallback = snapshotListing();

  return {
    posts: posts?.length ? posts : fallback.posts,
    webinars: webinars?.length ? webinars : fallback.webinars,
  };
}

export const fetchSanityResourceListing = unstable_cache(
  fetchSanityResourceListingUncached,
  ["sanity-resource-listing"],
  { revalidate: 60 },
);

export async function fetchSanityPostBySlug(slug: string): Promise<SanityPostRecord | null> {
  return fetchPublishedContent<SanityPostRecord | null>(SANITY_POST_BY_SLUG_QUERY, slugQueryParams(slug));
}

export async function fetchSanityPostSlugs(): Promise<string[]> {
  const listing = await fetchSanityResourceListing();
  return listing.posts.map((post) => post.slug).filter(Boolean) as string[];
}

export async function fetchSanityWebinarBySlug(slug: string): Promise<SanityWebinarRecord | null> {
  return fetchPublishedContent<SanityWebinarRecord | null>(
    SANITY_WEBINAR_BY_SLUG_QUERY,
    slugQueryParams(slug),
  );
}

export async function fetchSanityWebinarSlugs(): Promise<string[]> {
  const rows = await fetchPublishedContent<Array<{ slug?: string }>>(SANITY_WEBINAR_SLUGS_QUERY);
  return (rows || []).map((row) => row.slug).filter(Boolean) as string[];
}

export async function fetchSanityPreviewPost(options: {
  id?: string | null;
  slug?: string | null;
}): Promise<SanityPostRecord | null> {
  if (!hasSanityCredentials()) return null;

  try {
    if (options.id) {
      const cleanId = options.id.startsWith("drafts.") ? options.id.replace("drafts.", "") : options.id;
      const doc = await previewSanityClient.fetch<SanityPostRecord | null>(SANITY_PREVIEW_BY_ID_QUERY, {
        id: cleanId,
        draftId: `drafts.${cleanId}`,
      });
      if (doc) return doc;
    }

    if (options.slug) {
      return await previewSanityClient.fetch<SanityPostRecord | null>(SANITY_PREVIEW_BY_SLUG_QUERY, {
        slug: options.slug,
      });
    }
  } catch (error) {
    console.error("[sanity] preview fetch failed:", error);
  }

  return null;
}

export async function fetchSanityRedirects() {
  return fetchFromSanity<Array<{ oldUrl: string; newUrl: string }>>(SANITY_REDIRECTS_QUERY);
}
