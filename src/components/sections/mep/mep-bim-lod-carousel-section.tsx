"use client";

import Image from "next/image";
import { useRef, type RefObject } from "react";
import { mepBimLodCards, mepBimLodSection } from "@/constants/mep-bim-modelling-content";
import { useShortLaptopLayout } from "@/hooks/useShortLaptopLayout";
import { useMobileLayout } from "@/hooks/useMobileLayout";
import { useStickyHoverWheelBridge } from "@/hooks/useStickyHoverWheelBridge";
import { useStickyServicesCarousel } from "@/hooks/useStickyServicesCarousel";
import { cn } from "@/lib/utils";

function LodSectionHeader() {
  const { tag, titleLead, titleAccent, description } = mepBimLodSection;

  return (
    <header className="mep-figma-services__header">
      <div className="mep-figma-services__head-top">
        <span className="mep-figma-services__tag">{tag}</span>
        <h2 className="mep-figma-services__title mep-section-heading max-w-[1028px] capitalize">
          <span className="mep-figma-services__title-dark font-medium">{titleLead}</span>
          <span className="mep-figma-services__title-accent text-accent font-light">{titleAccent}</span>
        </h2>
      </div>
      <p className="mep-figma-services__section-desc mep-bim-lod-carousel__desc">{description}</p>
    </header>
  );
}

function LodCard({ card, isActive }: { card: (typeof mepBimLodCards)[number]; isActive: boolean }) {
  return (
    <article
      className={cn(
        "mep-figma-services__card mep-bim-lod-card",
        isActive && "mep-figma-services__card--active",
        card.highlighted && "mep-bim-lod-card--highlighted",
      )}
    >
      <div className="mep-bim-lod-card__image">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover object-center"
          sizes="460px"
        />
      </div>
      <div className="mep-bim-lod-card__body">
        <h3 className="mep-bim-lod-card__title">{card.title}</h3>
        <p className="mep-bim-lod-card__text">{card.description}</p>
      </div>
    </article>
  );
}

function LodCardTrack({
  trackRef,
  viewportRef,
  activeIndex,
}: {
  trackRef: RefObject<HTMLDivElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  activeIndex: number;
}) {
  return (
    <div
      ref={viewportRef}
      className="mep-figma-services__carousel-viewport mep-bim-lod-carousel__viewport"
      aria-label="Level of development offerings"
    >
      <div ref={trackRef} className="mep-figma-services__track mep-bim-lod-carousel__track">
        {mepBimLodCards.map((card, index) => (
          <LodCard key={card.title} card={card} isActive={index === activeIndex} />
        ))}
      </div>
      <div className="mep-bim-lod-carousel__fade mep-bim-lod-carousel__fade--left" aria-hidden />
      <div className="mep-bim-lod-carousel__fade mep-bim-lod-carousel__fade--right" aria-hidden />
    </div>
  );
}

/** Figma node 221:9409 — LOD horizontal carousel with architecture-style sticky scroll */
export function MepBimLodCarouselSection() {
  const isHoverScroll = true;
  const { isMobile, ready: layoutReady } = useMobileLayout();
  const shortLaptopLayout = useShortLaptopLayout();
  const cardsOnlyPin = layoutReady && isHoverScroll && shortLaptopLayout && !isMobile;
  const useHorizontalCarousel = layoutReady && !isMobile;

  const sectionRef = useRef<HTMLElement>(null);
  const pinZoneRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const activeIndex = useStickyServicesCarousel(sectionRef, stickyRef, trackRef, spacerRef, {
    enabled: useHorizontalCarousel,
    pinZoneRef: cardsOnlyPin ? pinZoneRef : null,
    touchScrollViewportRef: cardsOnlyPin ? viewportRef : null,
    carouselViewportRef: viewportRef,
    cardsOnlyPin,
  });

  useStickyHoverWheelBridge(sectionRef, cardsOnlyPin ? pinZoneRef : null, {
    enabled: isHoverScroll && useHorizontalCarousel,
  });

  const sectionClassName = cn(
    "mep-figma-services",
    "mep-figma-services--h-scroll",
    "mep-figma-services--hover-scroll",
    "mep-figma-services--lod-carousel",
    "mep-figma-services--wide-cards",
    cardsOnlyPin && "mep-figma-services--short-laptop",
    isMobile && "mep-figma-services--mobile-stack",
  );

  if (layoutReady && isMobile) {
    return (
      <section ref={sectionRef} id="services" className={sectionClassName}>
        <div className="mep-figma-services__intro vbs-page-container">
          <LodSectionHeader />
        </div>

        <div className="mep-figma-services__mobile-cards">
          <LodCardTrack trackRef={trackRef} viewportRef={viewportRef} activeIndex={0} />
        </div>
      </section>
    );
  }

  if (cardsOnlyPin) {
    return (
      <section ref={sectionRef} id="services" className={sectionClassName}>
        <div className="mep-figma-services__intro vbs-page-container">
          <LodSectionHeader />
        </div>

        <div ref={pinZoneRef} className="mep-figma-services__pin-zone">
          <div ref={spacerRef} className="mep-figma-services__pin-spacer" aria-hidden />
          <div
            ref={stickyRef}
            className="mep-figma-services__sticky mep-figma-services__sticky--cards-only"
          >
            <LodCardTrack trackRef={trackRef} viewportRef={viewportRef} activeIndex={activeIndex} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="services" className={sectionClassName}>
      <div ref={spacerRef} className="mep-figma-services__pin-spacer" aria-hidden />
      <div ref={stickyRef} className="mep-figma-services__sticky">
        <div className="mep-figma-services__inner vbs-page-container">
          <LodSectionHeader />
        </div>

        <LodCardTrack trackRef={trackRef} viewportRef={viewportRef} activeIndex={activeIndex} />
      </div>
    </section>
  );
}
