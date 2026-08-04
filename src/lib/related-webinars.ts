import "server-only";

import type { ResourceListingItem, ResourceService } from "@/constants/resources-page-content";
import { buildResourceCatalog } from "@/lib/resource-catalog";
import { normalizeWebinarSlug } from "@/lib/resource-listing";

const DEFAULT_SERVICE: ResourceService = "Architecture Firms";

/** Latest webinars for detail-page resources strip (excludes current slug). */
export function getRelatedWebinarListingItems(
  excludeSlug: string,
  limit = 4,
): Array<ResourceListingItem & { publishedAt?: string | null }> {
  const clean = normalizeWebinarSlug(excludeSlug);
  return buildResourceCatalog()
    .byType.Webinar.filter((item) => normalizeWebinarSlug(item.id) !== clean)
    .sort(
      (a, b) =>
        (b.publishedTimestamp ?? b.sortOrder ?? 0) - (a.publishedTimestamp ?? a.sortOrder ?? 0),
    )
    .slice(0, limit)
    .map((item) => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      type: "Webinar" as const,
      service: (item.service ?? DEFAULT_SERVICE) as ResourceService,
      href: item.href,
      image: item.image,
      sortOrder: item.sortOrder ?? 0,
      badgeLabel: item.badgeLabel ?? "Webinar",
      publishedAt: item.publishedAt ?? null,
    }));
}
