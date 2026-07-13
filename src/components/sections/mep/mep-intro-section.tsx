import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { mepIntroPoints } from "@/constants/mep-engineers-content";
import { altFromImageSrc } from "@/lib/utils";

const MEP_INTRO_MAIN = "/images/mep/about-main.png";
const MEP_INTRO_OVERLAY = "/images/mep/about-overlay.png";

/** Figma node 265:67101 — image 717×534 + text column 690px, gap 40px, padding 100px 240px */
export function MepIntroSection() {
  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-10">
          <div className="relative mx-auto aspect-[717/534] w-full max-w-[717px] shrink-0 lg:mx-0">
            <div className="absolute left-0 top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
              <div className="absolute left-0 top-[-33.71%] h-[176.59%] w-[111.52%]">
                <div className="relative h-full w-full">
                  <Image
                    src={MEP_INTRO_MAIN}
                    alt=""
                    fill
                    aria-hidden
                    className="object-contain object-center"
                    sizes="40vw"
                  />
                </div>
              </div>
              <div className="absolute left-[-45.39%] top-0 h-full w-[168.79%]">
                <div className="relative h-full w-full">
                  <Image
                    src={MEP_INTRO_MAIN}
                    alt={altFromImageSrc(MEP_INTRO_MAIN)}
                    fill
                    className="object-contain object-center"
                    sizes="40vw"
                  />
                </div>
              </div>
            </div>

            <div className="absolute left-[60.11%] top-[19.48%] z-10 h-[61.05%] w-[39.89%] overflow-hidden rounded-[10px] shadow-[0_4px_14px_rgba(0,0,0,0.14)]">
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-[10px] border-[10px] border-white"
                aria-hidden
              />
              <div className="absolute left-[-11.89%] top-[-4.6%] h-[108.59%] w-[123.78%]">
                <div className="relative h-full w-full">
                  <Image
                    src={MEP_INTRO_OVERLAY}
                    alt={altFromImageSrc(MEP_INTRO_OVERLAY)}
                    fill
                    className="object-contain object-center"
                    sizes="20vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-1 flex-col justify-center gap-5 lg:max-w-[690px]">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label="Who We Work With" />
              <h2 className="text-section max-w-[710px]">
                Construction-Ready MEP BIM Services for{" "}
                <span className="text-accent">Seamless Project Execution</span>
              </h2>
            </div>

            <p className="text-body max-w-[710px] normal-case">
              We are MEP BIM service providers in the USA supporting AEC firms and contractors across
              the project lifecycle. We handle everything from pre-bid estimation to clash-free
              coordination and drawings to support efficient project execution. Our specialists
              create code-compliant models in Revit and Navisworks for as-built deliverables with
              accuracy.
            </p>

            <div className="flex flex-col gap-4">
              {mepIntroPoints.map((point) => (
                <div key={point} className="inline-flex items-center gap-2.5">
                  <span className="text-body shrink-0">✅</span>
                  <span className="text-body normal-case">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
