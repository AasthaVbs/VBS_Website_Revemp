import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function WhitepaperLayout({ children }: { children: React.ReactNode }) {
  return children;
}
