import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import { visionMissionCards, visionMissionSectionCopy } from "@/constants/about-content";
import { cn } from "@/lib/utils";

function VisionMissionCard({
  card,
  className,
}: {
  card: (typeof visionMissionCards)[number];
  className?: string;
}) {
  return (
    <article className={cn("vbs-vision-mission__card", className)}>
      <div className="vbs-vision-mission__card-icon">
        <Image src={card.iconSrc} alt="" width={46} height={46} aria-hidden />
      </div>
      <h3 className="vbs-vision-mission__card-title">{card.title}</h3>
      <p className="vbs-vision-mission__card-desc">{card.description}</p>
    </article>
  );
}

/** Figma node 1983:31589 — Company's Vision & Mission */
export function VisionMissionSection() {
  const { tag, titleLead, titleAccent, description } = visionMissionSectionCopy;

  return (
    <section className="vbs-vision-mission overflow-hidden bg-white py-12 lg:py-[100px]">
      <PageContainer className="vbs-vision-mission__inner">
        <div className="vbs-vision-mission__header">
          <div className="vbs-vision-mission__title-block">
            <SectionTag label={tag} className="self-center" />
            <h2 className="text-section text-center capitalize">
              {titleLead}
              <span className="text-accent font-light">{titleAccent}</span>
            </h2>
          </div>
          <p className="vbs-vision-mission__desc">{description}</p>
        </div>

        <div className="vbs-vision-mission__panels">
          {visionMissionCards.map((card, index) => (
            <VisionMissionCard
              key={card.title}
              card={card}
              className={index === 0 ? "vbs-vision-mission__card--vision" : "vbs-vision-mission__card--mission"}
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
