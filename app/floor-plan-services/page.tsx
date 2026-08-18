import type { Metadata } from "next";

import { FloorPlanServicesPage } from "@/components/vbs/floor-plan-services-page";
import { floorPlanFaqSchema } from "@/constants/floor-plan-services-content";

const PAGE_TITLE = "2D & 3D Floor Plan Services | Convert 2D Floor Plan to 3D Model";
const PAGE_DESCRIPTION =
  "Get accurate 2D and 3D floor plan services for renovations, real estate and construction delivered by US-trained BIM architects using AI-powered workflow.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "2D Floor Plan, 3D Floor Plan, 2D Floor Plan Services, 3D Floor Plan Services, 2D to 3D Floor Plan Conversion Services, 2D Floor Plan Company, 3D Floor Plan Company, Outsource 2D Floor Plan Services, Outsource 3D Floor Plan Services, Convert 2D Floor Plan to 3D Model, real estate floor plan conversions",
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
          __html: JSON.stringify(floorPlanFaqSchema),
        }}
      />
      <FloorPlanServicesPage />
    </>
  );
}
