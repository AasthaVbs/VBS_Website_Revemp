import type { Metadata } from "next";

import { PipelineHealthDiagnosticView } from "@/components/landing/pipeline-health-diagnostic-view";

export const metadata: Metadata = {
  title: "The Pipeline Health Diagnostic - 12 Questions",
  description:
    "Run a 12-question pipeline diagnostic to identify your highest-leverage intervention across senior time, documentation load, and delivery flow.",
  robots: { index: false, follow: true },
};

export default function PipelineHealthDiagnosticPage() {
  return <PipelineHealthDiagnosticView />;
}
