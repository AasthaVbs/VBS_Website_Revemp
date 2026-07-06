import type { Metadata } from "next";

import { ScanToBimServicesPage } from "@/components/vbs/scan-to-bim-services-page";

export const metadata: Metadata = {
  title: "Scan to BIM Services | Virtual Building Studio",
  description:
    "Point cloud to BIM modeling services for as-built documentation, renovation, and coordination. AI-powered scan-to-BIM workflows with LOD 200–500 capability.",
};

export default function Page() {
  return <ScanToBimServicesPage />;
}
