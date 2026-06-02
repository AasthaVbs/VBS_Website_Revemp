import type { Metadata } from "next";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { PageContainer } from "@/components/layout/page-container";
import { SiteFooter } from "@/components/sections/site-footer";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";

export const metadata: Metadata = {
  title: "MEP Coordination for Data Centers | Whitepaper | Virtual Building Studio",
  description:
    "Read our whitepaper on MEP coordination strategies for data center BIM workflows.",
};

export default function MepCoordinationDataCentersWhitepaperPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main className="bg-white py-12 lg:py-[100px]">
        <PageContainer className="flex flex-col gap-8">
          <Link href="/" className="text-[16px] font-medium text-[#2299D6]">
            Back to Home
          </Link>

          <article className="flex max-w-[920px] flex-col gap-6">
            <h1 className="text-section">
              MEP Coordination for Data Centers{" "}
              <span className="text-accent font-light">BIM Workflows</span>
            </h1>
            <p className="text-[16px] leading-6 text-[#808080]">
              This whitepaper page is now live at the requested URL. Share your final content and
              sections, and I can format the full whitepaper layout exactly to your preferred design.
            </p>
            <PrimaryCtaButton fullWidth={false} href="/contact">
              Contact Us
            </PrimaryCtaButton>
          </article>
        </PageContainer>
      </main>

      <SiteFooter />
    </div>
  );
}
