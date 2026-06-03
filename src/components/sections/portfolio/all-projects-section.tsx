"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PortfolioProjectCard } from "@/components/sections/portfolio/portfolio-project-card";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  allProjectsIntro,
  portfolioProjectItems,
} from "@/constants/portfolio-page-content";

/** Figma 948:26341 — map + intro left; scrollable project cards right */
export function AllProjectsSection() {
  const { tag, titleLead, titleAccent, description, mapImage, mapAlt } = allProjectsIntro;
  const listRef = useRef<HTMLDivElement>(null);

  const handleWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const list = listRef.current;
    if (!list) return;

    const { scrollTop, scrollHeight, clientHeight } = list;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll <= 0) return;

    const atTop = scrollTop <= 0;
    const atBottom = scrollTop >= maxScroll - 1;

    if ((event.deltaY > 0 && atBottom) || (event.deltaY < 0 && atTop)) {
      return;
    }

    event.preventDefault();
    list.scrollTop += event.deltaY;
  }, []);

  return (
    <section className="all-projects-section overflow-hidden bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex h-full min-h-0 flex-col">
        <div
          className="all-projects-layout flex min-h-0 flex-1 flex-col gap-10 lg:flex-row lg:gap-[60px]"
          onWheel={handleWheel}
        >
          <aside className="all-projects-aside flex w-full min-w-0 flex-col items-start justify-start gap-[60px] bg-white lg:max-w-[710px] lg:shrink-0">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <SectionTag label={tag} />
                <h1 className="text-section max-w-[688px] capitalize">
                  <span className="font-medium text-[#111111]">{titleLead}</span>
                  <span className="font-light text-[#D70416]">{titleAccent}</span>
                </h1>
              </div>
              <p className="max-w-[620px] text-[16px] capitalize leading-6 text-[#808080]">
                {description}
              </p>
            </div>

            <div className="relative aspect-[710/473] w-full max-w-[710px] shrink-0 overflow-hidden">
              <Image
                src={mapImage}
                alt={mapAlt}
                fill
                className="object-contain object-left"
                sizes="(max-width: 1024px) 100vw, 710px"
                priority
              />
            </div>
          </aside>

          <div
            ref={listRef}
            className="all-projects-list portfolio-project-list-scroll flex w-full min-w-0 flex-1 flex-col gap-[30px] lg:min-h-0"
          >
            {portfolioProjectItems.map((project) => (
              <Link key={project.id} href={project.href} className="block w-full max-w-[632px]">
                <PortfolioProjectCard project={project} variant="listing" />
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
