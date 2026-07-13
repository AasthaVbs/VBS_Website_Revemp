import Image from "next/image";
import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import {
  mepBimServiceCoverageGridItems,
  mepBimServiceCoverageGridSection,
} from "@/constants/mep-bim-modelling-content";
import { altFromImageSrc } from "@/lib/utils";

const BENEFIT_ICON_COLORED = benefitIconColored;
const BENEFIT_ICON_MUTED = benefitIconMuted;

function VerticalDivider() {
  return (
    <div
      className="hidden w-px shrink-0 self-stretch bg-gradient-to-b from-transparent via-[#CBCCCD] to-transparent lg:block"
      aria-hidden
    />
  );
}

function HorizontalDivider() {
  return (
    <div
      className="h-px w-full shrink-0 bg-gradient-to-r from-transparent via-[#CBCCCD] to-transparent"
      aria-hidden
    />
  );
}

/** Figma node 221:13618 — Service Coverage grid */
export function MepBimServiceCoverageGridSection() {
  const { tag, titleLine1, titleLine2, description, ctaLabel } = mepBimServiceCoverageGridSection;
  const rowOne = mepBimServiceCoverageGridItems.slice(0, 3);
  const rowTwo = mepBimServiceCoverageGridItems.slice(3, 6);

  return (
    <section
      id="mep-bim-service-coverage"
      aria-labelledby="mep-bim-service-coverage-heading"
      className="scroll-mt-[120px] bg-white py-16 lg:scroll-mt-[148px] lg:py-[100px]"
    >
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center gap-5">
          <div className="flex w-full flex-col items-center gap-3">
            <MepSectionTag label={tag} />
            <h2
              id="mep-bim-service-coverage-heading"
              className="mep-section-heading max-w-[659px] capitalize text-center"
            >
              <span className="font-medium">{titleLine1}</span>
              <br />
              <span className="text-accent font-light">{titleLine2}</span>
            </h2>
          </div>
          <p className="max-w-[536px] text-center text-[16px] font-normal leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col items-center gap-10 lg:gap-[40px]">
          <CoverageRow items={rowOne} />
          <HorizontalDivider />
          <CoverageRow items={rowTwo} />
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          className="h-auto min-h-[52px] w-[164px] px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          {ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}

function CoverageRow({ items }: { items: (typeof mepBimServiceCoverageGridItems)[number][] }) {
  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-stretch">
      {items.map((item, index) => (
        <Fragment key={item.title}>
          {index > 0 ? <VerticalDivider /> : null}
          <CoverageCard item={item} />
        </Fragment>
      ))}
    </div>
  );
}

function CoverageCard({ item }: { item: (typeof mepBimServiceCoverageGridItems)[number] }) {
  return (
    <article className="group mep-interactive-card flex min-w-0 flex-1 flex-col gap-5 bg-white p-2.5">
      <div className="flex flex-col gap-2.5">
        <div className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[10px]">
          <Image
            src={BENEFIT_ICON_MUTED}
            alt={altFromImageSrc(BENEFIT_ICON_MUTED)}
            width={46}
            height={46}
            className="h-[46px] w-[46px] object-contain transition-opacity duration-200 group-hover:opacity-0"
          />
          <Image
            src={BENEFIT_ICON_COLORED}
            alt={altFromImageSrc(BENEFIT_ICON_COLORED)}
            width={46}
            height={46}
            className="absolute left-1/2 top-1/2 h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{item.title}</h3>
      </div>
      <p className="text-[16px] font-normal leading-6 text-[#808080]">{item.description}</p>
    </article>
  );
}
