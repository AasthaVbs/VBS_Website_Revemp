import type { Metadata } from "next";

import { ArchitecturalBimServicesPage } from "@/components/vbs/architectural-bim-services-page";

export const metadata: Metadata = {
  title: "Architectural BIM Services USA | Revit Architecture Modeling",
  description:
    "US-trained BIM architects deliver AI-powered Architectural BIM Modeling Services — Revit models, documentation, clash coordination, and visualization for overloaded AEC teams.",
};

export default function Page() {
  return <ArchitecturalBimServicesPage />;
}
