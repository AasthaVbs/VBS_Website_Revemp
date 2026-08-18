import type { ReactNode } from "react";

import "@/styles/vbs-laptop-heading-scale.scss";

/** Redesign landings (Tailwind / MEP shell) — keep CSS free of Bootstrap reboot. */
export default function LandingRedesignLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
