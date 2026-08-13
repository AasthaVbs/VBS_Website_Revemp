import type { Metadata } from "next";

import { StructuralBimServicesPage } from "@/components/vbs/structural-bim-services-page";

export const metadata: Metadata = {
  title: "Structural BIM Services | Revit Structural Modeling | USA",
  description:
    "Structural BIM Services for AEC teams. Revit structural modeling, steel detailing, rebar schedules, shop drawings, and AI-driven workflows for faster, code-compliant delivery.",
};

export default function Page() {
  return <StructuralBimServicesPage />;
}
