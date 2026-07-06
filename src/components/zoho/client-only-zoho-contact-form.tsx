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

type ClientOnlyZohoContactFormProps = ComponentProps<typeof ZohoContactUsIframeForm>;

export function ClientOnlyZohoContactForm(props: ClientOnlyZohoContactFormProps) {
  const { ref, inView } = useInView({ rootMargin: "240px 0px", triggerOnce: true });

  return (
    <div ref={ref}>
      {inView ? (
        <ZohoContactUsIframeForm {...props} />
      ) : (
        <SectionSkeleton minHeight={100} ariaHidden={false} />
      )}
    </div>
  );
}
