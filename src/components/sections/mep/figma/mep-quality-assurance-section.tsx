// @ts-nocheck
import { Fragment } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { cn } from "@/lib/utils";
import {
  mepQualityAssuranceSection,
  mepQualityAssuranceStages,
  mepQualityAssuranceStats,
} from "@/constants/mep-engineers-content";

function StageNumber({ prefix, suffix, prefixColor }) {
  return (
    <p className="mep-figma-qa__stage-number">
      <span className="mep-figma-qa__stage-number-prefix" style={{ color: prefixColor }}>
        {prefix}
      </span>
      <span className="mep-figma-qa__stage-number-suffix">{suffix}</span>
    </p>
  );
}

function StageCard({ stage }) {
  return (
    <article
      className={cn(
        "mep-figma-qa__stage-card flex min-w-0 flex-1 flex-col items-start gap-2 self-stretch overflow-hidden rounded-[10px] p-5",
        stage.elevated && "mep-figma-qa__stage-card--elevated",
      )}
    >
      <div className="flex flex-col items-start gap-2.5">
        <StageNumber
          prefix={stage.prefix}
          suffix={stage.suffix}
          prefixColor={stage.prefixColor}
        />
        <p className="mep-figma-qa__stage-title">{stage.title}</p>
      </div>
      <p className="mep-figma-qa__stage-text w-full">{stage.text}</p>
    </article>
  );
}

/**
 * Quality Assurance — Figma VBS-Current-Website node 5-13130.
 */
export function MepQualityAssuranceSection({
  section = mepQualityAssuranceSection,
  stages = mepQualityAssuranceStages,
  stats = mepQualityAssuranceStats,
}) {
  return (
    <section
      id="technical-methods"
      className="mep-figma-qa bg-[#FAFAFA] py-[100px]"
    >
      <PageContainer className="mep-figma-qa__container flex flex-col">
        <header className="mep-figma-qa__head">
          <div className="mep-figma-qa__head-top">
            <span className="mep-figma-qa__tag">{section.tag}</span>
            <div className="mep-figma-qa__title">
              <p className="mep-figma-qa__title-dark">{section.titleLine1}</p>
              <p className="mep-figma-qa__title-accent">{section.titleLine2}</p>
            </div>
          </div>
          <p className="mep-figma-qa__section-desc">{section.description}</p>
        </header>

        <div className="mep-figma-qa__stages flex w-full items-stretch self-stretch">
          {stages.map((stage, index) => (
            <Fragment key={stage.title}>
              {index > 0 ? <div className="mep-figma-qa__stage-divider" aria-hidden /> : null}
              <StageCard stage={stage} />
            </Fragment>
          ))}
        </div>

        <div className="mep-figma-qa__stats w-full self-stretch rounded-[10px] py-5">
          {stats.map((stat, index) => (
            <Fragment key={stat.value}>
              {index > 0 ? <div className="mep-figma-qa__stat-divider" aria-hidden /> : null}
              <div className="mep-figma-qa__stat flex min-w-0 flex-1 flex-col items-center gap-3 self-stretch overflow-hidden rounded-[10px] p-2.5 text-center">
                <p
                  className="mep-figma-qa__stat-value"
                  style={{ color: stat.valueColor }}
                >
                  {stat.value}
                </p>
                <p className="mep-figma-qa__stat-label">{stat.label}</p>
              </div>
            </Fragment>
          ))}
        </div>

        <blockquote className="mep-figma-qa__quote flex w-full flex-col gap-2.5 self-stretch rounded-[10px] border border-[#D70416] bg-[#FFF8F8] p-5">
          <p className="mep-figma-qa__quote-text">{section.quote}</p>
          <footer className="mep-figma-qa__quote-attribution">{section.quoteAttribution}</footer>
        </blockquote>
      </PageContainer>
    </section>
  );
}
