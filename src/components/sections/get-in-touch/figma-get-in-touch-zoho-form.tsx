"use client";

import dynamic from "next/dynamic";

import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { GET_IN_TOUCH_EMBED_HEIGHT_DESKTOP_PX } from "@/utils/zoho-contact-form-embed";

const ClientOnlyZohoContactForm = dynamic(
  () =>
    import("@/components/zoho/client-only-zoho-contact-form").then(
      (mod) => mod.ClientOnlyZohoContactForm,
    ),
  {
    ssr: false,
    loading: () => <SectionSkeleton minHeight={GET_IN_TOUCH_EMBED_HEIGHT_DESKTOP_PX} />,
  },
);

/** Inline Zoho embed for Figma Get in Touch (no contact/meeting tabs). */
export function FigmaGetInTouchZohoForm() {
  return (
    <div className="vbs-contact-zoho-wrap w-full">
      <ClientOnlyZohoContactForm eager loadPriority="high" headerCropPreset="get-in-touch" />
    </div>
  );
}
