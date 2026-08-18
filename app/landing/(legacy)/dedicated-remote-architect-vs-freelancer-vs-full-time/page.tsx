import type { Metadata } from "next";

import { DedicatedRemoteArchitectVsFreelancerVsFullTimeView } from "@/components/landing/dedicated-remote-architect-vs-freelancer-vs-full-time-view";

export const metadata: Metadata = {
  title:
    "Dedicated Remote Architect vs Freelancer vs Full-Time Hire | VBS",
  description:
    "Struggling with delivery pressure? Compare remote architects, freelancers, and in-house hires to choose the right model for faster, more predictable project delivery.",
  robots: { index: false, follow: false },
};

export default function DedicatedRemoteArchitectVsFreelancerVsFullTimePage() {
  return <DedicatedRemoteArchitectVsFreelancerVsFullTimeView />;
}
