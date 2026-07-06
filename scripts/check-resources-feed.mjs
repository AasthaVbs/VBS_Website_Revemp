import { createRequire } from "module";
const require = createRequire(import.meta.url);

// Quick check via compiled path - use dynamic import after build
async function main() {
  const { buildMepResourcesFeedItems } = await import("../src/lib/mep-resources-feed.ts");
  const { buildResourcesSectionView } = await import("../src/lib/resources-section-view.ts");

  const items = buildMepResourcesFeedItems();
  const count = (t) => items.filter((i) => i.type === t).length;
  console.log("counts", {
    Blog: count("Blog"),
    Webinar: count("Webinar"),
    "Case Study": count("Case Study"),
    "White Paper": count("White Paper"),
    total: items.length,
  });

  const all = buildResourcesSectionView(items, "All");
  console.log("All", {
    featured: all.featuredItem?.type,
    list: all.listRows.map((r) => r.type),
  });
}

main().catch(console.error);
