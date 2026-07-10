import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  mepBimDeliverableCards,
  mepBimDeliverablesSection,
} from "@/constants/mep-bim-modelling-content";
import { cn } from "@/lib/utils";

/** Figma node 221:13911 — Deliverables */
export function MepBimDeliverablesSection() {
  const { tag, titleLead, titleAccent, description, ctaLabel } = mepBimDeliverablesSection;
  const rowOne = mepBimDeliverableCards.slice(0, 3);
  const rowTwo = mepBimDeliverableCards.slice(3, 5);

  return (
    <section
      id="mep-bim-deliverables"
      aria-labelledby="mep-bim-deliverables-heading"
      className="scroll-mt-[120px] bg-[#FAFAFA] py-16 lg:scroll-mt-[148px] lg:py-[100px]"
    >
      <PageContainer className="flex flex-col items-stretch gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[1440px] flex-col items-start gap-5">
          <div className="flex max-w-[724px] flex-col items-start gap-3">
            <MepSectionTag label={tag} />
            <h2 id="mep-bim-deliverables-heading" className="mep-section-heading capitalize">
              <span className="block font-medium">{titleLead}</span>
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-[394px] text-[16px] font-normal leading-6 text-[#808080]">
            {description}
          </p>
        </div>

        <div className="flex w-full max-w-[1440px] flex-col gap-[30px]">
          <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
            {rowOne.map((card) => (
              <DeliverableCard key={`${card.title}-${card.icon}`} card={card} />
            ))}
          </div>
          <div className="flex flex-col gap-[30px] lg:flex-row lg:justify-center lg:gap-[30px]">
            {rowTwo.map((card) => (
              <DeliverableCard
                key={`${card.title}-${card.icon}`}
                card={card}
                className="w-full lg:w-[460px]"
              />
            ))}
          </div>
        </div>

        <PrimaryCtaButton
          fullWidth={false}
          className="h-auto min-h-[52px] self-center px-5 py-4 capitalize backdrop-blur-[50px]"
        >
          {ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}

function DeliverableCard({
  card,
  className,
}: {
  card: (typeof mepBimDeliverableCards)[number];
  className?: string;
}) {
  return (
    <article className={cn("mep-interactive-card flex flex-col gap-5 bg-white p-5", className)}>
      <div
        className={cn(
          "relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-[10px]",
          card.iconBordered && "border border-[#CBCCCD] bg-[#FBF9F9]",
        )}
      >
        {/* Native img so SVG deliverable icons update reliably in dev */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.icon}
          alt=""
          width={42}
          height={42}
          className="absolute left-[9px] top-[9px] h-[42px] w-[42px] object-contain"
          loading="eager"
          decoding="async"
          aria-hidden
        />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-[24px] font-normal leading-[1.35] text-[#111111]">{card.title}</h3>
        <p className="text-[16px] font-normal leading-[26px] text-[#808080]">{card.description}</p>
      </div>
    </article>
  );
}
