"use client";

import { ZohoPublicIframeForm } from "@/components/zoho/zoho-public-iframe-form";
import { cn } from "@/lib/utils";
import {
  ZOHO_ACS_INQUIRY_FOOTER_CROP_PX,
  ZOHO_ACS_INQUIRY_HEADER_CROP_PX,
  ZOHO_ACS_INQUIRY_IFRAME_ID,
  ZOHO_ACS_INQUIRY_IFRAME_SRC,
  ZOHO_ACS_INQUIRY_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

type AcsInquiryZohoHeroFormProps = {
  headingLead?: string;
  headingAccent?: string;
  className?: string;
};

/**
 * Zoho VBS Inquiry form ACS for USA architectural hero cards
 * (/architectural-drafting-services-usa, /architectural-bim-services-usa,
 * /revit-architectural-drafting-services).
 */
export function AcsInquiryZohoHeroForm({
  headingLead,
  headingAccent,
  className,
}: AcsInquiryZohoHeroFormProps) {
  const hasHeading = Boolean(headingLead || headingAccent);

  return (
    <div className={cn("acs-inquiry-zoho-hero", className)}>
      {hasHeading ? (
        <h3 className="acs-inquiry-zoho-hero__title">
          <span className="acs-inquiry-zoho-hero__title-lead">{headingLead}</span>
          {headingAccent ? (
            <span className="acs-inquiry-zoho-hero__title-accent">{headingAccent}</span>
          ) : null}
        </h3>
      ) : null}

      <div className="acs-inquiry-zoho-hero__embed">
        <ZohoPublicIframeForm
          iframeId={ZOHO_ACS_INQUIRY_IFRAME_ID}
          iframeSrc={ZOHO_ACS_INQUIRY_IFRAME_SRC}
          title="VBS Inquiry form ACS"
          initialHeight={ZOHO_ACS_INQUIRY_VISIBLE_HEIGHT_PX}
          headerCropPx={ZOHO_ACS_INQUIRY_HEADER_CROP_PX}
          footerCropPx={ZOHO_ACS_INQUIRY_FOOTER_CROP_PX}
          cropHeader=""
          lockHeight
          loadPriority="high"
          className="acs-inquiry-zoho-hero__iframe"
          frameClassName="acs-inquiry-zoho-hero__frame"
        />
      </div>
    </div>
  );
}
