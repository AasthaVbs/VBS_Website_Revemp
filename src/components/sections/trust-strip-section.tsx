import { Fragment } from "react";

import { PageContainer } from "@/components/layout/page-container";

const TRUST_VALUE_CLASS: Record<string, string> = {
  "text-vbs-red": "vbs-home-hero-trust__value--red",
  "text-vbs-green": "vbs-home-hero-trust__value--green",
  "text-vbs-blue": "vbs-home-hero-trust__value--blue",
  "text-vbs-yellow": "vbs-home-hero-trust__value--yellow",
};

type TrustStat = {
  value: string;
  label: string;
  color: string;
};

export function TrustStripItems({ stats }: { stats: readonly TrustStat[] }) {
  return (
    <div className="vbs-home-hero-trust">
      {stats.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 ? <hr className="vbs-home-hero-trust__divider" aria-hidden="true" /> : null}
          <article className="vbs-home-hero-trust__item">
            <div className="vbs-home-hero-trust__copy">
              <p className={`vbs-home-hero-trust__value ${TRUST_VALUE_CLASS[item.color] || ""}`}>
                {item.value}
              </p>
              <p className="vbs-home-hero-trust__label">{item.label}</p>
            </div>
          </article>
        </Fragment>
      ))}
    </div>
  );
}

export function TrustStripSection({
  stats,
  className = "vbs-trust-strip-section bg-white",
}: {
  stats: readonly TrustStat[];
  className?: string;
}) {
  return (
    <section className={className}>
      <PageContainer>
        <TrustStripItems stats={stats} />
      </PageContainer>
    </section>
  );
}
