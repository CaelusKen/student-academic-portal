import type { ReactNode } from "react"
import { BookOpen } from "lucide-react"

interface AuthLayoutProps {
  children: ReactNode
  title: string
  description: string
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-teal-800" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <BookOpen className="mr-2 h-6 w-6" />
          Academic Portal
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            </p>
            <footer className="text-sm">- Malcolm X</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-emerald-800">{title}</h1>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          {children}
          <p className="px-8 text-center text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <a href="#" className="underline underline-offset-4 hover:text-emerald-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4 hover:text-emerald-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
