import { blogMepSlugs, blogServiceCategoryMap } from "@/constants/blogs-page-content";
import { FIGMA_RESOURCE_EXCERPT, FIGMA_RESOURCE_IMAGES } from "@/constants/resource-figma-assets";
import {
  supplementalWebinarListingItems,
  webinarArchitectureSlugs,
  webinarHrefBySlug,
  webinarMepSlugs,
  WEBINAR_SERVICE_ARCHITECTURE,
  WEBINAR_SERVICE_MEP,
} from "@/constants/webinar-page-content";
import {
  buildBlogHref,
  buildWebinarHref,
  normalizeWebinarSlug,
  withWebinarDeliveryStatus,
} from "@/lib/resource-listing";

const FALLBACK_IMAGE = FIGMA_RESOURCE_IMAGES[0];

/** Shared listing shape — keep free of the multi-MB snapshot JSON for client bundles. */
export type SanityPostNode = {
  _id?: string;
  slug?: string | null;
  title?: string | null;
  body?: unknown;
  publishedAt?: string | null;
  categories?: Array<{ title?: string | null; slug?: string | null } | null> | null;
  featuredImage?: { asset?: { url?: string | null } | null } | null;
  plainBody?: string | null;
  tags?: string[] | null;
  mainImage?: { asset?: { url?: string | null } | null } | null;
  bannerImage?: { asset?: { url?: string | null } | null } | null;
};

export type SanityWebinarNode = {
  _id?: string;
  slug?: string | null;
  title?: string | unknown;
  body?: unknown;
  eventDate?: string | null;
  youtubeThumbnail?: { asset?: { url?: string | null } | null } | null;
  upcomingImage?: { asset?: { url?: string | null } | null } | null;
  bannerImage?: { asset?: { url?: string | null } | null } | null;
};

/** Exclude Sanity draft documents — Gatsby production only indexes published posts. */
export function isPublishedSanityId(id?: string | null) {
  return Boolean(id) && !String(id).startsWith("drafts.");
}

export function filterPublishedSanityPosts<T extends { _id?: string; slug?: string | null }>(
  posts: T[],
) {
  const seenSlugs = new Set<string>();

  return posts.filter((post) => {
    if (!isPublishedSanityId(post._id)) return false;
    const slug = post.slug?.trim();
    if (!slug) return false;
    if (seenSlugs.has(slug)) return false;
    seenSlugs.add(slug);
    return true;
  });
}

export function filterPublishedSanityWebinars<T extends { _id?: string; slug?: string | null }>(
  webinars: T[],
) {
  const seenSlugs = new Set<string>();

  return webinars.filter((webinar) => {
    if (!isPublishedSanityId(webinar._id)) return false;
    const slug = webinar.slug?.trim();
    if (!slug) return false;
    if (seenSlugs.has(slug)) return false;
    seenSlugs.add(slug);
    return true;
  });
}

export function portableTextToPlainText(blocks: unknown) {
  if (!blocks || !Array.isArray(blocks)) return "";
  return blocks
    .map((block) => {
      const children = (block as { children?: Array<{ text?: string }> }).children || [];
      return children.map((child) => child.text || "").join("");
    })
    .join(" ")
    .trim();
}

function normalizeCategoryTitle(title: string) {
  return (title || "").trim().toLowerCase();
}

function normalizeBlogSlug(slug?: string | null) {
  if (!slug) return null;
  return String(slug).replace(/^\/+|\/+$/g, "").split("/").pop() || null;
}

function isMepCategoryTitle(title: string) {
  const normalized = normalizeCategoryTitle(title);
  return normalized === "mep" || normalized.startsWith("mep ");
}

function resolveBlogService(
  categories: Array<{ title?: string | null }> = [],
  slug: string | null = null,
) {
  const cleanSlug = normalizeBlogSlug(slug);
  if (cleanSlug && blogMepSlugs.has(cleanSlug)) {
    return "MEP Engineering Firms";
  }

  const categoryTitles = categories
    .map((category) => normalizeCategoryTitle(category?.title || ""))
    .filter(Boolean);

  if (categoryTitles.some(isMepCategoryTitle)) {
    return "MEP Engineering Firms";
  }

  const architectureCategories = blogServiceCategoryMap["Architecture Firms"].map(
    normalizeCategoryTitle,
  );
  if (categoryTitles.some((title) => architectureCategories.includes(title))) {
    return "Architecture Firms";
  }

  return "Architecture Firms";
}

