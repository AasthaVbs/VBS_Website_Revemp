import { PageContainer } from "@/components/layout/page-container";
import { mepBimModellingTrustedBy } from "@/constants/mep-bim-modelling-content";

/** Figma node 265:49905 — Trusted By strip (5 equal columns) */
export function MepTrustedByStripSection() {
  const { titleAccent, titleLead, items } = mepBimModellingTrustedBy;

  return (
    <section className="bg-white py-8 sm:py-[50px]">
      <PageContainer>
        <div className="flex flex-col items-stretch gap-6 sm:gap-5 lg:flex-row lg:items-center">
          <div className="flex min-w-0 flex-col items-start justify-center lg:flex-1">
            <p className="text-[20px] capitalize leading-tight sm:text-[24px]">
              <span className="font-light text-[#D70416]">{titleAccent}</span>
              <span className="font-medium text-[#111111]">{titleLead}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:flex lg:flex-1 lg:gap-5">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex min-w-0 items-center justify-start gap-2.5 sm:flex-1 sm:gap-[10px]"
            >
              <span
                className="shrink-0 text-[24px] font-medium leading-none"
                style={{ color: item.dashColor }}
                aria-hidden
              >
                -
              </span>
              <span className="text-[16px] font-normal leading-normal text-[#808080]">
                {item.label}
              </span>
            </div>
          ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
