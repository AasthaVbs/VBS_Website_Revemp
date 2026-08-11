import type { Metadata } from "next";

import { RevitArchitecturalDraftingPage } from "@/components/vbs/revit-architectural-drafting-page";

export const metadata: Metadata = {
  title: "Revit Architectural Drafting Services | Permit-Ready Drawings",
  description:
    "Get permit-ready architectural drafts on time with Revit and AutoCAD. Code-compliant, approval-ready drawings from U.S.-trained architects and drafters.",
  alternates: {
    canonical: "/revit-architectural-drafting-services",
  },
};

export default function Page() {
  return <RevitArchitecturalDraftingPage />;
}