function formatListingDate(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function resolvePostListingImage(
  post: SanityPostNode,
  index: number,
) {
  const fallbackImage = FIGMA_RESOURCE_IMAGES[index % FIGMA_RESOURCE_IMAGES.length] || FALLBACK_IMAGE;
  const asset = post.featuredImage?.asset;
  if (asset?.url) return asset.url;
  return fallbackImage;
}

function getSupplementalWebinarBySlug() {
  return new Map(
    supplementalWebinarListingItems.map((item) => [normalizeWebinarSlug(item.id), item]),
  );
}

function resolveWebinarService(slug?: string | null) {
  const cleanSlug = normalizeWebinarSlug(slug);
  if (!cleanSlug) return null;
  if (webinarMepSlugs.has(cleanSlug)) return WEBINAR_SERVICE_MEP;
  if (webinarArchitectureSlugs.has(cleanSlug)) return WEBINAR_SERVICE_ARCHITECTURE;
  return null;
}

function resolveWebinarHref(slug: string) {
  const cleanSlug = normalizeWebinarSlug(slug);
  return webinarHrefBySlug[cleanSlug] ?? buildWebinarHref(cleanSlug);
}

function mergeWebinarListingItem(
  item: {
    id: string;
    title: string;
    excerpt: string;
    href: string;
    image: string;
    service?: string | null;
    delivery?: string;
    publishedAt?: string | null;
    eventTimestamp?: number | null;
    publishedTimestamp?: number | null;
    sortOrder: number;
    badgeLabel?: string;
    type?: string;
  },
  supplemental: (typeof supplementalWebinarListingItems)[number] | undefined,
  reference = new Date(),
) {
  const normalizedId = normalizeWebinarSlug(item.id);

  if (!supplemental) {
    return withWebinarDeliveryStatus(
      {
        ...item,
        id: normalizedId,
        type: "Webinar",
        service: item.service || resolveWebinarService(item.id),
      },
      reference,
    );
  }

  const resolvedService =
    resolveWebinarService(normalizedId) || supplemental.service || item.service || null;
  const usesFallbackImage =
    !item.image ||
    item.image === FALLBACK_IMAGE ||
    item.image.includes("figma/resource");
  const eventTimestamp =
    Number(item.eventTimestamp ?? item.publishedTimestamp) ||
    Number(supplemental.eventTimestamp ?? supplemental.publishedTimestamp) ||
    null;

  return withWebinarDeliveryStatus(
    {
      ...item,
      id: normalizedId,
      type: "Webinar",
      service: resolvedService,
      title: item.title || supplemental.title,
      excerpt:
        item.excerpt && item.excerpt !== FIGMA_RESOURCE_EXCERPT
          ? item.excerpt
          : supplemental.excerpt || item.excerpt,
      href: item.href || supplemental.href || resolveWebinarHref(normalizedId),
      image: usesFallbackImage ? supplemental.image || item.image : item.image,
      publishedAt: item.publishedAt || supplemental.publishedAt || null,
      eventTimestamp,
      publishedTimestamp: eventTimestamp,
      sortOrder: item.sortOrder,
      badgeLabel: item.badgeLabel ?? "Webinar",
    },
    reference,
  );
}

export function mapSanityPostsToListing(posts: SanityPostNode[] = []) {
  if (!posts?.length) return [];

  return filterPublishedSanityPosts(posts)
    .filter((post) => post.slug)
    .map((post, index) => {
      const slug = post.slug;
      const excerptSource = post.plainBody || portableTextToPlainText(post.body) || FIGMA_RESOURCE_EXCERPT;
      const excerpt =
        excerptSource.length > 160 ? `${excerptSource.slice(0, 160)}…` : excerptSource;
      const image = resolvePostListingImage(post, index);
      const categoryTitles = (post.categories || [])
        .map((category) => (category?.title || "").trim())
        .filter(Boolean) as string[];
      const categorySlugs = (post.categories || [])
        .map((category) => (category?.slug || "").trim())
        .filter(Boolean) as string[];
      const service = resolveBlogService(post.categories || [], slug);
      const publishedAtRaw = post.publishedAt || null;
      const publishedTimestamp = publishedAtRaw ? new Date(publishedAtRaw).getTime() : null;

      return {
        id: slug,
        title: post.title || "Untitled",
        excerpt,
        type: "Blog" as const,
        service,
        href: buildBlogHref(slug),
        image,
        publishedAt: formatListingDate(publishedAtRaw),
        publishedTimestamp: Number.isFinite(publishedTimestamp) ? publishedTimestamp : null,
        categoryTitles,
        categorySlugs,
        tags: post.tags || [],
        sortOrder: index + 1,
        badgeLabel: "Blog",
        category: categoryTitles[0] || "Blog",
      };
    });
}

export function mapSanityWebinarsToListing(
  webinars: SanityWebinarNode[] = [],
  referenceDate: Date = new Date(),
) {
  if (!webinars?.length) return [];

  const supplementalBySlug = getSupplementalWebinarBySlug();

  return filterPublishedSanityWebinars(webinars)
    .filter((webinar) => webinar.slug)
    .map((webinar, index) => {
      const slug = normalizeWebinarSlug(webinar.slug);
      const supplemental = supplementalBySlug.get(slug);
      const title =
        typeof webinar.title === "string"
          ? webinar.title
          : portableTextToPlainText(webinar.title) || supplemental?.title || "Webinar";
      const bodyExcerpt = portableTextToPlainText(webinar.body);
      const eventDate = webinar.eventDate ? new Date(webinar.eventDate) : null;
      const image =
        webinar.youtubeThumbnail?.asset?.url ||
        webinar.upcomingImage?.asset?.url ||
        webinar.bannerImage?.asset?.url ||
        supplemental?.image ||
        FIGMA_RESOURCE_IMAGES[index % FIGMA_RESOURCE_IMAGES.length] ||
        FALLBACK_IMAGE;
      const excerptSource = bodyExcerpt || supplemental?.excerpt || FIGMA_RESOURCE_EXCERPT;
      const excerpt =
        excerptSource.length > 160 ? `${excerptSource.slice(0, 160)}…` : excerptSource;

      return mergeWebinarListingItem(
        {
          id: slug,
          title,
          excerpt,
          type: "Webinar",
          service: resolveWebinarService(slug) || supplemental?.service || null,
          href: resolveWebinarHref(slug),
          image,
          sortOrder: index + 1,
          badgeLabel: "Webinar",
          publishedAt: eventDate
            ? eventDate.toLocaleDateString("en-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })
            : supplemental?.publishedAt || null,
          eventTimestamp: eventDate
            ? eventDate.getTime()
            : supplemental?.eventTimestamp ?? supplemental?.publishedTimestamp ?? null,
          publishedTimestamp: eventDate
            ? eventDate.getTime()
            : supplemental?.eventTimestamp ?? supplemental?.publishedTimestamp ?? index,
        },
        supplemental,
        referenceDate,
      );
    });
}

/** Sanity webinars plus static-only webinar pages (deduped by slug). */
export function buildSanityWebinarListingItems(
  webinars: SanityWebinarNode[] = [],
  referenceDate: Date = new Date(),
) {
  const supplementalBySlug = getSupplementalWebinarBySlug();
  const sanityItems = mapSanityWebinarsToListing(webinars, referenceDate);
  const sanityIds = new Set(
    sanityItems.map((item) => normalizeWebinarSlug(item.id)).filter(Boolean),
  );
  const extraItems = supplementalWebinarListingItems
    .filter((item) => !sanityIds.has(normalizeWebinarSlug(item.id)))
    .map((item) =>
      mergeWebinarListingItem(
        {
          ...item,
          id: normalizeWebinarSlug(item.id),
          href: item.href || resolveWebinarHref(item.id),
        },
        supplementalBySlug.get(normalizeWebinarSlug(item.id)),
        referenceDate,
      ),
    );

  return [...sanityItems, ...extraItems];
}
