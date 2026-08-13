import type { Metadata } from "next";

import { ArchitecturalBimServicesPage } from "@/components/vbs/architectural-bim-services-page";

export const metadata: Metadata = {
  title: "Architectural BIM Services USA | Architectural 3D BIM Modeling",
  description:
    "Leverage US-trained licensed BIM architects from the trusted Architectural BIM Services Company to resolve design clashes, reduce rework, and speed project delivery.",
};

export default function Page() {
  return <ArchitecturalBimServicesPage />;
}
