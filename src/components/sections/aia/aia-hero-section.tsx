"use client";

import { useEffect, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { aiaHeroCarouselImages, aiaHeroCopy } from "@/constants/aia-conference-events-content";
import { cn } from "@/lib/utils";

type AiaHeroSectionProps = {
  onReserveSlot: () => void;
};

export function AiaHeroSection({ onReserveSlot }: AiaHeroSectionProps) {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = window.setInterval(() => {
      setSlide((prev) => (prev + 1) % aiaHeroCarouselImages.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="aia-hero bg-white">
      <PageContainer>
        <div className="aia-hero__row">
          <div className="aia-hero__copy">
            <div className="aia-hero__intro">
              <div className="aia-hero__headline">
                <SectionTag label={aiaHeroCopy.tag} />
                <h1 className="text-section w-full max-w-[637px] capitalize">
                  {aiaHeroCopy.titleLead}
                  <span className="text-accent font-light">{aiaHeroCopy.titleAccent}</span>
                </h1>
              </div>
              <p className="m-0 max-w-[627px] text-[16px] font-normal leading-6 text-[#808080]">
                {aiaHeroCopy.description}
              </p>
            </div>

            <div className="aia-hero__cta">
              <PrimaryCtaButton fullWidth={false} onClick={onReserveSlot}>
                {aiaHeroCopy.ctaLabel}
              </PrimaryCtaButton>
              <p className="m-0 max-w-[627px] text-[13px] font-normal leading-normal text-[#808080]">
                {aiaHeroCopy.ctaNote}
              </p>
            </div>
          </div>

          <div
            className="aia-hero__media"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="aia-hero__carousel"
              aria-roledescription="carousel"
              aria-label="AIA conference imagery"
            >
              {aiaHeroCarouselImages.map((image, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={cn("aia-hero__slide", index === slide && "is-active")}
                  aria-hidden={index !== slide}
                />
              ))}
            </div>
            <div className="aia-hero__overlay" aria-hidden />
            <p className="aia-hero__caption">{aiaHeroCopy.imageCaption}</p>
            <div className="aia-hero__dots" role="tablist" aria-label="Hero slides">
              {aiaHeroCarouselImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  role="tab"
                  aria-label={`Show slide ${index + 1}`}
                  aria-selected={index === slide}
                  className={cn("aia-hero__dot", index === slide && "is-active")}
                  onClick={() => setSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
