import type { Metadata } from "next";

import { SiteHeader } from "@/components/layout/site-header";
import { BlogsBrowseSection } from "@/components/sections/blogs/blogs-browse-section";
import { BlogsHeroSection } from "@/components/sections/blogs/blogs-hero-section";
import { GetInTouchSection } from "@/components/sections/get-in-touch-section";
import { SiteFooter } from "@/components/sections/site-footer";

export const metadata: Metadata = {
  title: "Blogs | Virtual Building Studio",
  description:
    "Read Virtual Building Studio blogs on BIM, MEP engineering, architectural drafting, and delivery for architecture and engineering firms.",
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <SiteHeader />
      <main>
        <BlogsHeroSection />
        <BlogsBrowseSection />
        <GetInTouchSection />
      </main>
      <SiteFooter />
    </div>
  );
}
