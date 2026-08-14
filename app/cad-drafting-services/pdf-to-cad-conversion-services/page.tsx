import type { Metadata } from "next";

import { PdfToCadConversionServicesPage } from "@/components/vbs/pdf-to-cad-conversion-services-page";

export const metadata: Metadata = {
  title: "PDF to CAD Conversion Services, DWG to PDF Convert, 2D to 3D CAD",
  description:
    "Enable editable, precise, and faster project workflows with US-trained top 1% licensed architects delivering accurate PDF to CAD and DWG to PDF conversions.",
};

export default function Page() {
  return <PdfToCadConversionServicesPage />;
}
