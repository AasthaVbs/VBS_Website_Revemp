import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { coreValues } from "@/constants/about-content";

export function CoreValuesSection() {
  return (
    <section className="bg-[#FAFAFA] py-[100px]">
      <PageContainer className="flex flex-col gap-[60px]">
        <SectionIntro
          tag="Core Values"
          title={
            <>
              Complete Coverage for{" "}
              <span className="font-light text-vbs-red">MEP BIM Modeling Services</span>
            </>
          }
          description="Comprehensive MEP Modeling Services Integrating HVAC, Electrical, Mechanical Piping, Plumbing, and Fire Protection Workflows"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <article
              key={value.letter}
              className="flex items-center gap-4 rounded-[10px] border border-[#CBCCCD] bg-white p-4"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[10px] border-[6px] border-white bg-vbs-red text-[28px] font-medium text-white shadow-[0_2px_8px_rgba(215,4,22,0.3)]">
                {value.letter}
              </div>
              <p className="text-[16px] font-normal text-[#111111]">{value.label}</p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
