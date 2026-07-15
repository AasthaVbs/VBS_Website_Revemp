import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { PortfolioProjectCard } from "@/components/sections/portfolio/portfolio-project-card";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  portfolioProjectItems,
  portfolioProjectsIntro,
} from "@/constants/portfolio-page-content";

/** Figma 943:16097 — flex two-column layout; sticky left; cards in document flow */
export function PortfolioProjectsSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel, seeAllProjectsHref, mapImage, mapAlt } =
    portfolioProjectsIntro;

  return (
    <section
      id="portfolio-projects"
      className="portfolio-projects-section bg-[#FAFAFA] py-12 lg:py-[100px]"
    >
      <PageContainer>
        <div className="portfolio-projects-layout flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
          <aside className="portfolio-projects-aside flex w-full min-w-0 flex-col items-start justify-start gap-[60px] bg-[#FAFAFA] lg:max-w-[710px] lg:shrink-0">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <SectionTag label={tag} />
                <h2 className="text-section max-w-[688px]">
                  <span className="font-medium text-[#111111]">{titleLead}</span>
                  <span className="font-light text-[#D70416]">{titleAccent}</span>
                </h2>
              </div>
              <p className="max-w-[620px] text-[16px] leading-6 text-[#808080]">
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
              />
            </div>

            <PrimaryCtaButton
              fullWidth={false}
              href={seeAllProjectsHref}
              className="shrink-0 px-5 py-4 capitalize"
            >
              {ctaLabel}
            </PrimaryCtaButton>
          </aside>

          <div
            id="portfolio-project-list"
            className="flex w-full min-w-0 flex-1 flex-col gap-[30px] lg:max-w-[632px]"
          >
            {portfolioProjectItems.map((project) => (
              <Link key={project.id} href={project.href} className="block w-full">
                <PortfolioProjectCard project={project} variant="featured" />
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
