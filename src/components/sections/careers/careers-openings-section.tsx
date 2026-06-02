import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  currentOpeningsSectionCopy,
  jobOpenings,
  type JobOpening,
} from "@/constants/careers-content";

/** Figma node 636:10281 — Current Openings list */
export function CareersOpeningsSection() {
  return (
    <section id="current-openings" className="scroll-mt-24 bg-white py-12 lg:py-[100px]">
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label={currentOpeningsSectionCopy.tag} />
            <h2 className="text-section max-w-[659px] capitalize">
              <span className="font-medium">{currentOpeningsSectionCopy.titleLead}</span>
              <span className="text-accent font-light">
                {currentOpeningsSectionCopy.titleAccent}
              </span>
            </h2>
          </div>
          <p className="max-w-[447px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
            {currentOpeningsSectionCopy.description}
          </p>
        </div>

        <div className="flex w-full flex-col gap-5">
          {jobOpenings.map((job) => (
            <JobRow key={job.id} job={job} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

function JobRow({ job }: { job: JobOpening }) {
  const rowClassName = `flex min-h-[96px] flex-col justify-center gap-4 border-b border-[#CBCCCD] px-5 py-5 sm:flex-row sm:items-center sm:justify-between ${
    job.highlighted ? "bg-[#FAFAFA]" : "bg-white"
  }`;

  if (job.id === "senior-ai-engineer") {
    return (
      <Link href="/careers/careers-detailed-page" className={`${rowClassName} transition-opacity hover:opacity-90`}>
        <h3 className="text-[24px] font-normal text-[#111111]">{job.title}</h3>
        <div className="flex flex-wrap items-center gap-2.5">
          <JobTag label={job.experience} />
          <JobTag label={job.department} />
          <JobTag label={job.openings} />
        </div>
      </Link>
    );
  }

  return (
    <div className={rowClassName}>
      <h3 className="text-[24px] font-normal text-[#111111]">{job.title}</h3>
      <div className="flex flex-wrap items-center gap-2.5">
        <JobTag label={job.experience} />
        <JobTag label={job.department} />
        <JobTag label={job.openings} />
      </div>
    </div>
  );
}

function JobTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[10px] border border-[#2299D6] bg-[rgba(34,153,214,0.10)] px-3 py-1.5 text-[14px] font-normal leading-6 text-[#2299D6]">
      {label}
    </span>
  );
}
