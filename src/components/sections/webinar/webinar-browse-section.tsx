"use client";

import { ResourcesBrowseSection } from "@/components/sections/resources/resources-browse-section";
import type { ResourceCatalog } from "@/lib/resource-catalog-types";

/** Figma node 405:74005 — Webinars filters + grid */
export function WebinarBrowseSection({ initialCatalog }: { initialCatalog?: ResourceCatalog | null }) {
  return <ResourcesBrowseSection variant="webinars" initialCatalog={initialCatalog} />;
}
