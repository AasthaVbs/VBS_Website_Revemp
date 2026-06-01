import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { coreValues, coreValuesSectionCopy } from "@/constants/about-content";
import { cn } from "@/lib/utils";

function CoreValueLetterBox({ letter }: { letter: string }) {
  return (
    <div
      className="relative flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-[10px] bg-[#D70416] ring-[6px] ring-[rgba(215,4,22,0.2)]"
      aria-hidden
    >
      <span className="text-[42px] font-medium leading-none text-white">{letter}</span>
    </div>
  );
}

function CoreValueConnector() {
  return (
    <div
      className="h-[160px] w-px shrink-0 border-l border-dashed border-[#B1B1B1]"
      aria-hidden
    />
  );
}

function CoreValueLabel({
  label,
  maxWidth,
}: {
  label: string;
  maxWidth: number;
}) {
  return (
    <p
      className="flex min-h-[50px] shrink-0 items-center justify-center text-center text-[16px] font-normal leading-snug text-[#111111]"
      style={{ width: maxWidth }}
    >
      {label}
    </p>
  );
}

/** Figma node 332:29736 — CHAMPIONS zigzag core values */
export function CoreValuesSection() {
  const { tag, titleLead, titleAccent, description } = coreValuesSectionCopy;

  return (
    <section className="overflow-hidden bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center gap-5 text-center">
          <div className="flex max-w-[890px] flex-col items-center gap-3">
            <SectionTag label={tag} />
            <h2 className="text-section max-w-[688px] capitalize">
              {titleLead}
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[620px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="-mx-6 w-[calc(100%+3rem)] overflow-x-auto pb-2 md:mx-0 md:w-full">
          <div className="mx-auto flex w-max min-w-full items-center justify-start gap-10 px-6 md:justify-center md:gap-[60px] md:px-4 lg:px-0">
            {coreValues.map((value) => (
              <div
                key={value.letter}
                className={cn(
                  "flex h-[520px] w-20 shrink-0 flex-col items-center gap-5",
                  value.labelFirst ? "justify-start" : "justify-end",
                )}
              >
                {value.labelFirst ? (
                  <>
                    <CoreValueLabel label={value.label} maxWidth={value.labelWidth} />
                    <CoreValueConnector />
                    <CoreValueLetterBox letter={value.letter} />
                  </>
                ) : (
                  <>
                    <CoreValueLetterBox letter={value.letter} />
                    <CoreValueConnector />
                    <CoreValueLabel label={value.label} maxWidth={value.labelWidth} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
