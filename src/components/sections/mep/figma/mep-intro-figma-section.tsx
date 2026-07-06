// @ts-nocheck
import Image, { type StaticImageData } from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepIntroCopy,
} from "@/constants/mep-engineers-content";

/**
 * Overview — Figma VBS-Website node 265-67101.
 */
export function MepIntroSection({
  copy = mepIntroCopy,
  features,
  points,
}) {
  const showFeatures = features?.length > 0;

  return (
    <section className="mep-figma-overview bg-white py-[100px]">
      <PageContainer>
        <div className="mep-figma-overview__layout flex flex-col items-start gap-[60px] lg:flex-row lg:items-start">
          <div className="mep-figma-overview__frame relative shrink-0 overflow-hidden rounded-[10px] bg-white">
            <Image
              src={copy.mainImage}
              alt="MEP BIM overview"
              width={614}
              height={502}
              className="mep-figma-overview__photo block h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 614px"
            />
          </div>

          <div className="mep-figma-overview__content flex min-w-0 flex-1 flex-col justify-center gap-5 lg:max-w-[766px]">
            <div className="flex flex-col items-start gap-3">
              <MepSectionTag label={copy.tag} />
              <h2 className="mep-figma-overview__title w-full capitalize">
                <span className="text-section font-medium text-[#111111]">{copy.titleLead}</span>
                <span className="text-section text-accent font-light">{copy.titleAccent}</span>
              </h2>
            </div>

            <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
              {copy.description}
            </p>

            {showFeatures ? (
              <div className="mep-figma-overview__features flex w-full max-w-[622px] flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {features.slice(0, 2).map((feature) => (
                    <OverviewFeatureChip key={feature.label} {...feature} />
                  ))}
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {features.slice(2).map((feature) => (
                    <OverviewFeatureChip key={feature.label} {...feature} />
                  ))}
                </div>
              </div>
            ) : points?.length ? (
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
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function OverviewFeatureChip({ label, icon }: { label: string; icon: string | StaticImageData }) {
  return (
    <div className="mep-figma-overview__chip inline-flex items-center gap-2.5 rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] px-3 py-3.5">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[6.67px]">
        <Image src={icon} alt="" width={40} height={40} className="h-10 w-10 object-contain" />
      </span>
      <span className="text-[16px] font-normal capitalize leading-6 text-[#111111]">{label}</span>
    </div>
  );
}
