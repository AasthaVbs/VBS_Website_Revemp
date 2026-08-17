import type { Metadata } from "next";

import { CadDraftingServicesNewYorkPage } from "@/components/vbs/cad-drafting-services-new-york-page";

export const metadata: Metadata = {
  title: "CAD Drafting Services in New York | Virtual Building Studio",
  description:
    "Hire US-trained CAD drafters in New York for code-compliant, permit-ready drawings. Reduce design errors, coordination issues, and last-minute changes without hiring a full-time local drafter.",
};

export default function Page() {
  return <CadDraftingServicesNewYorkPage />;
}
