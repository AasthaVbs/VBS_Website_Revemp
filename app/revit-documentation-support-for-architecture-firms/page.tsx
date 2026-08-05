import type { Metadata } from "next";

import { RevitDocumentationSupportPage } from "@/components/vbs/revit-documentation-support-page";
import { revitDocumentationSupportMeta } from "@/constants/revit-documentation-support-content";

export const metadata: Metadata = {
  title: revitDocumentationSupportMeta.title,
  description: revitDocumentationSupportMeta.description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <RevitDocumentationSupportPage />;
}
