import Image from "next/image";

import { PageContainer } from "@/components/layout/page-container";
import {
  cadDraftingUsaClientLogos,
  cadDraftingUsaClientsSection,
} from "@/constants/cad-drafting-services-usa-content";

/** Figma 3991:48110 — Trusted architecture clients marquee */
export function CadDraftingUsaClientsSection({
  section = cadDraftingUsaClientsSection,
  logos = cadDraftingUsaClientLogos,
}: {
  section?: typeof cadDraftingUsaClientsSection;
  logos?: typeof cadDraftingUsaClientLogos;
} = {}) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="cad-usa-clients relative overflow-hidden bg-white py-12 sm:py-16 lg:py-[100px]">
      <PageContainer>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-[60px]">
          <h2 className="w-full max-w-[475px] shrink-0 capitalize text-section lg:w-[450px]">
            <span className="text-section font-medium text-[#111111]">{section.titleLead}</span>
            <br />
            <span className="text-section text-accent font-light">{section.titleAccent}</span>
          </h2>

          <div className="cad-usa-clients__marquee relative min-w-0 flex-1 overflow-hidden py-8 lg:py-20 lg:pl-[60px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-white to-transparent lg:w-[124px]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-20 bg-gradient-to-l from-white to-transparent lg:w-[266px]" />
            <div className="cad-usa-clients__track flex w-max items-center gap-12 lg:gap-20">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="relative h-14 w-[140px] shrink-0 sm:h-20 sm:w-[196px]"
                >
                  <Image
                    src={logo.src}
                    alt={index < logos.length ? logo.name : ""}
                    aria-hidden={index >= logos.length ? true : undefined}
                    fill
                    className="object-contain"
                    sizes="196px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
