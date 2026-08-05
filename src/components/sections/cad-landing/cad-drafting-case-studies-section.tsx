"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { cn } from "@/lib/utils";
import {
  cadDraftingLandingCaseStudies,
  cadDraftingLandingCaseStudiesSection,
} from "@/constants/cad-drafting-landing-content";

const CARD_SCROLL_GAP = 16;
const PROGRESS_THUMB_WIDTH = 280;
const AUTO_SCROLL_MS = 3500;
const AUTO_SCROLL_RESUME_MS = 8000;
const AUTO_SCROLL_IN_VIEW_THRESHOLD = 0.25;
const VISIBLE_THUMBS = 4;

const CASE_STUDY_NAV_BTN_CLASS =
  "cad-landing-case-studies__nav-btn inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#CBCCCD] text-[#808080] backdrop-blur-[50px] transition enabled:hover:border-[#808080] disabled:cursor-not-allowed disabled:opacity-40 sm:h-12 sm:w-12";

function ChevronLeftIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MetaRow({ label, value }) {
  return (
    <div className="vbs-case-study-card__meta-row flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-2.5">
      <span className="text-[14px] font-medium leading-5 text-[#111111] sm:text-[16px] sm:leading-6">{label}</span>
      <span className="text-[14px] font-normal leading-5 text-[#808080] sm:text-[16px] sm:leading-6">{value}</span>
    </div>
  );
}

function CaseStudyGallery({
  bannerImage,
  inputImages = [],
  outputImages = [],
  imageFit = "cover",
}) {
  const thumbnailImages = [...inputImages, ...outputImages];
  const viewerImages = [bannerImage, ...inputImages, ...outputImages];
  const [activeIndex, setActiveIndex] = useState(0);
  const total = viewerImages.length;
  const thumbTotal = thumbnailImages.length;
  const overflowCount = Math.max(0, thumbTotal - VISIBLE_THUMBS);
  const objectFitClass = imageFit === "contain" ? "object-contain" : "object-cover";
  const activeThumbIndex = activeIndex > 0 ? activeIndex - 1 : -1;

  const goPrev = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex((i) => (i - 1 + total) % total);
  };
  const goNext = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex((i) => (i + 1) % total);
  };

  return (
    <div className="vbs-case-study-card__gallery flex min-h-0 min-w-0 flex-1 flex-col">
      <div className="vbs-case-study-card__viewer">
        <div className="vbs-case-study-card__viewer-media">
          <img
            src={viewerImages[activeIndex]}
            alt=""
            className={cn("vbs-case-study-card__viewer-img", objectFitClass)}
            decoding="async"
          />
        </div>
        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={goPrev}
              className={cn(
                CASE_STUDY_NAV_BTN_CLASS,
                "cad-landing-case-studies__nav-btn--viewer cad-landing-case-studies__nav-btn--viewer-prev",
              )}
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className={cn(
                CASE_STUDY_NAV_BTN_CLASS,
                "cad-landing-case-studies__nav-btn--viewer cad-landing-case-studies__nav-btn--viewer-next",
              )}
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </>
        ) : null}
      </div>

      {thumbTotal > 0 ? (
        <div
          className="vbs-case-study-card__thumbs"
          style={{
            "--thumb-cols": overflowCount > 0 ? VISIBLE_THUMBS + 1 : Math.min(thumbTotal, VISIBLE_THUMBS),
          }}
        >
          {thumbnailImages.slice(0, VISIBLE_THUMBS).map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setActiveIndex(index + 1);
              }}
              className={cn(
                "vbs-case-study-card__thumb",
                activeThumbIndex === index && "vbs-case-study-card__thumb--active",
              )}
              aria-label={`Show image ${index + 1}`}
            >
              <img src={src} alt="" className="vbs-case-study-card__thumb-img" decoding="async" />
            </button>
          ))}
          {overflowCount > 0 ? (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setActiveIndex(VISIBLE_THUMBS + 1);
              }}
              className="vbs-case-study-card__thumb vbs-case-study-card__thumb--more"
              aria-label={`Show ${overflowCount} more images`}
            >
              <img
                src={thumbnailImages[VISIBLE_THUMBS]}
                alt=""
                className="vbs-case-study-card__thumb-img"
                decoding="async"
              />
              <span className="vbs-case-study-card__thumb-more-label">+{overflowCount}</span>
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function CaseStudyCard({ study }) {
  return (
    <article className="vbs-case-study-card relative flex w-full min-h-0 shrink-0 flex-col items-stretch rounded-[18px] border border-[#CBCCCD] bg-white md:min-h-[380px] md:flex-row md:items-stretch">
      <div className="vbs-case-study-card__copy flex min-w-0 w-full flex-none flex-col justify-between md:flex-[0_0_38%] md:max-w-[380px]">
        <div className="vbs-case-study-card__copy-top flex min-h-0 flex-col overflow-hidden">
          <h3 className="vbs-case-study-card__title">
            {study.title}
          </h3>
          <p className="text-[14px] font-normal leading-5 text-[#808080] sm:text-[16px] sm:leading-6">{study.description}</p>
        </div>
        <div className="vbs-case-study-card__meta flex w-full flex-col">
          <MetaRow label="Level of Development:" value={study.lod} />
          <MetaRow label="Project Area:" value={study.area} />
          <MetaRow label="Location:" value={study.location} />
        </div>
      </div>
      <div className="vbs-case-study-card__media min-w-0 w-full md:w-auto md:max-w-[470px] md:flex-[0_1_470px]">
        <CaseStudyGallery
          bannerImage={study.bannerImage}
          inputImages={study.inputImages}
          outputImages={study.outputImages}
          imageFit={study.imageFit}
        />
      </div>
    </article>
  );
}

