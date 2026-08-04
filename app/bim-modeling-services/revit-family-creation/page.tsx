import type { Metadata } from "next";

import { RevitFamilyCreationPage } from "@/components/vbs/revit-family-creation-page";

export const metadata: Metadata = {
  title: "Revit Family Creation Services USA | Parametric BIM Content",
  description:
    "Custom Revit Family Creation Services for architecture and structural teams — parametric BIM objects, LOD 100–500, IFC-compliant libraries, and US-trained Revit experts.",
};

export default function Page() {
  return <RevitFamilyCreationPage />;
}
