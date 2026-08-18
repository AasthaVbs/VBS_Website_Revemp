import type { Metadata } from "next";

import { MepRevitFamilyCreationPage } from "@/components/vbs/mep-revit-family-creation-page";
import { mepRevitFamilyCreationFaqSchema } from "@/constants/mep-revit-family-creation-content";

const PAGE_TITLE = "MEP Revit Family Creation Services in USA | HVAC Family";
const PAGE_DESCRIPTION =
  "Scale instantly with dedicated Revit experts for MEP Revit Family Creation Services, delivering high-accuracy LOD 300-400 Revit families with fast turnaround.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "MEP Revit Family Creation Services, MEP Family Creation Services, MEP Family Creation Services Provider, MEP Revit family creation company USA, Revit Mechanical Family Creation, Revit Plumbing Family Creation, Revit Firefighting Family Creation, Revit HVAC Family Creation, Custom Revit Families for MEP, Revit Family Creation for MEP, LOD 300 / LOD 400 Revit families",
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

export default function MepRevitFamilyCreationServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mepRevitFamilyCreationFaqSchema),
        }}
      />
      <MepRevitFamilyCreationPage />
    </>
  );
}
