import type { Metadata } from "next";

import { ArchitectureServicesPage } from "@/components/vbs/architecture-services-page";

const PAGE_TITLE = "Architectural and Structural Services | Revit Architectural Services";
const PAGE_DESCRIPTION =
  "We deliver US code-compliant Structural and Architecture Services, from schematic design to construction documentation. Trusted BIM Company for AEC firms.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return <ArchitectureServicesPage />;
}
