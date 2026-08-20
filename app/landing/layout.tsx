import type { Metadata } from "next";
import type { ReactNode } from "react";

import { NOINDEX_NOFOLLOW_ROBOTS } from "@/constants/site-robots";

export const metadata: Metadata = {
  robots: NOINDEX_NOFOLLOW_ROBOTS,
};

/** Shared /landing shell — no global Bootstrap (breaks redesign hero layouts). */
export default function LandingLayout({ children }: { children: ReactNode }) {
  return children;
}
