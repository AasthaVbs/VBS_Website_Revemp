import type { Metadata } from "next";
import type { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vbs-webinar-detail-page.scss";
import "@/styles/vbs-static-webinar-detail.scss";
import "@/styles/vbs-legacy-projects.scss";
import "@/styles/vbs-laptop-heading-scale.scss";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StaticWebinarLayout({ children }: { children: ReactNode }) {
  return children;
}
