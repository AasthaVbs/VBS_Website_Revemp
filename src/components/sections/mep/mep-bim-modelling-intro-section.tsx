import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { mepBimModellingIntro } from "@/constants/mep-bim-modelling-content";

/** Figma node 217:8162 — Overview */
export function MepBimModellingIntroSection() {
  const { tag, titleLead, titleAccent, paragraph1, paragraph1Bold, paragraph2, mainImage } =
    mepBimModellingIntro;

  return (
    <section className="mep-figma-overview mep-figma-overview--mep-bim-modeling bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="mep-figma-overview__layout flex flex-col items-start gap-[60px] lg:flex-row lg:items-start">
          <div className="mep-figma-overview__frame relative shrink-0 overflow-hidden rounded-[10px] bg-[#F4F4F4]">
            <Image
              src={mainImage}
              alt="MEP BIM modeling specialist reviewing a coordinated 3D model"
              width={650}
              height={530}
              className="mep-figma-overview__photo block h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 650px"
              priority
            />
          </div>

          <div className="mep-figma-overview__content flex min-w-0 flex-1 flex-col justify-center gap-5 lg:max-w-[690px]">
            <div className="flex flex-col items-start gap-3">
              <MepSectionTag label={tag} />
              <h2 className="mep-figma-overview__title w-full capitalize">
                <span className="text-section font-medium text-[#111111]">{titleLead}</span>
                <span className="text-section text-accent font-light">{titleAccent}</span>
              </h2>
            </div>

            <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
              {paragraph1}
              <span className="text-[#111111]">{paragraph1Bold}</span>
            </p>
            <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">{paragraph2}</p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
