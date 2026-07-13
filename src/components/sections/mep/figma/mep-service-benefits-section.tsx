// @ts-nocheck
"use client";

import { Fragment, useRef, useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";
import { useScrollRevealProgress } from "@/hooks/useScrollRevealProgress";
import {
  mepServiceBenefitsCards,
  mepServiceBenefitsSection,
} from "@/constants/mep-engineers-content";

function resolveImageSrc(icon) {
  if (!icon) return "";
  return typeof icon === "string" ? icon : icon.src;
}

function BenefitCard({ card, index, activeIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const highlighted = index <= activeIndex;
  const showColoredIcon = isHovered;

  return (
    <article
      data-scroll-reveal={index}
      className={cn(
        "mep-figma-benefits__card flex min-w-0 flex-1 flex-col items-start gap-3 self-stretch overflow-hidden bg-white",
        highlighted && "mep-figma-benefits__card--highlighted",
        isHovered && "mep-figma-benefits__card--hovered",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="flex w-full flex-col items-start gap-2.5">
        <div className="mep-figma-benefits__icon-wrap">
          <img
            src={resolveImageSrc(showColoredIcon ? card.iconHover : card.icon)}
            alt=""
            className="mep-figma-benefits__icon"
            aria-hidden
            decoding="async"
          />
        </div>
        <p className="mep-figma-benefits__card-title w-full">{card.title}</p>
      </div>
      <p
        className="mep-figma-benefits__card-text w-full"
        style={card.textMaxWidth ? { maxWidth: card.textMaxWidth } : undefined}
      >
        {card.text}
      </p>
    </article>
  );
}

function BenefitRow({ cards, startIndex, activeIndex }) {
  return (
    <div className="mep-figma-benefits__row flex w-full items-stretch self-stretch">
      {cards.map((card, index) => (
        <Fragment key={card.title}>
          {index > 0 ? <div className="mep-figma-benefits__divider" aria-hidden /> : null}
          <BenefitCard card={card} index={startIndex + index} activeIndex={activeIndex} />
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Service Benefits — Figma VBS-Current-Website node 5-13170.
 */
export function MepServiceBenefitsSection({
  id = "benefits",
  section = mepServiceBenefitsSection,
  cards = mepServiceBenefitsCards,
  showCta = true,
}) {
  const gridRef = useRef(null);
  const activeIndex = useScrollRevealProgress(gridRef, cards.length, "[data-scroll-reveal]", 0.55);
  const rowSplit = cards.length === 4 ? 2 : 3;
  const rowOne = cards.slice(0, rowSplit);
  const rowTwo = cards.slice(rowSplit);
  const hasThreePartTitle = section.titleBefore || section.titleAfter;
  const hasTitleParts = section.titleParts?.length > 0;

  return (
    <section id={id} className="mep-figma-benefits bg-white py-[100px]">
      <PageContainer className="mep-figma-benefits__container flex flex-col items-center gap-[60px]">
        <header className="mep-figma-benefits__head">
          <div className="mep-figma-benefits__head-top">
            <span className="mep-figma-benefits__tag">{section.tag}</span>
            <p
              className={cn(
                "mep-figma-benefits__title",
                hasTitleParts && "mep-figma-benefits__title--parts",
              )}
              style={
                section.titleMaxWidth
                  ? { "--benefits-title-max-w": `${section.titleMaxWidth}px` }
                  : undefined
              }
            >
              {hasTitleParts ? (
                section.titleParts.map((part) => (
                  <span key={part.text} className={part.className}>
                    {part.text}
                  </span>
                ))
              ) : hasThreePartTitle ? (
                <>
                  {section.titleBefore ? (
                    <span className="mep-figma-benefits__title-dark">{section.titleBefore}</span>
                  ) : null}
                  <span className="mep-figma-benefits__title-accent">{section.titleAccent}</span>
                  {section.titleAfter ? (
                    <span className="mep-figma-benefits__title-dark">{section.titleAfter}</span>
                  ) : null}
                </>
              ) : (
                <>
                  <span className="mep-figma-benefits__title-dark whitespace-pre-line">
                    {section.titleLine1}
                  </span>
                  <span className="mep-figma-benefits__title-accent">{section.titleLine2}</span>
                </>
              )}
            </p>
          </div>
          <p
            className="mep-figma-benefits__section-desc"
            style={
              section.descriptionMaxWidth
                ? { maxWidth: `${section.descriptionMaxWidth}px` }
                : undefined
            }
          >
            {section.description}
          </p>
        </header>

        <div
          ref={gridRef}
          className="mep-figma-benefits__grid flex w-full flex-col items-center self-stretch"
        >
          <BenefitRow cards={rowOne} startIndex={0} activeIndex={activeIndex} />
          <div className="mep-figma-benefits__row-divider" aria-hidden />
          <BenefitRow cards={rowTwo} startIndex={rowSplit} activeIndex={activeIndex} />
        </div>
        {showCta && section.ctaLabel ? (
          <PrimaryCtaButton fullWidth={false} href={section.ctaHref}>
            {section.ctaLabel}
          </PrimaryCtaButton>
        ) : null}
      </PageContainer>
    </section>
  );
}
