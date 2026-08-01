import type { Metadata } from "next";

import { MepSpoolDrawingPage } from "@/components/vbs/mep-spool-drawing-page";

export const metadata: Metadata = {
  title: "MEP Spool Drawing Services | Virtual Building Studio",
  description:
    "Eliminate fabrication errors with piping spool drawing services. LOD 400 2D and 3D spool drawings, BOM, weld symbols, and clash-resolved packages for AEC teams.",
};

export default function MepSpoolDrawingServicesRoute() {
  return <MepSpoolDrawingPage />;
}
