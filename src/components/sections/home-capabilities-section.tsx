import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { homeCapabilityCards, type HomeCapabilityCard } from "@/constants/home-content";

function ChevronRightIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CapabilityCard({ image, title, summary, description, href = "/#capabilities" }: HomeCapabilityCard) {
  return (
    <article className="capability-card vbs-capability-card group relative overflow-hidden rounded-[10px] bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="capability-card__gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="vbs-capability-card__panel absolute inset-x-0 bottom-0 flex flex-col items-end justify-end p-5">
        <div className="vbs-capability-card__content flex w-full flex-col items-start">
          <h3 className="vbs-capability-card__title">{title}</h3>
          <div className="vbs-capability-card__reveal">
            <div className="vbs-capability-card__reveal-inner">
              <div className="vbs-capability-card__details">
                <p className="vbs-capability-card__summary">{summary}</p>
                <p className="vbs-capability-card__description">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="vbs-capability-card__link-reveal">
          <div className="vbs-capability-card__link-reveal-inner">
            <Link href={href} className="vbs-capability-card__link">
              Explore More
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function HomeCapabilitiesSection() {
  return (
    <section id="capabilities" className="vbs-home-capabilities bg-white py-[100px]">
      <PageContainer className="vbs-home-capabilities__container flex flex-col items-start gap-[40px]">
        <div className="vbs-home-capabilities__head flex w-full flex-col items-start gap-2">
          <div className="flex flex-col items-start gap-2">
            <span className="vbs-home-hero__tag">Our Capabilities</span>
            <h2 className="vbs-home-capabilities__title max-w-[572px] text-section">
              Built Around How You <span className="text-accent">Already Work</span>
            </h2>
          </div>
          <p className="vbs-home-capabilities__desc mb-5 max-w-[729px] text-[16px] font-normal leading-6 text-[#808080]">
            Three buyers carry the delivery load in AEC. Our BIM modeling services adapt to each
            select the one that describes your firm and we&apos;ll show you exactly how we plug in.
          </p>
        </div>

        <div className="vbs-home-capabilities__grid grid w-full gap-4 md:grid-cols-3">
          {homeCapabilityCards.map((card) => (
            <CapabilityCard key={card.title} {...card} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
