"use client";

import { MepWorkflowSection } from "@/components/sections/mep/figma/mep-workflow-figma-section";
import {
  mepBimModellingWorkflowSection,
  mepBimModellingWorkflowSteps,
} from "@/constants/mep-bim-modelling-content";

/** Modeling page workflow — uses the same scroll-driven timeline as /mep-bim-services. */
export function MepBimModellingProcessSection() {
  return (
    <MepWorkflowSection
      id="workflow"
      section={mepBimModellingWorkflowSection}
      steps={mepBimModellingWorkflowSteps}
    />
  );
}
