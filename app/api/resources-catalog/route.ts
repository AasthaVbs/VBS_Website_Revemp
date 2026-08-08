import { NextResponse } from "next/server";

import { buildResourceCatalogLive } from "@/lib/resource-catalog";

export const revalidate = 60;

/** Server-built resources catalog (live Sanity with snapshot fallback). */
export async function GET() {
  const catalog = await buildResourceCatalogLive(new Date());
  return NextResponse.json(catalog, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
