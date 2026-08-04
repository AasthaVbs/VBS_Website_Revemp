"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { webinarMepSlugs } from "@/constants/webinar-page-content";
import type { ResourceListingItem } from "@/constants/resources-page-content";
import type { WebinarDetail } from "@/lib/sanity-webinar";

import { WebinarGatedVideoModal } from "./webinar-gated-video-modal";

const HEADER_OFFSET = 112;
const BOTTOM_GAP = 24;

type WebinarDetailSidebarProps = {
  webinar: WebinarDetail;
  searchableWebinars: ResourceListingItem[];
};

export function WebinarDetailSidebar({
  webinar,
  searchableWebinars,
}: WebinarDetailSidebarProps) {
  const asideRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");

  const thumbnailSrc =
    webinar.youtubeThumbnail || webinar.upcomingImage || webinar.bannerImage || "";
  const requiresMepForm = webinarMepSlugs.has(webinar.slug);
  const hasVideoContent = Boolean(thumbnailSrc && (webinar.youtubeVideoUrl || requiresMepForm));
  const hasRegisterForm = Boolean(webinar.upcomingImageUrl);
  const registerHref =
    webinar.ctaButton?.buttonUrl || webinar.upcomingImageUrl || undefined;
  const registerLabel = webinar.ctaButton?.buttonText || "Register now!";

  const filteredWebinars = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchableWebinars
      .filter((item) => item.title.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query, searchableWebinars]);

  useEffect(() => {
    const aside = asideRef.current;
    if (!aside) return;

    const updateStickyTop = () => {
      if (window.innerWidth < 1024) {
        aside.style.removeProperty("--vbs-webinar-aside-top");
        return;
      }

      const top = Math.min(
        HEADER_OFFSET,
        window.innerHeight - aside.offsetHeight - BOTTOM_GAP,
      );
      aside.style.setProperty("--vbs-webinar-aside-top", `${top}px`);
    };

    updateStickyTop();
    const resizeObserver = new ResizeObserver(updateStickyTop);
    resizeObserver.observe(aside);
    window.addEventListener("resize", updateStickyTop);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyTop);
    };
  }, [hasVideoContent, hasRegisterForm, filteredWebinars.length]);

  return (
    <aside ref={asideRef} className="vbs-webinar-detail__aside">
      <div className="vbs-webinar-detail__sidebar-card">
        <Link href="/webinar" className="vbs-webinar-detail__back-link">
          Go back to webinar
        </Link>

        <label className="vbs-webinar-detail__search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Here ..."
            className="vbs-webinar-detail__search-input"
          />
          <Search className="vbs-webinar-detail__search-icon" strokeWidth={1.2} aria-hidden />
        </label>

        {filteredWebinars.length > 0 ? (
          <nav className="vbs-webinar-detail__search-results" aria-label="Matching webinars">
            {filteredWebinars.map((item) => (
              <Link key={item.id} href={item.href} className="vbs-webinar-detail__search-result">
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}

        {hasVideoContent ? (
          <div className="vbs-webinar-detail__sidebar-media">
            <WebinarGatedVideoModal
              thumbnailSrc={thumbnailSrc}
              videoUrl={webinar.youtubeVideoUrl || ""}
              formVariant={requiresMepForm ? "mep" : "none"}
              formStorageKey={`vbs_mep_webinar_video_form_${webinar.slug}`}
              thumbnailAlt={webinar.metaTitle}
            />
          </div>
        ) : (
          <>
            <div className="vbs-webinar-detail__secure">
              <h2 className="vbs-webinar-detail__secure-title">Secure Your Spot Today</h2>
              <p className="vbs-webinar-detail__secure-desc">
                Seats are limited! Register now to access expert-led insights, practical strategies,
                and a live Q&amp;A designed to help you stay ahead in your industry.
              </p>
            </div>

            {hasRegisterForm ? (
              <PrimaryCtaButton
                fullWidth
                className="vbs-webinar-detail__register-btn"
                onClick={() => {
                  document
                    .getElementById("webinar-register-form")
                    ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                }}
              >
                {registerLabel}
              </PrimaryCtaButton>
            ) : registerHref ? (
              <PrimaryCtaButton
                fullWidth
                href={registerHref}
                className="vbs-webinar-detail__register-btn"
              >
                {registerLabel}
              </PrimaryCtaButton>
            ) : null}

            {hasRegisterForm && webinar.upcomingImageUrl ? (
              <div id="webinar-register-form" className="vbs-webinar-detail__iframe-wrap">
                <iframe
                  src={webinar.upcomingImageUrl}
                  title="Webinar registration form"
                  className="vbs-webinar-detail__iframe"
                />
                <a
                  href={webinar.upcomingImageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vbs-webinar-detail__iframe-fallback"
                >
                  Open full registration form
                </a>
              </div>
            ) : null}
          </>
        )}
      </div>
    </aside>
  );
}
