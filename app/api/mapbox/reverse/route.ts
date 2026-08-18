import { NextRequest, NextResponse } from "next/server";

import { getServerMapboxToken } from "@/lib/mapbox-token";

export async function GET(request: NextRequest) {
  const token = getServerMapboxToken();
  if (!token) {
    return NextResponse.json({ error: "Mapbox is not configured." }, { status: 500 });
  }

  const lat = Number(request.nextUrl.searchParams.get("lat"));
  const lng = Number(request.nextUrl.searchParams.get("lng"));
  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    return NextResponse.json({ error: "Invalid coordinates." }, { status: 400 });
  }

  const url =
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json` +
    `?access_token=${encodeURIComponent(token)}` +
    "&types=place,locality,neighborhood,district,region,address&limit=1";

  const response = await fetch(url);
  if (!response.ok) {
    return NextResponse.json({ error: "Could not resolve your location." }, { status: 502 });
  }

  const data = (await response.json()) as {
    features?: { place_name?: string; center?: [number, number] }[];
  };
  const feature = data.features?.[0];

  return NextResponse.json({
    label: feature?.place_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
    lat: feature?.center?.[1] ?? lat,
    lng: feature?.center?.[0] ?? lng,
  });
}
