"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { SiteHeader } from "@/components/layout/site-header";
import { BlogDetailFaqSection } from "@/components/sections/blog/blog-detail-faq-section";
import { BlogDetailHeroSection } from "@/components/sections/blog/blog-detail-hero-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { mapSanityPostToBlogDetail } from "@/lib/sanity-blog";
import { sanityPreviewSecret } from "@/lib/sanity-env";

type PreviewState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; post: NonNullable<ReturnType<typeof mapSanityPostToBlogDetail>> };

export default function PreviewPageClient() {
  const searchParams = useSearchParams();
  const [state, setState] = useState<PreviewState>({ status: "loading" });

  useEffect(() => {
    const secret = searchParams.get("secret");
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    const validSecrets = [sanityPreviewSecret, process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET].filter(
      Boolean,
    );

    if (!secret || !validSecrets.includes(secret)) {
      setState({ status: "error", message: "Invalid secret token." });
      return;
    }

    const params = new URLSearchParams();
    params.set("secret", secret);
    if (id) params.set("id", id);
    if (slug) params.set("slug", slug);

    fetch(`/api/sanity/preview?${params.toString()}`)
      .then(async (response) => {
        if (!response.ok) {
          const payload = await response.json().catch(() => ({}));
          throw new Error(payload.error || "Preview fetch failed.");
        }
        return response.json();
      })
      .then((doc) => {
        const post = mapSanityPostToBlogDetail(doc);
        if (!post) {
          setState({
            status: "error",
            message: "Document not found. Save and publish once, then preview again.",
          });
          return;
        }
        setState({ status: "ready", post });
      })
      .catch((error: Error) => {
        setState({ status: "error", message: error.message });
      });
  }, [searchParams]);

  if (state.status === "loading") {
    return (
      <div className="vbs-redesign-page min-h-screen bg-white p-8">
        <h1 className="text-2xl font-medium">Loading preview…</h1>
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <div className="vbs-redesign-page min-h-screen bg-white p-8">
        <h1 className="text-2xl font-medium text-[#D70416]">Preview error</h1>
        <p className="mt-4 text-[#808080]">{state.message}</p>
      </div>
    );
  }

  const post = state.post;

  return (
    <div className="vbs-redesign-page vbs-blog-detail-page min-h-screen bg-white">
      <SiteHeader />
      <main>
        <BlogDetailHeroSection post={post} previewMode />
        {post.faqs.length > 0 ? <BlogDetailFaqSection items={post.faqs} /> : null}
      </main>
      <SiteFooter />
    </div>
  );
}
