import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { mepTechnicalMethods } from "@/constants/mep-engineers-content";
import { cn } from "@/lib/utils";

/** Figma node 294:10775 — Technical Methods / clash detection */
export function MepTechnicalMethodsSection() {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={mepTechnicalMethods.tag} />
            <h2 className="mep-section-heading max-w-[834px] capitalize">
              <span className="block font-medium">{mepTechnicalMethods.titleLine1}</span>
              <span className="text-accent block font-light">{mepTechnicalMethods.titleLine2}</span>
            </h2>
          </div>
          <p className="max-w-[739px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {mepTechnicalMethods.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-5 lg:flex-row">
          {mepTechnicalMethods.phases.map((phase) => (
            <PhaseCard key={phase.title} phase={phase} />
          ))}
        </div>

        <div className="flex w-full flex-col items-stretch gap-5 rounded-[10px] py-5 lg:flex-row">
          {mepTechnicalMethods.stats.map((stat) => (
            <div key={stat.value} className="flex min-w-0 flex-1 flex-col gap-5 p-2.5">
              <p className={cn("text-[36px] font-medium leading-none", stat.valueClass)}>{stat.value}</p>
              <p className={cn("text-[16px] font-normal leading-6 text-[#808080]", stat.labelClass)}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="flex w-full flex-col gap-2.5 rounded-[10px] border border-[#D70416] bg-[#FFF8F8] p-5">
          <p className="text-[16px] font-normal italic capitalize leading-6 text-[#111111]">
            {mepTechnicalMethods.quote}
          </p>
          <footer className="text-right text-[16px] font-medium capitalize leading-6 text-[#D70416]">
            {mepTechnicalMethods.attribution}
          </footer>
        </blockquote>
      </PageContainer>
    </section>
  );
}

function PhaseCard({
  phase,
}: {
  phase: (typeof mepTechnicalMethods.phases)[number];
}) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col gap-5 rounded-[10px] bg-transparent p-5 transition-shadow duration-200",
        "hover:bg-white hover:shadow-[0_4px_10px_rgba(0,0,0,0.20)]",
      )}
    >
      <div className="flex flex-col gap-2.5">
        <div className="leading-none">
          <span className={cn("text-[36px] font-medium", phase.prefixColor)}>{phase.prefix}</span>
          <span className="text-[36px] font-medium text-[#111111]">{phase.number}</span>
        </div>
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{phase.title}</h3>
      </div>
      <p className="text-[16px] font-normal leading-6 text-[#808080]">{phase.description}</p>
    </article>
  );
}
