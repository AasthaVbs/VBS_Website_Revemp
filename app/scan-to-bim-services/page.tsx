import type { Metadata } from "next";

import { ScanToBimServicesPage } from "@/components/vbs/scan-to-bim-services-page";

export const metadata: Metadata = {
  title: "Scan to BIM Services | Point Cloud to BIM Modeling USA",
  description:
    "Plug-in top scan to BIM Services into your team to transform point clouds into detailed BIM - fast, accurate, and trusted by surveyors and architects",
};

export default function Page() {
  return <ScanToBimServicesPage />;
}
