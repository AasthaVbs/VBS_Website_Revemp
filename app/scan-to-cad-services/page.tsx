import type { Metadata } from "next";

import { ScanToCadServicesPage } from "@/components/vbs/scan-to-cad-services-page";
import { scanToCadFaqSchema } from "@/constants/scan-to-cad-services-content";

const PAGE_TITLE = "Scan to CAD Conversion Services | AI-Powered CAD Drafting";
const PAGE_DESCRIPTION =
  "Need accurate CAD drawings from laser scans? Our Scan to CAD conversion services deliver reliable 2D documentation for architecture, engineering, and construction projects.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "3D scan to CAD, 3D scanner for CAD modeling, AutoCAD point cloud, convert point cloud to 3D model AutoCAD, 3D scan to 2D drawing, 3D scan to CAD model, laser scan to CAD, 2D scan to CAD, LiDAR scan to CAD, scan to DWG converter, point clouds in AutoCAD",
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
          __html: JSON.stringify(scanToCadFaqSchema),
        }}
      />
      <ScanToCadServicesPage />
    </>
  );
}
