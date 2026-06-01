import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  engagementModelsCompareRows,
  engagementModelsCompareSection,
} from "@/constants/engagement-models-page-content";
import { cn } from "@/lib/utils";

const COL_DIVIDER = "lg:border-r lg:border-[#CBCCCD]";
const COL_DIVIDER_HEADER = "lg:border-r lg:border-[#808080]";

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
          <p className="max-w-[584px] text-[15px] font-normal capitalize leading-6 text-[#808080] sm:text-[16px]">
            {description}
          </p>
        </div>

        {/* Mobile — feature cards */}
        <div className="flex w-full flex-col gap-4 lg:hidden">
          {engagementModelsCompareRows.map((row, index) => (
            <article
              key={row.feature}
              className="overflow-hidden rounded-[10px] border border-[#CBCCCD]"
            >
              <div className="bg-[#111111] px-4 py-3">
                <p className="text-[16px] font-normal text-white">{row.feature}</p>
              </div>
              <div className={cn("divide-y divide-[#CBCCCD]", index % 2 === 1 && "bg-[#FAFAFA]")}>
                <CompareMobileRow label={tableHeaders.projectBased} value={row.projectBased} />
                <CompareMobileRow
                  label={tableHeaders.dedicatedResources}
                  value={row.dedicatedResources}
                />
                <CompareMobileRow label={tableHeaders.gdc} value={row.gdc} />
              </div>
            </article>
          ))}
        </div>

        {/* Desktop — table */}
        <div className="hidden w-full max-w-[1440px] lg:block">
          <div className="overflow-hidden rounded-[10px] border border-[#CBCCCD]">
            <div className="grid grid-cols-[400px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <div className={cn("flex min-h-[64px] items-center bg-[#111111] p-5", COL_DIVIDER_HEADER)}>
                <span className="text-[20px] font-normal text-white xl:text-[24px]">
                  {tableHeaders.feature}
                </span>
              </div>
              <div className={cn("flex min-h-[64px] items-center bg-[#111111] p-5", COL_DIVIDER_HEADER)}>
                <span className="text-[20px] font-normal text-white xl:text-[24px]">
                  {tableHeaders.projectBased}
                </span>
              </div>
              <div className={cn("flex min-h-[64px] items-center bg-[#111111] p-5", COL_DIVIDER_HEADER)}>
                <span className="text-[20px] font-normal text-white xl:text-[24px]">
                  {tableHeaders.dedicatedResources}
                </span>
              </div>
              <div className="flex min-h-[64px] items-center bg-[#111111] p-5">
                <span className="text-[20px] font-normal text-white xl:text-[24px]">
                  {tableHeaders.gdc}
                </span>
              </div>

              {engagementModelsCompareRows.map((row, index) => (
                <CompareTableRow key={row.feature} row={row} striped={index % 2 === 1} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function CompareMobileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span className="text-[13px] font-medium text-[#111111]">{label}</span>
      <span className="text-[15px] font-normal leading-6 text-[#808080]">{value}</span>
    </div>
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
      <div className={cn("flex items-start p-5 lg:items-center", rowBg, COL_DIVIDER)}>
        <span className="text-[16px] font-normal text-[#111111]">{row.feature}</span>
      </div>
      <div className={cn("flex items-start p-5", rowBg, COL_DIVIDER)}>
        <span className="text-[16px] font-normal leading-6 text-[#808080]">{row.projectBased}</span>
      </div>
      <div className={cn("flex items-start p-5", rowBg, COL_DIVIDER)}>
        <span className="text-[16px] font-normal leading-6 text-[#808080]">
          {row.dedicatedResources}
        </span>
      </div>
      <div className={cn("flex items-start p-5", rowBg)}>
        <span className="text-[16px] font-normal leading-6 text-[#808080]">{row.gdc}</span>
      </div>
    </>
  );
}
