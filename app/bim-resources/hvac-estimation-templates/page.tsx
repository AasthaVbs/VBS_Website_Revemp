import type { Metadata } from "next";

import { BimResourceDownloadPage } from "@/components/vbs/bim-resource-download-page";
import { bimResourceHvacEstimationContent } from "@/constants/bim-resources-content";

export const metadata: Metadata = {
  title: bimResourceHvacEstimationContent.meta.title,
  description: bimResourceHvacEstimationContent.meta.description,
};

export default function Page() {
  return <BimResourceDownloadPage content={bimResourceHvacEstimationContent} />;
}
