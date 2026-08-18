import type { Metadata } from "next";

import { ThreeDRenderingServicesPage } from "@/components/vbs/3d-rendering-services-page";
import { threeDRenderingFaqSchema } from "@/constants/3d-rendering-services-content";

const PAGE_TITLE =
  "Architectural 3D Rendering Services | Interior, Exterior 3D Walkthrough";
const PAGE_DESCRIPTION =
  "Our US-trained architects use AI-assisted workflows to deliver exterior, interior and walkthrough renders for architecture firms, faster and at scale.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "3D rendering services, architectural rendering services, 3d architectural rendering services, 3D rendering company, architectural rendering company, 3D exterior rendering services, 3D interior rendering services, 3D rendering service provider, 3D architectural walkthrough services, outsourcing architectural 3D rendering services",
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
          __html: JSON.stringify(threeDRenderingFaqSchema),
        }}
      />
      <ThreeDRenderingServicesPage />
    </>
  );
}
