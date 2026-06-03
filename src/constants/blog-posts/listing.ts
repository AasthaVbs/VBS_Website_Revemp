import {
  FIGMA_RESOURCE_EXCERPT,
  FIGMA_RESOURCE_IMAGES,
  figmaBlogListingItems,
  type ResourceListingItem,
} from "@/constants/resources-page-content";

export function blogPostHref(slug: string) {
  return `/blogs/${slug}`;
}

/** Listing cards for blogs browse — hrefs point to dynamic detail routes */
export const blogListingItems: ResourceListingItem[] = figmaBlogListingItems.map(
  (item) => ({
    ...item,
    href: blogPostHref(item.id),
  }),
);
