// @ts-nocheck
import Image from "next/image";
import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { benefitIconColored, benefitIconMuted } from "@/constants/benefit-icons";
import { mepKeyBenefits, mepKeyBenefitsSection } from "@/constants/mep-engineers-content";

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

/** Figma node 297:10932 — Key Benefits */
export function MepKeyBenefitsSection() {
  const rowOne = mepKeyBenefits.slice(0, 3);
  const rowTwo = mepKeyBenefits.slice(3, 6);

  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={mepKeyBenefitsSection.tag} />
            <h2 className="mep-section-heading max-w-[659px] capitalize">
              <span className="font-medium">{mepKeyBenefitsSection.titleLine1} </span>
              <span className="text-accent font-light">{mepKeyBenefitsSection.titleLine2}</span>
            </h2>
          </div>
          <p className="max-w-[581px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {mepKeyBenefitsSection.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10 lg:gap-[40px]">
          <BenefitsRow benefits={rowOne} />
          <HorizontalDivider />
          <BenefitsRow benefits={rowTwo} />
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          className="h-auto min-h-[52px] w-[164px] px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          Let&apos;s Talk
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}

function BenefitsRow({
  benefits,
}: {
  benefits: (typeof mepKeyBenefits)[number][];
}) {
  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-stretch">
      {benefits.map((benefit, index) => (
        <Fragment key={benefit.title}>
          {index > 0 ? <VerticalDivider /> : null}
          <BenefitCard benefit={benefit} />
        </Fragment>
      ))}
    </div>
  );
}

function BenefitCard({ benefit }: { benefit: (typeof mepKeyBenefits)[number] }) {
  const iconSrc = benefit.featured ? BENEFIT_ICON_COLORED : BENEFIT_ICON_MUTED;

  return (
    <article className="flex min-w-0 flex-1 flex-col gap-5 bg-white p-2.5">
      <div className="flex flex-col gap-2.5">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] p-[15px]">
          <Image src={iconSrc} alt="" width={46} height={46} className="h-[46px] w-[46px]" aria-hidden />
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{benefit.title}</h3>
      </div>
      <p className="text-[16px] font-normal leading-6 text-[#808080]">{benefit.description}</p>
    </article>
  );
}
