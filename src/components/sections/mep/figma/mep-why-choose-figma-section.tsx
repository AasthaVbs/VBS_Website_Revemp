// @ts-nocheck
"use client";

import { Fragment, useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { altFromImageSrc, cn } from "@/lib/utils";
import {
  mepWhyChooseItems,
  mepWhyChooseSection,
} from "@/constants/mep-engineers-content";

function resolveImageSrc(icon) {
  if (!icon) return "";
  return typeof icon === "string" ? icon : icon.src;
}

function WhyChooseCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverIcon = item.iconHover;
  const activeIcon = isHovered && hoverIcon ? hoverIcon : item.icon;

  return (
    <article
      className={cn(
        "mep-figma-why-choose__card",
        item.elevated && "mep-figma-why-choose__card--elevated",
        isHovered && hoverIcon && "mep-figma-why-choose__card--hovered",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="mep-figma-why-choose__icon-wrap">
        <img
          src={resolveImageSrc(activeIcon)}
          alt={altFromImageSrc(activeIcon)}
          className="mep-figma-why-choose__icon"
          decoding="async"
        />
      </div>
      <div className="mep-figma-why-choose__card-copy">
        <p className="mep-figma-why-choose__card-title">{item.title}</p>
        <p className="mep-figma-why-choose__card-text">{item.description}</p>
      </div>
    </article>
  );
}

/**
 * Why Choose Us — Figma VBS-Current-Website node 5-13264.
 * Supports optional `iconHover` (same muted → colored swap as Service Benefits).
 * Title parts may set `breakBefore: true` to force the accent onto the next line.
 */
export function MepWhyChooseSection({
  section = mepWhyChooseSection,
  items = mepWhyChooseItems,
  className,
  id = "why-choose-us",
}) {
  const gridRows = section.gridRows ?? [3, 2];
  const rows = [];
  let cursor = 0;
  for (const rowSize of gridRows) {
    rows.push(items.slice(cursor, cursor + rowSize));
    cursor += rowSize;
  }
  const hasTitleParts = section.titleParts?.length > 0;

  return (
    <section
      id={id}
      className={cn("mep-figma-why-choose", className)}
      style={{
        ...(section.titleMaxWidth
          ? { ["--why-choose-title-max-w"]: `${section.titleMaxWidth}px` }
          : {}),
        ...(section.descriptionMaxWidth
          ? { ["--why-choose-desc-max-w"]: `${section.descriptionMaxWidth}px` }
          : {}),
      }}
    >
      <PageContainer className="mep-figma-why-choose__container">
        <header className="mep-figma-why-choose__head">
          <div className="mep-figma-why-choose__head-top">
            <span className="mep-figma-why-choose__tag">{section.tag}</span>
            <p
              className={cn(
                "mep-figma-why-choose__title",
                hasTitleParts && "mep-figma-why-choose__title--parts",
              )}
              style={
                section.titleMaxWidth
                  ? { maxWidth: `${section.titleMaxWidth}px`, width: "100%" }
                  : undefined
              }
            >
              {hasTitleParts ? (
                section.titleParts.map((part, index) => (
                  <Fragment key={`${part.text}-${index}`}>
                    {part.breakBefore ? <br /> : null}
                    <span className={part.className}>{part.text}</span>
                  </Fragment>
                ))
              ) : (
                <>
                  <span className="mep-figma-why-choose__title-dark">{section.titleLine1}</span>
                  {section.breakAccent ? <br /> : null}
                  <span className="mep-figma-why-choose__title-accent">
                    {section.titleAccentLead ? (
                      <>
                        {section.titleAccentLead}{" "}
                      </>
                    ) : null}
                    {section.titleAccentRest}
                  </span>
                </>
              )}
            </p>
          </div>
          <p
            className="mep-figma-why-choose__section-desc"
            style={
              section.descriptionMaxWidth
                ? { maxWidth: `${section.descriptionMaxWidth}px` }
                : undefined
            }
          >
            {section.description}
          </p>
        </header>

        <div className="mep-figma-why-choose__grid">
          {rows.map((rowItems, rowIndex) =>
            rowItems.length > 0 ? (
              <div
                key={rowIndex}
                className={cn(
                  "mep-figma-why-choose__row",
                  rowIndex > 0 &&
                    gridRows[rowIndex] < gridRows[rowIndex - 1] &&
                    "mep-figma-why-choose__row--bottom",
                )}
              >
                {rowItems.map((item) => (
                  <WhyChooseCard key={item.title} item={item} />
                ))}
              </div>
            ) : null,
          )}
        </div>

        <PrimaryCtaButton fullWidth={false} href={section.ctaHref}>
          {section.ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
