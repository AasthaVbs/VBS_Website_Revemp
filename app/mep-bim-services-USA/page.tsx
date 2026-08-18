import type { Metadata } from "next";

import { MepBimServicesUsaPage } from "@/components/vbs/mep-bim-services-usa-page";

export const metadata: Metadata = {
  title: "MEP BIM Services | Mechanical, Electrical, Plumbing, Fire",
  description:
    "We deliver US Construction code compliant MEP BIM Services, clash-free MEPF models, shop drawings, and as-built documentation.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/mep-bim-services-USA",
  },
};

export default function Page() {
  return (
    <div className="mep-bim-services-usa-page">
      <MepBimServicesUsaPage />
    </div>
  );
}
