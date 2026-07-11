import { SiteHeader } from "@/components/layout/site-header";
import { ThankYouSection } from "@/components/sections/thank-you-section";
import { DeferredSiteFooter } from "@/lib/lazy-page-sections";

export function ThankYouPage() {
  return (
    <div className="vbs-redesign-page thank-you-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main>
        <ThankYouSection />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
