import type { Metadata } from "next";

import { MepShopDrawingPage } from "@/components/vbs/mep-shop-drawing-page";
import { mepShopDrawingFaqSchema } from "@/constants/mep-shop-drawing-content";

const PAGE_TITLE = "MEP Shop Drawing Services USA | Revit MEP Drafting Services";
const PAGE_DESCRIPTION =
  "Partner with the leading MEP Shop Drawing Service Provider for precise, clash-free MEP Shop Drawing Services that streamline construction workflows.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "MEP Shop Drawing Services, MEP Shop Drawings, Revit MEP Shop Drawings, MEP Shop Drawing Service Provider, MEP Shop drawing Company, HVAC Shop Drawing Services USA, Plumbing Shop Drawings, Electrical Shop Drawings, Mechanical Shop Drawings, Revit shop drawings for MEP, HVAC Duct Shop Drawings",
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

export default function MepShopDrawingServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mepShopDrawingFaqSchema),
        }}
      />
      <MepShopDrawingPage />
    </>
  );
}
