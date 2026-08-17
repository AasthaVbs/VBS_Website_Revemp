"use client";

import Image from "next/image";
import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { TestimonialVideoModal } from "@/components/sections/testimonial-video-modal";
import { BookMeetingButton } from "@/components/ui/book-meeting-button";
import { cadDraftingUsaTestimonial } from "@/constants/cad-drafting-services-usa-content";
import { cn } from "@/lib/utils";

const videoFillIcon = "/image/video-fill-icon.svg";

export type CadDraftingUsaTestimonialContent = {
  titleLead: string;
  titleAccent: string;
  description: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  youtubeVideoId: string;
  breakTitle?: boolean;
};

/** Figma 3991:46364 — Whitten Architects / Alec Whitten testimonial */
export function CadDraftingUsaTestimonialSection({
  content = cadDraftingUsaTestimonial,
  className,
  descriptionClassName,
  mobileCentered = false,
}: {
  content?: CadDraftingUsaTestimonialContent;
  className?: string;
  descriptionClassName?: string;
  mobileCentered?: boolean;
} = {}) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className={cn("cad-usa-testimonial bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]", className)}>
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[60px]">
          <div
            className={cn(
              "flex min-w-0 flex-1 flex-col items-start gap-5",
              mobileCentered && "max-lg:items-center max-lg:text-center",
            )}
          >
            <h2 className="w-full capitalize text-section">
              <span className="text-section font-medium text-[#111111]">{content.titleLead}</span>
              {content.breakTitle ? <br /> : null}
              <span className="text-section text-accent font-light">{content.titleAccent}</span>
            </h2>
            <p className={cn("w-full text-body", descriptionClassName)}>{content.description}</p>
            <BookMeetingButton
              fullWidth={false}
              className="!h-auto !min-h-[56px] !px-5 !py-4 capitalize"
            />
          </div>

          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="relative h-[240px] w-full flex-1 overflow-hidden rounded-[10px] border-0 bg-transparent p-0 text-left sm:h-[320px] lg:h-[388px]"
            aria-label={`Play video testimonial: ${content.imageAlt}`}
          >
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              className="object-cover"
              unoptimized={typeof content.image === "string"}
              sizes="(max-width: 1024px) 100vw, 690px"
            />
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 sm:h-[88px] sm:w-[88px] lg:h-[100px] lg:w-[100px]"
              aria-hidden
            >
              <Image
                src={videoFillIcon}
                alt=""
                width={100}
                height={100}
                className="h-full w-full"
              />
            </span>
          </button>
        </div>
      </PageContainer>

      {videoOpen ? (
        <TestimonialVideoModal
          onClose={() => setVideoOpen(false)}
          youtubeVideoId={content.youtubeVideoId}
          title={content.imageAlt}
        />
      ) : null}
    </section>
  );
}
