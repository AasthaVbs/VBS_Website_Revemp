import { ChevronRight } from "lucide-react";

import { PageContainer } from "@/components/layout/page-container";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

export function EvaluateDeliveryCtaSection() {
  return (
    <section className="bg-white py-[100px]">
      <PageContainer>
        <div className="evaluate-delivery-cta-card">
          <div className="evaluate-delivery-cta-mosaic" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/figma/evaluate-cta-mosaic.svg"
              alt=""
              width={1440}
              height={1467}
            />
          </div>
          <div className="evaluate-delivery-cta-panel">
            <div className="flex flex-1 flex-col items-start justify-center gap-5">
              <h2 className="text-section max-w-[530px]">
                Evaluate Your <span className="text-accent">Delivery Capacity</span>
              </h2>
              <p className="max-w-[478px] text-[16px] font-normal capitalize leading-6 text-[#808080]">
                A structured conversation about scale, standards, and fit.
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
