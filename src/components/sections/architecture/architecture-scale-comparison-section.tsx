import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { architectureScaleSection } from "@/constants/architecture-services-redesign-content";
import { cn } from "@/lib/utils";

/**
 * Way to Scale comparison — Figma 3627:58230.
 * Third header red by default. Hover lift CSS is kept in SCSS; to re-enable, add
 * `arch-svc-scale__col` and `arch-svc-scale__col--{0|1|2}` on header/body cells.
 */
export function ArchitectureScaleComparisonSection({
  section = architectureScaleSection,
}: {
  section?: typeof architectureScaleSection;
}) {
  const { columns, rows } = section;

  return (
    <section className="arch-svc-scale bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-start gap-8 sm:gap-10 lg:gap-10">
        <div className="arch-svc-scale__header flex w-full max-w-[1027px] flex-col items-start gap-2.5">
          <div className="arch-svc-scale__title-wrap flex flex-col items-start gap-2">
            <SectionTag label={section.tag} />
            <h2 className="text-section w-full">
              {section.titleParts.map((part, index) => (
                <span key={`${part.text}-${index}`} className={part.className}>
                  {part.text}
                </span>
              ))}
            </h2>
          </div>
          <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
            {section.description}
          </p>
        </div>

        <div className="arch-svc-scale__table-wrap w-full overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch]">
          <div className="arch-svc-scale__table min-w-[760px] rounded-[10px] border border-[#CBCCCD]">
            <div className="grid grid-cols-[minmax(200px,330px)_minmax(0,1fr)_minmax(0,1fr)]">
              {columns.map((col, colIndex) => (
                <div
                  key={col}
                  className={cn(
                    "arch-svc-scale__cell arch-svc-scale__cell--head flex items-center border-b border-[#808080]/40 p-4 lg:p-5",
                    colIndex === columns.length - 1 && "arch-svc-scale__cell--head-accent",
                    colIndex === 0 && "rounded-tl-[10px]",
                    colIndex === columns.length - 1 && "rounded-tr-[10px]",
                    colIndex < columns.length - 1 && "border-r border-[#808080]",
                  )}
                >
                  <span
                    className={cn(
                      "text-[16px] font-normal text-white lg:text-[20px]",
                      colIndex === columns.length - 1 && "font-medium",
                    )}
                  >
                    {col}
                  </span>
                </div>
              ))}

              {rows.map((row, rowIndex) => (
                <RowCells
                  key={row.values[0]}
                  row={row}
                  striped={rowIndex % 2 === 1}
                  isLast={rowIndex === rows.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {section.footnote ? (
          <div className="w-full rounded-[10px] border border-[#D70416] bg-[#FFF8F8] p-5">
            <p className="m-0 text-[16px] font-normal italic leading-6 text-[#111111] capitalize">
              {section.footnote}
            </p>
          </div>
        ) : null}
      </PageContainer>
    </section>
  );
}

function RowCells({
  row,
  striped,
  isLast,
}: {
  row: (typeof architectureScaleSection.rows)[number];
  striped: boolean;
  isLast: boolean;
}) {
  const rowBg = striped ? "bg-[#FAFAFA]" : "bg-white";
  const borderBottom = isLast ? "" : "border-b border-[#CBCCCD]";

  return (
    <>
      {row.values.map((value, index) => (
        <div
          key={`${row.values[0]}-${index}`}
          className={cn(
            "arch-svc-scale__cell flex items-start p-4 lg:p-5",
            rowBg,
            borderBottom,
            index === 0 && "border-r border-[#CBCCCD]",
            index === 1 && "border-x border-[#CBCCCD]",
            isLast && index === 0 && "rounded-bl-[10px]",
            isLast && index === row.values.length - 1 && "rounded-br-[10px]",
          )}
        >
          <span
            className={cn(
              "text-[14px] leading-6 lg:text-[16px]",
              index === 0 ? "font-normal text-[#111111]" : "font-normal text-[#808080]",
            )}
          >
            {value}
          </span>
        </div>
      ))}
    </>
  );
}
