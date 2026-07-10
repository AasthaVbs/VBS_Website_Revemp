import { ChevronRight } from "lucide-react";
import Image from "next/image";
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
    <section id="founder" className="bg-white py-12 lg:py-[100px]">
      <PageContainer>
        <div className="vbs-founder__layout">
          <div className="vbs-founder__copy">
            <div className="vbs-founder__title-block">
              <SectionTag label={tag} />
              <h2 className="text-section vbs-founder__title capitalize">
                {titleLead}
                <span className="text-accent font-light">{titleAccent}</span>
              </h2>
            </div>

            <p className="vbs-founder__bio">{founderBio}</p>

            <div className="vbs-founder__highlights">
              <ul className="flex flex-col gap-3.5">
                {leftColumn.map((point) => (
                  <li key={point} className="vbs-founder__highlight">
                    <span aria-hidden>✅</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3.5">
                {rightColumn.map((point) => (
                  <li key={point} className="vbs-founder__highlight">
                    <span aria-hidden>✅</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "vbs-founder__linkedin-cta primary-cta no-underline relative inline-flex h-[52px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] border-[1.5px] border-[#D70416] bg-white/10 px-5 py-2 text-[16px] font-medium capitalize leading-none text-[#D70416] backdrop-blur-[50px]",
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

          <div className="vbs-founder__media">
            <Image
              src={founderImages.main}
              alt="Ar. Ankit Kansara, Founder and CEO"
              width={717}
              height={606}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
