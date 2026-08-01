import type { Metadata } from "next";

import { ScanToCadServicesPage } from "@/components/vbs/scan-to-cad-services-page";

export const metadata: Metadata = {
  title: "Scan to CAD Conversion Services | Point Cloud to DWG | VBS",
  description:
    "Convert laser scans and legacy drawings into build-ready CAD files. AI-powered scan to CAD drafting, floor plans, RCP, structural and MEP drawings for AEC teams.",
};

export default function Page() {
  return <ScanToCadServicesPage />;
}
