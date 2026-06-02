import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  dataCenterKeyChallengesRows,
  dataCenterKeyChallengesSection,
} from "@/constants/mep-data-center-whitepaper-content";
import { cn } from "@/lib/utils";

/** Figma node 994:24634 — Key challenges comparison table */
export function MepDataCenterKeyChallengesSection() {
  const { tag, titleLead, titleAccent, description } = dataCenterKeyChallengesSection;

  return (
    <section className="overflow-hidden bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col gap-5">
          <div className="flex max-w-[1111px] flex-col gap-3">
            <SectionTag label={tag} />
            <h2 className="text-section max-w-[671px] capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="font-light text-[#D70416]">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[744px] text-[16px] capitalize leading-6 text-[#808080]">{description}</p>
        </div>

        <div className="w-full overflow-hidden rounded-[10px] border border-[#CBCCCD]">
          <div className="hidden lg:grid lg:grid-cols-[296px_522px_minmax(0,1fr)]">
            <div className="flex min-h-[64px] items-center bg-[#111111] p-5">
              <span className="text-[18px] font-normal text-white sm:text-[24px]">Challenges</span>
            </div>
            <div className="flex min-h-[64px] items-center border-x border-[#808080] bg-[#111111] p-5">
              <span className="text-[18px] font-normal text-white sm:text-[24px]">Challenge</span>
            </div>
            <div className="flex min-h-[64px] items-center bg-[#111111] p-5">
              <span className="text-[18px] font-normal text-white sm:text-[24px]">Our Approach</span>
            </div>
          </div>

          {dataCenterKeyChallengesRows.map((row) => (
            <div
              key={row.label}
              className={cn(
                "border-t border-[#CBCCCD] lg:grid lg:grid-cols-[296px_522px_minmax(0,1fr)] lg:items-stretch",
                "shaded" in row && row.shaded ? "bg-[#FAFAFA]" : "bg-white",
              )}
            >
              <div className="border-b border-[#CBCCCD] p-5 lg:border-b-0">
                <p className="text-[16px] font-normal text-[#111111] lg:hidden">
                  <span className="font-medium text-[#808080]">Challenges: </span>
                  {row.label}
                </p>
                <p className="hidden text-[16px] font-normal text-[#111111] lg:block">{row.label}</p>
              </div>
              <div className="border-b border-[#CBCCCD] p-5 lg:border-b-0 lg:border-x lg:border-[#CBCCCD]">
                <p className="mb-2 text-[16px] font-medium text-[#808080] lg:hidden">Challenge</p>
                <p className="text-[16px] leading-6 text-[#808080]">{row.challenge}</p>
              </div>
              <div className="p-5 lg:min-h-[112px]">
                <p className="mb-2 text-[16px] font-medium text-[#808080] lg:hidden">Our Approach</p>
                <p className="text-[16px] leading-6 text-[#808080]">{row.approach}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
