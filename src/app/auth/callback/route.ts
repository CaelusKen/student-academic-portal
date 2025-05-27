import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const FPT_EMAIL_DOMAINS = ["@fpt.edu.vn", "@fe.edu.vn", "@fpt.com.vn"]

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    const next = requestUrl.searchParams.get("next") ?? "/academic" // Default redirect to /academic

    if (code) {
      const cookieStore = cookies()
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

      // Exchange the code for a session
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.exchangeCodeForSession(code)

      if (sessionError) {
        console.error("Session error:", sessionError)
        return NextResponse.redirect(new URL("/login?error=auth_failed", requestUrl.origin))
      }

      if (session?.user?.email) {
        const email = session.user.email.toLowerCase()
        const isFPTEmail = FPT_EMAIL_DOMAINS.some((domain) => email.endsWith(domain))

        if (isFPTEmail) {
          // Update user metadata to indicate FPT status
          await supabase.auth.updateUser({
            data: { is_fpt_student: true },
          })

          // Create a response with the redirect to /academic
          const redirectUrl = new URL("/academic", requestUrl.origin)
          const response = NextResponse.redirect(redirectUrl)

          // Set cache control headers to prevent caching
          response.headers.set("Cache-Control", "no-store, max-age=0, must-revalidate")
          response.headers.set("Pragma", "no-cache")
          response.headers.set("Expires", "0")

          return response
        } else {
          // Sign out non-FPT users
          await supabase.auth.signOut()
          return NextResponse.redirect(new URL("/login?error=invalid_domain", requestUrl.origin))
        }
      }
    }

    // If no code is present, redirect to login
    return NextResponse.redirect(new URL("/login", requestUrl.origin))
  } catch (error) {
    const requestUrl = new URL(request.url)
    console.error("Callback error:", error)
    return NextResponse.redirect(new URL("/login?error=server_error", requestUrl.origin))
  }
}
