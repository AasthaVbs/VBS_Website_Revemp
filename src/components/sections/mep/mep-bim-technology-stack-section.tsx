import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import {
  mepBimTechnologyStackSection,
  mepBimTechnologyStackToolsRowOne,
  mepBimTechnologyStackToolsRowTwo,
  type MepBimTechnologyTool,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

/** Figma — Tools & Platforms logo grid */
export function MepBimTechnologyStackSection({
  section = mepBimTechnologyStackSection,
  toolsRowOne = mepBimTechnologyStackToolsRowOne,
  toolsRowTwo = mepBimTechnologyStackToolsRowTwo,
  titleLayout = "stacked",
  descriptionMaxWidth = 591,
}: {
  section?: {
    tag: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
  };
  toolsRowOne?: MepBimTechnologyTool[];
  toolsRowTwo?: MepBimTechnologyTool[];
  titleLayout?: "stacked" | "inline";
  descriptionMaxWidth?: number;
} = {}) {
  const { tag, titleLine1, titleAccent, description } = section;

  return (
    <section className="overflow-hidden bg-white py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex max-w-[898px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 className="mep-section-heading max-w-[798px] capitalize">
              <span className="font-medium">{titleLine1}</span>
              {titleLayout === "stacked" ? <br /> : " "}
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p
            className="text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: descriptionMaxWidth }}
          >
            {description}
          </p>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col gap-10 lg:gap-[50px]">
          <TechnologyToolRow tools={toolsRowOne} className="lg:justify-between" />
          <TechnologyToolRow tools={toolsRowTwo} className="lg:justify-center lg:gap-[60px]" />
        </div>
      </PageContainer>
    </section>
  );
}

function TechnologyToolRow({
  tools,
  className,
}: {
  tools: MepBimTechnologyTool[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-8 gap-y-10 lg:flex-nowrap lg:items-center",
        className,
      )}
    >
      {tools.map((tool) => (
        <TechnologyTool key={tool.name} tool={tool} />
      ))}
    </div>
  );
}

function TechnologyTool({ tool }: { tool: MepBimTechnologyTool }) {
  return (
    <div className="flex min-w-[200px] items-center gap-5">
      <Image
        src={tool.icon}
        alt=""
        width={tool.iconWidth}
        height={tool.iconHeight}
        className="shrink-0 object-contain"
        style={{ width: tool.iconWidth, height: tool.iconHeight, maxWidth: tool.iconWidth }}
        aria-hidden
      />
      <span className="text-[24px] font-medium capitalize leading-[1.35] text-[#111111]">
        {tool.name}
      </span>
    </div>
  );
}
