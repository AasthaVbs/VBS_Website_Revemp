import { PageContainer } from "@/components/layout/page-container";
import { homeOurClientsLogos, homeOurClientsSection } from "@/constants/home-content";
import { laptopCappedMaxWidth } from "@/lib/utils";

type OurClientsSectionContent = {
  tag: string;
  titleAccent: string;
  titleLead: string;
  description?: string;
  /** When false, dark lead renders before accent (default: accent first). */
  titleAccentFirst?: boolean;
  /** Force a line break between the two title parts. */
  breakTitle?: boolean;
  titleMaxWidth?: number;
  descriptionMaxWidth?: number;
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
  const titleAccentFirst = section.titleAccentFirst !== false;
  const accentSpan = (
    <span className="vbs-our-clients__title-accent">{section.titleAccent}</span>
  );
  const darkSpan = (
    <span className="vbs-our-clients__title-dark">{section.titleLead}</span>
  );

  return (
    <section className="vbs-our-clients">
      <PageContainer className="vbs-our-clients__container">
        <div
          className="vbs-our-clients__head"
          style={
            section.descriptionMaxWidth
              ? { ["--our-clients-head-max-w"]: laptopCappedMaxWidth(section.descriptionMaxWidth, "desc") }
              : undefined
          }
        >
          <div className="vbs-our-clients__head-top">
            <span className="vbs-our-clients__tag">{section.tag}</span>
            <h2
              className="vbs-our-clients__title"
              style={
                section.titleMaxWidth
                  ? { ["--our-clients-title-max-w"]: laptopCappedMaxWidth(section.titleMaxWidth, "title") }
                  : undefined
              }
            >
              {titleAccentFirst ? (
                <>
                  {accentSpan}
                  {section.breakTitle ? <br /> : null}
                  {darkSpan}
                </>
              ) : (
                <>
                  {darkSpan}
                  {section.breakTitle ? <br /> : null}
                  {accentSpan}
                </>
              )}
            </h2>
          </div>
          {section.description ? (
            <p
              className="vbs-our-clients__desc"
              style={
                section.descriptionMaxWidth
                  ? { maxWidth: laptopCappedMaxWidth(section.descriptionMaxWidth, "desc") }
                  : undefined
              }
            >
              {section.description}
            </p>
          ) : null}
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
