import Image from "next/image";
import { shouldUnoptimizeImage } from "@/lib/utils";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  architecturalBimUsaOverviewBullets,
  architecturalBimUsaOverviewSection,
} from "@/constants/architectural-bim-services-usa-content";

const CHECK_ICON = "/image/abs-usa-overview-check.svg";

/** Overview: intro + 2-col (image / body copy + white checklist card). Figma 3935:72571 */
export function ArchitecturalBimUsaOverviewSection({
  section = architecturalBimUsaOverviewSection,
  bullets = architecturalBimUsaOverviewBullets,
}: {
  section?: typeof architecturalBimUsaOverviewSection;
  bullets?: readonly string[];
}) {
  return (
    <section className="abs-usa-overview bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center justify-center gap-10 lg:gap-[60px]">
        <div className="abs-usa-overview__intro flex w-full flex-col items-start gap-5">
          <div className="flex w-full flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2 className="text-section w-full max-w-[1025px]">
              <span className="font-medium text-[#111111]">{section.titleLead}</span>
              <span className="font-light text-accent">{section.titleAccent}</span>
              <span className="font-medium text-[#111111]">{section.titleTrail}</span>
            </h2>
          </div>
          <p className="abs-usa-overview__desc w-full max-w-[771px] text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="abs-usa-overview__details flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="abs-usa-overview__media relative order-2 aspect-[553/472] w-full shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4] lg:order-none lg:h-[472px] lg:w-[553px] lg:aspect-auto">
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              unoptimized={shouldUnoptimizeImage(section.image)}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 553px"
            />
          </div>

          <div className="abs-usa-overview__copy order-1 flex min-w-0 flex-1 flex-col items-start justify-between gap-6 lg:order-none lg:gap-0">
            <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">{section.bodyText}</p>

            <div className="abs-usa-overview__card flex w-full flex-col items-start gap-6 rounded-[10px] bg-white p-5 shadow-[0_0_20px_rgba(0,0,0,0.20)]">
              <h3 className="w-full text-[24px] font-normal leading-normal text-[#111111]">{section.cardTitle}</h3>
              <ul className="m-0 flex w-full flex-col items-start gap-4 p-0">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex w-full items-start gap-2.5">
                    <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center" aria-hidden>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={CHECK_ICON} alt="" width={16} height={16} className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-[16px] font-normal leading-6 text-[#808080]">{bullet}</span>
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
