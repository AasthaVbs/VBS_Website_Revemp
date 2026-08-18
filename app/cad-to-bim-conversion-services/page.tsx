import type { Metadata } from "next";

import { CadToBimConversionServicesPage } from "@/components/vbs/cad-to-bim-conversion-services-page";

export const metadata: Metadata = {
  title: "CAD to BIM Conversion Services USA",
  description:
    "Expert CAD to BIM Conversion Services for PDF to BIM, Clash Detection, Coordination, Lifecycle Modeling & Object Tagging - ensuring accuracy and efficiency.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CadToBimConversionServicesPage />;
}
