// @ts-nocheck
"use client";

import { useRef } from "react";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { VbsLink } from "@/components/ui/vbs-link";
import { ChevronRightIcon } from "@/components/icons/chevron-right-icon";
import { cn } from "@/lib/utils";
import { useShortLaptopLayout } from "@/hooks/useShortLaptopLayout";
import { useMobileLayout } from "@/hooks/useMobileLayout";
import { useStickyHoverWheelBridge } from "@/hooks/useStickyHoverWheelBridge";
import { useStickyServicesCarousel } from "@/hooks/useStickyServicesCarousel";
import {
  mepFullSpectrumCards,
  mepFullSpectrumSection,
} from "@/constants/mep-engineers-content";

function ViewMoreCta() {
  return (
    <span className="mep-figma-services__view-more">
      <span className="mep-figma-services__view-more-label">View More</span>
      <span className="mep-figma-services__view-more-icon" aria-hidden>
        <ChevronRightIcon />
      </span>
    </span>
  );
}

function MepServiceCard({ card, isActive }) {
  const { imageCrop } = card;

  return (
    <VbsLink
      to={card.href}
      className={cn(
        "mep-figma-services__card",
        "mep-figma-services__card--link",
        isActive && "mep-figma-services__card--active",
      )}
      aria-label={`View more about ${card.title}`}
    >
      <div className="mep-figma-services__card-image">
        <img
          src={card.image}
          alt={card.title}
          className="mep-figma-services__card-photo"
          style={
            imageCrop
              ? {
                width: imageCrop.width,
                height: imageCrop.height,
                left: imageCrop.left,
                top: imageCrop.top,
              }
              : {
                inset: 0,
                width: "100%",
                height: "100%",
              }
          }
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="mep-figma-services__card-body">
        <div className="mep-figma-services__card-inner">
          <div className="mep-figma-services__card-copy">
            <h3
              className="mep-figma-services__card-title"
              style={card.titleMinHeight ? { minHeight: card.titleMinHeight } : undefined}
            >
              {card.title}
            </h3>
            <p className="mep-figma-services__card-text">{card.text}</p>
          </div>
          <div className="mep-figma-services__card-cta">
            <ViewMoreCta />
          </div>
        </div>
      </div>
    </VbsLink>
  );
}

function ServicesSectionHeader({ section }) {
  return (
    <header className="mep-figma-services__header">
      <div className="mep-figma-services__head-top">
        <span className="mep-figma-services__tag">{section.tag}</span>
        <h2
          className="mep-figma-services__title"
          style={{ maxWidth: `${section.titleMaxWidth ?? 900}px` }}
        >
          <span className="mep-figma-services__title-dark">{section.titleLine1}</span>
          <span className="mep-figma-services__title-accent">{section.titleLine2}</span>
        </h2>
      </div>
      <p className="mep-figma-services__section-desc">{section.description}</p>
    </header>
  );
}

function ServicesSectionCta({ section }) {
  return (
    <div className="mep-figma-services__cta-wrap vbs-page-container">
      <PrimaryCtaButton fullWidth={false} href={section.ctaHref}>
        {section.ctaLabel}
      </PrimaryCtaButton>
    </div>
  );
}

function ServicesCardTrack({ trackRef, viewportRef, cards, activeIndex }) {
  return (
    <div
      ref={viewportRef}
      className="mep-figma-services__carousel-viewport"
      aria-label="Service offerings"
    >
      <div ref={trackRef} className="mep-figma-services__track">
        {cards.map((card, index) => (
          <MepServiceCard
            key={card.title}
            card={card}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Full-Spectrum Services
 * - sticky: vertical page scroll pins section and drives horizontal cards
 * - hover: full sticky on normal desktops; short laptops (≤820px tall) use cards-only pin
 */
export function MepFullSpectrumServicesSection({
  section = mepFullSpectrumSection,
  cards = mepFullSpectrumCards,
  scrollInteraction = "hover",
}) {
  const isHoverScroll = scrollInteraction === "hover";
  const { isMobile, ready: layoutReady } = useMobileLayout();
  const shortLaptopLayout = useShortLaptopLayout();
  const cardsOnlyPin = layoutReady && isHoverScroll && shortLaptopLayout && !isMobile;
  const useHorizontalCarousel = layoutReady && !isMobile;

  const sectionRef = useRef(null);
  const pinZoneRef = useRef(null);
  const spacerRef = useRef(null);
  const stickyRef = useRef(null);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);

  const activeIndex = useStickyServicesCarousel(
    sectionRef,
    stickyRef,
    trackRef,
    spacerRef,
    {
      enabled: useHorizontalCarousel,
      pinZoneRef: cardsOnlyPin ? pinZoneRef : null,
      touchScrollViewportRef: cardsOnlyPin ? viewportRef : null,
      carouselViewportRef: viewportRef,
      cardsOnlyPin,
    },
  );

  useStickyHoverWheelBridge(sectionRef, cardsOnlyPin ? pinZoneRef : null, {
    enabled: isHoverScroll && useHorizontalCarousel,
  });

  const sectionClassName = cn(
    "mep-figma-services",
    "mep-figma-services--h-scroll",
    isHoverScroll && "mep-figma-services--hover-scroll",
    cardsOnlyPin && "mep-figma-services--short-laptop",
    isMobile && "mep-figma-services--mobile-stack",
    section.wideCards && "mep-figma-services--wide-cards",
  );

  if (layoutReady && isMobile) {
    return (
      <section ref={sectionRef} id="services" className={sectionClassName}>
        <div className="mep-figma-services__intro vbs-page-container">
          <ServicesSectionHeader section={section} />
        </div>

        <div className="mep-figma-services__mobile-cards">
          <ServicesCardTrack
            trackRef={trackRef}
            viewportRef={viewportRef}
            cards={cards}
            activeIndex={0}
          />
        </div>

        <ServicesSectionCta section={section} />
      </section>
    );
  }

  if (cardsOnlyPin) {
    return (
      <section ref={sectionRef} id="services" className={sectionClassName}>
        <div className="mep-figma-services__intro vbs-page-container">
          <ServicesSectionHeader section={section} />
        </div>

        <div ref={pinZoneRef} className="mep-figma-services__pin-zone">
          <div ref={spacerRef} className="mep-figma-services__pin-spacer" aria-hidden />
          <div
            ref={stickyRef}
            className="mep-figma-services__sticky mep-figma-services__sticky--cards-only"
          >
            <ServicesCardTrack
              trackRef={trackRef}
              viewportRef={viewportRef}
              cards={cards}
              activeIndex={activeIndex}
            />
          </div>
        </div>

        <ServicesSectionCta section={section} />
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="services" className={sectionClassName}>
      <div ref={spacerRef} className="mep-figma-services__pin-spacer" aria-hidden />
      <div ref={stickyRef} className="mep-figma-services__sticky">
        <div className="mep-figma-services__inner vbs-page-container">
          <ServicesSectionHeader section={section} />
        </div>

        <ServicesCardTrack
          trackRef={trackRef}
          viewportRef={viewportRef}
          cards={cards}
          activeIndex={activeIndex}
        />

        <ServicesSectionCta section={section} />
      </div>
    </section>
  );
}
