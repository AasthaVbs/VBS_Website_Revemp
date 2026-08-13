import type { Metadata } from "next";

import { PermitDrawingServicesPage } from "@/components/vbs/permit-drawing-services-page";

export const metadata: Metadata = {
  title: "Permit Drawing Services | Code-Ready Permit Sets | USA",
  description:
    "Permit drawing services for commercial and residential projects. Code-compliant plans, elevations, sections, and revision support with AI-assisted BIM workflows.",
};

export default function Page() {
  return <PermitDrawingServicesPage />;
}
