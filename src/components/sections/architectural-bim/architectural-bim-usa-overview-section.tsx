import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  architecturalBimUsaOverviewBullets,
  architecturalBimUsaOverviewSection,
} from "@/constants/architectural-bim-services-usa-content";

/** Overview: intro + 2-col (image / body copy + white checklist card). */
export function ArchitecturalBimUsaOverviewSection({
  section = architecturalBimUsaOverviewSection,
  bullets = architecturalBimUsaOverviewBullets,
}: {
  section?: typeof architecturalBimUsaOverviewSection;
  bullets?: readonly string[];
}) {
  return (
    <section className="abs-usa-overview bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div className="abs-usa-overview__intro flex w-full max-w-[1025px] flex-col items-start gap-2.5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2 className="text-section w-full max-w-[1025px]">
              <span className="font-medium text-[#111111]">{section.titleLead}</span>
              <span className="font-light text-accent">{section.titleAccent}</span>
              <span className="font-medium text-[#111111]">{section.titleTrail}</span>
            </h2>
          </div>
          <p className="abs-usa-overview__desc w-full max-w-[680px] text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:gap-[60px]">
          <div className="abs-usa-overview__media relative aspect-[553/510] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4] lg:w-[553px]">
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              unoptimized={typeof section.image === "string"}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 553px"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-start gap-5">
            <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">{section.bodyText}</p>

            <div className="abs-usa-overview__card w-full rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-[0_4px_15px_rgba(0,0,0,0.08)] sm:p-6">
              <h3 className="mb-4 text-[18px] font-medium leading-[1.3] text-[#111111] sm:text-[20px]">
                {section.cardTitle}
              </h3>
              <ul className="m-0 flex flex-col gap-4 p-0">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex w-full items-start gap-2.5">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[#D70416] text-white"
                      aria-hidden
                    >
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path
                          d="M1 3.5L3.5 6L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="flex-1 text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
