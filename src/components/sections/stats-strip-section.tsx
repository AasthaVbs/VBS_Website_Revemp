import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { GradientVerticalDivider } from "@/components/ui/gradient-vertical-divider";
import type { StatItem } from "@/constants/shared-sections";
import { defaultStatsStrip } from "@/constants/shared-sections";

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
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-stretch sm:gap-5">
          {stats.map((item, index) => (
            <Fragment key={item.label}>
              {index > 0 ? <GradientVerticalDivider id={`stats-strip-divider-${index}`} /> : null}
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
