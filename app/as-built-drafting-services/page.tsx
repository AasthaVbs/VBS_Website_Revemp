import type { Metadata } from "next";

import { AsBuiltDraftingServicesPage } from "@/components/vbs/as-built-drafting-services-page";

export const metadata: Metadata = {
  title: "As-Built Drafting Services | Renovation, Compliance & Facility Records | USA",
  description:
    "As-built drafting services for renovation, compliance and facility records. Field-verified drawings, BOMA calculations, and code-ready documentation with AI-assisted BIM workflows.",
};

export default function Page() {
  return <AsBuiltDraftingServicesPage />;
}
