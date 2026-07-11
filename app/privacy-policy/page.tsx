import type { Metadata } from "next";

import { LegalPage } from "@/components/vbs/legal-page";
import { privacyPolicyContent } from "@/constants/legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Virtual Building Studio",
  description:
    "Learn how Virtual Building Studio collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicyContent} />;
}
