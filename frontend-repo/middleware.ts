import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const routes = [
  { path: "/", name: "Main", isProtected: true },
  { path: "/login", name: "Login", isProtected: false },
  { path: "/register", name: "Register", isProtected: false },
];

export default function middleware(req: NextRequest) {
  const token = req.cookies.get(process.env.userCookie as string)?.value;
  const routeData = routes.find((item) => item.path === req.nextUrl.pathname);

  if (!token && routeData?.isProtected)
    return NextResponse.redirect(new URL("/login", req.url));
  if (token && routeData?.isProtected === false)
    return NextResponse.redirect(new URL("/", req.url));
  NextResponse.next();
}

export const config = {
  matcher: "/(.*)",
};
