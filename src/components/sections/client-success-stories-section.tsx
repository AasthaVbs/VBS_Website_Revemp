"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { TestimonialVideoModal } from "@/components/sections/testimonial-video-modal";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  clientSuccessStories,
  clientSuccessStoriesDefaultDescription,
  type ClientSuccessStory,
} from "@/constants/client-success-stories-content";

const CARD_SCROLL_GAP = 16;
const PROGRESS_THUMB_WIDTH = 320;

function ClientSuccessStoryCard({
  story,
  onPlayVideo,
}: {
  story: ClientSuccessStory;
  onPlayVideo: (story: ClientSuccessStory) => void;
}) {
  return (
    <article className="flex h-[408px] w-[1097px] max-w-none shrink-0 items-stretch gap-5 rounded-[18px] border border-[#CBCCCD] bg-white p-5">
      <div className="flex w-[382px] shrink-0 flex-col justify-between">
        <p className="text-[16px] font-normal leading-6 text-[#808080]">{story.quote}</p>
        <div className="flex items-start gap-[15px]">
          <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-[10px] bg-[#F2F2F2]">
            <Image
              src={story.avatar}
              alt=""
              fill
              className="object-contain p-1.5"
              sizes="60px"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <h3 className="text-[24px] font-normal leading-tight text-[#111111]">{story.name}</h3>
            <p className="text-[13px] font-normal text-[#808080]">{story.role}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onPlayVideo(story)}
        className="group relative h-[368px] w-[655px] shrink-0 overflow-hidden rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2299D6]"
        aria-label={`Play video testimonial from ${story.name}`}
      >
        <Image
          src={story.thumbnail}
          alt={story.thumbnailAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.01]"
          sizes="655px"
        />
        <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" aria-hidden />
      </button>
    </article>
  );
}

/** Figma 1398:16053 */
export function ClientSuccessStoriesSection({
  description = clientSuccessStoriesDefaultDescription,
}: {
  description?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [progressMaxOffset, setProgressMaxOffset] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [activeVideo, setActiveVideo] = useState<ClientSuccessStory | null>(null);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return;
    }

    setScrollProgress(track.scrollLeft / maxScroll);
    setCanScrollPrev(track.scrollLeft > 1);
    setCanScrollNext(track.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const progressTrack = progressTrackRef.current;
    if (!progressTrack) return;

    const updateProgressTrack = () => {
      setProgressMaxOffset(Math.max(0, progressTrack.clientWidth - PROGRESS_THUMB_WIDTH));
    };

    updateProgressTrack();
    const observer = new ResizeObserver(updateProgressTrack);
    observer.observe(progressTrack);
    window.addEventListener("resize", updateProgressTrack);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateProgressTrack);
    };
  }, []);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>("article");
    const cardWidth = firstCard?.offsetWidth ?? 1097;
    track.scrollBy({
      left: direction * (cardWidth + CARD_SCROLL_GAP),
      behavior: "smooth",
    });
  }, []);

  const progressOffset = scrollProgress * progressMaxOffset;

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col gap-[60px]">
        <div className="flex w-full max-w-[413px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label="Testimonials" />
            <h2 className="text-section capitalize">
              <span className="font-medium text-[#111111]">Client Success </span>
              <span className="font-light text-[#D70416]">Stories</span>
            </h2>
          </div>
          <p className="text-[16px] capitalize leading-6 text-[#808080]">{description}</p>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="client-success-cards-scroll -mx-6 flex gap-4 overflow-x-auto px-6 md:-mx-10 md:px-10"
          >
            {clientSuccessStories.map((story) => (
              <ClientSuccessStoryCard
                key={story.id}
                story={story}
                onPlayVideo={setActiveVideo}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div ref={progressTrackRef} className="relative h-[2px] min-w-0 flex-1 bg-[#B1B1B1]">
            <div
              className="absolute left-0 top-0 h-[2px] w-[320px] max-w-full bg-[#111111] transition-transform duration-150"
              style={{ transform: `translateX(${progressOffset}px)` }}
            />
          </div>
          <div className="flex shrink-0 items-center gap-[30px]">
            <button
              type="button"
              aria-label="Previous testimonial"
              disabled={!canScrollPrev}
              onClick={() => scrollByCard(-1)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#CBCCCD] text-[#808080] backdrop-blur-[50px] transition enabled:hover:border-[#808080] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-6 w-6 rotate-180" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              disabled={!canScrollNext}
              onClick={() => scrollByCard(1)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#CBCCCD] text-[#808080] backdrop-blur-[50px] transition enabled:hover:border-[#808080] disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>
      </PageContainer>

      {activeVideo ? (
        <TestimonialVideoModal
          youtubeVideoId={activeVideo.youtubeVideoId}
          title={`${activeVideo.name} testimonial`}
          onClose={() => setActiveVideo(null)}
        />
      ) : null}
    </section>
  );
}
