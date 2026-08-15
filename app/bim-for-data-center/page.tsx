import type { Metadata } from "next";

import { BimForDataCenterPage } from "@/components/vbs/bim-for-data-center-page";

export const metadata: Metadata = {
  title: "Data Center BIM Services for Architecture Firms | USA",
  description:
    "Data center BIM services to eliminate capacity gaps, coordination errors and permit delays. Pre-vetted US-trained BIM architects with AI-assisted workflows for architecture firms.",
};

export default function Page() {
  return <BimForDataCenterPage />;
}
