import type { Metadata } from "next";

import { MepEngineersPage } from "@/components/vbs/mep-engineers-page";

export const metadata: Metadata = {
  title: "MEP BIM Services | Virtual Building Studio",
  description:
    "MEP BIM services that reduce rework and improve project coordination for contractors and AEC firms across the USA.",
};

export default function MepEngineersRoute() {
  return <MepEngineersPage />;
}
