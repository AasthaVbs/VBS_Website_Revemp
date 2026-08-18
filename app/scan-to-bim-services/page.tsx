import type { Metadata } from "next";

import { ScanToBimServicesPage } from "@/components/vbs/scan-to-bim-services-page";
import { scanToBimFaqSchema } from "@/constants/scan-to-bim-content";

const PAGE_TITLE =
  "Reality Capture to BIM Services in the USA | Scan to Revit & Archicad";
const PAGE_DESCRIPTION =
  "Virtual Building Studio delivers AI-powered scan to BIM services in the USA. Converting point clouds to construction-ready 3D Revit models from LOD 200 to 500.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "scan to BIM Revit, scan to BIM Revit services, scan to BIM USA, 3D scan to Revit, scan to Revit, 3D scan to Revit model, Reality capture to BIM services, laser scan to BIM",
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(scanToBimFaqSchema),
        }}
      />
      <ScanToBimServicesPage />
    </>
  );
}
