import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BimResourcesSection } from "@/components/sections/bim-resources/bim-resources-section";
import { bimResourcesContent } from "@/constants/bim-resources-content";
import { DeferredSiteFooter } from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "BIM Resource Hub - Virtual Building Studio",
  description:
    "BIM Resource Hub: Your go-to destination for all things Building Information Modeling. Expert insights, tools, and more!",
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
