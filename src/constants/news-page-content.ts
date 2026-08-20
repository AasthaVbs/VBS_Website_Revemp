import { ROUTES } from "@/constants/navigation";
import { SITE_URL } from "@/constants/site-tracking";

export const NEWS_CATEGORY_TITLE = "News & Updates";
export const NEWS_CATEGORY_SLUG = "news-updates";

export const newsPageSeo = {
  title: "Press Release & News - Virtual Building Studio Inc.",
  description:
    "Virtual Building Studio News & Press Releases share BIM projects, company announcements, achievements, partnerships, events, and the latest AEC industry updates.",
} as const;

export const newsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: newsPageSeo.title,
  description: newsPageSeo.description,
  url: `${SITE_URL}/news`,
  isPartOf: {
    "@type": "WebSite",
    name: "Virtual Building Studio",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Virtual Building Studio Inc.",
    url: SITE_URL,
  },
} as const;

export const newsPageHero = {
  tag: "News & Updates",
  titleLead: "Latest News, ",
  titleAccent: "Insights & Updates",
  description:
    "Catch the latest announcements, industry trends, events, and company updates all in one place.",
  ctaLabel: "Contact Us",
  ctaHref: ROUTES.contact,
  image: "/image/news-updates.png",
  imageAlt: "News and updates workspace with newspaper and laptop",
} as const;

export function isNewsCategoryEntry(entry?: {
  title?: string | null;
  slug?: string | null;
} | null) {
  const title = String(entry?.title || "")
    .trim()
    .toLowerCase();
  const slug = String(entry?.slug || "")
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "");

  return (
    slug === NEWS_CATEGORY_SLUG ||
    title === NEWS_CATEGORY_TITLE.toLowerCase() ||
    title.includes("news & updates")
  );
}

export function isNewsCatalogItem(item: {
  tags?: string[];
  categoryTitles?: string[];
  categorySlugs?: string[];
}) {
  const titles = (item.categoryTitles || []).map((title) => String(title).trim().toLowerCase());
  const slugs = (item.categorySlugs || []).map((slug) =>
    String(slug).trim().toLowerCase().replace(/^\/+|\/+$/g, ""),
  );

  if (slugs.includes(NEWS_CATEGORY_SLUG)) return true;
  return titles.some(
    (title) => title === NEWS_CATEGORY_TITLE.toLowerCase() || title.includes("news & updates"),
  );
}

export function isNewsSanityPost(post: {
  categories?: Array<{ title?: string | null; slug?: string | null } | null> | null;
}) {
  return (post.categories || []).some((category) => isNewsCategoryEntry(category));
}

export const newsDetailRelated = {
  tag: "Resources",
  titleLead: "Latest Insights on ",
  titleAccent: "Production, Governance, and Scale",
  description:
    "Explore technical thought leadership and actionable strategies designed to optimize your production workflows and scale without compromising standards.",
} as const;
