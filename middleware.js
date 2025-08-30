import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Skip middleware for static files or api routes
  if (pathname.startsWith("/_next") || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Authenticated user
  if (token) {
    if (pathname === "/signin" || pathname === "/signup") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } 
  // Not authenticated
  else {
    if (pathname === "/create-blog") {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/create-blog"],
};
