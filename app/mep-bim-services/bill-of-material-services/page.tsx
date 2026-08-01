import type { Metadata } from "next";

import { MepBillOfMaterialPage } from "@/components/vbs/mep-bill-of-material-page";

export const metadata: Metadata = {
  title: "Bill of Material (BOM) Services | Virtual Building Studio",
  description:
    "Accurate Bill of Material and BOQ services from coordinated BIM models. US-trained MEP experts deliver quantity takeoffs that reduce procurement delays and cost risk.",
};

export default function MepBillOfMaterialServicesRoute() {
  return <MepBillOfMaterialPage />;
}
