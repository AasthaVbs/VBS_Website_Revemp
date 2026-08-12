import type { Metadata } from "next";

import { BimResourceDownloadPage } from "@/components/vbs/bim-resource-download-page";
import { bimResourceMechanicalPipingContent } from "@/constants/bim-resources-content";

export const metadata: Metadata = {
  title: bimResourceMechanicalPipingContent.meta.title,
  description: bimResourceMechanicalPipingContent.meta.description,
};

export default function Page() {
  return <BimResourceDownloadPage content={bimResourceMechanicalPipingContent} />;
}
