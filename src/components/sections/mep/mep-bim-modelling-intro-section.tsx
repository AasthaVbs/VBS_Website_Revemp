import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { mepBimModellingIntro } from "@/constants/mep-bim-modelling-content";

/** Figma node 217:8162 — dual image + copy (same layout as MEP intro) */
export function MepBimModellingIntroSection() {
  const {
    tag,
    titleLead,
    titleAccent,
    paragraph1,
    paragraph1Bold,
    paragraph2,
    mainImage,
    overlayImage,
  } = mepBimModellingIntro;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-10">
          <div className="relative mx-auto aspect-[717/534] w-full max-w-[717px] shrink-0 lg:mx-0">
            <div className="absolute left-0 top-0 h-full w-[78.66%] overflow-hidden rounded-[10px]">
              <div className="absolute left-0 top-[-33.71%] h-[176.59%] w-[111.52%]">
                <div className="relative h-full w-full">
                  <Image
                    src={mainImage}
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
                    src={mainImage}
                    alt="MEP BIM modeling project"
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
                    src={overlayImage}
                    alt="MEP BIM systems visualization"
                    fill
                    className="object-contain object-center"
                    sizes="20vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-1 flex-col justify-center gap-5 lg:max-w-[710px]">
            <div className="flex flex-col items-start gap-3">
              <SectionTag label={tag} />
              <h2 className="text-section max-w-[710px] capitalize">
                {titleLead}
                <span className="text-accent font-light">{titleAccent}</span>
              </h2>
            </div>

            <p className="text-body max-w-[710px] normal-case">
              {paragraph1}
              <span className="font-medium text-[#111111]">{paragraph1Bold}</span>
            </p>
            <p className="text-body max-w-[710px] normal-case">{paragraph2}</p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
