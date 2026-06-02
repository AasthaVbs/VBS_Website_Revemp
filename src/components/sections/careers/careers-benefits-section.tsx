import Image from "next/image";
import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  careersBenefits,
  careersBenefitsSectionCopy,
  type CareerBenefit,
} from "@/constants/careers-content";

const BENEFIT_ICON_COLORED = "/images/mep/key-benefits/icon-benefit-colored.svg";
const BENEFIT_ICON_MUTED = "/images/mep/key-benefits/icon-benefit-muted.svg";

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

/** Figma node 679:16518 — Benefits (same pattern as MEP Key Benefits) */
export function CareersBenefitsSection() {
  const rowOne = careersBenefits.slice(0, 3);
  const rowTwo = careersBenefits.slice(3, 6);

  return (
    <section className="bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={careersBenefitsSectionCopy.tag} />
            <h2 className="text-section max-w-[659px] capitalize">
              <span className="font-medium">{careersBenefitsSectionCopy.titleLead}</span>
              <span className="text-accent font-light">
                {careersBenefitsSectionCopy.titleAccent}
              </span>
            </h2>
          </div>
          <p className="max-w-[581px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {careersBenefitsSectionCopy.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10 lg:gap-10">
          <BenefitsRow benefits={rowOne} />
          <HorizontalDivider />
          <BenefitsRow benefits={rowTwo} />
        </div>
      </PageContainer>
    </section>
  );
}

function BenefitsRow({ benefits }: { benefits: CareerBenefit[] }) {
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

function BenefitCard({ benefit }: { benefit: CareerBenefit }) {
  return (
    <article className="group flex min-w-0 flex-1 flex-col gap-5 rounded-[10px] bg-transparent p-2.5 transition-all duration-200 hover:bg-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
      <div className="flex flex-col gap-2.5">
        <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-[10px] p-[15px]">
          <Image
            src={BENEFIT_ICON_MUTED}
            alt=""
            width={46}
            height={46}
            className="h-[46px] w-[46px] transition-opacity duration-200 group-hover:opacity-0"
            aria-hidden
          />
          <Image
            src={BENEFIT_ICON_COLORED}
            alt=""
            width={46}
            height={46}
            className="absolute h-[46px] w-[46px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            aria-hidden
          />
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{benefit.title}</h3>
      </div>
      <p className="text-[16px] font-normal leading-6 text-[#808080]">{benefit.description}</p>
    </article>
  );
}
