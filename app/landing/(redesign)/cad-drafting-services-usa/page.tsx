import type { Metadata } from "next";

import { CadDraftingServicesUsaLandingView } from "@/components/landing/cad-drafting-services-usa-view";

export const metadata: Metadata = {
  title: "Cad Drafting Services USA |  CAD Drawings in Autocad | Virtual Building Studio",
  description:
    "Get precise and efficient CAD Drafting Services for architecture, engineering, and construction. Enhance accuracy, streamline workflows, and accelerate project delivery.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Cad Drafting Services USA |  CAD Drawings in Autocad",
    description:
      "Get precise and efficient CAD Drafting Services for architecture, engineering, and construction. Enhance accuracy, streamline workflows, and accelerate project delivery.",
    images: [{ url: "/image/main-img.png" }],
  },
};

export default function CadDraftingServicesUsaLandingPage() {
  return <CadDraftingServicesUsaLandingView />;
}
