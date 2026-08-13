import type { Metadata } from "next";

import { ThreeDRenderingServicesUsaPage } from "@/components/vbs/3d-rendering-services-usa-page";

export const metadata: Metadata = {
  title: "3D Rendering Services - Architectural Rendering Services",
  description:
    "Bring designs to life with our professional 3D Rendering Services. We deliver high-quality architectural renderings that enhance visualization, accuracy, and client presentations",
  alternates: {
    canonical: "/3d-rendering-services-usa",
  },
};

export default function Page() {
  return <ThreeDRenderingServicesUsaPage />;
}
