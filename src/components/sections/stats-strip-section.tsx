import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import type { StatItem } from "@/constants/shared-sections";
import { defaultStatsStrip } from "@/constants/shared-sections";

function StatsStripDivider({ id }: { id: string }) {
  return (
    <div className="stats-strip-divider" aria-hidden>
      <svg viewBox="0 0 1 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id={id}
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#CBCCCD" stopOpacity="0" />
            <stop offset="50%" stopColor="#CBCCCD" stopOpacity="1" />
            <stop offset="100%" stopColor="#CBCCCD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="1" height="100" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

export function StatsStripSection({
  stats = defaultStatsStrip,
  className = "bg-white pb-[30px] pt-[60px]",
}: {
  stats?: StatItem[];
  className?: string;
}) {
  return (
    <section className={className}>
      <PageContainer>
        <div className="flex w-full flex-col gap-5 md:flex-row md:items-stretch md:gap-5">
          {stats.map((item, index) => (
            <Fragment key={item.label}>
              {index > 0 ? <StatsStripDivider id={`stats-strip-divider-${index}`} /> : null}
              <article className="flex flex-1 flex-col items-center justify-start gap-[7px] text-center">
                <p className={`text-stat ${item.color}`}>{item.value}</p>
                <p className="text-body max-w-[220px] normal-case">{item.label}</p>
              </article>
            </Fragment>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
