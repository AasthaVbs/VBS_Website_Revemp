import type { Metadata } from "next";

import { LegalPage } from "@/components/vbs/legal-page";
import { termsOfUseContent } from "@/constants/legal-content";

export const metadata: Metadata = {
  title: "Terms of Use | Virtual Building Studio",
  description: "Read the Terms of Use governing access to Virtual Building Studio websites.",
};

export default function TermsOfUsePage() {
  return <LegalPage document={termsOfUseContent} />;
}
