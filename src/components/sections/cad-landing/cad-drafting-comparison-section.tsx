import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";
import { cadDraftingLandingComparisonSection } from "@/constants/cad-drafting-landing-content";

const COMPARISON_COLUMNS = [
  { key: "factor", labelKey: "columns", labelIndex: 0, variant: "factor" },
  { key: "inHouse", labelKey: "columns", labelIndex: 1, variant: "data" },
  { key: "freelancers", labelKey: "columns", labelIndex: 2, variant: "data" },
  { key: "vbs", labelKey: "columns", labelIndex: 3, variant: "vbs" },
];

/**
 * Why Choose Us comparison table — Figma node 40-16875.
 */
export function CadDraftingComparisonSection({
  section = cadDraftingLandingComparisonSection,
}) {
  const columns = section.columnKeys ?? COMPARISON_COLUMNS;
  const showCta = section.showCta !== false && section.ctaLabel;

  return (
    <section id="why-us" className="cad-landing-comparison bg-white py-12 md:py-16 lg:py-[100px]">
      <PageContainer className="cad-landing-comparison__container flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px]">
        <header className="cad-landing-comparison__head w-full self-stretch">
          <div className="cad-landing-comparison__head-top">
            <span className="cad-landing-comparison__tag">{section.tag}</span>
            <h2 className="cad-landing-comparison__title">
              {section.titleAccentFirst ? (
                <>
                  <span className="cad-landing-comparison__title-accent">{section.titleAccent}</span>
                  <span className="cad-landing-comparison__title-dark">{section.titleLead}</span>
                </>
              ) : (
                <>
                  <span className="cad-landing-comparison__title-dark">{section.titleLead}</span>
                  <span className="cad-landing-comparison__title-accent">{section.titleAccent}</span>
                </>
              )}
            </h2>
          </div>
          <p className="cad-landing-comparison__section-desc">{section.description}</p>
        </header>

        <div className="cad-landing-comparison__table-wrap w-full overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <div className="cad-landing-comparison__table min-w-[640px] md:min-w-0 md:w-full">
            {columns.map((column) => (
              <div
                key={column.key}
                className={cn(
                  "cad-landing-comparison__column",
                  column.variant === "factor" && "cad-landing-comparison__column--factor",
                  column.variant === "data" && "cad-landing-comparison__column--data",
                  column.variant === "vbs" && "cad-landing-comparison__column--vbs",
                )}
              >
                <div
                  className={cn(
                    "cad-landing-comparison__header-cell",
                    column.variant === "vbs" && "cad-landing-comparison__header-cell--vbs",
                  )}
                >
                  {section.columns[column.labelIndex]}
                </div>

                {section.rows.map((row, rowIndex) => (
                  <div
                    key={`${column.key}-${row.factor}`}
                    className={cn(
                      "cad-landing-comparison__body-cell",
                      rowIndex % 2 === 1 && "cad-landing-comparison__body-cell--alt",
                      column.variant !== "factor" && "cad-landing-comparison__body-cell--muted",
                    )}
                  >
                    {row[column.key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {section.footnote ? (
          <div className="cad-landing-comparison__footnote w-full max-w-[896px]">
            <p className="cad-landing-comparison__footnote-text m-0">{section.footnote}</p>
          </div>
        ) : null}

        {showCta ? (
          <PrimaryCtaButton fullWidth className="w-full sm:w-auto" href={section.ctaHref}>
            {section.ctaLabel}
          </PrimaryCtaButton>
        ) : null}
      </PageContainer>
    </section>
  );
}
