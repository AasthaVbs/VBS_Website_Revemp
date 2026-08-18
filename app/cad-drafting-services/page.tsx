import type { Metadata } from "next";

import { CadDraftingServicesPage } from "@/components/vbs/cad-drafting-services-page";
import { cadDraftingFaqSchema } from "@/constants/cad-drafting-services-content";

const PAGE_TITLE = "Outsource CAD drafting services | AutoCAD Drawings in USA";
const PAGE_DESCRIPTION =
  "Get high-quality CAD Drafting Services on time. Boost your productivity and reduce in-house workload with our top 1% US-trained AutoCAD Drawing experts.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "CAD drafting services, CAD drawing services, AutoCAD drafting services, CAD drafting company, CAD drafting outsourcing services, outsource CAD drafting services, CAD drafting service provider, AutoCAD drawing services, outsource CAD drafting services in USA",
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cadDraftingFaqSchema),
        }}
      />
      <CadDraftingServicesPage />
    </>
  );
}
