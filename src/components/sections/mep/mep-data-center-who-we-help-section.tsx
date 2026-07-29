"use client";

import Image from "next/image";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepDataCenterWhoWeHelpCards,
  mepDataCenterWhoWeHelpSection,
  type MepDataCenterWhoWeHelpCard,
} from "@/constants/mep-data-center-content";
import { altFromImageSrc } from "@/lib/utils";

function resolveIcon(icon: string | { src: string }) {
  return typeof icon === "string" ? icon : icon.src;
}

function WhoWeHelpCard({ card }: { card: MepDataCenterWhoWeHelpCard }) {
  const [hovered, setHovered] = useState(false);
  const activeIcon = hovered && card.iconHover ? card.iconHover : card.icon;

  return (
    <article
      className="flex h-full flex-col gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[10px] p-[10px]">
          <Image
            src={resolveIcon(activeIcon)}
            alt={altFromImageSrc(resolveIcon(activeIcon))}
            width={50}
            height={50}
            className="h-[50px] w-[50px] object-contain"
          />
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
        <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[16px] font-medium leading-6 text-[#808080]">{card.supportTitle}</p>
        <ul className="flex list-disc flex-col gap-1 pl-5">
          {card.supportPoints.map((point) => (
            <li key={point} className="text-[16px] font-normal leading-6 text-[#808080]">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function MepDataCenterWhoWeHelpSection({
  section = mepDataCenterWhoWeHelpSection,
  cards = mepDataCenterWhoWeHelpCards,
  ctaHref = "/contact-us",
}: {
  section?: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaLabel?: string;
  };
  cards?: MepDataCenterWhoWeHelpCard[];
  ctaHref?: string;
}) {
  const [firstRow, secondRow] = [cards.slice(0, 3), cards.slice(3)];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1400px] flex-col items-start gap-5">
          <div className="flex max-w-[833px] flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2 className="mep-section-heading max-w-[833px]">
              <span className="font-medium">{section.titleLead}</span>
              <span className="text-accent whitespace-pre-line font-light">{section.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[528px] text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="flex w-full max-w-[1400px] flex-col gap-[30px]">
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {firstRow.map((card) => (
              <WhoWeHelpCard key={card.title} card={card} />
            ))}
          </div>
          <div className="mx-auto grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-2 lg:max-w-[950px]">
            {secondRow.map((card) => (
              <WhoWeHelpCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        {section.ctaLabel ? (
          <PrimaryCtaButton fullWidth={false} href={ctaHref} className="h-auto min-h-[52px] px-5 py-4">
            {section.ctaLabel}
          </PrimaryCtaButton>
        ) : null}
      </PageContainer>
    </section>
  );
}
