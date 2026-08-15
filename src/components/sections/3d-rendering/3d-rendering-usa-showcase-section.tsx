"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  threeDRenderingUsaShowcaseProjects,
  threeDRenderingUsaShowcaseSection,
} from "@/constants/3d-rendering-services-usa-content";

const CARD_SCROLL_GAP = 16;
const PROGRESS_THUMB_WIDTH = 172;
const AUTO_SCROLL_MS = 4000;

/** Figma 4016:55805 — Project Showcase carousel */
export function ThreeDRenderingUsaShowcaseSection({
  section = threeDRenderingUsaShowcaseSection,
  projects = threeDRenderingUsaShowcaseProjects,
}: {
  section?: typeof threeDRenderingUsaShowcaseSection;
  projects?: typeof threeDRenderingUsaShowcaseProjects;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [progressMaxOffset, setProgressMaxOffset] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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
    const card = track.querySelector<HTMLElement>(".trs-usa-showcase__card");
    const amount = (card?.offsetWidth ?? 420) + CARD_SCROLL_GAP;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  const scrollToNextCard = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".trs-usa-showcase__card");
    const step = (card?.offsetWidth ?? 420) + CARD_SCROLL_GAP;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;
    if (track.scrollLeft >= maxScroll - 1) {
      track.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    track.scrollBy({ left: step, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const intervalId = window.setInterval(() => {
      if (!isPausedRef.current) {
        scrollToNextCard();
      }
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(intervalId);
  }, [scrollToNextCard]);

  const progressOffset = scrollProgress * progressMaxOffset;

  return (
    <section className="trs-usa-showcase relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col gap-10 lg:gap-[60px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-[60px]">
          <div className="trs-usa-showcase__intro flex min-w-0 flex-1 flex-col items-start gap-2.5">
            <div className="flex flex-col items-start gap-3">
              <MepSectionTag label={section.tag} />
              <h2 className="text-section w-full">
                <span className="font-medium text-[#111111]">{section.titleLead}</span>
                <span className="font-light text-accent">{section.titleAccent}</span>
              </h2>
            </div>
            <p className="max-w-[583px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              {section.description}
            </p>
          </div>

          <div className="hidden min-w-0 flex-1 items-center gap-10 lg:flex">
            <div
              ref={progressTrackRef}
              className="trs-usa-showcase__progress relative h-px flex-1 overflow-hidden bg-[#B1B1B1]"
            >
              <div
                className="absolute left-0 top-0 h-px bg-[#111111]"
                style={{ width: PROGRESS_THUMB_WIDTH, transform: `translateX(${progressOffset}px)` }}
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[30px] bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[30px] bg-gradient-to-l from-white to-transparent" />
            </div>
            <div className="flex shrink-0 items-center gap-[30px]">
              <button
                type="button"
                aria-label="Previous project"
                disabled={!canScrollPrev}
                onClick={() => scrollByCard(-1)}
                className="trs-usa-showcase__nav-btn"
              >
                <ChevronRight className="h-7 w-7 rotate-180 text-[#808080]" aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next project"
                disabled={!canScrollNext}
                onClick={() => scrollByCard(1)}
                className="trs-usa-showcase__nav-btn"
              >
                <ChevronRight className="h-7 w-7 text-[#808080]" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <div
          className="trs-usa-showcase__carousel relative"
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
        >
          <div
            ref={trackRef}
            className="trs-usa-showcase__track flex gap-3 overflow-x-auto pb-2 lg:gap-4"
          >
            {projects.map((project) => (
              <article
                key={`${project.title}-${project.category}`}
                className="trs-usa-showcase__card flex w-[min(100%,420px)] shrink-0 flex-col items-start gap-3 rounded-[10px] border border-[#CBCCCD] bg-white p-4 lg:w-[420px] lg:gap-3.5 lg:p-5"
              >
                <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] sm:h-[250px] lg:h-[280px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    fill
                    unoptimized={typeof project.image === "string"}
                    className="object-cover"
                    sizes="420px"
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h3 className="m-0 text-[22px] font-normal leading-normal text-[#111111] sm:text-[24px]">
                    {project.title}
                  </h3>
                  <p className="m-0 text-[16px] font-normal leading-6 text-[#808080]">
                    {project.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[30px] bg-gradient-to-r from-white from-[56%] to-transparent lg:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30px] bg-gradient-to-l from-white from-[56%] to-transparent lg:block" />
        </div>
      </PageContainer>
    </section>
  );
}
