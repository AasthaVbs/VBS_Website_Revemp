import type { Metadata } from "next";

import { ArchitecturalDraftingServicesPage } from "@/components/vbs/architectural-drafting-services-page";

export const metadata: Metadata = {
  title: "Architectural Drafting Services USA | Revit & CAD Drafting",
  description:
    "US-trained Revit drafters deliver Architectural Drafting Services for reduced rework and faster approvals — code-compliant construction documents for overloaded AEC teams.",
};

export default function Page() {
  return <ArchitecturalDraftingServicesPage />;
}
