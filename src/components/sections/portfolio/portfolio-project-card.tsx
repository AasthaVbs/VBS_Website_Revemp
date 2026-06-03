import Image from "next/image";

import type { PortfolioProjectItem } from "@/constants/portfolio-page-content";

function ProjectMetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="shrink-0 text-[16px] font-medium text-[#111111]">{label}</span>
      <span className="text-[16px] font-normal text-[#808080]">{value}</span>
    </div>
  );
}

type PortfolioProjectCardProps = {
  project: PortfolioProjectItem;
  variant?: "featured" | "listing";
};

/** Figma project card — featured (portfolio) or listing (all projects) */
export function PortfolioProjectCard({ project, variant = "featured" }: PortfolioProjectCardProps) {
  if (variant === "listing") {
    return (
      <article className="flex w-full max-w-[632px] flex-col items-center gap-[30px] rounded-[10px] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
        <div className="flex w-full flex-col gap-[15px]">
          <div className="flex flex-col gap-[19px]">
            <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{project.title}</h3>
            <p className="text-[16px] leading-6 text-[#808080]">{project.description}</p>
          </div>
        </div>

        <div className="relative h-[360px] w-full overflow-hidden rounded-[10px]">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 632px"
          />
        </div>

        <div className="flex w-full flex-col gap-2.5">
          <ProjectMetaRow label="Project Type :" value={project.projectType} />
          <ProjectMetaRow label="Location :" value={project.location} />
          <ProjectMetaRow label="Project Size :" value={project.projectSize} />
        </div>
      </article>
    );
  }

  return (
    <article className="flex w-full max-w-[632px] flex-col items-center gap-[30px] rounded-[10px] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
      <div className="flex w-full flex-col gap-[15px]">
        <div className="flex flex-col gap-[19px]">
          <h3 className="text-[20px] font-normal leading-[1.35] text-[#111111] sm:text-[24px]">
            {project.title}
          </h3>
          <p className="text-[16px] leading-6 text-[#808080]">{project.description}</p>
        </div>
      </div>

      <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] sm:h-[300px] lg:h-[360px]">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 632px"
        />
      </div>

      <div className="flex w-full flex-col gap-2.5">
        <ProjectMetaRow label="Project Type :" value={project.projectType} />
        <ProjectMetaRow label="Location :" value={project.location} />
        <ProjectMetaRow label="Project Size :" value={project.projectSize} />
      </div>
    </article>
  );
}
