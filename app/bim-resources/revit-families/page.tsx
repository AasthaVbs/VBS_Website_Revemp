import type { Metadata } from "next";

import { BimResourceDownloadPage } from "@/components/vbs/bim-resource-download-page";
import { bimResourceRevitFamiliesContent } from "@/constants/bim-resources-content";

export const metadata: Metadata = {
  title: bimResourceRevitFamiliesContent.meta.title,
  description: bimResourceRevitFamiliesContent.meta.description,
};

export default function Page() {
  return <BimResourceDownloadPage content={bimResourceRevitFamiliesContent} />;
}
