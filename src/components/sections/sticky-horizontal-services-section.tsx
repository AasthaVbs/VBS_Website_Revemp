// @ts-nocheck — scroll hooks are untyped; matches existing carousel sections.
"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type RefObject } from "react";
import { ChevronRightIcon } from "@/components/icons/chevron-right-icon";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { VbsLink } from "@/components/ui/vbs-link";
import { useMobileLayout } from "@/hooks/useMobileLayout";
import { useShortLaptopLayout } from "@/hooks/useShortLaptopLayout";
import { useStickyHoverWheelBridge } from "@/hooks/useStickyHoverWheelBridge";
import { useStickyServicesCarousel } from "@/hooks/useStickyServicesCarousel";
import { cn } from "@/lib/utils";

export type StickyServicesImageCrop = {
  width: number;
  height: number;
  left: number;
  top: number;
};

export type StickyServicesCard = {
  title: string;
  text: string;
  image: string;
  href?: string;
  imageCrop?: StickyServicesImageCrop;
  titleMinHeight?: number;
  elevated?: boolean;
  highlighted?: boolean;
};

export type StickyServicesMetric = {
  value: string;
  label: string;
  valueColor: string;
};

export type StickyServicesSectionContent = {
  tag: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  wideCards?: boolean;
  titleMaxWidth?: number;
  descriptionMaxWidth?: number;
};

export type StickyHorizontalServicesSectionProps = {
  section: StickyServicesSectionContent;
  cards: StickyServicesCard[];
  scrollInteraction?: "hover" | "scroll";
  sectionId?: string;
  carouselAriaLabel?: string;
  cardCtaLabel?: string;
  className?: string;
  cardVariant?: "default" | "lod";
  showCarouselFades?: boolean;
  titleClassName?: string;
  titleLine1ClassName?: string;
  titleLine2ClassName?: string;
  descriptionClassName?: string;
  metrics?: readonly StickyServicesMetric[];
};

function ViewMoreCta({ label }: { label: string }) {
  return (
    <span className="mep-figma-services__view-more">
      <span className="mep-figma-services__view-more-label">{label}</span>
      <span className="mep-figma-services__view-more-icon" aria-hidden>
        <ChevronRightIcon />
      </span>
    </span>
  );
}

function LodInfoCard({ card, isActive }: { card: StickyServicesCard; isActive: boolean }) {
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
          unoptimized={card.image.startsWith("/image/")}
          className="object-cover object-center"
          sizes="460px"
        />
      </div>
      <div className="mep-bim-lod-card__body">
        <h3 className="mep-bim-lod-card__title">{card.title}</h3>
        <p className="mep-bim-lod-card__text">{card.text}</p>
      </div>
    </article>
  );
}

