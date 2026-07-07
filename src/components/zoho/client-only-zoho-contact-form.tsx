"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

import { SectionSkeleton } from "@/components/ui/section-skeleton";
import { useInView } from "@/hooks/use-in-view";

const ZohoContactUsIframeForm = dynamic(
  () =>
    import("@/components/zoho/zoho-contact-us-iframe-form").then(
      (mod) => mod.ZohoContactUsIframeForm,
    ),
  {
    ssr: false,
    loading: () => <SectionSkeleton minHeight={100} />,
  },
);

type ClientOnlyZohoContactFormProps = ComponentProps<typeof ZohoContactUsIframeForm> & {
  /** Load immediately instead of waiting for scroll into view. */
  eager?: boolean;
};

export function ClientOnlyZohoContactForm({
  eager = false,
  ...props
}: ClientOnlyZohoContactFormProps) {
  const { ref, inView } = useInView({ rootMargin: "240px 0px", triggerOnce: true });
  const shouldRender = eager || inView;

  return (
    <div ref={eager ? undefined : ref}>
      {shouldRender ? (
        <ZohoContactUsIframeForm {...props} />
      ) : (
        <SectionSkeleton minHeight={100} ariaHidden={false} />
      )}
    </div>
  );
}
