import Image from "next/image";
import Link from "next/link";

import portfolioBannerImg from "@/assets/images/portfolio-banner.jpg";
import { PageContainer } from "@/components/layout/page-container";
import { PortfolioProjectCard } from "@/components/sections/portfolio/portfolio-project-card";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  allProjectsIntro,
} from "@/constants/portfolio-page-content";
import { allPortfolioProjectCards } from "@/lib/portfolio-catalog";

/** Figma 948:26341 — flex two-column layout; sticky left; all cards in document flow */
export function AllProjectsSection() {
  const { tag, titleLead, titleAccent, description, mapAlt } = allProjectsIntro;

  return (
    <section
      id="all-projects"
      className="all-projects-section bg-white py-12 lg:py-[100px]"
    >
      <PageContainer>
        <div className="all-projects-layout flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
          <aside className="all-projects-aside flex w-full min-w-0 flex-col items-start justify-start gap-[60px] bg-white lg:max-w-[710px] lg:shrink-0">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <SectionTag label={tag} />
                <h1 className="text-section max-w-[688px]">
                  <span className="font-medium text-[#111111]">{titleLead}</span>
                  <span className="font-light text-[#D70416]">{titleAccent}</span>
                </h1>
              </div>
              <p className="max-w-[620px] text-[16px] leading-6 text-[#808080]">
                {description}
              </p>
            </div>

            <div className="relative aspect-[589/480] w-full max-w-[589px] shrink-0 overflow-hidden rounded-[9px]">
              <Image
                src={portfolioBannerImg}
                alt={mapAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 589px"
                priority
              />
            </div>
          </aside>

          <div
            id="all-projects-list"
            className="flex w-full min-w-0 flex-1 flex-col gap-[30px] lg:max-w-[632px]"
          >
            {allPortfolioProjectCards.map((project) => (
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
