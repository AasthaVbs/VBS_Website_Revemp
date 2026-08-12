import type { Metadata } from "next";

import { BimResourceDownloadPage } from "@/components/vbs/bim-resource-download-page";
import { bimResourcePlumbingEstimationContent } from "@/constants/bim-resources-content";

export const metadata: Metadata = {
  title: bimResourcePlumbingEstimationContent.meta.title,
  description: bimResourcePlumbingEstimationContent.meta.description,
};

export default function Page() {
  return <BimResourceDownloadPage content={bimResourcePlumbingEstimationContent} />;
}
