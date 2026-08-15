import type { Metadata } from "next";

import { DesignDevelopmentServicesPage } from "@/components/vbs/design-development-services-page";

export const metadata: Metadata = {
  title: "Design Development Services | Revit DD Support for Architects | USA",
  description:
    "Design development services for architecture firms. Coordinated Revit models, clash detection, code review, and CD-ready packages with AI-assisted BIM workflows.",
};

export default function Page() {
  return <DesignDevelopmentServicesPage />;
}
