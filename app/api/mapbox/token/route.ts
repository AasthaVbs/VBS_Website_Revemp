import { NextResponse } from "next/server";

import { getServerMapboxToken } from "@/lib/mapbox-token";

export async function GET() {
  const token = getServerMapboxToken();
  if (!token) {
    return NextResponse.json({ token: "", error: "Mapbox is not configured." }, { status: 500 });
  }

  return NextResponse.json({ token });
}
