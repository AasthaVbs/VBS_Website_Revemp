import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { PageContainer } from "@/components/layout/page-container";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata = {
  title: "Thank You | Virtual Building Studio",
  description: "Thank you for contacting Virtual Building Studio.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <section className="py-16 lg:py-24" aria-labelledby="thank-you-title">
        <PageContainer className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-6">
            <h1 id="thank-you-title" className="text-section">
              Thank you
            </h1>
            <p className="text-body text-[#808080]">
              We highly value your interest in Virtual Building Studio. To ensure a seamless
              communication experience, we kindly recommend checking your email, including your
              spam folder, for an automated response from us. Occasionally, these emails may find
              their way into the spam folder.
            </p>
            <Link
              href="/"
              className="inline-flex w-fit items-center rounded-[10px] border border-[#D70416] px-5 py-3 text-[16px] font-medium text-[#D70416] transition-colors hover:bg-[#FEF3F3]"
            >
              Back to Home
            </Link>
          </div>
        </PageContainer>
      </section>

      <SiteFooter />
    </div>
  );
}
