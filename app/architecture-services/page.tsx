import type { Metadata } from "next";

import { ArchitectureServicesPage } from "@/components/vbs/architecture-services-page";

export const metadata: Metadata = {
  title: "Architectural and Structural Services | Revit Architectural Services",
  description:
    "We deliver US code-compliant Structural and Architecture Services, from schematic design to construction documentation. Trusted BIM Company for AEC firms.",
};

export default function Page() {
  return <ArchitectureServicesPage />;
}
