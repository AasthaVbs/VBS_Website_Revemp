import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  architecturalDraftingUsaShowcaseProjects,
  architecturalDraftingUsaShowcaseSection,
} from "@/constants/architectural-drafting-services-usa-content";

/** Figma 3910:65682 — Project Showcase cards. */
export function ArchitecturalDraftingUsaShowcaseSection({
  section = architecturalDraftingUsaShowcaseSection,
  projects = architecturalDraftingUsaShowcaseProjects,
}: {
  section?: typeof architecturalDraftingUsaShowcaseSection & { titleMaxWidth?: number };
  projects?: typeof architecturalDraftingUsaShowcaseProjects;
}) {
  return (
    <section className="ads-usa-showcase bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2
              className="text-section w-full"
              style={
                section.titleMaxWidth != null
                  ? { maxWidth: section.titleMaxWidth }
                  : undefined
              }
            >
              <span className="font-medium text-[#111111]">{section.titleLead}</span>
              <span className="font-light text-accent">{section.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[583px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {projects.map((project) => (
            <article
              key={`${project.title}-${project.location}`}
              className="ads-usa-showcase__card flex flex-col items-start gap-3.5 overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-4 transition-shadow duration-200 hover:shadow-[0px_4px_10px_rgba(0,0,0,0.15)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] sm:h-[260px] lg:h-[300px]">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.location}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
              </div>
              <div className="ads-usa-showcase__card-meta flex w-full flex-col gap-1.5">
                <h3 className="m-0 text-[22px] font-normal leading-normal text-[#111111] sm:text-[24px]">
                  {project.title}
                </h3>
                <p className="m-0 text-[16px] font-normal leading-6 text-[#808080]">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
