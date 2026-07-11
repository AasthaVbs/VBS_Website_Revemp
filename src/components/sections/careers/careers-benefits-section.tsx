"use client";

import { Fragment, useRef, useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";
import { useScrollRevealProgress } from "@/hooks/useScrollRevealProgress";
import {
  careersBenefits,
  careersBenefitsSectionCopy,
  type CareerBenefit,
} from "@/constants/careers-content";

function resolveImageSrc(icon: string | { src: string }) {
  if (!icon) return "";
  return typeof icon === "string" ? icon : icon.src;
}

function BenefitCard({
  benefit,
  index,
  activeIndex,
}: {
  benefit: CareerBenefit;
  index: number;
  activeIndex: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const highlighted = index <= activeIndex;
  const showColoredIcon = isHovered;

  return (
    <article
      data-scroll-reveal={index}
      className={cn(
        "mep-figma-benefits__card flex min-w-0 flex-1 flex-col items-start gap-5 self-stretch overflow-hidden bg-white",
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolveImageSrc(showColoredIcon ? benefit.iconHover : benefit.icon)}
            alt=""
            className="mep-figma-benefits__icon"
            aria-hidden
            decoding="async"
          />
        </div>
        <p className="mep-figma-benefits__card-title w-full">{benefit.title}</p>
      </div>
      <p className="mep-figma-benefits__card-text w-full">{benefit.description}</p>
    </article>
  );
}

function BenefitRow({
  benefits,
  startIndex,
  activeIndex,
}: {
  benefits: CareerBenefit[];
  startIndex: number;
  activeIndex: number;
}) {
  return (
    <div className="mep-figma-benefits__row flex w-full items-stretch self-stretch">
      {benefits.map((benefit, index) => (
        <Fragment key={benefit.title}>
          {index > 0 ? <div className="mep-figma-benefits__divider" aria-hidden /> : null}
          <BenefitCard benefit={benefit} index={startIndex + index} activeIndex={activeIndex} />
        </Fragment>
      ))}
    </div>
  );
}

/** Figma node 679:16518 — Benefits (same pattern as MEP Key Benefits) */
export function CareersBenefitsSection() {
  const copy = careersBenefitsSectionCopy;
  const gridRef = useRef<HTMLDivElement>(null);
  const activeIndex = useScrollRevealProgress(
    gridRef,
    careersBenefits.length,
    "[data-scroll-reveal]",
    0.55,
  );
  const rowOne = careersBenefits.slice(0, 3);
  const rowTwo = careersBenefits.slice(3, 6);

  return (
    <section className="mep-figma-benefits vbs-careers-benefits bg-white pt-0 pb-[72px] md:pb-[100px] lg:pb-[120px]">
      <PageContainer className="mep-figma-benefits__container flex flex-col items-center gap-[60px]">
        <header className="mep-figma-benefits__head">
          <div className="mep-figma-benefits__head-top">
            <span className="mep-figma-benefits__tag">{copy.tag}</span>
            <p className="mep-figma-benefits__title">
              <span className="mep-figma-benefits__title-dark">{copy.titleLead}</span>
              <span className="mep-figma-benefits__title-accent">{copy.titleAccent}</span>
            </p>
          </div>
          <p className="mep-figma-benefits__section-desc">{copy.description}</p>
        </header>

        <div
          ref={gridRef}
          className="mep-figma-benefits__grid flex w-full flex-col items-center self-stretch"
        >
          <BenefitRow benefits={rowOne} startIndex={0} activeIndex={activeIndex} />
          <div className="mep-figma-benefits__row-divider" aria-hidden />
          <BenefitRow benefits={rowTwo} startIndex={3} activeIndex={activeIndex} />
        </div>
      </PageContainer>
    </section>
  );
}
