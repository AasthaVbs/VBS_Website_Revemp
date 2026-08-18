import { NextRequest, NextResponse } from "next/server";

import { getServerMapboxToken } from "@/lib/mapbox-token";

export async function GET(request: NextRequest) {
  const token = getServerMapboxToken();
  if (!token) {
    return NextResponse.json({ error: "Mapbox is not configured." }, { status: 500 });
  }

  const query = request.nextUrl.searchParams.get("q")?.trim() || "";
  if (query.length < 2) {
    return NextResponse.json({ features: [] });
  }

  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json` +
    `?access_token=${encodeURIComponent(token)}` +
    "&autocomplete=true&limit=5" +
    "&types=place,locality,neighborhood,district,region,postcode,address";

  const response = await fetch(url);
  if (!response.ok) {
    return NextResponse.json({ error: "Location search failed" }, { status: 502 });
  }

  const data = (await response.json()) as {
    features?: { place_name?: string; center?: [number, number] }[];
  };

  const features = (data.features || [])
    .filter((feature) => Array.isArray(feature.center) && feature.center.length >= 2)
    .map((feature) => ({
      label: feature.place_name || "",
      lat: feature.center![1],
      lng: feature.center![0],
    }));

  return NextResponse.json({ features });
}
