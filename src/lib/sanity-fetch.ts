import { hasSanityCredentials } from "@/lib/sanity-env";
import { publishedSanityClient, previewSanityClient, sanityClient } from "@/lib/sanity-client";
import {
  SANITY_POST_BY_SLUG_QUERY,
  SANITY_POST_LISTING_QUERY,
  SANITY_PREVIEW_BY_ID_QUERY,
  SANITY_PREVIEW_BY_SLUG_QUERY,
  SANITY_REDIRECTS_QUERY,
  SANITY_WEBINAR_LISTING_QUERY,
} from "@/lib/sanity-queries";
import type { SanityPostRecord } from "@/lib/sanity-blog";
import sanitySnapshot from "@/data/sanity-resources-snapshot.json";

export type SanityListingSnapshot = {
  posts: typeof sanitySnapshot.posts;
  webinars: typeof sanitySnapshot.webinars;
};

async function fetchFromSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!hasSanityCredentials()) return null;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.error("[sanity] fetch failed:", error);
    return null;
  }
}

/** Posts + webinars for resource listings — live Sanity with JSON snapshot fallback. */
export async function fetchSanityResourceListing(): Promise<SanityListingSnapshot> {
  const [posts, webinars] = await Promise.all([
    fetchFromSanity<typeof sanitySnapshot.posts>(SANITY_POST_LISTING_QUERY),
    fetchFromSanity<typeof sanitySnapshot.webinars>(SANITY_WEBINAR_LISTING_QUERY),
  ]);

  return {
    posts: posts?.length ? posts : sanitySnapshot.posts,
    webinars: webinars?.length ? webinars : sanitySnapshot.webinars,
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
