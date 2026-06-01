"use client";

import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { mepDisciplineTabs, mepDisciplinesIntro } from "@/constants/mep-engineers-content";
import { cn } from "@/lib/utils";

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-[10px] p-2.5">
      <h4 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{title}</h4>
      <p className="text-[16px] font-normal leading-[26px] text-[#808080]">{body}</p>
    </div>
  );
}

type MepDisciplineId = (typeof mepDisciplineTabs)[number]["id"];

/** Figma node 289:10637 — Core MEP Disciplines */
export function MepDisciplinesSection() {
  const [activeId, setActiveId] = useState<MepDisciplineId>(mepDisciplineTabs[0].id);
  const active = mepDisciplineTabs.find((tab) => tab.id === activeId) ?? mepDisciplineTabs[0];

  return (
    <section className="bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label="MEP Disciplines" />
            <h2 className="max-w-[759px] capitalize text-[#111111]">
              <span className="text-[48px] font-medium leading-[1.15]">Core </span>
              <span className="text-[48px] font-light leading-[1.15] text-[#D70416]">MEP Disciplines </span>
              <span className="text-[48px] font-medium leading-[1.15]">Modeled with BIM Expertise</span>
            </h2>
          </div>
          <p className="max-w-[730px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {mepDisciplinesIntro}
          </p>
        </div>

        <div className="flex w-full flex-col gap-5">
          <div className="inline-flex flex-wrap items-end justify-start gap-2.5">
            {mepDisciplineTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  "w-fit shrink-0 whitespace-nowrap rounded-[10px] px-5 py-3 text-[16px] capitalize backdrop-blur-[50px]",
                  activeId === tab.id
                    ? "bg-[#D70416] font-semibold text-white"
                    : "bg-[#FAFAFA] font-normal text-[#111111]",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col items-stretch justify-between gap-8 p-2.5 lg:flex-row lg:items-end">
            <div className="flex w-full min-w-0 flex-1 flex-col gap-5 lg:max-w-[710px]">
              <div className="flex flex-col gap-5">
                <h3 className="text-[36px] font-normal leading-[1.2] text-[#111111]">{active.title}</h3>
                <p className="text-[16px] font-normal leading-6 text-[#808080]">{active.description}</p>
              </div>

              <div className="flex flex-col gap-2.5">
                <DetailBlock title="Standards Applied" body={active.standardsApplied} />
                <DetailBlock title="Key Systems Modeled" body={active.keySystemsModeled} />
                <DetailBlock title="LOD Capability" body={active.lodCapability} />
              </div>
            </div>

            <aside className="flex w-full min-w-[min(100%,560px)] flex-1 flex-col gap-6 rounded-[10px] bg-white p-5 shadow-[0_0_20px_rgba(0,0,0,0.20)] lg:min-h-[391px] lg:min-w-[560px] lg:max-w-[620px]">
              <h4 className="text-[24px] font-normal leading-[1.35] text-[#111111]">
                {active.deliverablesTitle}
              </h4>
              <ul className="flex flex-col gap-4">
                {active.deliverables.map((item) => (
                  <li key={item} className="inline-flex items-start gap-2.5">
                    <span className="shrink-0 text-[16px] leading-6 text-[#808080]">✅</span>
                    <span className="text-[16px] font-normal leading-6 text-[#808080]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
