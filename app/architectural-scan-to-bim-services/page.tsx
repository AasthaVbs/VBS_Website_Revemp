import type { Metadata } from "next";

import { ArchitecturalScanToBimServicesPage } from "@/components/vbs/architectural-scan-to-bim-services-page";
import { architecturalScanToBimFaqSchema } from "@/constants/architectural-scan-to-bim-content";

const PAGE_TITLE =
  "AI-powered Architectural Scan to BIM Services | Reality Capture";
const PAGE_DESCRIPTION =
  "Our BIM experts use AI-powered workflow to deliver quality assured Architectural Scan to BIM Services for the global AEC industry.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "architectural scanning services, architectural scan to BIM services, scan to BIM outsourcing services, reality capture architecture, architectural point cloud modeling",
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
          __html: JSON.stringify(architecturalScanToBimFaqSchema),
        }}
      />
      <ArchitecturalScanToBimServicesPage />
    </>
  );
}
