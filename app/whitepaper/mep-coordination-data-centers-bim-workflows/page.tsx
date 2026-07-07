import type { Metadata } from "next";

import { MepDataCentersWhitepaperView } from "@/components/whitepaper/mep-data-centers-whitepaper-view";
import { mepDataCentersWhitepaperContent as content } from "@/constants/whitepaper-mep-data-centers-content";

export const metadata: Metadata = {
  title: `${content.seoTitle} | Virtual Building Studio`,
  description: content.seoDescription,
  openGraph: {
    title: content.seoTitle,
    description: content.seoDescription,
    images: [{ url: content.ogImage }],
  },
};

export default function MepCoordinationDataCentersBimWorkflowsPage() {
  return <MepDataCentersWhitepaperView />;
}
