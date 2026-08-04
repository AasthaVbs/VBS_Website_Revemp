import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  bimModelingWhyChooseItems,
  bimModelingWhyChooseSection,
} from "@/constants/bim-modeling-services-content";

type WhyChooseItem = {
  prefix: string;
  suffix: string;
  prefixColor: string;
  title: string;
  description: string;
};

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
      className="hidden h-px w-full shrink-0 bg-gradient-to-r from-transparent via-[#CBCCCD] to-transparent lg:block"
      aria-hidden
    />
  );
}

function WhyChooseCard({ item }: { item: WhyChooseItem }) {
  return (
    <article className="flex min-w-0 flex-1 flex-col items-start gap-5 self-stretch overflow-hidden p-2.5">
      <div className="flex flex-col items-start justify-center gap-2.5">
        <div
          className="whitespace-nowrap text-[#111111]"
          style={{ fontSize: 36, fontWeight: 400, lineHeight: "normal" }}
        >
          <span style={{ color: item.prefixColor }}>{item.prefix}</span>
          <span>{item.suffix}</span>
        </div>
        <h3
          className="text-[#111111]"
          style={{ fontSize: 24, fontWeight: 400, lineHeight: "normal" }}
        >
          {item.title}
        </h3>
      </div>
      <p
        className="w-full text-[#808080]"
        style={{ fontSize: 16, fontWeight: 400, lineHeight: "24px" }}
      >
        {item.description}
      </p>
    </article>
  );
}

/** Why Choose Us — Figma 1822:16671 numbered 2×2 grid */
export function BimModelingWhyChooseSection({
  section = bimModelingWhyChooseSection,
  items = bimModelingWhyChooseItems,
  descriptionMaxWidth = 571,
}: {
  section?: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  items?: readonly WhyChooseItem[];
  descriptionMaxWidth?: number;
} = {}) {
  const rowOne = items.slice(0, 2);
  const rowTwo = items.slice(2, 4);

  return (
    <section id="why-choose-us" className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <header className="flex w-full flex-col items-start gap-5">
          <div className="flex w-full max-w-[704px] flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2 className="w-full">
              <span className="text-section font-medium text-[#111111]">{section.titleLead}</span>
              <span className="text-section font-light text-accent">{section.titleAccent}</span>
            </h2>
          </div>
          <p
            className="w-full text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: `${descriptionMaxWidth}px` }}
          >
            {section.description}
          </p>
        </header>

        <div className="flex w-full flex-col items-center gap-8 lg:gap-10">
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-5">
            {rowOne.map((item, index) => (
              <Fragment key={item.title}>
                {index > 0 ? <VerticalDivider /> : null}
                <WhyChooseCard item={item} />
              </Fragment>
            ))}
          </div>

          <HorizontalDivider />

          <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-5">
            {rowTwo.map((item, index) => (
              <Fragment key={item.title}>
                {index > 0 ? <VerticalDivider /> : null}
                <WhyChooseCard item={item} />
              </Fragment>
            ))}
          </div>
        </div>

        {section.ctaLabel ? (
          <PrimaryCtaButton
            fullWidth={false}
            href={section.ctaHref}
            className="self-center"
          >
            {section.ctaLabel}
          </PrimaryCtaButton>
        ) : null}
      </PageContainer>
    </section>
  );
}
