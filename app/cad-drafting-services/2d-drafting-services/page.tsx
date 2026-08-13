import type { Metadata } from "next";

import { TwoDDraftingServicesPage } from "@/components/vbs/2d-drafting-services-page";

export const metadata: Metadata = {
  title: "2D Drafting Services | 2D CAD Drawing Services USA",
  description:
    "Expand your documentation capacity with AI-assisted 2D Drafting Services. Pre-vetted architects and engineers deliver fast, error-free 2D CAD drawings on time.",
};

export default function Page() {
  return <TwoDDraftingServicesPage />;
}
