import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { cn } from "@/lib/utils";
import {
  founderBio,
  founderHighlights,
  founderImages,
  founderSectionCopy,
} from "@/constants/about-content";

/** Figma node 330:29271 — Meet the Founder & CEO */
export function FounderSection() {
  const midpoint = Math.ceil(founderHighlights.length / 2);
  const leftColumn = founderHighlights.slice(0, midpoint);
  const rightColumn = founderHighlights.slice(midpoint);
  const { tag, titleLead, titleAccent, linkedinLabel, linkedinHref } = founderSectionCopy;

  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-10">
          <div className="flex w-full min-w-0 max-w-[680px] flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label={tag} />
              <h2 className="text-section max-w-[585px] capitalize">
                {titleLead}
                <span className="text-accent font-light">{titleAccent}</span>
              </h2>
            </div>

            <p className="max-w-[646px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
              {founderBio}
            </p>

            <div className="grid w-full gap-x-5 gap-y-3.5 sm:grid-cols-2">
              <ul className="flex flex-col gap-3.5">
                {leftColumn.map((point) => (
                  <li key={point} className="inline-flex items-start gap-2.5">
                    <span className="shrink-0 text-[16px] leading-6 text-[#808080]">✅</span>
                    <span className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3.5">
                {rightColumn.map((point) => (
                  <li key={point} className="inline-flex items-start gap-2.5">
                    <span className="shrink-0 text-[16px] leading-6 text-[#808080]">✅</span>
                    <span className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "primary-cta relative inline-flex h-[52px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] bg-white/10 px-5 py-0 text-[16px] font-medium capitalize leading-none text-[#D70416] backdrop-blur-[100px]",
              )}
            >
              <span className="primary-cta-blobs" aria-hidden>
                <span className="primary-cta-blob primary-cta-blob--yellow" />
                <span className="primary-cta-blob primary-cta-blob--blue" />
                <span className="primary-cta-blob primary-cta-blob--green" />
                <span className="primary-cta-blob primary-cta-blob--red" />
              </span>
              <span className="primary-cta-label relative z-10 inline-flex items-center gap-1.5">
                {linkedinLabel}
                <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
              </span>
            </Link>
          </div>

          <div className="relative mx-auto aspect-[717/534] w-full max-w-[717px] shrink-0 lg:mx-0">
            <div className="absolute left-[21.34%] top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
              <div className="absolute left-[-0.18%] top-[-3.18%] h-[106.37%] w-[100.71%]">
                <Image
                  src={founderImages.main}
                  alt="Ar. Ankit Kansara, Founder and CEO"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 564px"
                />
              </div>
            </div>

            <div className="absolute left-0 top-[19.48%] z-10 h-[61.05%] w-[39.89%] overflow-hidden rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
              <div className="absolute inset-0 overflow-hidden rounded-[10px]">
                <div className="absolute left-[-6.64%] top-0 h-full w-[113.99%]">
                  <Image
                    src={founderImages.overlayBg}
                    alt=""
                    fill
                    aria-hidden
                    className="object-cover object-center opacity-[0.53]"
                  />
                </div>
                <div className="absolute inset-0 bg-black/80" aria-hidden />
                <div className="absolute left-[17.83%] top-[9.2%] h-[80.67%] w-[63.99%]">
                  <Image
                    src={founderImages.book}
                    alt="Outsource or Out book cover"
                    fill
                    className="object-contain object-center"
                    sizes="183px"
                  />
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-[10px] border-[10px] border-white"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
