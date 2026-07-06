import { Suspense } from "react";

import PreviewPageClient from "./preview-client";

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
