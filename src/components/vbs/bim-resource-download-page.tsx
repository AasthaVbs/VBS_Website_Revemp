import { SiteHeader } from "@/components/layout/site-header";
import { BimResourcesSection } from "@/components/sections/bim-resources/bim-resources-section";
import type { BimResourcePageContent } from "@/constants/bim-resources-content";
import { DeferredSiteFooter } from "@/lib/lazy-page-sections";

export function BimResourceDownloadPage({ content }: { content: BimResourcePageContent }) {
  return (
    <div className="vbs-redesign-page bim-resources-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <BimResourcesSection content={content} />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
