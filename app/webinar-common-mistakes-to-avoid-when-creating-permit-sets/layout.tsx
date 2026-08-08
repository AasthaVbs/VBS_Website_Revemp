import type { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vbs-webinar-detail-page.scss";
import "@/styles/vbs-static-webinar-detail.scss";
import "@/styles/vbs-webinar-video-gate.scss";
import "@/styles/vbs-legacy-projects.scss";

export default function StaticWebinarLayout({ children }: { children: ReactNode }) {
  return children;
}
