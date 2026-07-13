import { NextResponse } from "next/server";

import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import { fetchSanityResourceListing } from "@/lib/sanity-fetch";

export const dynamic = "force-dynamic";
export const revalidate = 60;

/** Live Sanity-backed resources feed for home + service page resource sections. */
export async function GET() {
  try {
    const { posts } = await fetchSanityResourceListing();
    const items = buildMepResourcesFeedItems({
      posts,
      referenceDate: new Date(),
    });
    return NextResponse.json(items, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("[api/resources-feed] failed:", error);
    const items = buildMepResourcesFeedItems({ referenceDate: new Date() });
    return NextResponse.json(items, { status: 200 });
  }
}
