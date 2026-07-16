"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { BlogDetailNewsletterForm } from "@/components/sections/blog/blog-detail-newsletter-form";
import type { BlogTocItem } from "@/constants/blog-posts/types";
import { cn } from "@/lib/utils";

const HEADER_OFFSET = 112;
const BOTTOM_GAP = 24;

type BlogDetailSidebarProps = {
  tableOfContents: BlogTocItem[];
};

export function BlogDetailSidebar({ tableOfContents }: BlogDetailSidebarProps) {
  const asideRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState("");

  const filteredToc = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return tableOfContents;
    }
    return tableOfContents.filter((item) =>
      item.label.toLowerCase().includes(q),
    );
  }, [query, tableOfContents]);

  // Sticky top: scroll page through TOC until newsletter sits in view, then stick.
  useEffect(() => {
    const aside = asideRef.current;
    if (!aside) return;

    const updateStickyTop = () => {
      if (window.innerWidth < 1024) {
        aside.style.removeProperty("--vbs-blog-aside-top");
        return;
      }

      const asideHeight = aside.offsetHeight;
      const viewportHeight = window.innerHeight;
      const top = Math.min(
        HEADER_OFFSET,
        viewportHeight - asideHeight - BOTTOM_GAP,
      );
      aside.style.setProperty("--vbs-blog-aside-top", `${top}px`);
    };

    updateStickyTop();

    const resizeObserver = new ResizeObserver(updateStickyTop);
    resizeObserver.observe(aside);
    window.addEventListener("resize", updateStickyTop);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyTop);
    };
  }, [filteredToc.length]);

  useEffect(() => {
    const ids = tableOfContents.map((item) => item.id).filter(Boolean);
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (intersecting.length) {
          setActiveId(intersecting[0].target.id);
          return;
        }

        const firstEl = elements[0];
        if (firstEl && firstEl.getBoundingClientRect().top > window.innerHeight * 0.45) {
          setActiveId("");
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25],
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [tableOfContents]);

  return (
    <aside ref={asideRef} className="vbs-blog-detail__aside">
      <div className="vbs-blog-detail__toc-card">
        <Link href="/blog" className="vbs-blog-detail__back-link">
          Go back To Blogs
        </Link>

        <label className="vbs-blog-detail__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Here ..."
            className="vbs-blog-detail__search-input"
          />
          <Search
            className="vbs-blog-detail__search-icon"
            strokeWidth={1.2}
            aria-hidden
          />
        </label>

        <p className="vbs-blog-detail__toc-heading">Table of Content</p>

        <nav className="vbs-blog-detail__toc-nav" aria-label="Table of contents">
          {filteredToc.map((item) => {
            const isActive = Boolean(activeId) && activeId === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "vbs-blog-detail__toc-link",
                  isActive
                    ? "vbs-blog-detail__toc-link--primary"
                    : "vbs-blog-detail__toc-link--step",
                )}
              >
                <span className="vbs-blog-detail__toc-bullet" aria-hidden />
                <span className="vbs-blog-detail__toc-label">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="vbs-blog-detail__newsletter-wrap">
        <BlogDetailNewsletterForm />
      </div>
    </aside>
  );
}
