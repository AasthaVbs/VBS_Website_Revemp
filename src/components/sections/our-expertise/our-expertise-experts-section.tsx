"use client";

import { Fragment, useState } from "react";

import { ChevronRightIcon } from "@/components/icons/chevron-right-icon";
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  ourExpertiseExpertRoles,
  ourExpertiseExpertsSection,
} from "@/constants/our-expertise-content";
import { cn } from "@/lib/utils";

function FadedDivider() {
  return (
    <span
      className="block h-px w-full bg-gradient-to-r from-transparent via-[#CBCCCD] to-transparent"
      aria-hidden
    />
  );
}

function SkillCheckIcon() {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4 shrink-0"
      aria-hidden
    >
      <rect width="16" height="16" rx="2.5" fill="#D70416" />
      <path
        d="M3.7 8.05 6.6 10.95 12.3 5.1"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OurExpertiseExpertsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRole = ourExpertiseExpertRoles[activeIndex] ?? ourExpertiseExpertRoles[0];
  const midpoint = Math.ceil(activeRole.skills.length / 2);
  const leftSkills = activeRole.skills.slice(0, midpoint);
  const rightSkills = activeRole.skills.slice(midpoint);

  return (
    <section className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-center gap-8 lg:items-start lg:gap-[60px]">
          <div className="flex w-full flex-col items-center justify-between gap-5 text-center lg:flex-row lg:items-end lg:gap-6 lg:text-left">
            <h2 className="text-section">
              <span className="text-section font-medium text-[#111111]">
                {ourExpertiseExpertsSection.titleLead}
              </span>
              <span className="text-section text-accent font-light">
                {ourExpertiseExpertsSection.titleAccent}
              </span>
            </h2>
            <PrimaryCtaButton
              fullWidth={false}
              href={ourExpertiseExpertsSection.ctaHref}
              className="!h-auto !min-h-[56px] !px-5 !py-4 capitalize max-lg:w-full"
            >
              {ourExpertiseExpertsSection.ctaLabel}
            </PrimaryCtaButton>
          </div>

          <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <ul className="flex w-full flex-col gap-4 lg:h-[410px] lg:w-[416px] lg:shrink-0 lg:gap-5">
              {ourExpertiseExpertRoles.map((role, index) => {
                const isActive = index === activeIndex;
                const isLast = index === ourExpertiseExpertRoles.length - 1;
                return (
                  <Fragment key={role.label}>
                    <li className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className="flex items-center gap-2.5 text-left"
                        aria-pressed={isActive}
                      >
                        <span
                          className={cn(
                            "text-[16px] font-normal leading-normal sm:text-[20px] sm:whitespace-nowrap",
                            isActive ? "text-[#111111]" : "text-[#808080]",
                          )}
                        >
                          {role.label}
                        </span>
                        {isActive ? (
                          <span className="flex size-6 shrink-0 items-center justify-center" aria-hidden>
                            <ChevronRightIcon className="size-6 brightness-0" />
                          </span>
                        ) : null}
                      </button>
                    </li>
                    {!isLast ? (
                      <li className="flex min-h-px w-full flex-1 items-center" aria-hidden>
                        <FadedDivider />
                      </li>
                    ) : null}
                  </Fragment>
                );
              })}
            </ul>

            <div className="flex w-full flex-col items-start gap-5 rounded-[10px] border border-solid border-[#CBCCCD] bg-white p-4 sm:p-[30px] lg:h-[452px] lg:w-[893px] lg:shrink-0">
              <h3 className="text-[20px] font-normal leading-normal text-[#111111] sm:text-[24px] sm:whitespace-nowrap">
                {activeRole.panelTitle}
              </h3>
              <FadedDivider />
              <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-start sm:gap-12 lg:gap-20">
                <ul className="flex w-full flex-col items-start gap-5 sm:gap-8 lg:w-[341px] lg:gap-10">
                  {leftSkills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5">
                      <SkillCheckIcon />
                      <span className="text-[16px] font-normal leading-snug text-[#111111] sm:text-[18px] sm:leading-none">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="flex w-full flex-col items-start gap-5 sm:gap-8 lg:w-[316px] lg:gap-10">
                  {rightSkills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5">
                      <SkillCheckIcon />
                      <span className="text-[16px] font-normal leading-snug text-[#111111] sm:text-[18px] sm:leading-none">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