function ServiceCard({
  card,
  isActive,
  ctaLabel,
  variant,
}: {
  card: StickyServicesCard;
  isActive: boolean;
  ctaLabel: string;
  variant: "default" | "lod";
}) {
  if (variant === "lod") {
    return <LodInfoCard card={card} isActive={isActive} />;
  }
  const { imageCrop } = card;
  const cardBody = (
    <>
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
          {card.href ? (
            <div className="mep-figma-services__card-cta">
              <ViewMoreCta label={ctaLabel} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );

  if (card.href) {
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
        {cardBody}
      </VbsLink>
    );
  }

  return (
    <article
      className={cn("mep-figma-services__card", isActive && "mep-figma-services__card--active")}
    >
      {cardBody}
    </article>
  );
}

function SectionHeader({
  section,
  titleClassName,
  titleLine1ClassName,
  titleLine2ClassName,
  descriptionClassName,
}: {
  section: StickyServicesSectionContent;
  titleClassName?: string;
  titleLine1ClassName?: string;
  titleLine2ClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <header className="mep-figma-services__header">
      <div className="mep-figma-services__head-top">
        <span className="mep-figma-services__tag">{section.tag}</span>
        <h2
          className={cn("mep-figma-services__title", titleClassName)}
          style={{ maxWidth: `${section.titleMaxWidth ?? 900}px` }}
        >
          <span className={cn("mep-figma-services__title-dark", titleLine1ClassName)}>
            {section.titleLine1}
          </span>
          <span className={cn("mep-figma-services__title-accent", titleLine2ClassName)}>
            {section.titleLine2}
          </span>
        </h2>
      </div>
      <p
        className={cn("mep-figma-services__section-desc", descriptionClassName)}
        style={
          section.descriptionMaxWidth
            ? ({
                ["--services-desc-max-w"]: `${section.descriptionMaxWidth}px`,
              } as CSSProperties)
            : undefined
        }
      >
        {section.description}
      </p>
    </header>
  );
}

function SectionMetrics({ metrics }: { metrics?: readonly StickyServicesMetric[] }) {
  if (!metrics?.length) {
    return null;
  }

  return (
    <div className="vbs-page-container flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-4 lg:gap-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex min-w-0 flex-1 flex-col items-start justify-center gap-2.5 rounded-[10px] border border-solid border-[#CBCCCD] bg-white p-5"
        >
          <div
            className="text-[24px] font-medium capitalize leading-6"
            style={{ color: metric.valueColor }}
          >
            {metric.value}
          </div>
          <div className="text-[16px] font-normal capitalize leading-6 text-[#111111]">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionCta({ section }: { section: StickyServicesSectionContent }) {
  if (!section.ctaLabel || !section.ctaHref) {
    return null;
  }

  return (
    <div className="mep-figma-services__cta-wrap vbs-page-container">
      <PrimaryCtaButton fullWidth={false} href={section.ctaHref}>
        {section.ctaLabel}
      </PrimaryCtaButton>
    </div>
  );
}

function CardTrack({
  trackRef,
  viewportRef,
  cards,
  activeIndex,
  carouselAriaLabel,
  cardCtaLabel,
  cardVariant,
  showCarouselFades,
}: {
  trackRef: RefObject<HTMLDivElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  cards: StickyServicesCard[];
  activeIndex: number;
  carouselAriaLabel: string;
  cardCtaLabel: string;
  cardVariant: "default" | "lod";
  showCarouselFades: boolean;
}) {
  return (
    <div
      ref={viewportRef}
      className={cn(
        "mep-figma-services__carousel-viewport",
        cardVariant === "lod" && "mep-bim-lod-carousel__viewport",
      )}
      aria-label={carouselAriaLabel}
    >
      <div
        ref={trackRef}
        className={cn(
          "mep-figma-services__track",
          cardVariant === "lod" && "mep-bim-lod-carousel__track",
        )}
      >
        {cards.map((card, index) => (
          <ServiceCard
            key={card.title}
            card={card}
            isActive={index === activeIndex}
            ctaLabel={cardCtaLabel}
            variant={cardVariant}
          />
        ))}
      </div>
      {showCarouselFades ? (
        <>
          <div className="mep-bim-lod-carousel__fade mep-bim-lod-carousel__fade--left" aria-hidden />
          <div className="mep-bim-lod-carousel__fade mep-bim-lod-carousel__fade--right" aria-hidden />
        </>
      ) : null}
    </div>
  );
}

/**
 * Reusable sticky horizontal services carousel.
 * Vertical page scroll pins the section and drives horizontal card movement on desktop.
 */
export function StickyHorizontalServicesSection({
  section,
  cards,
  scrollInteraction = "hover",
  sectionId = "services",
  carouselAriaLabel = "Service offerings",
  cardCtaLabel = "View More",
  className,
  cardVariant = "default",
  showCarouselFades = false,
  titleClassName,
  titleLine1ClassName,
  titleLine2ClassName,
  descriptionClassName,
  metrics,
}: StickyHorizontalServicesSectionProps) {
  const isHoverScroll = scrollInteraction === "hover";
  const { isMobile, ready: layoutReady } = useMobileLayout();
  const cardsOnlyViewport = useShortLaptopLayout();
  // Below 1400px desktop: only cards pin. At 1400px+: title + description + cards pin together.
  const cardsOnlyPin =
    layoutReady && isHoverScroll && cardsOnlyViewport && !isMobile;
  const useHorizontalCarousel = layoutReady && !isMobile;

  const sectionRef = useRef<HTMLElement>(null);
  const pinZoneRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

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
    className,
  );

  const header = (
    <SectionHeader
      section={section}
      titleClassName={titleClassName}
      titleLine1ClassName={titleLine1ClassName}
      titleLine2ClassName={titleLine2ClassName}
      descriptionClassName={descriptionClassName}
    />
  );

  const cardTrackProps = {
    trackRef,
    viewportRef,
    cards,
    carouselAriaLabel,
    cardCtaLabel,
    cardVariant,
    showCarouselFades,
  };

  const cardTrack = (
    <CardTrack {...cardTrackProps} activeIndex={activeIndex} />
  );

  if (layoutReady && isMobile) {
    return (
      <section ref={sectionRef} id={sectionId} className={sectionClassName}>
        <div className="mep-figma-services__intro vbs-page-container">{header}</div>

        <div className="mep-figma-services__mobile-cards">
          <CardTrack {...cardTrackProps} activeIndex={0} />
        </div>

        <SectionMetrics metrics={metrics} />
        <SectionCta section={section} />
      </section>
    );
  }

  if (cardsOnlyPin) {
    return (
      <section ref={sectionRef} id={sectionId} className={sectionClassName}>
        <div className="mep-figma-services__intro vbs-page-container">{header}</div>

        <div ref={pinZoneRef} className="mep-figma-services__pin-zone">
          <div ref={spacerRef} className="mep-figma-services__pin-spacer" aria-hidden />
          <div
            ref={stickyRef}
            className="mep-figma-services__sticky mep-figma-services__sticky--cards-only"
          >
            {cardTrack}
            <SectionMetrics metrics={metrics} />
            <SectionCta section={section} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id={sectionId} className={sectionClassName}>
      <div ref={spacerRef} className="mep-figma-services__pin-spacer" aria-hidden />
      <div ref={stickyRef} className="mep-figma-services__sticky">
        <div className="mep-figma-services__inner vbs-page-container">{header}</div>

        {cardTrack}

        <SectionMetrics metrics={metrics} />
        <SectionCta section={section} />
      </div>
    </section>
  );
}
