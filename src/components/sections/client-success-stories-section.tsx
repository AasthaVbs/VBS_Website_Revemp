"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { TestimonialVideoModal } from "@/components/sections/testimonial-video-modal";
import {
  clientSuccessStories,
  clientSuccessStoriesDefaultDescription,
  type ClientSuccessStory,
} from "@/constants/client-success-stories-content";
import { ROUTES } from "@/constants/navigation";

const CARD_SCROLL_GAP = 16;
const PROGRESS_THUMB_WIDTH = 320;
const AUTO_SCROLL_MS = 5000;

function ClientSuccessStoryCard({
  story,
  onPlayVideo,
}: {
  story: ClientSuccessStory;
  onPlayVideo: (story: ClientSuccessStory) => void;
}) {
  return (
    <article className="vbs-client-success-stories__card">
      <div className="vbs-client-success-stories__card-copy">
        <p className="vbs-client-success-stories__quote">{story.quote}</p>
        <div className="vbs-client-success-stories__author">
          <div className="vbs-client-success-stories__avatar">
            <Image
              src={story.avatar}
              alt=""
              fill
              className="vbs-client-success-stories__avatar-img"
              sizes="60px"
            />
          </div>
          <div className="vbs-client-success-stories__author-meta">
            <h3 className="vbs-client-success-stories__name">{story.name}</h3>
            <p className="vbs-client-success-stories__role">{story.role}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onPlayVideo(story)}
        className="vbs-client-success-stories__media"
        aria-label={`Play video testimonial from ${story.name}`}
      >
        <Image
          src={story.thumbnail}
          alt={story.thumbnailAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.01]"
          sizes="480px"
        />
      </button>
    </article>
  );
}

/** Figma 1982:24723 */
export function ClientSuccessStoriesSection({
  description = clientSuccessStoriesDefaultDescription,
  viewAllHref = ROUTES.testimonials,
}: {
  description?: string;
  viewAllHref?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
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

    const firstCard = track.querySelector<HTMLElement>(".vbs-client-success-stories__card");
    const cardWidth = firstCard?.offsetWidth ?? 878;
    track.scrollBy({
      left: direction * (cardWidth + CARD_SCROLL_GAP),
      behavior: "smooth",
    });
  }, []);

  const scrollToNextCard = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>(".vbs-client-success-stories__card");
    const cardWidth = firstCard?.offsetWidth ?? 878;
    const step = cardWidth + CARD_SCROLL_GAP;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (maxScroll <= 0) return;

    if (track.scrollLeft >= maxScroll - 1) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    track.scrollBy({ left: step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (activeVideo) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const intervalId = window.setInterval(() => {
      if (!isPausedRef.current) {
        scrollToNextCard();
      }
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(intervalId);
  }, [activeVideo, scrollToNextCard]);

  const progressOffset = scrollProgress * progressMaxOffset;

  return (
    <section className="vbs-client-success-stories">
      <PageContainer className="vbs-client-success-stories__container">
        <header className="vbs-client-success-stories__header">
          <div className="vbs-client-success-stories__intro">
            <div className="vbs-client-success-stories__head">
              <span className="vbs-client-success-stories__tag">Testimonials</span>
              <h2 className="vbs-client-success-stories__title">
                <span className="vbs-client-success-stories__title-dark">Client Success </span>
                <span className="vbs-client-success-stories__title-accent">Stories</span>
              </h2>
            </div>
            <p className="vbs-client-success-stories__description">{description}</p>
          </div>

          <Link href={viewAllHref} className="vbs-client-success-stories__view-all">
            View All
            <ChevronRight className="vbs-client-success-stories__view-all-icon" aria-hidden />
          </Link>
        </header>

        <div
          className="vbs-client-success-stories__carousel"
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
        >
          <div
            ref={trackRef}
            className="vbs-client-success-stories__track client-success-cards-scroll"
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

        <div
          className="vbs-client-success-stories__controls"
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
        >
          <div ref={progressTrackRef} className="vbs-client-success-stories__progress-track">
            <div
              className="vbs-client-success-stories__progress-thumb"
              style={{ transform: `translateX(${progressOffset}px)` }}
            />
          </div>
          <div className="vbs-client-success-stories__nav">
            <button
              type="button"
              aria-label="Previous testimonial"
              disabled={!canScrollPrev}
              onClick={() => scrollByCard(-1)}
              className="vbs-client-success-stories__nav-btn"
            >
              <ChevronRight className="h-7 w-7 rotate-180" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              disabled={!canScrollNext}
              onClick={() => scrollByCard(1)}
              className="vbs-client-success-stories__nav-btn"
            >
              <ChevronRight className="h-7 w-7" aria-hidden />
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
