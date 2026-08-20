import type { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vbs-legacy-projects.scss";
import "@/styles/vbs-laptop-heading-scale.scss";
import "@/styles/vbs-landing-home-type.scss";

/** Legacy Gatsby-style landing pages that still depend on Bootstrap + legacy SCSS. */
export default function LandingLegacyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="vbs-landing-page min-h-screen bg-white">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      {children}
    </div>
  );
}
