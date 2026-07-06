import type { Metadata } from "next";

import { MepEngineersPage } from "@/components/vbs/mep-engineers-page";

export const metadata: Metadata = {
  title: "MEP BIM Services | Virtual Building Studio",
  description:
    "MEP BIM modeling, coordination, and fabrication-ready deliverables for contractors and AEC firms across the United States.",
};

/** Gatsby URL alias — same content as /mep-engineers */
export default function Page() {
  return <MepEngineersPage />;
}
