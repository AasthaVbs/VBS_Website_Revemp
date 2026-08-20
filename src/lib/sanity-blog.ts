import imageUrlBuilder from "@sanity/image-url";

import { revitFamilyCreationPost } from "@/constants/blog-posts/posts/revit-family-creation";
import type { BlogFaqItem, BlogPostDetail, BlogTocItem } from "@/constants/blog-posts/types";
import { FIGMA_RESOURCE_EXCERPT, FIGMA_RESOURCE_IMAGES } from "@/constants/resource-figma-assets";
import { sanityDataset, sanityProjectId } from "@/lib/sanity-env";
import { portableTextToPlainText } from "@/lib/sanity-listing";
import { buildBlogHref } from "@/lib/resource-listing";

const urlBuilder = imageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset });

const DEFAULT_AUTHOR = revitFamilyCreationPost.author;

export type SanityPostRecord = {
  _id?: string;
  _type?: string;
  title?: string;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt?: string | null;
  slug?: string;
  tags?: string[];
  _rawBody?: unknown[];
  author?: {
    name?: string;
    role?: string;
    bio?: string;
    image?: { asset?: { url?: string } };
  };
  featuredImage?: { asset?: { url?: string } };
  socialImage?: { asset?: { url?: string } };
  categories?: Array<{ title?: string | null; slug?: string | null }>;
  faqs?: Array<{ _id?: string; question?: string; answer?: string }>;
};

function formatBlogDate(value?: string | null) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function resolveHeroImage(post: SanityPostRecord, index = 0) {
  const featured = post.featuredImage?.asset?.url;
  if (featured) return featured;
  return FIGMA_RESOURCE_IMAGES[index % FIGMA_RESOURCE_IMAGES.length];
}

function resolveAuthor(post: SanityPostRecord) {
  const author = post.author;
  if (!author?.name) return DEFAULT_AUTHOR;

  return {
    name: author.name,
    role: author.role || "Author",
    image: author.image?.asset?.url || DEFAULT_AUTHOR.image,
    bio: author.bio || DEFAULT_AUTHOR.bio,
    linkedinUrl: DEFAULT_AUTHOR.linkedinUrl,
  };
}

function resolveCategory(post: SanityPostRecord) {
  const titles = (post.categories || []).map((c) => c.title).filter(Boolean);
  return titles[0] || "Blog";
}

function buildTableOfContents(body: unknown[] | undefined): BlogTocItem[] {
  if (!Array.isArray(body)) return [];

  return body
    .filter((block): block is { style?: string; _key?: string; children?: Array<{ text?: string }> } => {
      return Boolean(block && typeof block === "object" && (block as { style?: string }).style === "h2");
    })
    .map((heading) => ({
      id: `toc-${heading._key}`,
      label: (heading.children || []).map((span) => span.text || "").join(""),
      level: "h2" as const,
    }));
}

function mapFaqs(faqs: SanityPostRecord["faqs"]): BlogFaqItem[] {
  return (faqs || [])
    .filter((faq) => faq?.question || faq?.answer)
    .map((faq, index) => ({
      question: faq.question || "",
      answer: faq.answer || "",
      defaultOpen: index === 0,
    }));
}

export function mapSanityPostToBlogDetail(
  post: SanityPostRecord,
  index = 0,
): BlogPostDetail | undefined {
  const slug = post.slug;
  if (!slug) return undefined;

  const excerptSource = portableTextToPlainText(post._rawBody) || FIGMA_RESOURCE_EXCERPT;
  const excerpt =
    excerptSource.length > 200 ? `${excerptSource.slice(0, 200)}…` : excerptSource;

  return {
    slug,
    title: post.title || "Untitled",
    heroImage: resolveHeroImage(post, index),
    excerpt,
    author: resolveAuthor(post),
    meta: {
      category: resolveCategory(post),
      lastUpdated: formatBlogDate(post.publishedAt),
    },
    tableOfContents: buildTableOfContents(post._rawBody),
    sections: [],
    portableBody: post._rawBody,
    source: "sanity",
    faqs: mapFaqs(post.faqs),
  };
}

export function sanityImageUrl(source: unknown) {
  return urlBuilder.image(source).auto("format").url();
}

export function buildSanityBlogHref(slug: string) {
  return buildBlogHref(slug);
}

export function sanityPostSeo(post: SanityPostRecord) {
  const social = post.socialImage?.asset?.url;
  return {
    title: post.metaTitle || post.title || "Blog",
    description: post.metaDescription || portableTextToPlainText(post._rawBody).slice(0, 160),
    image: social || post.featuredImage?.asset?.url,
  };
}
