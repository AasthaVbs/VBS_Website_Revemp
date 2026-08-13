import type { Metadata } from "next";

import { SchematicDesignServicesPage } from "@/components/vbs/schematic-design-services-page";

export const metadata: Metadata = {
  title: "Schematic Design Services | Architectural SD Phase Support | USA",
  description:
    "Schematic design support services for AEC firms. Site plans, floor plans, elevations, 3D visualizations, and AI-assisted workflows for fast, code-compliant conceptual design.",
};

export default function Page() {
  return <SchematicDesignServicesPage />;
}
