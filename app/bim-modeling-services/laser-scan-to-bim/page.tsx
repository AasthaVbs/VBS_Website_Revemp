import type { Metadata } from "next";

import { LaserScanToBimPage } from "@/components/vbs/laser-scan-to-bim-page";
import { laserScanToBimFaqSchema } from "@/constants/laser-scan-to-bim-content";

const PAGE_TITLE = "Scan to BIM Services | Point Cloud to BIM Modeling USA";
const PAGE_DESCRIPTION =
  "Plug-in top scan to BIM Services into your team to transform point clouds into detailed BIM - fast, accurate, and trusted by surveyors and architects";

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
          __html: JSON.stringify(laserScanToBimFaqSchema),
        }}
      />
      <LaserScanToBimPage />
    </>
  );
}
