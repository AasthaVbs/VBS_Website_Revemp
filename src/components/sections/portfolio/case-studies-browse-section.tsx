"use client";

import { ResourcesBrowseSection } from "@/components/sections/resources/resources-browse-section";
import type { ResourceCatalog } from "@/lib/resource-catalog-types";

/** Case studies filters + card grid — same browse UI as /blog. */
export function CaseStudiesBrowseSection({
  initialCatalog,
}: {
  initialCatalog?: ResourceCatalog | null;
}) {
  return <ResourcesBrowseSection variant="case-studies" initialCatalog={initialCatalog} />;
}
