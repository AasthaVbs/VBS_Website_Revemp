import type { Metadata } from "next";

import { BimResourceDownloadPage } from "@/components/vbs/bim-resource-download-page";
import { bimResourceBimExecutionPlanContent } from "@/constants/bim-resources-content";

export const metadata: Metadata = {
  title: bimResourceBimExecutionPlanContent.meta.title,
  description: bimResourceBimExecutionPlanContent.meta.description,
};

export default function Page() {
  return <BimResourceDownloadPage content={bimResourceBimExecutionPlanContent} />;
}
