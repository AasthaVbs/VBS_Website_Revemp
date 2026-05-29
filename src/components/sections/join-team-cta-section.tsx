import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

export function JoinTeamCtaSection() {
  return (
    <section className="bg-white py-[100px]">
      <PageContainer>
        <div className="relative min-h-[200px] overflow-hidden rounded-[10px] bg-white shadow-[2px_2px_30px_rgba(0,0,0,0.15)]">
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <Image
              src="/images/figma/evaluate-cta-mosaic.svg"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 rounded-[10px] bg-white p-[50px] md:flex-row md:items-center">
            <div className="flex max-w-[640px] flex-col gap-5">
              <h2 className="text-[48px] font-medium capitalize leading-[1.15] text-[#111111]">
                Join <span className="font-light text-vbs-red">the Team</span>
              </h2>
              <p className="text-[16px] font-normal capitalize leading-6 text-[#808080]">
                Join our team 150+ Architecture from the across the globe and contribute to
                groundbreaking projects with top-tier architects and engineers.
              </p>
            </div>
            <PrimaryCtaButton fullWidth={false} className="shrink-0">
              Contact Us
              <ChevronRight className="h-2.5 w-2.5" strokeWidth={1.5} />
            </PrimaryCtaButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
