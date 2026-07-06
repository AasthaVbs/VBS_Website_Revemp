import { PageContainer } from "@/components/layout/page-container";
import { EngagementModelIcon } from "@/components/sections/engagement-models/engagement-model-icons";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  defaultEngagementModelsHeader,
  engagementModelCards,
  type EngagementModelCard,
} from "@/constants/engagement-models-content";
import { cn } from "@/lib/utils";

export type { EngagementModelCard };

export type EngagementModelsSectionProps = {
  id?: string;
  tag?: string;
  titleLine1?: string;
  titleAccent?: string;
  description?: string;
  cards?: readonly EngagementModelCard[];
  sectionClassName?: string;
};

function EngagementModelCardArticle({ card }: { card: EngagementModelCard }) {
  return (
    <article
      className={cn(
        "vbs-engagement-models-section__card",
        card.shadow && "vbs-engagement-models-section__card--shadow",
        card.featured && "vbs-engagement-models-section__card--featured",
      )}
    >
      {"badge" in card && card.badge ? (
        <div className="vbs-engagement-models-section__badge">{card.badge}</div>
      ) : null}

      <div className="vbs-engagement-models-section__icon-wrap">
        <EngagementModelIcon name={card.icon} />
      </div>

      <p className="vbs-engagement-models-section__audience">{card.audience}</p>

      <div className="vbs-engagement-models-section__card-body">
        <div className="vbs-engagement-models-section__card-content">
          <div className="vbs-engagement-models-section__card-intro">
            <h3 className="vbs-engagement-models-section__card-title">{card.title}</h3>
            <p className="vbs-engagement-models-section__card-description">{card.description}</p>
          </div>

          <div className="vbs-engagement-models-section__block">
            <p className="vbs-engagement-models-section__block-label">Key Benefits</p>
            <ul className="vbs-engagement-models-section__list">
              {card.keyBenefits.map((item) => (
                <li key={item} className="vbs-engagement-models-section__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="vbs-engagement-models-section__block">
            <p className="vbs-engagement-models-section__block-label">Best Suited For</p>
            <ul className="vbs-engagement-models-section__list">
              {card.bestSuitedFor.map((item) => (
                <li key={item} className="vbs-engagement-models-section__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PrimaryCtaButton
          fullWidth
          href={card.ctaHref}
          className={cn(
            "vbs-engagement-models-section__cta",
            card.ctaHighlighted && "primary-cta--highlighted",
          )}
        >
          {card.cta}
        </PrimaryCtaButton>
      </div>
    </article>
  );
}

export function EngagementModelsSection({
  id = "engagement",
  tag = defaultEngagementModelsHeader.tag,
  titleLine1 = defaultEngagementModelsHeader.titleLine1,
  titleAccent = defaultEngagementModelsHeader.titleAccent,
  description = defaultEngagementModelsHeader.description,
  cards = engagementModelCards,
  sectionClassName,
}: EngagementModelsSectionProps) {
  return (
    <section id={id} className={cn("vbs-engagement-models-section", sectionClassName)}>
      <PageContainer className="vbs-engagement-models-section__container">
        <header className="vbs-engagement-models-section__header">
          <div className="vbs-engagement-models-section__title-block">
            <span className="vbs-engagement-models-section__tag">{tag}</span>
            <h2 className="vbs-engagement-models-section__title">
              <span className="vbs-engagement-models-section__title-dark">{titleLine1} </span>
              <span className="vbs-engagement-models-section__title-accent">{titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-engagement-models-section__description">{description}</p>
        </header>

        <div className="vbs-engagement-models-section__cards">
          {cards.map((card) => (
            <EngagementModelCardArticle key={card.title} card={card} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
