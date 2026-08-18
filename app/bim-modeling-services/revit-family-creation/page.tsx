import type { Metadata } from "next";

import { RevitFamilyCreationPage } from "@/components/vbs/revit-family-creation-page";
import { revitFamilyCreationFaqSchema } from "@/constants/revit-family-creation-content";

const PAGE_TITLE = "Revit Family Creation Services | Trusted by 200+ Firms in USA";
const PAGE_DESCRIPTION =
  "Get code-compliant Revit Family & BIM Content Creation Services from top 1% US-trained licensed BIM experts, ready to integrate into your team in 3 days.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(revitFamilyCreationFaqSchema),
        }}
      />
      <RevitFamilyCreationPage />
    </>
  );
}
