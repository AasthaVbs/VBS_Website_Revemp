import type { Metadata } from "next";

import { PdfToCadConversionServicesPage } from "@/components/vbs/pdf-to-cad-conversion-services-page";
import { pdfToCadFaqSchema } from "@/constants/pdf-to-cad-conversion-services-content";

const PAGE_TITLE = "PDF to CAD Conversion | Paper to AutoCAD Services in USA";
const PAGE_DESCRIPTION =
  "Our pre-vetted CAD experts deliver Paper or PDF to CAD Conversion Services using AI-powered workflows and expert drafting to deliver clean DWG and DXF files faster.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "PDF to CAD Conversion, PDF to CAD Conversion Services, PDF to AutoCAD conversion, PDF to DWG Conversion, Paper to CAD Conversion, Paper to CAD Conversion Services, 2D to 3D CAD Conversion Services, PDF to CAD Drafting Services, PDF to DXF Conversion",
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
          __html: JSON.stringify(pdfToCadFaqSchema),
        }}
      />
      <PdfToCadConversionServicesPage />
    </>
  );
}
