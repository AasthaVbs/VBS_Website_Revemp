import type { Metadata } from "next";

import { ArchitecturalScanToBimServicesPage } from "@/components/vbs/architectural-scan-to-bim-services-page";

export const metadata: Metadata = {
  title: "Architectural Scan to BIM Services | Point Cloud to Revit | VBS",
  description:
    "Outsource architectural scan to BIM modeling. AI-powered workflows convert point clouds into LOD 200–400 coordinated Revit models for architecture firms under tight deadlines.",
};

export default function Page() {
  return <ArchitecturalScanToBimServicesPage />;
}
