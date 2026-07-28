import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepBimModellingIntro,
  type MepOverviewIntroContent,
} from "@/constants/mep-bim-modelling-content";
import { altFromImageSrc } from "@/lib/utils";

/** Figma node 217:8162 — Overview */
export function MepBimModellingIntroSection({
  intro = mepBimModellingIntro,
  sectionClassName = "mep-figma-overview--mep-bim-modeling",
}: {
  intro?: MepOverviewIntroContent;
  sectionClassName?: string;
} = {}) {
  const {
    tag,
    titleLead,
    titleAccent,
    paragraph1,
    paragraph1Bold,
    paragraph1Tail,
    paragraph2,
    paragraph2Lead,
    paragraph2Bold,
    paragraph2Tail,
    paragraph3Lead,
    paragraph3Bold,
    paragraph3Tail,
    mainImage,
    imageAlt,
  } = intro;

  return (
    <section
      className={`mep-figma-overview ${sectionClassName} bg-white py-12 sm:py-16 lg:py-[100px]`}
    >
      <PageContainer>
        <div className="mep-figma-overview__layout flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:gap-10">
          <div className="mep-figma-overview__frame relative shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4] shadow-[0_0_16.8px_rgba(0,0,0,0.15)]">
            <Image
              src={mainImage}
              alt={imageAlt ?? altFromImageSrc(mainImage)}
              width={650}
              height={530}
              className="mep-figma-overview__photo block h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 650px"
              priority
            />
          </div>

          <div className="mep-figma-overview__content flex min-w-0 flex-1 flex-col justify-center gap-5 lg:max-w-[771px]">
            <div className="flex flex-col items-start gap-3">
              <MepSectionTag label={tag} />
              <h2 className="mep-figma-overview__title w-full max-w-[771px]">
                <span className="text-section font-medium text-[#111111]">{titleLead}</span>
                <span className="text-section text-accent font-light">{titleAccent}</span>
              </h2>
            </div>

            <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
              {paragraph1}
              {paragraph1Bold ? (
                <span className="font-medium text-[#111111]">{paragraph1Bold}</span>
              ) : null}
              {paragraph1Tail}
            </p>
            {paragraph2 ? (
              <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">{paragraph2}</p>
            ) : null}
            {paragraph2Lead ? (
              <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                {paragraph2Lead}
                {paragraph2Bold ? (
                  <span className="font-medium text-[#111111]">{paragraph2Bold}</span>
                ) : null}
                {paragraph2Tail}
              </p>
            ) : null}
            {paragraph3Lead ? (
              <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                {paragraph3Lead}
                {paragraph3Bold ? (
                  <span className="font-medium text-[#111111]">{paragraph3Bold}</span>
                ) : null}
                {paragraph3Tail}
              </p>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
