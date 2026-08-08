"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  architecturalBimUsaCaseStudies,
  architecturalBimUsaCaseStudiesSection,
} from "@/constants/architectural-bim-services-usa-content";

type CaseStudy = (typeof architecturalBimUsaCaseStudies)[number];

const CARD_GAP = 16;

function CaseStudyCard({
  study,
  activeIndex,
  onChangeIndex,
}: {
  study: CaseStudy;
  activeIndex: number;
  onChangeIndex: (next: number) => void;
}) {
  const thumbs = study.gallery.slice(0, study.thumbCount);
  const total = study.gallery.length;

  return (
    <article className="abs-usa-case-study-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="abs-usa-case-study-card__logo" src={study.logo} alt={study.logoAlt} />
      <p className="abs-usa-case-study-card__summary">{study.summary}</p>

      <div className="abs-usa-case-study-card__stats">
        {study.stats.map((stat) => (
          <div className="abs-usa-case-study-card__stat" key={stat.label}>
            <p className="abs-usa-case-study-card__stat-label">{stat.label}</p>
            <p className="abs-usa-case-study-card__stat-value">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="abs-usa-case-study-card__body">
        <div className="abs-usa-case-study-card__text">
          <div className="abs-usa-case-study-card__block">
            <h4>{study.listTitle}</h4>
            <ul>
              {study.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="abs-usa-case-study-card__block abs-usa-case-study-card__block--outcome">
            <h4>{study.outcomeTitle}</h4>
            <p>{study.outcome}</p>
          </div>
        </div>

        <div className="abs-usa-case-study-card__gallery">
          <div className="abs-usa-case-study-card__main">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.gallery[activeIndex]}
              alt={`${study.logoAlt} project ${activeIndex + 1}`}
              loading="lazy"
              decoding="async"
            />
            {total > 1 ? (
              <div className="abs-usa-case-study-card__img-nav">
                <button
                  type="button"
                  className="abs-usa-case-study-card__img-nav-btn"
                  aria-label="Previous image"
                  onClick={() => onChangeIndex(activeIndex - 1)}
                >
                  <ChevronLeft size={18} strokeWidth={2.5} aria-hidden />
                </button>
                <button
                  type="button"
                  className="abs-usa-case-study-card__img-nav-btn"
                  aria-label="Next image"
                  onClick={() => onChangeIndex(activeIndex + 1)}
                >
                  <ChevronRight size={18} strokeWidth={2.5} aria-hidden />
                </button>
              </div>
            ) : null}
          </div>

          {thumbs.length > 0 ? (
            <div className="abs-usa-case-study-card__thumbs">
              {thumbs.map((src, thumbIndex) => {
                const isMore = study.moreCount > 0 && thumbIndex === thumbs.length - 1;
                return (
                  <button
                    type="button"
                    key={`${study.id}-thumb-${thumbIndex}`}
                    className={`abs-usa-case-study-card__thumb${
                      activeIndex === thumbIndex ? " is-active" : ""
                    }`}
                    onClick={() => onChangeIndex(thumbIndex)}
                    aria-label={`Show image ${thumbIndex + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" />
                    {isMore ? (
                      <span className="abs-usa-case-study-card__thumb-more">+{study.moreCount}</span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/** Case studies carousel — same layout as /landing/professional-architectural-drafting-services. */
export function ArchitecturalBimUsaCaseStudiesSection({
  section = architecturalBimUsaCaseStudiesSection,
  studies = architecturalBimUsaCaseStudies,
}: {
  section?: typeof architecturalBimUsaCaseStudiesSection;
  studies?: typeof architecturalBimUsaCaseStudies;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const progressThumbRef = useRef<HTMLDivElement>(null);
  const [galleryIndexes, setGalleryIndexes] = useState(() => studies.map(() => 0));
  const [scrollProgress, setScrollProgress] = useState(0);
  const [progressMaxOffset, setProgressMaxOffset] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const setGalleryIndex = useCallback(
    (studyIndex: number, nextIndex: number) => {
      setGalleryIndexes((prev) => {
        const copy = [...prev];
        const total = studies[studyIndex]?.gallery.length || 1;
        copy[studyIndex] = ((nextIndex % total) + total) % total;
        return copy;
      });
    },
    [studies],
  );

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const left = el.scrollLeft;
    setScrollProgress(maxScroll > 0 ? Math.min(1, left / maxScroll) : 0);
    setCanScrollPrev(left > 1);
    setCanScrollNext(left < maxScroll - 1);
    setHasScrolled(left > 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const id = window.setInterval(() => {
      if (paused) return;
      const cards = el.querySelectorAll(".abs-usa-case-study-card");
      if (!cards.length) return;
      const step = cards[0].getBoundingClientRect().width + CARD_GAP;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const nextLeft = el.scrollLeft + step;
      if (nextLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4200);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("scroll", updateScrollState);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    const progressTrack = progressTrackRef.current;
    const progressThumb = progressThumbRef.current;
    if (!progressTrack || !progressThumb || typeof ResizeObserver === "undefined") return;

    const update = () => {
      setProgressMaxOffset(Math.max(0, progressTrack.clientWidth - progressThumb.offsetWidth));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(progressTrack);
    ro.observe(progressThumb);
    return () => ro.disconnect();
  }, []);

  const scrollByCard = (direction: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".abs-usa-case-study-card");
    if (!cards.length) return;
    const step = cards[0].getBoundingClientRect().width + CARD_GAP;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section
      id="abs-usa-case-studies"
      className={`abs-usa-case-studies${hasScrolled ? " has-scrolled" : ""}`}
    >
      <div className="abs-usa-case-studies__fade abs-usa-case-studies__fade--left" aria-hidden />
      <div className="abs-usa-case-studies__fade abs-usa-case-studies__fade--right" aria-hidden />

      <PageContainer className="abs-usa-case-studies__inner">
        <div className="abs-usa-case-studies__header">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2 className="text-section capitalize">
              <span className="font-medium text-[#111111]">{section.titleLead}</span>
              <span className="font-light text-accent">{section.titleAccent}</span>
            </h2>
          </div>
          <p className="abs-usa-case-studies__sub">{section.description}</p>
        </div>

        <div className="abs-usa-case-studies__track-wrap">
          <div className="abs-usa-case-studies__track" ref={trackRef}>
            {studies.map((study, studyIndex) => (
              <CaseStudyCard
                key={study.id}
                study={study}
                activeIndex={galleryIndexes[studyIndex] || 0}
                onChangeIndex={(next) => setGalleryIndex(studyIndex, next)}
              />
            ))}
          </div>
        </div>

        <div className="abs-usa-case-studies__controls">
          <div className="abs-usa-case-studies__progress" ref={progressTrackRef}>
            <div
              className="abs-usa-case-studies__progress-thumb"
              ref={progressThumbRef}
              style={{ transform: `translateX(${scrollProgress * progressMaxOffset}px)` }}
            />
          </div>
          <div className="abs-usa-case-studies__nav">
            <button
              type="button"
              className="abs-usa-case-studies__nav-btn"
              aria-label="Previous case study"
              disabled={!canScrollPrev}
              onClick={() => scrollByCard(-1)}
            >
              <ChevronLeft size={22} strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              className="abs-usa-case-studies__nav-btn"
              aria-label="Next case study"
              disabled={!canScrollNext}
              onClick={() => scrollByCard(1)}
            >
              <ChevronRight size={22} strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>

        <div className="abs-usa-case-studies__cta-wrap">
          <PrimaryCtaButton fullWidth={false} href="#abs-usa-contact">
            {section.ctaLabel}
          </PrimaryCtaButton>
        </div>
      </PageContainer>
    </section>
  );
}
