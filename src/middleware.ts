import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Define which routes require authentication
const protectedRoutes = ["/academic", "/dashboard"]
// Define which routes are public (auth routes)
const authRoutes = ["/login", "/signup", "/forgot-password", "/passwordless"]

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res: response })

  // Refresh session if expired - required for Server Components
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const url = request.nextUrl.clone()
  const { pathname } = url

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some((route) => pathname === route)

  // If accessing a protected route without a session, redirect to login
  if (isProtectedRoute && !session) {
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  // If accessing an auth route with a session, redirect to academic
  if (isAuthRoute && session) {
    url.pathname = "/academic"
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    // Match all routes except static files, api routes, and auth callback
    "/((?!_next/static|_next/image|favicon.ico|api|auth/callback).*)",
  ],
}
