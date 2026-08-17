import type { Metadata } from "next";

import { MepBimServicesNewYorkPage } from "@/components/vbs/mep-bim-services-new-york-page";

export const metadata: Metadata = {
  title: "MEP BIM Services in New York | Virtual Building Studio",
  description:
    "Hire US-trained MEP BIM modelers in New York for precise, clash-free, code-compliant models. Cut rework, beat delays, and keep NYC projects running smoothly.",
};

export default function Page() {
  return <MepBimServicesNewYorkPage />;
}
