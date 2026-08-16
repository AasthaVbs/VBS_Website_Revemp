import type { Metadata } from "next";

import { LaserScanToBimPage } from "@/components/vbs/laser-scan-to-bim-page";

export const metadata: Metadata = {
  title: "Laser Scan to BIM Services | Point Cloud to Revit | VBS",
  description:
    "AI-powered Scan to BIM services from top 1% US-trained experts. Convert point clouds into Revit or CAD models with 99% accuracy for renovation and retrofit workflows.",
};

export default function Page() {
  return <LaserScanToBimPage />;
}
