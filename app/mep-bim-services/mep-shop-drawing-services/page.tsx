import type { Metadata } from "next";

import { MepShopDrawingPage } from "@/components/vbs/mep-shop-drawing-page";

export const metadata: Metadata = {
  title: "MEP Shop Drawing Services | Virtual Building Studio",
  description:
    "High-quality MEP Shop Drawing Services to minimize field rework. Revit shop drawings for HVAC, mechanical, electrical, and plumbing systems.",
};

export default function MepShopDrawingServicesRoute() {
  return <MepShopDrawingPage />;
}
