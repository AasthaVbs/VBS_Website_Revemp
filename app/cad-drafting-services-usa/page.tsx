import type { Metadata } from "next";

import { CadDraftingServicesUsaPage } from "@/components/vbs/cad-drafting-services-usa-page";

export const metadata: Metadata = {
  title: "CAD Drafting Services USA | On-Demand Remote Architects",
  description:
    "On-demand CAD drafting by remote Architect Level I, II & III. US-trained talent for AutoCAD drafting, elevations, conversions, and redline markups.",
};

export default function Page() {
  return <CadDraftingServicesUsaPage />;
}
