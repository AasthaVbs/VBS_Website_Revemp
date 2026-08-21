"use client";

import Image from "next/image";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import {
  cadDraftingUsaExpertiseItems,
  cadDraftingUsaExpertiseSection,
} from "@/constants/cad-drafting-services-usa-content";
import { cn, shouldUnoptimizeImage } from "@/lib/utils";

/** Figma 3991:48072 — Our CAD Expertise list + preview */
export function CadDraftingUsaExpertiseSection({
  section = cadDraftingUsaExpertiseSection,
  items = cadDraftingUsaExpertiseItems,
}: {
  section?: typeof cadDraftingUsaExpertiseSection;
  items?: typeof cadDraftingUsaExpertiseItems;
} = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <section className="cad-usa-expertise bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col gap-[40px] lg:gap-[60px]">
          <h2 className="text-section">
            <span className="text-section font-medium text-[#111111]">{section.titleLead}</span>
            <span className="text-section text-accent font-light">{section.titleAccent}</span>
          </h2>

          <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {/* Figma: 30px gap above/below each divider, list vertically centered vs preview */}
            <ul className="flex w-full flex-col justify-center lg:min-h-[410px] lg:w-[416px] lg:shrink-0">
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                const isLast = index === items.length - 1;
                return (
                  <li
                    key={item.title}
                    className={cn(!isLast && "mb-[30px] border-b border-[#CBCCCD] pb-[30px]")}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="flex w-full items-center gap-2.5 text-left"
                      aria-pressed={isActive}
                    >
                      <span
                        className={cn(
                          "text-[20px] font-normal leading-normal",
                          isActive ? "text-[#111111]" : "text-[#808080]",
                        )}
                      >
                        {item.title}
                      </span>
                      {isActive ? (
                        <span className="shrink-0" aria-hidden>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                              d="M2 1L10 6L2 11"
                              stroke="#111111"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="relative h-[280px] w-full overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white sm:h-[360px] lg:h-[446px] lg:w-[710px] lg:shrink-0">
              <Image
                key={activeItem.title}
                src={activeItem.image}
                alt={activeItem.title}
                fill
                unoptimized={shouldUnoptimizeImage(activeItem.image)}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 710px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111] via-[rgba(17,17,17,0.2)] via-[26%] to-transparent to-[34%] opacity-70"
                aria-hidden
              />
              <p className="absolute inset-x-[20px] bottom-6 text-body-emphasis !text-white sm:inset-x-[30px]">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
