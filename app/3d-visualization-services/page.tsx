import type { Metadata } from "next";

import { ThreeDVisualizationServicesPage } from "@/components/vbs/3d-visualization-services-page";
import { visualizationFaqSchema } from "@/constants/3d-visualization-services-content";

const PAGE_TITLE = "Architectural 3D Visualization and Walkthrough Services | USA";
const PAGE_DESCRIPTION =
  "Get stunning visuals with our 3D Architectural Visualization Services tailored to your design and marketing needs, powered by top 1% US-trained architects.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "3D Visualization Services, 3D Product Visualization Services, 3D Architectural Visualization Services, Architectural Visualization Services, Architectural Visualization Company, Architectural 3D Visualization Services, 3D Visualization Services Provider, 3D Architectural Visualization Studio",
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
          __html: JSON.stringify(visualizationFaqSchema),
        }}
      />
      <ThreeDVisualizationServicesPage />
    </>
  );
}
