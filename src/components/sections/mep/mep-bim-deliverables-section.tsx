import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepBimDeliverableCards,
  mepBimDeliverablesSection,
  type MepBimDeliverableCard,
} from "@/constants/mep-bim-modelling-content";
import { cn, altFromImageSrc } from "@/lib/utils";

type DeliverablesLayout = "three-two" | "two-two";

/** Figma node 221:13911 — Deliverables */
export function MepBimDeliverablesSection({
  section = mepBimDeliverablesSection,
  cards = mepBimDeliverableCards,
  showCta = true,
  layout = "three-two",
  iconVariant = "boxed",
  sectionClassName = "bg-[#FAFAFA]",
  descriptionMaxWidth = 505,
}: {
  section?: {
    tag: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaLabel?: string;
  };
  cards?: MepBimDeliverableCard[];
  showCta?: boolean;
  layout?: DeliverablesLayout;
  iconVariant?: "boxed" | "plain";
  sectionClassName?: string;
  descriptionMaxWidth?: number;
} = {}) {
  const { tag, titleLead, titleAccent, description, ctaLabel } = section;
  const rowOne = layout === "two-two" ? cards.slice(0, 2) : cards.slice(0, 3);
  const rowTwo = layout === "two-two" ? cards.slice(2, 4) : cards.slice(3, 5);

  return (
    <section
      id="mep-bim-deliverables"
      aria-labelledby="mep-bim-deliverables-heading"
      className={cn("scroll-mt-[120px] py-16 lg:scroll-mt-[148px] lg:py-[100px]", sectionClassName)}
    >
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex max-w-[833px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 id="mep-bim-deliverables-heading" className="mep-section-heading max-w-[833px] capitalize">
              <span className="font-medium">{titleLead}</span>
              <br />
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p
            className="text-[16px] font-normal leading-6 text-[#808080]"
            style={{ maxWidth: descriptionMaxWidth }}
          >
            {description}
          </p>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col gap-5 lg:gap-10">
          <div
            className={cn(
              "grid gap-5 lg:gap-5",
              layout === "two-two" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 lg:grid-cols-3",
            )}
          >
            {rowOne.map((card) => (
              <DeliverableCard key={`${card.title}-${card.icon}`} card={card} iconVariant={iconVariant} />
            ))}
          </div>
          {rowTwo.length > 0 ? (
            <div
              className={cn(
                "grid gap-5 lg:gap-5",
                layout === "two-two"
                  ? "grid-cols-1 lg:grid-cols-2"
                  : "flex flex-col gap-[30px] lg:flex-row lg:justify-center lg:gap-[30px]",
              )}
            >
              {rowTwo.map((card) => (
                <DeliverableCard
                  key={`${card.title}-${card.icon}`}
                  card={card}
                  iconVariant={iconVariant}
                  className={layout === "three-two" ? "w-full lg:w-[460px]" : undefined}
                />
              ))}
            </div>
          ) : null}
        </div>

        {showCta && ctaLabel ? (
          <PrimaryCtaButton
            fullWidth={false}
            className="h-auto min-h-[52px] px-5 py-4 capitalize backdrop-blur-[50px]"
          >
            {ctaLabel}
          </PrimaryCtaButton>
        ) : null}
      </PageContainer>
    </section>
  );
}

function DeliverableCard({
  card,
  className,
  iconVariant,
}: {
  card: MepBimDeliverableCard;
  className?: string;
  iconVariant: "boxed" | "plain";
}) {
  const isPlain = iconVariant === "plain";

  return (
    <article
      className={cn(
        "flex flex-col gap-4 overflow-hidden bg-white p-2.5 lg:gap-5",
        !isPlain &&
          "group mep-interactive-card rounded-[10px] p-5 transition-shadow duration-200 hover:border hover:border-[#CBCCCD] hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <div
          className={cn(
            "relative flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-[10px]",
            isPlain ? "p-[15px]" : "border border-[#CBCCCD] bg-[#FBF9F9]",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.icon}
            alt={altFromImageSrc(card.icon)}
            width={isPlain ? 30 : 42}
            height={isPlain ? 30 : 42}
            className={cn(
              "object-contain",
              isPlain ? "h-[30px] w-[30px]" : "absolute left-[9px] top-[9px] h-[42px] w-[42px]",
            )}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
          <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
        </div>
      </div>
    </article>
  );
}
