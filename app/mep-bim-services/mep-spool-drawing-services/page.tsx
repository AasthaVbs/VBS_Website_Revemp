import type { Metadata } from "next";

import { MepSpoolDrawingPage } from "@/components/vbs/mep-spool-drawing-page";
import { mepSpoolDrawingFaqSchema } from "@/constants/mep-spool-drawing-content";

const PAGE_TITLE = "Piping Spool Drawing Services | 2D/3D Piping Spool Drawings";
const PAGE_DESCRIPTION =
  "Eliminate site rework with expert piping spool drawing services. We deliver fabrication-ready 2D & 3D pipe spool shop drawings, ensuring accuracy and fast delivery.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords:
    "Pipe spool drawing, Piping Spool Drawing Services, Fabrication Drawings Services, 2D piping spool drawings, 3D piping spool drawings, Pipe Spool Shop Drawing Services, Outsource Piping Spool Drawing Services, BIM Spool Drawing Services",
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

export default function MepSpoolDrawingServicesRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mepSpoolDrawingFaqSchema),
        }}
      />
      <MepSpoolDrawingPage />
    </>
  );
}
