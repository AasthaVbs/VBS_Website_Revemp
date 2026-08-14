import type { Metadata } from "next";

import { ArchitecturalBimServicesPage } from "@/components/vbs/architectural-bim-services-page";

export const metadata: Metadata = {
  title: "Architectural BIM Services USA | Architectural 3D BIM Modeling",
  description:
    "Leverage US-trained licensed BIM architects from the trusted Architectural BIM Services Company to resolve design clashes, reduce rework, and speed project delivery.",
  keywords:
    "Architectural BIM Services Company, Architectural BIM Modeling Services, Architectural Outsourcing Services, BIM Architectural Modeling Services, Architectural Modeling Services, Architecture Outsourcing Services, BIM Architectural Services, Architectural CAD to BIM Services, Revit Architecture Services, Architectural BIM Company, Architectural BIM Outsourcing Services, Architectural BIM Services Company, Architectural 3D BIM Modeling, Architectural BIM Services in USA",
};

export default function Page() {
  return <ArchitecturalBimServicesPage />;
}
