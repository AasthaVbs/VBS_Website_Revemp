"use client";

import { ResourcesBrowseSection } from "@/components/sections/resources/resources-browse-section";
import type { ResourceCatalog } from "@/lib/resource-catalog-types";

export function WhitepapersBrowseSection({
  initialCatalog,
}: {
  initialCatalog?: ResourceCatalog | null;
}) {
  return <ResourcesBrowseSection variant="whitepapers" initialCatalog={initialCatalog} />;
}
