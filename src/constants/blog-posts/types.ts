export type BlogTocItem = {
  id: string;
  label: string;
  level?: "h2" | "h3";
};

export type BlogTextSpan = {
  text: string;
  href?: string;
  underline?: boolean;
  italic?: boolean;
};

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "rich"; spans: BlogTextSpan[] }
  | { type: "h2"; id?: string; text: string }
  | { type: "bulletList"; items: { title: string; body: string }[] }
  | {
      type: "table";
      headers: [string, string, string];
      rows: { cells: [string, string, string]; highlight?: boolean }[];
    }
  | { type: "image"; src: string; alt?: string; aspect?: string }
  | {
      type: "callout";
      variant: "download" | "link";
      label: string;
      linkLabel: string;
      href?: string;
    }
  | {
      type: "ctaBanner";
      title: string;
      ctaLabel: string;
      href?: string;
    }
  | { type: "authorBio"; image: string; bio: string };

export type BlogFaqItem = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export type BlogPostDetail = {
  slug: string;
  title: string;
  heroImage: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    image: string;
    bio: string;
  };
  meta: {
    category: string;
    lastUpdated: string;
  };
  tableOfContents: BlogTocItem[];
  sections: BlogContentBlock[];
  faqs: BlogFaqItem[];
};
