import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX_HOST = "virtualbuildingstudio.com";
const CANONICAL_HOST = "www.virtualbuildingstudio.com";

/**
 * Apex → www only. HTTPS is left to the host (Cloudflare/Vercel/Netlify)
 * so we do not create a redirect loop from x-forwarded-proto.
 */
export function middleware(request: NextRequest) {
  const hostname = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  if (hostname !== APEX_HOST) {
    return NextResponse.next();
  }

  const { pathname, search } = request.nextUrl;
  return NextResponse.redirect(`https://${CANONICAL_HOST}${pathname}${search}`, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api/|favicon.ico).*)"],
};
