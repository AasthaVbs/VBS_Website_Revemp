"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { useMemo } from "react";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { sanityImageUrl } from "@/lib/sanity-blog";

type WebinarPortableTextProps = {
  value: unknown[];
  variant?: "body" | "title";
};

function buildWebinarPortableTextComponents(variant: "body" | "title"): PortableTextComponents {
  const titleComponents: PortableTextComponents = {
    block: {
      normal: ({ children }) => <>{children}</>,
    },
    marks: {
      highlight: ({ children }) => (
        <span className="vbs-webinar-detail__highlight">{children}</span>
      ),
    },
  };

  if (variant === "title") {
    return titleComponents;
  }

  return {
    ...titleComponents,
    block: {
      h1: ({ children, value }) => (
        <h2 id={`toc-${value._key}`} className="vbs-webinar-detail__pt-heading">
          {children}
        </h2>
      ),
      h2: ({ children, value }) => (
        <h2 id={`toc-${value._key}`} className="vbs-webinar-detail__pt-heading">
          {children}
        </h2>
      ),
      h3: ({ children, value }) => (
        <h3 id={`toc-${value._key}`} className="vbs-webinar-detail__pt-heading">
          {children}
        </h3>
      ),
      h4: ({ children, value }) => (
        <h4 id={`toc-${value._key}`} className="vbs-webinar-detail__pt-heading">
          {children}
        </h4>
      ),
      normal: ({ children }) => <p className="vbs-webinar-detail__pt-paragraph">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="vbs-webinar-detail__pt-list">{children}</ul>,
      number: ({ children }) => <ol className="vbs-webinar-detail__pt-list">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="vbs-webinar-detail__pt-list-item">{children}</li>,
      number: ({ children }) => <li className="vbs-webinar-detail__pt-list-item">{children}</li>,
    },
    marks: {
      ...titleComponents.marks,
      strong: ({ children }) => (
        <strong className="vbs-webinar-detail__pt-strong">{children}</strong>
      ),
      link: ({ children, value }) => {
        const href = value?.href || "#";
        const isInternal = /^\/(?!\/)/.test(href);
        return isInternal ? (
          <Link href={href} className="vbs-webinar-detail__pt-link">
            {children}
          </Link>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="vbs-webinar-detail__pt-link"
          >
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
            className="vbs-webinar-detail__pt-image"
            loading="lazy"
          />
        );
      },
      readMore: ({ value }) => (
        <div className="vbs-webinar-detail__readmore">
          {value?.label ? <p className="vbs-webinar-detail__pt-paragraph">{value.label}</p> : null}
          <Link href={value?.url || "#"} className="vbs-webinar-detail__pt-link">
            {value?.linkText}
          </Link>
        </div>
      ),
      cta: ({ value }) => (
        <div className="vbs-webinar-detail__inline-cta">
          <p className="vbs-webinar-detail__section-title">{value?.title}</p>
          <PrimaryCtaButton fullWidth={false} href={value?.buttonUrl || "#"}>
            {value?.buttonText || "Learn More"}
          </PrimaryCtaButton>
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
