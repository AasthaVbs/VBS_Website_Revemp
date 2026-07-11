import { SiteHeader } from "@/components/layout/site-header";
import { LegalDocumentSection } from "@/components/sections/legal/legal-document-section";
import type { LegalDocumentContent } from "@/constants/legal-content";
import { DeferredGetInTouchSection, DeferredSiteFooter } from "@/lib/lazy-page-sections";

export function LegalPage({ document }: { document: LegalDocumentContent }) {
  return (
    <div className="vbs-redesign-page legal-page min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />

      <main>
        <LegalDocumentSection document={document} />
        <DeferredGetInTouchSection />
      </main>

      <DeferredSiteFooter />
    </div>
  );
}
