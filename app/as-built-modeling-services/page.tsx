import type { Metadata } from "next";

import { AsBuiltModelingServicesPage } from "@/components/vbs/as-built-modeling-services-page";

export const metadata: Metadata = {
  title: "As Built BIM Modeling Services | True-to-Site Documentation | VBS",
  description:
    "Convert scan data into coordinated architectural, structural, and MEPF as-built BIM models. AI-enabled workflows, LOD 200–400, and construction-ready documentation for AEC firms.",
};

export default function Page() {
  return <AsBuiltModelingServicesPage />;
}
