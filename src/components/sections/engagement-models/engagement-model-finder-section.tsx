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
            <p className="max-w-[381px] text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">
              {description}
            </p>
          </div>

          {/* Desktop table format on all breakpoints — horizontal scroll on mobile */}
          <div className="w-full min-w-0 flex-1 lg:max-w-[780px]">
            <div className="overflow-x-auto overscroll-x-contain rounded-[10px] [-webkit-overflow-scrolling:touch]">
              <div className="min-w-[520px] overflow-hidden rounded-[10px] border border-[#CBCCCD] lg:min-w-0">
                <div className="grid grid-cols-[minmax(220px,400px)_minmax(200px,1fr)]">
                  <div className="flex min-h-[56px] items-center border-r border-[#CBCCCD] bg-[#111111] p-4 lg:min-h-[64px] lg:p-5">
                    <span className="text-[16px] font-normal text-white lg:text-[20px] xl:text-[24px]">
                      {tableHeaders.need}
                    </span>
                  </div>
                  <div className="flex min-h-[56px] items-center bg-[#2299D6] p-4 lg:min-h-[64px] lg:p-5">
                    <span className="text-[16px] font-normal text-white lg:text-[20px] xl:text-[24px]">
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
      <div className={cn("flex items-start border-r border-[#CBCCCD] p-4 lg:p-5", rowBg)}>
        <span className="text-[14px] font-normal text-[#111111] lg:text-[16px]">{row.need}</span>
      </div>
      <div className={cn("flex items-start p-4 lg:p-5", rowBg)}>
        <span className="text-[14px] font-medium leading-6 text-[#111111] lg:text-[16px]">
          {row.recommended}
        </span>
      </div>
    </>
  );
}
