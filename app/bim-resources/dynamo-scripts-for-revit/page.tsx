import type { Metadata } from "next";

import { BimResourceDownloadPage } from "@/components/vbs/bim-resource-download-page";
import { bimResourceDynamoScriptsContent } from "@/constants/bim-resources-content";

export const metadata: Metadata = {
  title: bimResourceDynamoScriptsContent.meta.title,
  description: bimResourceDynamoScriptsContent.meta.description,
};

export default function Page() {
  return <BimResourceDownloadPage content={bimResourceDynamoScriptsContent} />;
}
