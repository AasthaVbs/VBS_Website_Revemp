import type { Metadata } from "next";

import { CadDraftingServicesPage } from "@/components/vbs/cad-drafting-services-page";

export const metadata: Metadata = {
  title: "CAD Drafting Services USA | AutoCAD Drafting Outsourcing",
  description:
    "US-trained CAD drafters deliver AutoCAD drafting services to cut repetitive drafting time — code-compliant drawings, permit sets, and documentation support for AEC firms.",
};

export default function Page() {
  return <CadDraftingServicesPage />;
}
