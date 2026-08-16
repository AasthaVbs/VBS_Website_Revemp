import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import {
  OUR_EXPERTISE_CAPABILITIES_ID,
  ourExpertiseCapabilitiesSection,
  ourExpertiseCapabilityCards,
} from "@/constants/our-expertise-content";

export function OurExpertiseCapabilitiesSection() {
  return (
    <section
      id={OUR_EXPERTISE_CAPABILITIES_ID}
      className="scroll-mt-24 bg-white py-12 sm:py-16 lg:py-[100px]"
    >
      <PageContainer>
        <div className="flex flex-col items-start gap-8 lg:gap-[60px]">
          <h2 className="max-w-[753px] text-section max-lg:mx-auto max-lg:text-center">
            <span className="text-section font-medium text-[#111111]">
              {ourExpertiseCapabilitiesSection.titleLead}
            </span>
            <br />
            <span className="text-section text-accent font-light">
              {ourExpertiseCapabilitiesSection.titleAccent}
            </span>
          </h2>

          <div className="grid w-full items-stretch gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {ourExpertiseCapabilityCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col items-start gap-5 overflow-hidden rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-none transition-shadow duration-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
              >
                <div className="relative h-[200px] w-full overflow-hidden rounded-[10px] border border-[#CBCCCD] sm:h-[260px] lg:h-[300px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
                <div className="flex w-full flex-1 flex-col items-start gap-4">
                  <h3 className="w-full text-[20px] font-normal leading-normal text-[#111111] sm:text-[24px]">
                    {card.title}
                  </h3>
                  <p className="w-full text-[16px] font-normal leading-6 text-[#808080]">
                    {card.description}
                  </p>
                </div>
                <PrimaryCtaButton
                  fullWidth
                  href={card.href}
                  className="mt-auto !h-auto !min-h-[56px] !px-5 !py-4 capitalize"
                >
                  View More Details
                </PrimaryCtaButton>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
