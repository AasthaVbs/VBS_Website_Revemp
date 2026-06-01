import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  whyWorkVbsPillars,
  whyWorkVbsSectionCopy,
} from "@/constants/careers-content";

/** Figma node 679:16489 — Why Work VBS */
export function CareersWhyWorkSection() {
  return (
    <section className="bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={whyWorkVbsSectionCopy.tag} />
            <h2 className="text-section max-w-[659px] capitalize">
              <span className="font-medium">{whyWorkVbsSectionCopy.titleLead}</span>
              <span className="text-accent font-light">{whyWorkVbsSectionCopy.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[536px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {whyWorkVbsSectionCopy.description}
          </p>
        </div>

        <div className="grid w-full gap-5 lg:grid-cols-3 lg:gap-5">
          {whyWorkVbsPillars.map((pillar) => (
            <article
              key={pillar.number}
              className="flex flex-col gap-5 bg-white px-2.5 py-0 lg:gap-5"
            >
              <div className="flex flex-col gap-2.5">
                <p className="text-[36px] font-normal leading-none">
                  <span style={{ color: pillar.numberColor }}>0</span>
                  <span className="text-[#111111]">{pillar.number.slice(1)}</span>
                </p>
                <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[16px] font-normal leading-6 text-[#808080]">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
