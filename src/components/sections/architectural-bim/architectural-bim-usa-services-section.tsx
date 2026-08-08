import { PageContainer } from "@/components/layout/page-container";
import { MepSectionTag } from "@/components/sections/mep/mep-section-tag";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  architecturalBimUsaServiceCards,
  architecturalBimUsaServicesSection,
} from "@/constants/architectural-bim-services-usa-content";

type ServiceCard = (typeof architecturalBimUsaServiceCards)[number];

function ServiceCardArticle({ card }: { card: ServiceCard }) {
  return (
    <article className="abs-usa-services__card flex min-w-0 flex-col items-start gap-5 rounded-[10px] border border-[#CBCCCD] bg-white p-6 transition-shadow duration-200 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] p-3.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.icon}
          alt=""
          className="h-full w-full object-contain brightness-0"
          aria-hidden
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-[20px] font-medium leading-[1.3] text-[#111111]">{card.title}</h3>
        <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
      </div>
    </article>
  );
}

/** 3×3 service grid + "Get your dedicated architect" CTA. */
export function ArchitecturalBimUsaServicesSection({
  section = architecturalBimUsaServicesSection,
  cards = architecturalBimUsaServiceCards,
}: {
  section?: typeof architecturalBimUsaServicesSection;
  cards?: typeof architecturalBimUsaServiceCards;
}) {
  return (
    <section className="abs-usa-services bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-3">
            <MepSectionTag label={section.tag} />
            <h2 className="text-section w-full max-w-[760px]">
              <span className="font-medium text-[#111111]">{section.titleLead}</span>
              <span className="font-light text-accent">{section.titleAccent}</span>
              <span className="font-medium text-[#111111]">{section.titleTrail}</span>
            </h2>
          </div>
          <p className="max-w-[720px] text-[16px] font-normal leading-6 text-[#808080]">{section.description}</p>
        </div>

        <div className="abs-usa-services__grid grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <ServiceCardArticle key={card.title} card={card} />
          ))}
        </div>

        <PrimaryCtaButton fullWidth={false} href={section.ctaHref}>
          {section.ctaLabel}
        </PrimaryCtaButton>
      </PageContainer>
    </section>
  );
}
