import type { Metadata } from "next";

import { MepRevitFamilyCreationPage } from "@/components/vbs/mep-revit-family-creation-page";

export const metadata: Metadata = {
  title: "MEP Revit Family Creation Services | Virtual Building Studio",
  description:
    "Scalable MEP Revit Family Creation Services for growing BIM projects. Custom parametric Revit families for HVAC, mechanical, plumbing, electrical, and firefighting systems.",
};

export default function MepRevitFamilyCreationServicesRoute() {
  return <MepRevitFamilyCreationPage />;
}
