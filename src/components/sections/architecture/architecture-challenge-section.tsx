import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { architectureChallengeSection } from "@/constants/architecture-services-redesign-content";
import { altFromImageSrc, shouldUnoptimizeImage } from "@/lib/utils";

type ChallengeParagraphSegment = {
  text: string;
  bold?: boolean;
};

export function ArchitectureChallengeSection({
  section = architectureChallengeSection,
}: {
  section?: typeof architectureChallengeSection;
}) {
  return (
    <section className="arch-svc-challenge bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="arch-svc-challenge__layout flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="arch-svc-challenge__image relative w-full shrink-0 overflow-hidden rounded-[10px] lg:w-[520px]">
            <Image
              src={section.image}
              alt={section.imageAlt ?? altFromImageSrc(section.image)}
              width={520}
              height={480}
              unoptimized={shouldUnoptimizeImage(section.image)}
              className="block h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>

          <div className="arch-svc-challenge__copy flex min-w-0 flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label={section.tag} />
              <h2 className="text-section w-full">
                {section.titleParts.map((part, index) => (
                  <span key={`${part.text}-${index}`} className={part.className}>
                    {part.text}
                  </span>
                ))}
              </h2>
            </div>

            <div className="flex w-full flex-col items-start gap-4">
              {section.paragraphs.map((paragraph: ChallengeParagraphSegment[], index: number) => (
                <p key={index} className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                  {paragraph.map((segment, segIndex) =>
                    segment.bold ? (
                      <span key={segIndex} className="font-medium text-[#111111]">
                        {segment.text}
                      </span>
                    ) : (
                      <span key={segIndex}>{segment.text}</span>
                    ),
                  )}
                </p>
              ))}
            </div>

            {section.callout ? (
              <div className="arch-svc-challenge__callout inline-flex w-full items-center gap-2.5 rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] px-3 py-3.5">
                <p className="m-0 text-[16px] font-normal capitalize leading-6 text-[#111111]">
                  {section.callout.text}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
