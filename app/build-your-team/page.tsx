import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BuildYourTeamImmersive } from "@/components/sections/build-your-team/build-your-team-immersive";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Build Your Team | Virtual Building Studio",
  description:
    "Tell us about your architecture project and get matched with the right BIM specialist or integrated team in 60 minutes.",
};

export default function BuildYourTeamPage() {
  return (
    <div className="build-your-team-page overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <BuildYourTeamImmersive />
      </main>
      <SiteFooter />
    </div>
  );
}
