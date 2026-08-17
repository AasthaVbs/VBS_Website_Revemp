"use client";

import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { aiaEngageCards, aiaEngageCopy } from "@/constants/aia-conference-events-content";
import { openBookMeetingModal } from "@/utils/nimbus-booking";

type AiaEngageSectionProps = {
  onReserveSlot: () => void;
};

export function AiaEngageSection({ onReserveSlot }: AiaEngageSectionProps) {
  return (
    <section className="aia-engage bg-white py-12 lg:py-[100px]">
      <PageContainer className="aia-engage__row">
        <div className="aia-engage__intro">
          <div className="flex flex-col items-start justify-center gap-3">
            <SectionTag label={aiaEngageCopy.tag} />
            <h2 className="text-section w-full max-w-[573px] capitalize">
              {aiaEngageCopy.titleLead}
              <span className="text-accent font-light">{aiaEngageCopy.titleAccent}</span>
            </h2>
          </div>
          <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#808080]">
            {aiaEngageCopy.description}
          </p>
        </div>

        <div className="aia-engage__cards">
          {aiaEngageCards.map((card) => (
            <button
              key={card.id}
              type="button"
              className="aia-engage__card"
              onClick={card.action === "meeting" ? openBookMeetingModal : onReserveSlot}
            >
              <div className="aia-engage__card-copy">
                <span className="aia-engage__card-label">{card.label}</span>
                <span className="aia-engage__card-title">{card.title}</span>
              </div>
              <span className="aia-engage__card-cta">
                {card.ctaLabel}
                <ChevronRight className="size-6" strokeWidth={1.5} aria-hidden />
              </span>
            </button>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
