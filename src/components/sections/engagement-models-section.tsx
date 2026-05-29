import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { engagementModelCards } from "@/constants/home-content";

function BulletList({
  items,
  className = "leading-6",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="inline-flex items-center gap-2.5">
          <span className="text-body shrink-0">•</span>
          <span className="text-body">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function EngagementModelsSection() {
  return (
    <section id="engagement" className="bg-[#FAFAFA] py-[100px]">
      <PageContainer className="flex flex-col items-center gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <SectionTag label="Engagement Models" />
            <h2 className="max-w-[884px] text-section">
              Flexible Engagement Models Built Around{" "}
              <span className="text-accent">Your Delivery Needs</span>
            </h2>
          </div>
          <p className="max-w-[750px] text-body">
            Whether you need project-based BIM support, a dedicated remote team, or a fully managed
            global delivery center, our engagement models are designed to scale with your business.
          </p>
        </div>

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {engagementModelCards.map((card) => (
            <article
              key={card.title}
              className={`relative flex min-w-0 flex-col items-start gap-5 rounded-[10px] border bg-white p-5 ${
                card.shadow ? "shadow-[0_0_14px_rgba(0,0,0,0.20)]" : ""
              }`}
              style={{ borderColor: card.borderColor }}
            >
              {card.badge ? (
                <div className="absolute -top-4 right-5 inline-flex h-8 items-center justify-center rounded-[10px] bg-[#2299D6] px-3 py-1.5">
                  <span className="text-[14px] font-normal text-white">{card.badge}</span>
                </div>
              ) : null}

              <div
                className="flex items-center justify-center rounded-[10px] border p-2.5"
                style={{ backgroundColor: card.iconBg, borderColor: card.iconBorder }}
              >
                <span className="text-[40px] font-normal leading-none text-[#111111]">
                  {card.icon}
                </span>
              </div>

              <p className="text-[16px] font-medium leading-6 text-[#D70416]">{card.audience}</p>

              <div className="flex w-full flex-1 flex-col items-end gap-5">
                <div className="flex w-full flex-col gap-5">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-card-title">{card.title}</h3>
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">{card.description}</p>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Key Benefits</p>
                    <BulletList items={card.keyBenefits} />
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <p className="text-[16px] font-medium leading-6 text-[#808080]">Best Suited For</p>
                    <BulletList items={card.bestSuitedFor} className="leading-[26px]" />
                  </div>
                </div>

                <PrimaryCtaButton className={card.ctaHighlighted ? "primary-cta--highlighted" : undefined}>
                  {card.cta}
                </PrimaryCtaButton>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
