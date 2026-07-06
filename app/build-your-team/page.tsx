import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import {
  DeferredBuildYourTeamImmersive,
  DeferredSiteFooter,
} from "@/lib/lazy-page-sections";

export const metadata: Metadata = {
  title: "Build Your Team | Virtual Building Studio",
  description:
    "Tell us about your architecture project and get matched with the right BIM specialist or integrated team in 60 minutes.",
};

export default function BuildYourTeamPage() {
  return (
    <div className="vbs-redesign-page build-your-team-page overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <DeferredBuildYourTeamImmersive />
      </main>
      <DeferredSiteFooter />
    </div>
  );
}
