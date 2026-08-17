import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { aiaClientsCopy, aiaClientsLogos } from "@/constants/aia-conference-events-content";

export function AiaClientsSection() {
  const marqueeLogos = [...aiaClientsLogos, ...aiaClientsLogos];

  return (
    <section className="vbs-our-clients aia-clients">
      <PageContainer className="vbs-our-clients__container">
        <div className="aia-clients__copy">
          <div className="flex flex-col items-start justify-center gap-3">
            <SectionTag label={aiaClientsCopy.tag} />
            <h2 className="aia-clients__title text-section w-full capitalize">
              <span>{aiaClientsCopy.titleLead}</span>
              <span className="text-accent font-light">{aiaClientsCopy.titleAccent}</span>
            </h2>
          </div>
          <p className="aia-clients__desc m-0 w-full text-[16px] font-normal leading-6 text-[#808080] normal-case">
            {aiaClientsCopy.description}
          </p>
          <PrimaryCtaButton fullWidth={false} href="#book-meeting">
            {aiaClientsCopy.ctaLabel}
          </PrimaryCtaButton>
        </div>

        <div className="vbs-our-clients__marquee-wrap">
          <div className="vbs-our-clients__marquee">
            {marqueeLogos.map((logo, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${logo.name}-${index}`}
                src={logo.src}
                alt={index < aiaClientsLogos.length ? logo.name : ""}
                aria-hidden={index >= aiaClientsLogos.length ? true : undefined}
                className="vbs-our-clients__logo"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </PageContainer>
      <div className="aia-clients__fade" aria-hidden />
    </section>
  );
}
