import type { Metadata } from "next";

import { ArchitectureServicesPage } from "@/components/vbs/architecture-services-page";

export const metadata: Metadata = {
  title: "Architecture & Structure Services | Virtual Building Studio",
  description:
    "Architectural BIM modeling, documentation, and design support for AEC firms. Code-compliant deliverables from schematic design through construction documentation.",
};

export default function Page() {
  return <ArchitectureServicesPage />;
}
