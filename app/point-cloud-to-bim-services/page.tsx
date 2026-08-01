import type { Metadata } from "next";

import { PointCloudToBimServicesPage } from "@/components/vbs/point-cloud-to-bim-services-page";

export const metadata: Metadata = {
  title: "Point Cloud to BIM Services | Scan to Revit Conversion | VBS",
  description:
    "Convert messy laser scans into reliable Revit models fast. AI-powered point cloud to BIM conversion, CAD output, clash detection, and as-built documentation for AEC firms.",
};

export default function Page() {
  return <PointCloudToBimServicesPage />;
}
