import type { Metadata } from "next";

import { ThreeDVisualizationServicesPage } from "@/components/vbs/3d-visualization-services-page";

export const metadata: Metadata = {
  title: "Architectural 3D Visualization Services | Photorealistic Renders | USA",
  description:
    "Architectural visualization services in 3D for faster design approvals. Photorealistic renders, walkthroughs, 360° tours and VR/AR-ready files from US-trained visualization architects.",
};

export default function Page() {
  return <ThreeDVisualizationServicesPage />;
}
