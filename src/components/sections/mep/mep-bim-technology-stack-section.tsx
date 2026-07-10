import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepBimTechnologyStackRows,
  mepBimTechnologyStackSection,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

const COL_DIVIDER_BODY = "lg:border-r lg:border-[#CBCCCD]";
const COL_DIVIDER_HEADER = "lg:border-r lg:border-[#808080]";

/** Figma node 221:13689 — Technology Stack table */
export function MepBimTechnologyStackSection() {
  const { tag, titleLead, titleAccent, titleEnd, description } = mepBimTechnologyStackSection;

  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex max-w-[1111px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading capitalize">
              <span className="font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
              <span className="font-medium">{titleEnd}</span>
            </h2>
          </div>
          <p className="max-w-[584px] text-[16px] font-normal leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="w-full max-w-[1440px] overflow-hidden rounded-[10px] border border-[#CBCCCD]">
          {/* Single grid so column dividers run top-to-bottom through header + every row */}
          <div className="grid grid-cols-1 lg:grid-cols-[400px_minmax(0,1fr)_minmax(0,1fr)]">
            <div
              className={cn(
                "flex min-h-[64px] items-center bg-[#111111] p-5",
                COL_DIVIDER_HEADER,
              )}
            >
              <span className="text-[24px] font-normal text-white">Project Stage</span>
            </div>
            <div
              className={cn(
                "flex min-h-[64px] items-center bg-[#111111] p-5",
                COL_DIVIDER_HEADER,
              )}
            >
              <span className="text-[24px] font-normal text-white">Software / Tool</span>
            </div>
            <div className="flex min-h-[64px] items-center bg-[#111111] p-5">
              <span className="text-[24px] font-normal text-white">Purpose</span>
            </div>

            {mepBimTechnologyStackRows.map((row, index) => (
              <TechnologyStackRow key={row.stage} row={row} striped={index % 2 === 1} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function TechnologyStackRow({
  row,
  striped,
}: {
  row: (typeof mepBimTechnologyStackRows)[number];
  striped: boolean;
}) {
  const rowBg = striped ? "bg-[#FAFAFA]" : "bg-white";

  return (
    <>
      <div
        className={cn(
          "flex items-start p-5 lg:items-center",
          rowBg,
          COL_DIVIDER_BODY,
          "border-t border-[#CBCCCD] lg:border-t-0",
        )}
      >
        <span className="text-[16px] font-normal text-[#111111]">{row.stage}</span>
      </div>
      <div
        className={cn(
          "flex items-start p-5 lg:items-center",
          rowBg,
          COL_DIVIDER_BODY,
          "border-t border-[#CBCCCD] lg:border-t-0",
        )}
      >
        <StackBulletList items={row.software} />
      </div>
      <div
        className={cn(
          "flex items-start p-5 lg:items-center",
          rowBg,
          "border-t border-[#CBCCCD] lg:border-t-0",
        )}
      >
        <StackBulletList items={row.purpose} />
      </div>
    </>
  );
}

/** Figma: 16px / 400 / #808080 / line-height 24 with disc bullets */
function StackBulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 text-[16px] font-normal leading-6 text-[#808080] marker:text-[#808080]">
      {items.map((line) => (
        <li key={line} className="pl-1">
          {line}
        </li>
      ))}
    </ul>
  );
}
