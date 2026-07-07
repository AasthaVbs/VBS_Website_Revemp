"use client";

import type { WebinarDetail } from "@/lib/sanity-webinar";
import { webinarMepSlugs } from "@/constants/webinar-page-content";

import { WebinarGatedVideoModal } from "./webinar-gated-video-modal";

type WebinarSidebarMediaProps = {
  webinar: WebinarDetail;
};

export function WebinarSidebarMedia({ webinar }: WebinarSidebarMediaProps) {
  const thumbnailSrc =
    webinar.youtubeThumbnail || webinar.upcomingImage || webinar.bannerImage || "";
  const requiresMepForm = webinarMepSlugs.has(webinar.slug);
  const hasVideoContent = Boolean(thumbnailSrc && (webinar.youtubeVideoUrl || requiresMepForm));

  if (hasVideoContent) {
    return (
      <div className="card-secrtion">
        <WebinarGatedVideoModal
          thumbnailSrc={thumbnailSrc}
          videoUrl={webinar.youtubeVideoUrl || ""}
          formVariant={requiresMepForm ? "mep" : "none"}
          formStorageKey={`vbs_mep_webinar_video_form_${webinar.slug}`}
          thumbnailAlt={webinar.metaTitle}
        />
      </div>
    );
  }

  if (webinar.upcomingImageUrl) {
    return (
      <div className="card-secrtion">
        <h3 className="mb-3 ms-2">Event Details</h3>
        <div style={{ height: 200, overflow: "hidden" }}>
          <iframe
            src={webinar.upcomingImageUrl}
            width="100%"
            height="2400"
            frameBorder={0}
            scrolling="auto"
            title="Webinar registration form"
            style={{ display: "block", border: 0 }}
          />
        </div>
        <div className="mt-3 text-center">
          <p className="text-muted small mb-2">To view the full form tap on Register Now button</p>
          <a
            href={webinar.upcomingImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lightblue text-white text-uppercase px-lg-4 py-2 rounded-pill fs-4 fw-semibold"
          >
            {webinar.ctaButton?.buttonText || "Register Now"}
          </a>
        </div>
      </div>
    );
  }

  if (thumbnailSrc) {
    return (
      <div className="card-secrtion">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={thumbnailSrc} alt={webinar.metaTitle} className="img-fluid mb-0 w-100 rounded-2" />
      </div>
    );
  }

  return null;
}
