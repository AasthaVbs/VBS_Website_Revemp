import type { Metadata } from "next";

import { ThreeDRenderingServicesPage } from "@/components/vbs/3d-rendering-services-page";

export const metadata: Metadata = {
  title: "3D Rendering Services for Architecture Firms | USA",
  description:
    "3D rendering services for firms awaiting design approvals. US-trained BIM experts deliver exterior, interior and walkthrough visuals faster with AI-powered workflows.",
};

export default function Page() {
  return <ThreeDRenderingServicesPage />;
}
