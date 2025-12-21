<<<<<<< HEAD
import { NextRequest, NextResponse } from "next/server";
=======
import {NextRequest, NextResponse} from "next/server";
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451

export async function proxy(request: NextRequest) {
  const cookieStore = request.cookies.toString();
  const ACCESS_TOKEN = request.cookies.get("access_token")?.value;
  const REFRESH_TOKEN = request.cookies.get("refresh_token")?.value;
<<<<<<< HEAD

  const { pathname } = request.nextUrl;

  // /course/search 경로 보호
  if (pathname.startsWith("/course/search")) {
    if (!ACCESS_TOKEN) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
=======
>>>>>>> 98d76b17b73947c8b46b0ee0435e5aa1550db451
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
