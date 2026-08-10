"use client";

import Image from "next/image";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { TestimonialVideoModal } from "@/components/sections/testimonial-video-modal";
import { BookMeetingButton } from "@/components/ui/book-meeting-button";
import { cadDraftingUsaTestimonial } from "@/constants/cad-drafting-services-usa-content";

/** Figma 3991:46364 — Whitten Architects / Alec Whitten testimonial */
export function CadDraftingUsaTestimonialSection({
  content = cadDraftingUsaTestimonial,
}: {
  content?: typeof cadDraftingUsaTestimonial;
} = {}) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="cad-usa-testimonial bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[60px]">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
            <h2 className="w-full capitalize text-section">
              <span className="text-section font-medium text-[#111111]">{content.titleLead}</span>
              <span className="text-section text-accent font-light">{content.titleAccent}</span>
            </h2>
            <p className="w-full text-body">{content.description}</p>
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
              sizes="(max-width: 1024px) 100vw, 690px"
            />
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
