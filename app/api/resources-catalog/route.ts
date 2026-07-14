import { NextResponse } from "next/server";

import { buildResourceCatalog } from "@/lib/resource-catalog";

export const revalidate = 60;

/** Server-built resources catalog (Sanity snapshot stays off the client bundle). */
export async function GET() {
  const catalog = buildResourceCatalog(new Date());
  return NextResponse.json(catalog, {
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
