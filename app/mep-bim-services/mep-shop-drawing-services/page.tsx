import type { Metadata } from "next";

import { MepShopDrawingPage } from "@/components/vbs/mep-shop-drawing-page";

export const metadata: Metadata = {
  title: "Shop Drawing Services | Fabrication Drawing ",
  description:
    "Get on-demand US-trained top 1% architects for accurate architectural Shop Drawing & Fabrication Drawings, ensuring precise fabrication, seamless installation, and faster delivery.",
};

export default function MepShopDrawingServicesRoute() {
  return <MepShopDrawingPage />;
}
