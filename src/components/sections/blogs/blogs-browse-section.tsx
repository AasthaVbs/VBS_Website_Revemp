"use client";

import { ResourcesBrowseSection } from "@/components/sections/resources/resources-browse-section";
import type { ResourceCatalog } from "@/lib/resource-catalog-types";

/** Figma node 405:73063 — Blogs filters + grid (no resource type filter) */
export function BlogsBrowseSection({ initialCatalog }: { initialCatalog?: ResourceCatalog | null }) {
  return <ResourcesBrowseSection variant="blogs" initialCatalog={initialCatalog} />;
}
