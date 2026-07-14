import { NextResponse } from "next/server";

import { buildMepResourcesFeedItems } from "@/lib/mep-resources-feed";
import { fetchSanityResourceListing } from "@/lib/sanity-fetch";
import { getSanityResourcePosts, getSanityResourceWebinars } from "@/lib/sanity-snapshot";

export const revalidate = 60;

/** Live Sanity-backed resources feed for home + service page resource sections. */
export async function GET() {
  try {
    const { posts, webinars } = await fetchSanityResourceListing();
    const items = buildMepResourcesFeedItems({
      posts,
      webinars,
      referenceDate: new Date(),
    });
    return NextResponse.json(items, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("[api/resources-feed] failed:", error);
    const items = buildMepResourcesFeedItems({
      posts: getSanityResourcePosts(),
      webinars: getSanityResourceWebinars(),
      referenceDate: new Date(),
    });
    return NextResponse.json(items, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=120",
      },
    });
  }
}
