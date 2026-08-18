import type { Metadata } from "next";

import { VbsCareersPage } from "@/components/vbs/careers-page";

export const metadata: Metadata = {
  title: "Join Our Team of BIM Experts, Explore Job Opportunities",
  description:
    "Join VBS as a BIM professional and help transform construction with innovative BIM solutions. Explore career opportunities and shape the future of the industry.",
};

export default function CareersPage() {
  return <VbsCareersPage />;
}
