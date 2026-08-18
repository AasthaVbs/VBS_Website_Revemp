import type { Metadata } from "next";

import { MepBimServicesNewYorkPage } from "@/components/vbs/mep-bim-services-new-york-page";

export const metadata: Metadata = {
  title: "MEP BIM Services in New York | Pre-Vetted MEP Experts",
  description:
    "Get the best BIM MEP services in New York from US-trained MEP modelers. Minimize rework, meet tight deadlines, and scale with a 30-day risk-free trial.",
};

export default function Page() {
  return <MepBimServicesNewYorkPage />;
}
