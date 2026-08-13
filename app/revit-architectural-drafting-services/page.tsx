import type { Metadata } from "next";

import { RevitArchitecturalDraftingPage } from "@/components/vbs/revit-architectural-drafting-page";

export const metadata: Metadata = {
  title: "Revit Architectural Drafting Services – 200+ Revit Drafting Experts",
  description:
    "Cut drafting costs without compromising quality. Our Revit drafting experts support architects with accurate, detailed, and scalable architectural drawings.",
  alternates: {
    canonical: "/revit-architectural-drafting-services",
  },
};

export default function Page() {
  return <RevitArchitecturalDraftingPage />;
}
