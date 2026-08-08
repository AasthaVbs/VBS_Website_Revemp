"use client";

import Image from "next/image";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  architecturalDraftingUsaWhoWeAreItems,
  architecturalDraftingUsaWhoWeAreSection,
} from "@/constants/architectural-drafting-services-usa-content";
import { cn } from "@/lib/utils";

/** Figma 3910:65669 — Who We Are accordion + drafting image. */
export function ArchitecturalDraftingUsaWhoWeAreSection({
  section = architecturalDraftingUsaWhoWeAreSection,
  items = architecturalDraftingUsaWhoWeAreItems,
}: {
  section?: typeof architecturalDraftingUsaWhoWeAreSection;
  items?: typeof architecturalDraftingUsaWhoWeAreItems;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="ads-usa-who bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-[30px]">
            <div className="flex w-full flex-col items-start gap-5">
              <div className="flex flex-col items-start gap-3">
                <MepSectionTag label={section.tag} />
                <h2 className="text-section w-full capitalize">
                  <span className="font-medium text-[#111111]">{section.titleLead}</span>
                  <span className="font-light text-accent">{section.titleAccent}</span>
                </h2>
              </div>
              <p className="max-w-[629px] text-[16px] font-normal leading-6 text-[#808080]">
                {section.description}
              </p>
            </div>

            <div className="relative w-full max-w-[540px] overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white">
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={540}
                height={420}
                className="block h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>

            <PrimaryCtaButton
              fullWidth={false}
              href={section.ctaHref}
              className="!h-auto !min-h-[56px] !px-5 !py-4 capitalize"
            >
              {section.ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-end gap-5 self-stretch p-0 lg:p-5">
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="flex w-full flex-col gap-2 border-0 bg-transparent p-0 text-left"
                  aria-expanded={isActive}
                >
                  <span className="flex w-full items-start justify-between gap-4">
                    <span
                      className={cn(
                        "text-[16px] font-normal leading-normal",
                        isActive ? "text-[#111111]" : "text-[#808080]",
                      )}
                    >
                      {item.title}
                    </span>
                    <span className="mt-0.5 shrink-0" aria-hidden>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path
                          d={isActive ? "M2 4L6 8L10 4" : "M4 2L8 6L4 10"}
                          stroke={isActive ? "#111111" : "#808080"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  {isActive ? (
                    <span className="text-[16px] font-normal leading-6 text-[#808080]">
                      {item.caption}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
