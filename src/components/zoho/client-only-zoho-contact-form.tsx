"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const ZohoContactUsIframeForm = dynamic(
  () =>
    import("@/components/zoho/zoho-contact-us-iframe-form").then(
      (mod) => mod.ZohoContactUsIframeForm,
    ),
  {
    ssr: false,
    loading: () => <p className="mb-0 min-h-[100px] text-sm text-muted-foreground" />,
  },
);

type ClientOnlyZohoContactFormProps = ComponentProps<typeof ZohoContactUsIframeForm>;

export function ClientOnlyZohoContactForm(props: ClientOnlyZohoContactFormProps) {
  return <ZohoContactUsIframeForm {...props} />;
}
