import type { Metadata } from "next";

import { FloorPlanServicesPage } from "@/components/vbs/floor-plan-services-page";

export const metadata: Metadata = {
  title: "2D and 3D Floor Plan Services | Architecture, Real Estate & Construction | USA",
  description:
    "2D and 3D floor plan services for architecture, real estate and construction teams. Convert sketches and CAD files into accurate, code-ready plans with AI-assisted BIM workflows.",
};

export default function Page() {
  return <FloorPlanServicesPage />;
}
