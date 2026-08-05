"use client";

import React, { useRef, useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";
import { useScrollRevealProgress } from "@/hooks/useScrollRevealProgress";
import {
  cadDraftingLandingServicesCards,
  cadDraftingLandingServicesSection,
} from "@/constants/cad-drafting-landing-content";

function ServiceCard({ card, index, activeIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const highlighted = index <= activeIndex;
  const showColoredIcon = highlighted || isHovered;

  return (
    <article
      data-scroll-reveal={index}
      className={cn(
        "cad-landing-services__card flex min-w-0 flex-1 flex-col items-start self-stretch overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5",
        highlighted && "cad-landing-services__card--icon-colored",
        isHovered && "cad-landing-services__card--hovered",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="cad-landing-services__card-main">
        <div className="cad-landing-services__card-head">
          <div className="cad-landing-services__icon-wrap">
            <img
              src={showColoredIcon ? card.iconHover : card.icon}
              alt=""
              className="cad-landing-services__icon"
              aria-hidden
              decoding="async"
            />
          </div>
          <h3 className="cad-landing-services__card-title m-0">{card.title}</h3>
        </div>
        <p className="cad-landing-services__card-text m-0">{card.text}</p>
      </div>
      <ul className="cad-landing-services__card-bullets">
        {card.bullets.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </article>
  );
}

/**
 * CAD drafting services grid — Figma node 40-16800.
 */
export function CadDraftingServicesSection({
  section = cadDraftingLandingServicesSection,
  cards = cadDraftingLandingServicesCards,
}) {
  const gridRef = useRef(null);
  const activeIndex = useScrollRevealProgress(gridRef, cards.length, "[data-scroll-reveal]", 0.55);

  const rows = [];
  for (let i = 0; i < cards.length; i += 2) {
    rows.push(cards.slice(i, i + 2));
  }

  const hasThreePartTitle = section.titleBefore || section.titleAfter;

  let cardIndex = 0;

  return (
    <section id="services" className="cad-landing-services bg-white py-12 md:py-16 lg:py-[100px]">
      <PageContainer className="cad-landing-services__container flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px]">
        <header className="cad-landing-services__head w-full self-stretch">
          <div className="cad-landing-services__head-top">
            <span className="cad-landing-services__tag">{section.tag}</span>
            <h2 className="cad-landing-services__title">
              {hasThreePartTitle ? (
                <>
                  {section.titleBefore ? (
                    <span className="cad-landing-services__title-dark">{section.titleBefore}</span>
                  ) : null}
                  <span className="cad-landing-services__title-accent">{section.titleAccent}</span>
                  {section.titleAfter ? (
                    <span className="cad-landing-services__title-dark">{section.titleAfter}</span>
                  ) : null}
                </>
              ) : (
                <>
                  <span className="cad-landing-services__title-accent">{section.titleAccent}</span>
                  <span className="cad-landing-services__title-dark">{section.titleLead}</span>
                </>
              )}
            </h2>
          </div>
          <p className="cad-landing-services__section-desc">{section.description}</p>
        </header>

        <div
          ref={gridRef}
          className="cad-landing-services__grid flex w-full flex-col items-stretch gap-5 self-stretch md:gap-6 lg:gap-[30px]"
        >
          {rows.map((rowCards, rowIndex) => (
            <div
              key={`services-row-${rowIndex}`}
              className="cad-landing-services__row flex w-full flex-col items-stretch gap-5 md:gap-6 lg:flex-row lg:gap-[30px]"
            >
              {rowCards.map((card) => {
                const index = cardIndex;
                cardIndex += 1;
                return (
                  <ServiceCard
                    key={card.title}
                    card={card}
                    index={index}
                    activeIndex={activeIndex}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {section.alsoAvailable ? (
          <div className="cad-landing-services__also-available w-full">
            <span className="cad-landing-services__also-available-label">Also available</span>
            <span className="cad-landing-services__also-available-sep" aria-hidden>
              -
            </span>
            <span className="cad-landing-services__also-available-text">{section.alsoAvailable}</span>
          </div>
        ) : null}

        <PrimaryCtaButton fullWidth className="w-full sm:w-auto" href={section.ctaHref}>
          {section.ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
