import type { Metadata } from "next";

import { DedicatedRemoteArchitectVsFreelancerVsFullTimeView } from "@/components/landing/dedicated-remote-architect-vs-freelancer-vs-full-time-view";

export const metadata: Metadata = {
  title:
    "Dedicated Remote Architect vs Freelancer vs Full-Time | Capacity Decision Framework",
  description:
    "Compare how hiring in-house, freelancers, or dedicated remote architects impacts delivery pressure, drawing workflows, and coordination before you add capacity.",
};

export default function DedicatedRemoteArchitectVsFreelancerVsFullTimePage() {
  return <DedicatedRemoteArchitectVsFreelancerVsFullTimeView />;
}
