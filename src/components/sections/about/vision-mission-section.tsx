import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionTag } from "@/components/sections/section-primitives";
import {
  aboutVisionImage,
  visionMissionCards,
} from "@/constants/about-content";
import { cn } from "@/lib/utils";

function VisionMissionCard({
  card,
  className,
}: {
  card: (typeof visionMissionCards)[number];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative flex flex-col gap-[15px] overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-[0_4px_10px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-[#FBF9F9] p-[15px]">
          <Image
            src={card.iconSrc}
            alt=""
            width={46}
            height={46}
            aria-hidden
            className="h-[46px] w-[46px]"
          />
        </div>
        <h3 className="text-[28px] font-normal leading-none text-[#111111] sm:text-[32px] lg:text-[36px]">
          {card.title}
        </h3>
      </div>
      <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
      <Image
        src={card.iconSrc}
        alt=""
        width={141}
        height={141}
        aria-hidden
        className="pointer-events-none absolute right-[-10px] top-[-45px] hidden h-[141px] w-[141px] opacity-10 lg:block"
      />
    </article>
  );
}

/** Figma node 325:28047 — Company's Vision & Mission */
export function VisionMissionSection() {
  const [visionCard, missionCard] = visionMissionCards;

  return (
    <section className="overflow-x-clip bg-white py-12 lg:overflow-x-visible lg:py-[100px]">
      <PageContainer className="flex flex-col items-center gap-10 lg:gap-[60px]">
        <div className="flex w-full max-w-[710px] flex-col items-center gap-3 text-center">
          <SectionTag label="Our Vision" />
          <h2 className="text-section capitalize">
            Company&apos;s <span className="text-accent font-light">Vision & Mission</span>
          </h2>
        </div>

        {/* Desktop: cards vertically centered, overlapping left/right of image */}
        <div className="relative mx-auto hidden w-full max-w-[1440px] overflow-visible lg:block">
          <div className="relative mx-auto aspect-[705/612] w-full max-w-[705px]">
            <div className="relative h-full w-full overflow-hidden rounded-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
              <div className="absolute left-[-30.14%] top-[-0.49%] h-[100.65%] w-[160.14%]">
                <Image
                  src={aboutVisionImage}
                  alt="VBS team at work"
                  fill
                  className="object-cover object-center"
                  sizes="705px"
                />
              </div>
            </div>

            <VisionMissionCard
              card={visionCard}
              className="absolute left-0 top-1/2 z-10 w-[388px] -translate-x-[68%] -translate-y-1/2"
            />
            <VisionMissionCard
              card={missionCard}
              className="absolute right-0 top-1/2 z-10 w-[436px] -translate-y-1/2 translate-x-[72%]"
            />
          </div>
        </div>

        {/* Mobile / tablet: image then stacked cards */}
        <div className="flex w-full flex-col items-center gap-6 lg:hidden">
          <div className="relative aspect-[705/612] w-full max-w-[705px] overflow-hidden rounded-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
            <div className="absolute left-[-30.14%] top-[-0.49%] h-[100.65%] w-[160.14%]">
              <Image
                src={aboutVisionImage}
                alt="VBS team at work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 705px"
              />
            </div>
          </div>
          <div className="flex w-full max-w-[436px] flex-col gap-5">
            {visionMissionCards.map((card) => (
              <VisionMissionCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
