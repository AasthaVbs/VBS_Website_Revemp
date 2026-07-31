import { PageContainer } from "@/components/layout/page-container";
import { homeOurClientsLogos, homeOurClientsSection } from "@/constants/home-content";

type OurClientsSectionContent = {
  tag: string;
  titleAccent: string;
  titleLead: string;
  description: string;
};

type OurClientsLogo = {
  name: string;
  src: string;
};

export function OurClientsSection({
  section = homeOurClientsSection,
  logos = homeOurClientsLogos,
}: {
  section?: OurClientsSectionContent;
  logos?: readonly OurClientsLogo[];
} = {}) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="vbs-our-clients">
      <PageContainer className="vbs-our-clients__container">
        <div className="vbs-our-clients__head">
          <div className="vbs-our-clients__head-top">
            <span className="vbs-our-clients__tag">{section.tag}</span>
            <h2 className="vbs-our-clients__title">
              <span className="vbs-our-clients__title-accent">{section.titleAccent}</span>
              <span className="vbs-our-clients__title-dark">{section.titleLead}</span>
            </h2>
          </div>
          <p className="vbs-our-clients__desc">{section.description}</p>
        </div>

        <div className="vbs-our-clients__marquee-wrap">
          <div className="vbs-our-clients__marquee">
            {marqueeLogos.map((logo, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${logo.name}-${index}`}
                src={logo.src}
                alt={index < logos.length ? logo.name : ""}
                aria-hidden={index >= logos.length ? true : undefined}
                className="vbs-our-clients__logo"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
