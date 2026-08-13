import type { Metadata } from "next";

import { RevitFamilyCreationPage } from "@/components/vbs/revit-family-creation-page";

export const metadata: Metadata = {
  title: "Revit Family Creation Services | BIM Object Creation USA",
  description:
    "Get code-compliant MEP Family & BIM Content Creation Services from top 1% US-trained licensed BIM experts, ready to integrate into your team in 5 days.",
};

export default function Page() {
  return <RevitFamilyCreationPage />;
}
