import type { ReactNode } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vbs-mep-bim-usa.scss";

export default function MepBimServicesUsaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link rel="preconnect" href="https://forms.zohopublic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://forms.zohopublic.com" />
      {children}
    </>
  );
}
