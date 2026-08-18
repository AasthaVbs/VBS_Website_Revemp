import type { Metadata } from "next";
import type { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vbs-legacy-projects.scss";
import "@/styles/vbs-laptop-heading-scale.scss";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/** AIA Conference Events — Bootstrap + legacy video/modal styles. */
export default function AiaConferenceEventsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      {children}
    </>
  );
}
