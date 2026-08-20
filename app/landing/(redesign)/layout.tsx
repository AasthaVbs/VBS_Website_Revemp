import type { ReactNode } from "react";

import "@/styles/vbs-laptop-heading-scale.scss";
import "@/styles/vbs-cad-drafting-services-usa.scss";
import "@/styles/vbs-landing-home-type.scss";

/** Redesign landings (Tailwind / MEP shell) — keep CSS free of Bootstrap reboot. */
export default function LandingRedesignLayout({ children }: { children: ReactNode }) {
  return <div className="vbs-landing-page min-h-screen bg-white">{children}</div>;
}
