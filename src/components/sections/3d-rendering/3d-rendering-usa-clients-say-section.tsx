import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { threeDRenderingUsaClientsSay } from "@/constants/3d-rendering-services-usa-content";

/** Figma 4032:57063 / 4032:57110 — What Our Clients Say */
export function ThreeDRenderingUsaClientsSaySection({
  content = threeDRenderingUsaClientsSay,
}: {
  content?: typeof threeDRenderingUsaClientsSay;
}) {
  return (
    <section className="trs-usa-clients-say bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
          <div className="w-full shrink-0 lg:w-[610px]">
            <h2 className="trs-usa-clients-say__title text-section m-0 w-full capitalize">
              <span className="font-medium text-[#111111]">{content.titleLead}</span>
              <span className="font-light text-[#D70416]">{content.titleAccent}</span>
            </h2>
          </div>

          <div className="trs-usa-clients-say__card min-w-0 flex-1 overflow-hidden rounded-[18px] border border-[#CBCCCD] bg-white p-[30px]">
            <div className="trs-usa-clients-say__body flex w-full flex-col items-start gap-[30px]">
              <div className="flex items-center gap-[30px]">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={content.avatar}
                    alt={content.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="trs-usa-clients-say__person flex min-w-0 flex-col items-start gap-3">
                  <p className="m-0 text-[24px] font-normal leading-normal text-[#111111]">
                    {content.name}
                  </p>
                  <p className="m-0 text-[16px] font-normal leading-normal text-[#808080]">
                    {content.role}
                  </p>
                </div>
              </div>

              <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#808080]">
                {content.quote}
              </p>

              <div className="relative h-[46px] w-[146px] shrink-0">
                <Image
                  src={content.logo}
                  alt="Whitten Architects"
                  fill
                  className="object-contain object-left"
                  sizes="146px"
                />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
