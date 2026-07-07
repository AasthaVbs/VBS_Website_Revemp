"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { useMemo } from "react";

import { sanityImageUrl } from "@/lib/sanity-blog";

type WebinarPortableTextProps = {
  value: unknown[];
  variant?: "body" | "title";
};

function buildWebinarPortableTextComponents(variant: "body" | "title"): PortableTextComponents {
  const titleComponents: PortableTextComponents = {
    marks: {
      highlight: ({ children }) => <span className="highlight-text">{children}</span>,
    },
  };

  if (variant === "title") {
    return titleComponents;
  }

  return {
    ...titleComponents,
    block: {
      h1: ({ children, value }) => <h1 id={`toc-${value._key}`}>{children}</h1>,
      h2: ({ children, value }) => <h2 id={`toc-${value._key}`}>{children}</h2>,
      h3: ({ children, value }) => <h3 id={`toc-${value._key}`}>{children}</h3>,
      h4: ({ children, value }) => (
        <h4 id={`toc-${value._key}`} className="text-primary">
          {children}
        </h4>
      ),
      normal: ({ children }) => <p>{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-style">{children}</ul>,
      number: ({ children }) => <ol>{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li>✅ {children}</li>,
    },
    marks: {
      ...titleComponents.marks,
      strong: ({ children }) => <strong className="text-dark">{children}</strong>,
      link: ({ children, value }) => {
        const href = value?.href || "#";
        const isInternal = /^\/(?!\/)/.test(href);
        return isInternal ? (
          <Link href={href} className="text-decoration-none">
            {children}
          </Link>
        ) : (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset) return null;
        const src = value.asset.url || sanityImageUrl(value);
        return (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={value.alt || "Webinar content image"}
            className="webinar-detail-image img-fluid rounded-4"
            loading="lazy"
          />
        );
      },
      readMore: ({ value }) => (
        <div className="readmore-section">
          {value?.label ? <div className="paragraph">{value.label}</div> : null}
          <div className="title">
            <Link href={value?.url || "#"}>{value?.linkText}</Link>
          </div>
        </div>
      ),
      cta: ({ value }) => (
        <div className="cta-section justify-content-between row align-items-center">
          <div className="col-8">
            <div className="title">{value?.title}</div>
          </div>
          <div className="col-lg-4">
            <Link className="btn btn-light w-100 d-block" href={value?.buttonUrl || "#"}>
              {value?.buttonText}
            </Link>
          </div>
        </div>
      ),
    },
  };
}

export function WebinarPortableText({ value, variant = "body" }: WebinarPortableTextProps) {
  const components = useMemo(() => buildWebinarPortableTextComponents(variant), [variant]);
  if (!Array.isArray(value) || value.length === 0) return null;
  return <PortableText value={value as never} components={components} />;
}
