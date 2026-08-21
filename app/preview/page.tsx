import type { Metadata } from "next";
import { Suspense } from "react";

import { NOINDEX_NOFOLLOW_ROBOTS } from "@/constants/site-robots";

import PreviewPageClient from "./preview-client";

export const metadata: Metadata = {
  title: "Preview | Virtual Building Studio",
  robots: NOINDEX_NOFOLLOW_ROBOTS,
};

export default function PreviewPage() {
  return (
    <Suspense
      fallback={
        <div className="vbs-redesign-page min-h-screen bg-white p-8">
          <h1 className="text-2xl font-medium">Loading preview…</h1>
        </div>
      }
    >
      <PreviewPageClient />
    </Suspense>
  );
}
