"use client";

import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  threeDRenderingUsaWhyTrustItems,
  threeDRenderingUsaWhyTrustSection,
} from "@/constants/3d-rendering-services-usa-content";
import { altFromImageSrc, cn } from "@/lib/utils";

function resolveImageSrc(icon: string | { src: string } | undefined) {
  if (!icon) return "";
  return typeof icon === "string" ? icon : icon.src;
}

function WhyTrustCard({
  item,
}: {
  item: (typeof threeDRenderingUsaWhyTrustItems)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const activeIcon = isHovered ? item.iconHover : item.icon;

  return (
    <article
      className={cn(
        "trs-usa-why-trust__card flex flex-col items-start gap-4",
        isHovered && "trs-usa-why-trust__card--hovered",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start gap-2.5">
        <div className="flex size-[60px] items-center justify-center overflow-hidden rounded-[10px] p-[7px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resolveImageSrc(activeIcon)}
            alt={altFromImageSrc(activeIcon)}
            className="h-[46px] w-[46px] object-contain"
            decoding="async"
          />
        </div>
        <h3 className="m-0 text-[20px] font-normal leading-normal text-[#111111] sm:text-[24px]">
          {item.title}
        </h3>
      </div>
      <p className="m-0 text-[16px] font-normal leading-6 text-[#808080]">{item.description}</p>
    </article>
  );
}

/** Figma 4032:56986 — Why 500+ Architects & Builders Trust Us */
export function ThreeDRenderingUsaWhyTrustSection({
  section = threeDRenderingUsaWhyTrustSection,
  items = threeDRenderingUsaWhyTrustItems,
}: {
  section?: typeof threeDRenderingUsaWhyTrustSection;
  items?: typeof threeDRenderingUsaWhyTrustItems;
}) {
  return (
    <section className="trs-usa-why-trust bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <h2 className="text-section w-full max-w-[643px]">
            <span className="font-medium text-[#111111]">{section.titleLead}</span>
            <span className="font-light text-accent">{section.titleAccent}</span>
          </h2>
          <p className="max-w-[528px] text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="trs-usa-why-trust__grid grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-[30px] sm:gap-y-[30px]">
          {items.map((item) => (
            <WhyTrustCard key={item.title} item={item} />
          ))}
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          href={section.ctaHref}
          className="!h-auto !min-h-[56px] !px-5 !py-4 capitalize"
        >
          {section.ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
