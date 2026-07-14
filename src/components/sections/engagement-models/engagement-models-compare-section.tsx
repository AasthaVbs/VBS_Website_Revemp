import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  engagementModelsCompareRows,
  engagementModelsCompareSection,
} from "@/constants/engagement-models-page-content";
import { cn } from "@/lib/utils";

const COL_DIVIDER = "border-r border-[#CBCCCD]";
const COL_DIVIDER_HEADER = "border-r border-[#808080]";

/** Figma node 960:34609 — Compare Engagement Models */
export function EngagementModelsCompareSection() {
  const { tag, titleLead, titleAccent, description, tableHeaders } = engagementModelsCompareSection;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-8 sm:gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-4 sm:gap-5">
          <div className="flex max-w-[1111px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[584px] text-[15px] font-normal leading-6 text-[#808080] sm:text-[16px]">
            {description}
          </p>
        </div>

        {/* Desktop table format on all breakpoints — horizontal scroll on mobile */}
        <div className="w-full max-w-[1440px]">
          <div className="overflow-x-auto overscroll-x-contain rounded-[10px] [-webkit-overflow-scrolling:touch]">
            <div className="min-w-[720px] overflow-hidden rounded-[10px] border border-[#CBCCCD] lg:min-w-0">
              <div className="grid grid-cols-[minmax(180px,400px)_repeat(3,minmax(160px,1fr))]">
                <div
                  className={cn(
                    "flex min-h-[56px] items-center bg-[#111111] p-4 lg:min-h-[64px] lg:p-5",
                    COL_DIVIDER_HEADER,
                  )}
                >
                  <span className="text-[15px] font-normal text-white lg:text-[20px] xl:text-[24px]">
                    {tableHeaders.feature}
                  </span>
                </div>
                <div
                  className={cn(
                    "flex min-h-[56px] items-center bg-[#111111] p-4 lg:min-h-[64px] lg:p-5",
                    COL_DIVIDER_HEADER,
                  )}
                >
                  <span className="text-[15px] font-normal text-white lg:text-[20px] xl:text-[24px]">
                    {tableHeaders.projectBased}
                  </span>
                </div>
                <div
                  className={cn(
                    "flex min-h-[56px] items-center bg-[#111111] p-4 lg:min-h-[64px] lg:p-5",
                    COL_DIVIDER_HEADER,
                  )}
                >
                  <span className="text-[15px] font-normal text-white lg:text-[20px] xl:text-[24px]">
                    {tableHeaders.dedicatedResources}
                  </span>
                </div>
                <div className="flex min-h-[56px] items-center bg-[#111111] p-4 lg:min-h-[64px] lg:p-5">
                  <span className="text-[15px] font-normal text-white lg:text-[20px] xl:text-[24px]">
                    {tableHeaders.gdc}
                  </span>
                </div>

                {engagementModelsCompareRows.map((row, index) => (
                  <CompareTableRow key={row.feature} row={row} striped={index % 2 === 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function CompareTableRow({
  row,
  striped,
}: {
  row: (typeof engagementModelsCompareRows)[number];
  striped: boolean;
}) {
  const rowBg = striped ? "bg-[#FAFAFA]" : "bg-white";

  return (
    <>
      <div className={cn("flex items-start p-4 lg:items-center lg:p-5", rowBg, COL_DIVIDER)}>
        <span className="text-[14px] font-normal text-[#111111] lg:text-[16px]">{row.feature}</span>
      </div>
      <div className={cn("flex items-start p-4 lg:p-5", rowBg, COL_DIVIDER)}>
        <span className="text-[13px] font-normal leading-6 text-[#808080] lg:text-[16px]">
          {row.projectBased}
        </span>
      </div>
      <div className={cn("flex items-start p-4 lg:p-5", rowBg, COL_DIVIDER)}>
        <span className="text-[13px] font-normal leading-6 text-[#808080] lg:text-[16px]">
          {row.dedicatedResources}
        </span>
      </div>
      <div className={cn("flex items-start p-4 lg:p-5", rowBg)}>
        <span className="text-[13px] font-normal leading-6 text-[#808080] lg:text-[16px]">
          {row.gdc}
        </span>
      </div>
    </>
  );
}
