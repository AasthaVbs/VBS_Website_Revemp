import type { Metadata } from "next";

import { ThreeDRenderingServicesUsaPage } from "@/components/vbs/3d-rendering-services-usa-page";

export const metadata: Metadata = {
  title: "3D Rendering Services USA | Project-Based Pricing from $1,600",
  description:
    "One fixed price covers exteriors, interiors & floor plans. Professional 3D rendering for architects and builders — starting at $1,600.",
  alternates: {
    canonical: "/3d-rendering-services-usa",
  },
};

export default function Page() {
  return <ThreeDRenderingServicesUsaPage />;
}
