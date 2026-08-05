import type { ReactNode } from "react";

/** Shared /landing shell — no global Bootstrap (breaks redesign hero layouts). */
export default function LandingLayout({ children }: { children: ReactNode }) {
  return children;
}
