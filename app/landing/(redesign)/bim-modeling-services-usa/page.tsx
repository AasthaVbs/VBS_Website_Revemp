import type { Metadata } from "next";

import { BimModelingServicesUsaLandingView } from "@/components/landing/bim-modeling-services-usa-view";

export const metadata: Metadata = {
  title: "LOD 100–500 BIM Modeling Services | Delivered in 1 Days",
  description:
    "Scale your BIM production capacity with dedicated Revit and Navisworks specialists. Get accurate LOD 100–500 BIM models delivered in as little as 1 days.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "LOD 100–500 BIM Modeling Services | Delivered in 1 Days",
    description:
      "Scale your BIM production capacity with dedicated Revit and Navisworks specialists. Get accurate LOD 100–500 BIM models delivered in as little as 1 days.",
    images: [{ url: "/image/main-img.png" }],
  },
};

export default function BimModelingServicesUsaLandingPage() {
  return <BimModelingServicesUsaLandingView />;
}