/** Case Studies carousel — same scroll/autoscroll pattern as ClientSuccessStoriesSection. */
export function CadDraftingCaseStudiesSection({
  section = cadDraftingLandingCaseStudiesSection,
  studies = cadDraftingLandingCaseStudies,
}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressTrackRef = useRef(null);
  const progressThumbRef = useRef(null);
  const autoScrollPausedRef = useRef(false);
  const autoScrollResumeTimerRef = useRef(null);
  const isSectionInViewRef = useRef(false);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [progressMaxOffset, setProgressMaxOffset] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const pauseAutoScroll = useCallback((resumeAfterMs = 0) => {
    autoScrollPausedRef.current = true;
    if (autoScrollResumeTimerRef.current) {
      window.clearTimeout(autoScrollResumeTimerRef.current);
      autoScrollResumeTimerRef.current = null;
    }
    if (resumeAfterMs > 0) {
      autoScrollResumeTimerRef.current = window.setTimeout(() => {
        autoScrollPausedRef.current = false;
        autoScrollResumeTimerRef.current = null;
      }, resumeAfterMs);
    }
  }, []);

  const resumeAutoScroll = useCallback(() => {
    if (autoScrollResumeTimerRef.current) {
      window.clearTimeout(autoScrollResumeTimerRef.current);
      autoScrollResumeTimerRef.current = null;
    }
    autoScrollPausedRef.current = false;
  }, []);

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
    const progressThumb = progressThumbRef.current;
    if (!progressTrack || !progressThumb) return;

    const updateProgressTrack = () => {
      setProgressMaxOffset(Math.max(0, progressTrack.clientWidth - progressThumb.offsetWidth));
    };

    updateProgressTrack();
    const observer = new ResizeObserver(updateProgressTrack);
    observer.observe(progressTrack);
    observer.observe(progressThumb);
    window.addEventListener("resize", updateProgressTrack);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateProgressTrack);
    };
  }, []);

  const scrollByCard = useCallback((direction, behavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("article");
    const cardWidth = firstCard?.offsetWidth ?? track.clientWidth ?? 0;
    track.scrollBy({
      left: direction * (cardWidth + CARD_SCROLL_GAP),
      behavior,
    });
  }, []);

  const advanceAutoScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;

    if (track.scrollLeft >= maxScroll - 2) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    scrollByCard(1);
  }, [scrollByCard]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        isSectionInViewRef.current = inView;
        setIsSectionInView(inView);
      },
      { threshold: AUTO_SCROLL_IN_VIEW_THRESHOLD },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isSectionInView) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      if (!isSectionInViewRef.current || autoScrollPausedRef.current) return;
      advanceAutoScroll();
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(intervalId);
  }, [isSectionInView, advanceAutoScroll]);

  useEffect(
    () => () => {
      if (autoScrollResumeTimerRef.current) {
        window.clearTimeout(autoScrollResumeTimerRef.current);
      }
    },
    [],
  );

  const progressOffset = scrollProgress * progressMaxOffset;

  return (
    <section
      ref={sectionRef}
      id="case-studies"
      className="cad-landing-case-studies relative overflow-hidden bg-[#FAFAFA] py-12 md:py-16 lg:py-[100px]"
    >
      <PageContainer className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <div className="flex w-full flex-col items-start gap-2 md:gap-3">
          <div className="flex flex-col items-start gap-2">
            <SectionTag label={section.tag} />
            <h2 className="text-section capitalize">
              <span className="font-medium text-[#111111]">{section.titleLead}</span>
              <span className="font-light text-[#D70416]">{section.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[818px] text-[14px] capitalize leading-5 text-[#808080] sm:text-[16px] sm:leading-6">
            {section.description}
          </p>
        </div>

        <div
          className="relative w-full"
          onMouseEnter={() => pauseAutoScroll()}
          onMouseLeave={resumeAutoScroll}
          onFocusCapture={() => pauseAutoScroll()}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              resumeAutoScroll();
            }
          }}
        >
          <div
            ref={trackRef}
            className="client-success-cards-scroll flex w-full gap-2 overflow-x-auto"
          >
            {studies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>

        <div className="cad-landing-case-studies__controls flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 lg:gap-10">
          <div ref={progressTrackRef} className="cad-landing-case-studies__progress relative h-[2px] min-w-0 w-full flex-1 bg-[#B1B1B1]">
            <div
              ref={progressThumbRef}
              className="cad-landing-case-studies__progress-thumb absolute left-0 top-0 h-[2px] max-w-[72%] bg-[#111111] transition-transform duration-150"
              style={{
                width: `${PROGRESS_THUMB_WIDTH}px`,
                transform: `translateX(${progressOffset}px)`,
              }}
            />
          </div>
          <div className="flex shrink-0 items-center justify-end gap-4 sm:gap-6 lg:gap-[30px]">
            <button
              type="button"
              aria-label="Previous image"
              disabled={!canScrollPrev}
              onClick={() => {
                pauseAutoScroll(AUTO_SCROLL_RESUME_MS);
                scrollByCard(-1);
              }}
              className={cn(CASE_STUDY_NAV_BTN_CLASS, "cad-landing-case-studies__nav-btn--carousel")}
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              disabled={!canScrollNext}
              onClick={() => {
                pauseAutoScroll(AUTO_SCROLL_RESUME_MS);
                scrollByCard(1);
              }}
              className={cn(CASE_STUDY_NAV_BTN_CLASS, "cad-landing-case-studies__nav-btn--carousel")}
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
