import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken");
  const pathname = request.nextUrl.pathname;
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/home", request.url));
  } else if (!pathname.startsWith("/home") && pathname !== "/login") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/login"],
};
