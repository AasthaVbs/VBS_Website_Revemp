import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  coreValuesChartDesktop,
  coreValuesChartMobile,
  coreValuesSectionCopy,
} from "@/constants/about-content";

/** Figma — CHAMPIONS core values chart image */
export function CoreValuesSection() {
  const { tag, titleLead, titleAccent, description } = coreValuesSectionCopy;

  return (
    <section className="vbs-core-values overflow-hidden bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="vbs-core-values__inner flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="vbs-core-values__header flex w-full flex-col items-center gap-5 text-center">
          <div className="vbs-core-values__title-wrap flex flex-col items-center gap-3">
            <SectionTag label={tag} className="self-center" />
            <h2 className="text-section vbs-core-values__title capitalize">
              {titleLead}
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-core-values__desc max-w-[620px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <picture className="vbs-core-values__art block w-full max-w-[1060px]">
          <source media="(max-width: 767px)" srcSet={coreValuesChartMobile} />
          <Image
            src={coreValuesChartDesktop}
            alt="CHAMPIONS core values: Client First Thinking through Scalable Thinking"
            width={1060}
            height={520}
            className="vbs-core-values__art-img h-auto w-full"
            loading="lazy"
          />
        </picture>
      </PageContainer>
    </section>
  );
}
