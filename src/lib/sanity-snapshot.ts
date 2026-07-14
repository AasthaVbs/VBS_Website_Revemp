import "server-only";

import sanitySnapshot from "@/data/sanity-resources-snapshot.json";
import {
  filterPublishedSanityPosts,
  filterPublishedSanityWebinars,
} from "@/lib/sanity-listing";

export type SanitySnapshotPost = (typeof sanitySnapshot.posts)[number];
export type SanitySnapshotWebinar = (typeof sanitySnapshot.webinars)[number];

/** Server-only access to the committed Sanity listing snapshot (~MB). Never import from client components. */
export function getSanityResourcePosts() {
  return filterPublishedSanityPosts(sanitySnapshot.posts);
}

export function getSanityResourceWebinars() {
  return filterPublishedSanityWebinars(sanitySnapshot.webinars);
}

export function getSanitySnapshotRaw() {
  return sanitySnapshot;
}
