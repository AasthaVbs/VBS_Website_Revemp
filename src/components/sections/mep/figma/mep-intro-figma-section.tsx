// @ts-nocheck
import { PageContainer } from "@/components/layout/page-container";
import { mepIntroCopy, mepIntroPoints } from "@/constants/mep-engineers-content";

/**
 * Overview — Figma VBS-Current-Website node 5-12782 (image: 12:14785).
 */
export function MepIntroSection({
  copy = mepIntroCopy,
  points = mepIntroPoints,
}) {

  return (
    <section className="mep-figma-overview bg-white py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-start gap-[60px] lg:flex-row lg:items-start">
          {/* Figma 12:14785 — 570×464.169 crop frame */}
          <div className="mep-figma-overview__frame relative shrink-0 overflow-hidden rounded-[9.283px] bg-white">
            <div className="mep-figma-overview__stage absolute flex items-center justify-center">
              <div className="mep-figma-overview__flip flex-none">
                <div className="mep-figma-overview__asset relative">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <img
                      src={copy.mainImage}
                      alt="MEP BIM overview"
                      className="mep-figma-overview__photo"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 lg:max-w-none">
            <div className="flex flex-col items-start gap-1">
              <span className="text-tag inline-flex w-fit items-center justify-center self-start rounded-[10px] border border-[#2299D6] bg-[rgba(34,153,214,0.10)] px-3 py-1.5 capitalize text-[#2299D6]">
                {copy.tag}
              </span>
              <h2 className="w-full capitalize">
                <span className="text-section font-medium text-[#111111]">{copy.titleLead}</span>
                <span className="text-section text-accent font-light">{copy.titleAccent}</span>
              </h2>
            </div>

            <p className="w-full text-[16px] font-normal capitalize leading-6 text-[#808080]">
              {copy.description}
            </p>

            <ul className="flex flex-col gap-2.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="ms-1 list-disc text-[16px] font-normal capitalize leading-6 text-[#808080]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
