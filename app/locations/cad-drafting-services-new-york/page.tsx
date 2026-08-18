import type { Metadata } from "next";

import { CadDraftingServicesNewYorkPage } from "@/components/vbs/cad-drafting-services-new-york-page";

export const metadata: Metadata = {
  title: "CAD Drafting Services New York | US-trained CAD Drafters",
  description:
    "Get drafting solutions in New York from licensed, US-trained architects. Reduce redlines, meet deadlines, and scale with a risk-free 30-day trial.",
};

export default function Page() {
  return <CadDraftingServicesNewYorkPage />;
}
