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
import sanitySnapshot from "@/data/sanity-resources-snapshot.json";
import { filterPublishedSanityPosts, filterPublishedSanityWebinars } from "@/lib/sanity-listing";

export type SanityListingSnapshot = {
  posts: typeof sanitySnapshot.posts;
  webinars: typeof sanitySnapshot.webinars;
};

async function fetchPublishedListing<T>(query: string): Promise<T | null> {
  if (!hasSanityCredentials()) return null;
  try {
    return await publishedSanityClient.fetch<T>(query);
  } catch (error) {
    console.error("[sanity] published listing fetch failed:", error);
    return null;
  }
}

async function fetchFromSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!hasSanityCredentials()) return null;
  try {
    return await publishedSanityClient.fetch<T>(query, params);
  } catch (error) {
    console.error("[sanity] fetch failed:", error);
    return null;
  }
}

function snapshotListing(): SanityListingSnapshot {
  return {
    posts: filterPublishedSanityPosts(sanitySnapshot.posts),
    webinars: filterPublishedSanityWebinars(sanitySnapshot.webinars),
  };
}

/** Posts + webinars for resource listings — published Sanity only, JSON snapshot fallback. */
export async function fetchSanityResourceListing(): Promise<SanityListingSnapshot> {
  const [posts, webinars] = await Promise.all([
    fetchPublishedListing<typeof sanitySnapshot.posts>(SANITY_POST_LISTING_QUERY),
    fetchPublishedListing<typeof sanitySnapshot.webinars>(SANITY_WEBINAR_LISTING_QUERY),
  ]);

  const fallback = snapshotListing();

  return {
    posts: posts?.length ? posts : fallback.posts,
    webinars: webinars?.length ? webinars : fallback.webinars,
  };
}

export async function fetchSanityPostBySlug(slug: string): Promise<SanityPostRecord | null> {
  if (!hasSanityCredentials()) return null;
  try {
    return await publishedSanityClient.fetch<SanityPostRecord | null>(SANITY_POST_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error("[sanity] post fetch failed:", error);
    return null;
  }
}

export async function fetchSanityPostSlugs(): Promise<string[]> {
  const listing = await fetchSanityResourceListing();
  return listing.posts.map((post) => post.slug).filter(Boolean);
}

export async function fetchSanityWebinarBySlug(slug: string): Promise<SanityWebinarRecord | null> {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "").toLowerCase();
  const params = { slug: cleanSlug, slugWithSlash: `${cleanSlug}/` };

  try {
    if (hasSanityCredentials()) {
      return await publishedSanityClient.fetch<SanityWebinarRecord | null>(SANITY_WEBINAR_BY_SLUG_QUERY, params);
    }

    return await publicSanityClient.fetch<SanityWebinarRecord | null>(SANITY_WEBINAR_BY_SLUG_QUERY, params);
  } catch (error) {
    console.error("[sanity] webinar fetch failed:", error);
    return null;
  }
}

export async function fetchSanityWebinarSlugs(): Promise<string[]> {
  if (!hasSanityCredentials()) return [];
  try {
    const rows = await publishedSanityClient.fetch<Array<{ slug?: string }>>(SANITY_WEBINAR_SLUGS_QUERY);
    return rows.map((row) => row.slug).filter(Boolean) as string[];
  } catch (error) {
    console.error("[sanity] webinar slugs fetch failed:", error);
    return [];
  }
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
