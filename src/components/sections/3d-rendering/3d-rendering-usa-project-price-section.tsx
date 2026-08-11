import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  threeDRenderingUsaProjectPriceItems,
  threeDRenderingUsaProjectPriceSection,
} from "@/constants/3d-rendering-services-usa-content";

/** Figma 4016:55829 — What's Included in Your Project Price */
export function ThreeDRenderingUsaProjectPriceSection({
  section = threeDRenderingUsaProjectPriceSection,
  items = threeDRenderingUsaProjectPriceItems,
}: {
  section?: typeof threeDRenderingUsaProjectPriceSection;
  items?: typeof threeDRenderingUsaProjectPriceItems;
}) {
  return (
    <section className="trs-usa-project-price bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-10 lg:gap-[60px]">
        <div className="flex flex-col items-start gap-3">
          <MepSectionTag label={section.tag} />
          <h2 className="text-section w-full">
            <span className="font-medium text-[#111111]">{section.titleLead}</span>
            <span className="font-light text-accent">{section.titleAccent}</span>
          </h2>
        </div>

        <div className="trs-usa-project-price__grid flex w-full flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-6 lg:flex lg:flex-row lg:items-start lg:gap-5">
          {items.map((item, index) => (
            <div key={item.title} className="contents">
              {index > 0 ? (
                <div
                  className="trs-usa-project-price__divider hidden w-px shrink-0 self-stretch lg:block"
                  aria-hidden
                />
              ) : null}
              <div className="flex flex-1 flex-col items-center gap-2.5 text-center">
                <div className="flex size-[60px] items-center justify-center overflow-hidden rounded-[10px] p-[7px]">
                  <Image
                    src={item.icon}
                    alt=""
                    width={46}
                    height={46}
                    className="size-[46px] object-contain"
                  />
                </div>
                <p className="m-0 max-w-[220px] text-[18px] font-normal leading-[26px] text-[#111111] sm:text-[20px]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
