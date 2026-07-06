import { createClient, type SanityClient } from "@sanity/client";

import {
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadToken,
} from "@/lib/sanity-env";

const baseConfig = {
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: false,
  token: sanityReadToken,
};

/** Default client — published content for listings and build-time fetches. */
export const sanityClient: SanityClient = createClient(baseConfig);

/** Drafts + published overlay — Studio “Open preview” and `/preview`. */
export const previewSanityClient: SanityClient = sanityClient.withConfig({
  useCdn: false,
  perspective: "previewDrafts",
});

/** Published documents only — live FAQ refresh on blog pages. */
export const publishedSanityClient: SanityClient = sanityClient.withConfig({
  useCdn: false,
  perspective: "published",
});
