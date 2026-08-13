import type { Metadata } from "next";

import { ConstructionDocumentationServicesPage } from "@/components/vbs/construction-documentation-services-page";

export const metadata: Metadata = {
  title: "Construction Documentation Services | Permit-Ready CD Sets | USA",
  description:
    "Construction documentation services for AEC firms. Architectural and structural CD sets, schedules, details, and AI-assisted BIM workflows for faster permit-ready delivery.",
};

export default function Page() {
  return <ConstructionDocumentationServicesPage />;
}
