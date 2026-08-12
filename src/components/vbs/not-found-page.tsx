import Image from "next/image";

import { SiteHeader } from "@/components/layout/site-header";
import { PrimaryCtaButton } from "@/components/ui/primary-cta-button";
import { DeferredSiteFooter } from "@/lib/lazy-page-sections";

/** Figma node 4223:62123 — Page not found */
export function NotFoundPage() {
  return (
    <div className="vbs-redesign-page vbs-not-found-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main>
        <section
          className="flex w-full flex-col items-center justify-center gap-10 px-5 pb-16 pt-0 sm:px-10 sm:pb-20 sm:pt-0 lg:px-[240px] lg:pb-[100px] lg:pt-0"
          aria-labelledby="not-found-title"
        >
          <div className="relative h-auto w-full max-w-[865px]">
            <Image
              src="/image/404-illustration.png"
              alt="404 construction workers assembling large red numbers"
              width={865}
              height={400}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-[30px]">
            <div className="flex flex-col items-center justify-center gap-5">
              <h1
                id="not-found-title"
                className="text-center text-[32px] font-medium leading-normal text-[#111111] sm:text-[40px] lg:text-[48px]"
              >
                Page not found
              </h1>
              <p className="max-w-[520px] text-center text-[16px] font-normal leading-6 text-[#808080]">
                Sorry 😔, we couldn’t find what you were looking for.
              </p>
            </div>

            <PrimaryCtaButton href="/" fullWidth={false} className="w-[176px]">
              Go home
            </PrimaryCtaButton>
          </div>
        </section>
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
