import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { aiaWalkthroughCopy, aiaWalkthroughPoints } from "@/constants/aia-conference-events-content";

export function AiaWalkthroughSection() {
  return (
    <section className="aia-split aia-split--walk bg-[#FAFAFA] py-12 lg:py-[100px]">
      <PageContainer>
        <div className="aia-split__row aia-split__row--walk">
          <div className="aia-split__copy">
            <div className="flex w-full flex-col items-start gap-3">
              <SectionTag label={aiaWalkthroughCopy.tag} />
              <h2 className="text-section w-full capitalize">
                {aiaWalkthroughCopy.titleLead}
                <span className="text-accent font-light">{aiaWalkthroughCopy.titleAccent}</span>
              </h2>
            </div>
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#808080]">
              {aiaWalkthroughCopy.description}
            </p>
            <div className="aia-pressure__list">
              {aiaWalkthroughPoints.map((point, index) => (
                <div key={point.title} className="aia-pressure__item">
                  {index > 0 ? <div className="aia-pressure__rule" aria-hidden /> : null}
                  <div className="aia-pressure__row">
                    <span className="aia-pressure__bullet" aria-hidden />
                    <p className="aia-pressure__text">
                      <span className="text-[#111111]">{point.title}</span>
                      <span className="text-[#808080]">{point.text}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aia-split__media aia-split__media--walk">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={aiaWalkthroughCopy.image} alt={aiaWalkthroughCopy.imageAlt} loading="lazy" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
