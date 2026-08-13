"use client";

import Image from "next/image";
import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  architectureWhyContinueItems,
  architectureWhyContinueSection,
} from "@/constants/architecture-services-redesign-content";
import { altFromImageSrc, cn } from "@/lib/utils";

export function ArchitectureWhyContinueSection({
  section = architectureWhyContinueSection,
  items = architectureWhyContinueItems,
}: {
  section?: typeof architectureWhyContinueSection;
  items?: typeof architectureWhyContinueItems;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];
  const caption = activeItem?.caption ?? section.defaultCaption;

  return (
    <section className="arch-svc-why-continue bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-10">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label={section.tag} />
              <h2 className="text-section w-full">
                {section.titleParts.map((part, index) => (
                  <span key={`${part.text}-${index}`} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </h2>
              <p className="w-full max-w-[560px] text-[16px] font-normal leading-6 text-[#808080]">
                {section.description}
              </p>
            </div>

            <ul className="arch-svc-why-continue__list flex w-full flex-col">
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                const isLast = index === items.length - 1;
                return (
                  <li key={item.title} className="arch-svc-why-continue__item-wrap">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className="arch-svc-why-continue__item flex w-full items-center justify-between gap-4 text-left"
                      aria-pressed={isActive}
                    >
                      <span
                        className={cn(
                          "text-[20px] font-normal leading-normal transition-colors",
                          isActive ? "text-[#111111]" : "text-[#808080]",
                        )}
                      >
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          "arch-svc-why-continue__chevron shrink-0 transition-transform",
                          isActive && "arch-svc-why-continue__chevron--active",
                        )}
                        aria-hidden
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2 1L10 6L2 11"
                            stroke={isActive ? "#111111" : "#808080"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    {!isLast ? (
                      <div className="arch-svc-why-continue__divider" aria-hidden />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="arch-svc-why-continue__visual relative min-w-0 flex-1 overflow-hidden rounded-[10px]">
            <Image
              src={section.image}
              alt={section.imageAlt ?? altFromImageSrc(section.image)}
              width={620}
              height={520}
              className="block h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 620px"
            />
            <div className="arch-svc-why-continue__overlay absolute inset-0" aria-hidden />
            <p key={activeIndex} className="arch-svc-why-continue__caption absolute inset-x-[30px] bottom-[30px] text-[16px] font-medium leading-6 text-white">
              {caption}
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
