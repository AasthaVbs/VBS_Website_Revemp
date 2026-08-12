import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BimResourcesSection } from "@/components/sections/bim-resources/bim-resources-section";
import { bimResourcesContent } from "@/constants/bim-resources-content";
import { DeferredSiteFooter } from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: bimResourcesContent.meta.title,
  description: bimResourcesContent.meta.description,
};

export default function BimResourcesPage() {
  return (
    <div className="vbs-redesign-page bim-resources-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <BimResourcesSection content={bimResourcesContent} />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
