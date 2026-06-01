import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  engagementModelFinderRows,
  engagementModelFinderSection,
} from "@/constants/engagement-models-page-content";
import { cn } from "@/lib/utils";

/** Figma node 960:34497 — Which Engagement Model Fits You? */
export function EngagementModelFinderSection() {
  const { tag, titleLead, titleAccent, description, tableHeaders } = engagementModelFinderSection;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex w-full max-w-[1440px] flex-col items-stretch gap-8 lg:flex-row lg:justify-between lg:gap-10">
          <div className="flex shrink-0 flex-col items-start gap-4 sm:gap-5 lg:max-w-[474px]">
            <div className="flex flex-col items-start gap-3">
              <MepSectionTag label={tag} />
              <h2 className="mep-section-heading capitalize">
                <span className="font-medium">{titleLead}</span>
                <span className="text-accent font-light">{titleAccent}</span>
              </h2>
            </div>
            <p className="max-w-[381px] text-[15px] font-normal capitalize leading-6 text-[#808080] sm:text-[16px]">
              {description}
            </p>
          </div>

          {/* Mobile — stacked cards */}
          <div className="flex w-full flex-col gap-3 lg:hidden">
            {engagementModelFinderRows.map((row, index) => (
              <article
                key={row.need}
                className="overflow-hidden rounded-[10px] border border-[#CBCCCD]"
              >
                <div className="bg-[#111111] px-4 py-3">
                  <p className="text-[12px] font-medium uppercase tracking-wide text-white/70">
                    {tableHeaders.need}
                  </p>
                  <p className="mt-1 text-[15px] font-normal text-white">{row.need}</p>
                </div>
                <div className={cn("bg-[#2299D6] px-4 py-3", index % 2 === 1 && "bg-[#1e8ac4]")}>
                  <p className="text-[12px] font-medium uppercase tracking-wide text-white/80">
                    {tableHeaders.recommended}
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-white">{row.recommended}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Desktop — table */}
          <div className="hidden w-full min-w-0 flex-1 lg:block lg:max-w-[780px]">
            <div className="overflow-hidden rounded-[10px] border border-[#CBCCCD]">
              <div className="grid grid-cols-[400px_minmax(0,1fr)]">
                <div className="flex min-h-[64px] items-center border-r border-[#CBCCCD] bg-[#111111] p-5">
                  <span className="text-[20px] font-normal text-white xl:text-[24px]">
                    {tableHeaders.need}
                  </span>
                </div>
                <div className="flex min-h-[64px] items-center bg-[#2299D6] p-5">
                  <span className="text-[20px] font-normal text-white xl:text-[24px]">
                    {tableHeaders.recommended}
                  </span>
                </div>

                {engagementModelFinderRows.map((row, index) => (
                  <FinderTableRow key={row.need} row={row} striped={index % 2 === 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function FinderTableRow({
  row,
  striped,
}: {
  row: (typeof engagementModelFinderRows)[number];
  striped: boolean;
}) {
  const rowBg = striped ? "bg-[#FAFAFA]" : "bg-white";

  return (
    <>
      <div className={cn("flex items-start border-r border-[#CBCCCD] p-5", rowBg)}>
        <span className="text-[16px] font-normal text-[#111111]">{row.need}</span>
      </div>
      <div className={cn("flex items-start p-5", rowBg)}>
        <span className="text-[16px] font-medium leading-6 text-[#111111]">{row.recommended}</span>
      </div>
    </>
  );
}
