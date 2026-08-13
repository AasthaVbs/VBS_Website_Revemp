import type { Metadata } from "next";

import { LegalPage } from "@/components/vbs/legal-page";
import { cookiePolicyContent } from "@/constants/legal-content";

export const metadata: Metadata = {
  title: "Cookie Policy | Virtual Building Studio (VBS)",
  description:
    "By continuing to use our website, you consent to use cookies and similar technologies as described in this Cookie Policy.",
};

export default function CookiePolicyPage() {
  return <LegalPage document={cookiePolicyContent} />;
}
