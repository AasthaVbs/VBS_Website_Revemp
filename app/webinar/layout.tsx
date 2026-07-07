import type { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vbs-webinar-detail-page.scss";
import "@/styles/vbs-webinar-detail-sections.scss";
import "@/styles/vbs-webinar-video-gate.scss";

export default function WebinarLayout({ children }: { children: ReactNode }) {
  return children;
}
