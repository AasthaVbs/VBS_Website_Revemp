"use client";

import { ResourcesBrowseSection } from "@/components/sections/resources/resources-browse-section";
import type { ResourceCatalog } from "@/lib/resource-catalog-types";

export function NewsBrowseSection({
  initialCatalog,
}: {
  initialCatalog?: ResourceCatalog | null;
}) {
  return <ResourcesBrowseSection variant="news" initialCatalog={initialCatalog} />;
}
