import { getSanityResourcePosts, getSanityResourceWebinars } from "../src/lib/sanity-snapshot";
import { buildMepResourcesFeedItems } from "../src/lib/mep-resources-feed";
import { buildResourcesSectionView } from "../src/lib/resources-section-view";

const items = buildMepResourcesFeedItems({
  posts: getSanityResourcePosts(),
  webinars: getSanityResourceWebinars(),
});
const count = (t: string) => items.filter((i) => i.type === t).length;

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

const cs = buildResourcesSectionView(items, "Case Study");
console.log("Case Study total", cs.listRows.length + (cs.featuredItem ? 1 : 0));

const wp = buildResourcesSectionView(items, "White Paper");
console.log("White Paper total", wp.listRows.length + (wp.featuredItem ? 1 : 0));
