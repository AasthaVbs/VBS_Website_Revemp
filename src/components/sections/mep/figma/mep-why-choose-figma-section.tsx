// @ts-nocheck
import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { cn } from "@/lib/utils";
import {
  mepWhyChooseItems,
  mepWhyChooseSection,
} from "@/constants/mep-engineers-content";

function resolveImageSrc(icon) {
  if (!icon) return "";
  return typeof icon === "string" ? icon : icon.src;
}

function WhyChooseCard({ item }) {
  return (
    <article
      className={cn(
        "mep-figma-why-choose__card",
        item.elevated && "mep-figma-why-choose__card--elevated",
      )}
    >
      <div className="mep-figma-why-choose__icon-wrap">
        <img
          src={resolveImageSrc(item.icon)}
          alt=""
          className="mep-figma-why-choose__icon"
          aria-hidden
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
 */
export function MepWhyChooseSection({
  section = mepWhyChooseSection,
  items = mepWhyChooseItems,
}) {
  const gridRows = section.gridRows ?? [3, 2];
  const rowOne = items.slice(0, gridRows[0]);
  const rowTwo = items.slice(gridRows[0], gridRows[0] + gridRows[1]);

  return (
    <section id="why-choose-us" className="mep-figma-why-choose">
      <PageContainer className="mep-figma-why-choose__container">
        <header className="mep-figma-why-choose__head">
          <div className="mep-figma-why-choose__head-top">
            <span className="mep-figma-why-choose__tag">{section.tag}</span>
            <p className="mep-figma-why-choose__title">
              <span className="mep-figma-why-choose__title-dark">{section.titleLine1}</span>
              <span className="mep-figma-why-choose__title-accent">
                {section.titleAccentLead ? (
                  <>
                    {section.titleAccentLead}
                    <br />
                  </>
                ) : null}
                {section.titleAccentRest}
              </span>
            </p>
          </div>
          <p className="mep-figma-why-choose__section-desc">{section.description}</p>
        </header>

        <div className="mep-figma-why-choose__grid">
          <div className="mep-figma-why-choose__row">
            {rowOne.map((item) => (
              <WhyChooseCard key={item.title} item={item} />
            ))}
          </div>
          {rowTwo.length > 0 ? (
            <div
              className={cn(
                "mep-figma-why-choose__row",
                gridRows[1] < gridRows[0] && "mep-figma-why-choose__row--bottom",
              )}
            >
              {rowTwo.map((item) => (
                <WhyChooseCard key={item.title} item={item} />
              ))}
            </div>
          ) : null}
        </div>

        <PrimaryCtaButton fullWidth={false} href={section.ctaHref}>
          {section.ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
