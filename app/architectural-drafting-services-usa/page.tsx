import type { Metadata } from "next";

import { ArchitecturalDraftingServicesUsaPage } from "@/components/vbs/architectural-drafting-services-usa-page";

export const metadata: Metadata = {
  title: "Architectural Drafting Services USA | Permit-Ready Revit & AutoCAD",
  description:
    "Drafting-only support from U.S.-trained architects. Permit-ready, code-compliant drawings in Revit & AutoCAD so your firm stays focused on design.",
};

export default function Page() {
  return <ArchitecturalDraftingServicesUsaPage />;
}
