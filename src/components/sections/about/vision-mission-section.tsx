import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { SectionIntro } from "@/components/sections/section-primitives";
import { visionMissionCards } from "@/constants/about-content";

export function VisionMissionSection() {
  return (
    <section className="bg-white py-[100px]">
      <PageContainer className="flex flex-col gap-[60px]">
        <SectionIntro
          tag="Our Vision"
          title={
            <>
              Company&apos;s <span className="text-accent">Vision & Mission</span>
            </>
          }
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="relative mx-auto h-[400px] w-full max-w-[640px] overflow-hidden rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/figma/hero-bg-1.png"
              alt="VBS team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </div>

          <div className="flex flex-col gap-5 lg:absolute lg:right-0 lg:top-1/2 lg:w-[min(480px,45%)] lg:-translate-y-1/2">
            {visionMissionCards.map((card, index) => (
              <article
                key={card.title}
                className={`relative flex flex-col gap-4 rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${
                  index === 1 ? "lg:ml-8" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#CBCCCD] bg-[#FAFAFA] text-2xl">
                    {card.icon}
                  </div>
                  <h3 className="text-[24px] font-medium text-[#111111]">{card.title}</h3>
                </div>
                <p className="text-[16px] font-normal leading-6 text-[#808080]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
