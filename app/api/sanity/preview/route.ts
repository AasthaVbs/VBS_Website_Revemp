import { NextResponse } from "next/server";

import { mapSanityPostToBlogDetail } from "@/lib/sanity-blog";
import { sanityPreviewSecret } from "@/lib/sanity-env";
import { fetchSanityPreviewPost } from "@/lib/sanity-fetch";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");

  const validSecrets = [sanityPreviewSecret, process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET].filter(
    Boolean,
  );

  if (!secret || !validSecrets.includes(secret)) {
    return NextResponse.json({ error: "Invalid secret token." }, { status: 401 });
  }

  const doc = await fetchSanityPreviewPost({ id, slug });
  if (!doc) {
    return NextResponse.json(
      { error: "Document not found. Please save and publish once, then preview again." },
      { status: 404 },
    );
  }

  const post = mapSanityPostToBlogDetail(doc);
  if (!post) {
    return NextResponse.json({ error: "Unsupported document type." }, { status: 400 });
  }

  return NextResponse.json(doc);
}
