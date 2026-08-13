import type { Metadata } from "next";

import { CadToBimConversionServicesPage } from "@/components/vbs/cad-to-bim-conversion-services-page";

export const metadata: Metadata = {
  title: "CAD to BIM Conversion Services USA",
  description:
    "Expert CAD to BIM Conversion Services: From PDF to BIM, Clash Detection, and BIM Coordination to Lifecycle Modeling and Object Tagging, we ensure accuracy and efficiency in every project.",
};

export default function Page() {
  return <CadToBimConversionServicesPage />;
}
