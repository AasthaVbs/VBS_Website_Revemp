"use client";

import { ZohoPublicIframeForm } from "@/components/zoho/zoho-public-iframe-form";
import {
  bimResourcesContent,
  type BimResourcePageContent,
} from "@/constants/bim-resources-content";
import { cn } from "@/lib/utils";
import {
  ZOHO_BIM_RESOURCE_DOWNLOAD_FOOTER_CROP_PX,
  ZOHO_BIM_RESOURCE_DOWNLOAD_HEADER_CROP_PX,
  ZOHO_BIM_RESOURCE_DOWNLOAD_IFRAME_ID,
  ZOHO_BIM_RESOURCE_DOWNLOAD_IFRAME_SRC,
  ZOHO_BIM_RESOURCE_DOWNLOAD_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

/**
 * Zoho VBS Resource Download Form for /bim-resources and resource download pages.
 * UTM + referrername are applied via ZohoPublicIframeForm + site ZFAdvLead script.
 */
export function BimResourcesDownloadForm({
  className,
  content = bimResourcesContent,
}: {
  className?: string;
  content?: BimResourcePageContent;
}) {
  const { form } = content;

  return (
    <div
      className={cn(
        "bim-resources__form flex w-full flex-col gap-4 rounded-[10px] border border-[#CBCCCD] bg-white p-5 shadow-[0_4px_15px_rgba(0,0,0,0.08)] sm:gap-5 sm:p-6",
        className,
      )}
    >
      <div className="flex flex-col gap-2.5">
        <h2 className="bim-resources__form-title">{form.title}</h2>
        <p className="bim-resources__form-desc">{form.description}</p>
      </div>

      <div className="bim-resources__zoho-embed w-full min-w-0">
        <ZohoPublicIframeForm
          iframeId={ZOHO_BIM_RESOURCE_DOWNLOAD_IFRAME_ID}
          iframeSrc={ZOHO_BIM_RESOURCE_DOWNLOAD_IFRAME_SRC}
          title="VBS Resource Download Form"
          initialHeight={ZOHO_BIM_RESOURCE_DOWNLOAD_VISIBLE_HEIGHT_PX}
          headerCropPx={ZOHO_BIM_RESOURCE_DOWNLOAD_HEADER_CROP_PX}
          footerCropPx={ZOHO_BIM_RESOURCE_DOWNLOAD_FOOTER_CROP_PX}
          cropHeader=""
          lockHeight
          transparentBackground
          loadPriority="high"
          className="bim-resources__zoho-iframe"
          frameClassName="bim-resources__zoho-frame"
        />
      </div>
    </div>
  );
}
