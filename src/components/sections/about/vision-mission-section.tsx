import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  aboutVisionImage,
  visionMissionCards,
  visionMissionSectionCopy,
} from "@/constants/about-content";
import { cn } from "@/lib/utils";

function VisionMissionCard({
  card,
  className,
  watermarkClassName,
}: {
  card: (typeof visionMissionCards)[number];
  className?: string;
  watermarkClassName?: string;
}) {
  return (
    <article className={cn("vbs-vision-mission__card", className)}>
      <div className="vbs-vision-mission__card-head">
        <div className="vbs-vision-mission__card-icon">
          <Image src={card.iconSrc} alt="" width={46} height={46} aria-hidden />
        </div>
        <h3 className="vbs-vision-mission__card-title">{card.title}</h3>
      </div>
      <p className="vbs-vision-mission__card-desc">{card.description}</p>
      <Image
        src={card.iconSrc}
        alt=""
        width={141}
        height={141}
        aria-hidden
        className={cn("vbs-vision-mission__card-watermark", watermarkClassName)}
      />
    </article>
  );
}

/** Figma node 325:28047 — Company's Vision & Mission */
export function VisionMissionSection() {
  const [visionCard, missionCard] = visionMissionCards;
  const { tag, titleLead, titleAccent, description } = visionMissionSectionCopy;

  return (
    <section className="vbs-vision-mission overflow-x-clip bg-white py-12 lg:overflow-x-visible lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="vbs-vision-mission__header">
          <SectionTag label={tag} className="self-center" />
          <h2 className="text-section capitalize">
            {titleLead}
            <span className="text-accent font-light">{titleAccent}</span>
          </h2>
          <p className="vbs-vision-mission__desc">{description}</p>
        </div>

        <div className="vbs-vision-mission__stage w-full">
          <div className="vbs-vision-mission__image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={aboutVisionImage} alt="VBS team at work" />
          </div>

          <VisionMissionCard card={visionCard} className="vbs-vision-mission__card--vision" />
          <VisionMissionCard
            card={missionCard}
            className="vbs-vision-mission__card--mission"
            watermarkClassName="!top-[-40px]"
          />
        </div>

        <div className="vbs-vision-mission__mobile-cards lg:hidden">
          {visionMissionCards.map((card) => (
            <VisionMissionCard key={card.title} card={card} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
