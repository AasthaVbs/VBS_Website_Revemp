"use client";

import Image from "next/image";
import { useState } from "react";

import videoFillIcon from "@/assets/images/video-fill-icon.svg";
import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { TestimonialVideoModal } from "@/components/sections/testimonial-video-modal";
import { architectureAiBimWorkflowSection } from "@/constants/architecture-services-content";
import { altFromImageSrc } from "@/lib/utils";

/** Shared AI + BIM Experts demo — https://www.youtube.com/watch?v=lQFR-Cs-0Qs */
export const AI_BIM_WORKFLOW_YOUTUBE_VIDEO_ID = "lQFR-Cs-0Qs";

type AiBimWorkflowSectionContent = typeof architectureAiBimWorkflowSection & {
  posterSrc?: string;
  youtubeVideoId?: string;
  videoHref?: string;
  onPlay?: () => void;
};

function youtubeThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

/**
 * AI-BIM Workflow — video CTA between Services and Core Points.
 * Click opens a YouTube popup with autoplay.
 */
export function ArchitectureAiBimWorkflowSection({
  section = architectureAiBimWorkflowSection,
}: {
  section?: AiBimWorkflowSectionContent;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const youtubeVideoId = section.youtubeVideoId ?? AI_BIM_WORKFLOW_YOUTUBE_VIDEO_ID;
  // Prefer the real YouTube thumbnail whenever a video is wired.
  const posterSrc = youtubeVideoId
    ? youtubeThumbnailUrl(youtubeVideoId)
    : section.posterSrc;
  const canPlay = Boolean(youtubeVideoId || section.videoHref || section.onPlay);

  const openVideo = () => {
    if (section.onPlay) {
      section.onPlay();
      return;
    }
    if (youtubeVideoId) {
      setIsOpen(true);
    }
  };

  const media = (
    <div className="architecture-ai-bim-workflow__media relative w-full max-w-[640px] overflow-hidden rounded-[10px] aspect-[800/558] lg:w-[640px] lg:max-w-none lg:shrink-0">
      {posterSrc ? (
        <Image
          src={posterSrc}
          alt={altFromImageSrc(posterSrc)}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 640px"
          unoptimized={typeof posterSrc === "string"}
        />
      ) : (
        <div className="absolute inset-0 bg-[#1a1a1a]" aria-hidden />
      )}
      <div className="absolute inset-0 rounded-[10px] bg-black/20" aria-hidden />
      <span className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2">
        <Image
          src={videoFillIcon}
          alt=""
          width={100}
          height={100}
          className="h-full w-full"
          aria-hidden
        />
      </span>
    </div>
  );

  return (
    <section className="architecture-ai-bim-workflow mep-figma-ai-bim-workflow bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex w-full flex-col items-center gap-[40px] lg:flex-row lg:items-center lg:gap-[60px]">
          <div className="flex min-w-0 flex-[1.35] flex-col items-start gap-5">
            <div className="flex w-full max-w-[720px] flex-col items-start gap-3">
              <MepSectionTag label={section.tag} />
              <h2 className="architecture-ai-bim-workflow__title w-full max-w-[720px]">
                {section.titleParts.map((part) => (
                  <span key={part.text} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </h2>
            </div>
            <p className="w-full max-w-[680px] text-[16px] font-normal leading-6 text-[#808080]">
              {section.description}
            </p>
          </div>

          {canPlay ? (
            <button
              type="button"
              onClick={openVideo}
              className="architecture-ai-bim-workflow__media-link relative block w-full max-w-[640px] cursor-pointer border-0 bg-transparent p-0 text-left outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#D70416] focus-visible:ring-offset-2 lg:w-auto lg:shrink-0"
              aria-label={section.videoAriaLabel}
            >
              {media}
            </button>
          ) : (
            <div
              className="architecture-ai-bim-workflow__media-link relative w-full max-w-[640px] lg:w-auto lg:shrink-0"
              role="img"
              aria-label={section.videoAriaLabel}
            >
              {media}
            </div>
          )}
        </div>
      </PageContainer>

      {isOpen && youtubeVideoId ? (
        <TestimonialVideoModal
          youtubeVideoId={youtubeVideoId}
          title={section.videoAriaLabel}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </section>
  );
}
