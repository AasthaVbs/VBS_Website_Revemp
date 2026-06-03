import { blogListingItems } from "@/constants/blog-posts/listing";
import { revitFamilyCreationPost } from "@/constants/blog-posts/posts/revit-family-creation";
import type { BlogPostDetail } from "@/constants/blog-posts/types";
import type { ResourceListingItem } from "@/constants/resources-page-content";

const fullPosts: Record<string, BlogPostDetail> = {
  [revitFamilyCreationPost.slug]: revitFamilyCreationPost,
};

function stubPostFromListing(item: ResourceListingItem): BlogPostDetail {
  const slug = item.id;
  return {
    slug,
    title: item.title,
    heroImage: item.image,
    excerpt: item.excerpt,
    author: revitFamilyCreationPost.author,
    meta: {
      category: item.service,
      lastUpdated: "May 29, 2026",
    },
    tableOfContents: [
      { id: "overview", label: item.title, level: "h2" },
      { id: "key-points", label: "Key Points", level: "h2" },
      { id: "conclusion", label: "Conclusion", level: "h2" },
    ],
    sections: [
      { type: "paragraph", text: item.excerpt },
      {
        type: "h2",
        id: "overview",
        text: item.title,
      },
      {
        type: "paragraph",
        text: "This article explores how architecture and engineering firms can improve BIM delivery, coordination, and documentation quality through structured workflows and dependable project data.",
      },
      {
        type: "h2",
        id: "key-points",
        text: "Key Points",
      },
      {
        type: "bulletList",
        items: [
          {
            title: "Stronger coordination:",
            body: "Better model content reduces rework and improves constructability reviews.",
          },
          {
            title: "Reliable documentation:",
            body: "Consistent parameters and families keep schedules and drawings aligned.",
          },
          {
            title: "Scalable delivery:",
            body: "Standardized libraries help teams move faster across repeat project types.",
          },
        ],
      },
      {
        type: "h2",
        id: "conclusion",
        text: "Conclusion",
      },
      {
        type: "paragraph",
        text: "Firms that invest in dependable BIM content and delivery standards gain stronger consistency, better workflow performance, and fewer downstream corrections across active projects.",
      },
      {
        type: "ctaBanner",
        title: "Transform Your BIM Workflow with Custom Revit Families.",
        ctaLabel: "Contact Us",
        href: "/contact",
      },
      {
        type: "authorBio",
        image: revitFamilyCreationPost.author.image,
        bio: revitFamilyCreationPost.author.bio,
      },
    ],
    faqs: revitFamilyCreationPost.faqs,
  };
}

export function getAllBlogSlugs(): string[] {
  return blogListingItems.map((item) => item.id);
}

export function getBlogPostBySlug(slug: string): BlogPostDetail | undefined {
  if (fullPosts[slug]) {
    return fullPosts[slug];
  }
  const listing = blogListingItems.find((item) => item.id === slug);
  if (!listing) {
    return undefined;
  }
  return stubPostFromListing(listing);
}

export function getRelatedBlogPosts(
  currentSlug: string,
  limit = 4,
): ResourceListingItem[] {
  return blogListingItems.filter((item) => item.id !== currentSlug).slice(0, limit);
}
