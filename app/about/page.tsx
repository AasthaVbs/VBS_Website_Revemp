import type { Metadata } from "next";

import { VbsAboutPage } from "@/components/vbs/about-page";

export const metadata: Metadata = {
  title: "About Us | Virtual Building Studio",
  description:
    "Since 2015, Virtual Building Studio has been the trusted BIM delivery partner for Architecture and Engineering firms across the USA.",
};

export default function AboutPage() {
  return <VbsAboutPage />;
}
