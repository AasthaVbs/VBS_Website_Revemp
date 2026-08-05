import type { Metadata } from "next";

import { ProfessionalArchitecturalDraftingServicesView } from "@/components/landing/professional-architectural-drafting-services-view";

export const metadata: Metadata = {
  title: "Professional Architectural Drafting Services | Virtual Building Studio",
  description:
    "Construction-ready CAD and Revit drawings by dedicated drafters — permit-ready documents, ISO-certified quality, and flexible engagement for AEC firms.",
  robots: { index: false, follow: true },
};

export default function ProfessionalArchitecturalDraftingServicesPage() {
  return <ProfessionalArchitecturalDraftingServicesView />;
}
