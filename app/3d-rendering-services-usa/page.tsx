import type { Metadata } from "next";

import { ThreeDRenderingServicesUsaPage } from "@/components/vbs/3d-rendering-services-usa-page";

export const metadata: Metadata = {
  title: "3D Rendering Services - Architectural Rendering Services",
  description:
    "Bring designs to life with professional 3D Rendering Services. Get high-quality architectural renderings for better visualization, accuracy, and client presentations.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "/3d-rendering-services-usa",
  },
};

export default function Page() {
  return <ThreeDRenderingServicesUsaPage />;
}
