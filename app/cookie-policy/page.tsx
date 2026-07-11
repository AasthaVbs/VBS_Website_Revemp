import type { Metadata } from "next";

import { LegalPage } from "@/components/vbs/legal-page";
import { cookiePolicyContent } from "@/constants/legal-content";

export const metadata: Metadata = {
  title: "Cookie Policy | Virtual Building Studio",
  description: "Learn how Virtual Building Studio uses cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
  return <LegalPage document={cookiePolicyContent} />;
}
