"use client";

import { useCallback, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  lifeAtVbsEventYears,
  lifeAtVbsEventsCopy,
  type LifeAtVbsEventSlide,
  type LifeAtVbsEventYear,
} from "@/constants/life-at-vbs-content";

function ChevronIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  const path = direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

function EventThumbnailCard({ slide, side }: { slide: LifeAtVbsEventSlide; side: "left" | "right" }) {
  return (
    <div className={`vbs-life-at-vbs-events__thumb vbs-life-at-vbs-events__thumb--${side}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.src}
        alt={slide.alt}
        style={{ objectPosition: slide.objectPosition || "center" }}
      />
    </div>
  );
}

function EventFeaturedCard({ slide }: { slide: LifeAtVbsEventSlide }) {
  return (
    <div className="vbs-life-at-vbs-events__featured">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={slide.src} alt={slide.alt} style={{ objectPosition: slide.objectPosition || "center" }} />
      <div className="vbs-life-at-vbs-events__featured-overlay" aria-hidden />
      {slide.title ? <p className="vbs-life-at-vbs-events__featured-title">{slide.title}</p> : null}
    </div>
  );
}

function EventYearCarousel({ yearBlock }: { yearBlock: LifeAtVbsEventYear }) {
  const { slides } = yearBlock;
  const [activeIndex, setActiveIndex] = useState(Math.max(0, slides.findIndex((slide) => slide.featured)));

  const goNext = useCallback(() => {
    setActiveIndex((current) => wrapIndex(current + 1, slides.length));
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => wrapIndex(current - 1, slides.length));
  }, [slides.length]);

  const prevSlide = slides[wrapIndex(activeIndex - 1, slides.length)];
  const currentSlide = slides[activeIndex];
  const nextSlide = slides[wrapIndex(activeIndex + 1, slides.length)];

  return (
    <div className="vbs-life-at-vbs-events__year-block">
      <h3 className="vbs-life-at-vbs-events__year-title">
        Year <span className="vbs-life-at-vbs-events__year-accent">{yearBlock.year}</span>
      </h3>

      <div className="vbs-life-at-vbs-events__stage">
        <div className="vbs-life-at-vbs-events__thumb-wrap vbs-life-at-vbs-events__thumb-wrap--left">
          <EventThumbnailCard slide={prevSlide} side="left" />
        </div>

        <div className="vbs-life-at-vbs-events__featured-wrap">
          <EventFeaturedCard slide={currentSlide} />

          <button
            type="button"
            className="vbs-life-at-vbs-events__nav vbs-life-at-vbs-events__nav--prev"
            aria-label={`Previous event for ${yearBlock.year}`}
            onClick={goPrev}
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            className="vbs-life-at-vbs-events__nav vbs-life-at-vbs-events__nav--next"
            aria-label={`Next event for ${yearBlock.year}`}
            onClick={goNext}
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="vbs-life-at-vbs-events__thumb-wrap vbs-life-at-vbs-events__thumb-wrap--right">
          <EventThumbnailCard slide={nextSlide} side="right" />
        </div>
      </div>
    </div>
  );
}

export function LifeAtVbsEventsSection() {
  const { tag, titleLead, titleAccent, description } = lifeAtVbsEventsCopy;

  return (
    <section className="vbs-life-at-vbs-section bg-white">
      <PageContainer className="vbs-life-at-vbs-section__inner">
        <div className="vbs-life-at-vbs-section__header">
          <div className="vbs-life-at-vbs-section__title-block">
            <SectionTag label={tag} className="self-center" />
            <h2 className="vbs-life-at-vbs-section__title">
              {titleLead}
              <span className="vbs-life-at-vbs-section__title-accent">{titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-life-at-vbs-section__desc">{description}</p>
        </div>

        <div className="vbs-life-at-vbs-events__years">
          {lifeAtVbsEventYears.map((yearBlock) => (
            <EventYearCarousel key={yearBlock.year} yearBlock={yearBlock} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
