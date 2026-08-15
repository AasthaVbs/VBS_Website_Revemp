"use client";

import Image from "next/image";
import { Fragment, useState } from "react";

import { ChevronRightIcon } from "@/components/icons/chevron-right-icon";
import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
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
        <div className="arch-svc-why-continue__body">
          <SectionIntro
            tag={section.tag}
            title={
              <>
                {section.titleParts.map((part, index) => (
                  <span key={`${part.text}-${index}`} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </>
            }
            description={section.description}
            descriptionClassName="max-w-[749px] text-[16px] font-normal leading-6 text-[#808080]"
          />

          <div className="arch-svc-why-continue__row">
            <ul className="arch-svc-why-continue__list">
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                const isLast = index === items.length - 1;
                return (
                  <Fragment key={item.title}>
                    <li className="arch-svc-why-continue__item-wrap">
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="arch-svc-why-continue__item"
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
                        {isActive ? (
                          <span className="arch-svc-why-continue__chevron" aria-hidden>
                            <ChevronRightIcon className="h-6 w-6" />
                          </span>
                        ) : null}
                      </button>
                    </li>
                    {!isLast ? (
                      <li className="arch-svc-why-continue__divider" aria-hidden />
                    ) : null}
                  </Fragment>
                );
              })}
            </ul>

            <div className="arch-svc-why-continue__visual">
              <Image
                src={section.image}
                alt={section.imageAlt ?? altFromImageSrc(section.image)}
                width={710}
                height={710}
                unoptimized={typeof section.image === "string"}
                className="arch-svc-why-continue__photo"
                sizes="(max-width: 1280px) 100vw, 710px"
              />
              <div className="arch-svc-why-continue__overlay" aria-hidden />
              <p key={activeIndex} className="arch-svc-why-continue__caption">
                {caption}
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
