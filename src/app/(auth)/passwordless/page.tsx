import { AuthLayout } from "@/components/auth/auth-layout"
import { PasswordlessForm } from "@/components/auth/passwordless-form"

export default function PasswordlessPage() {
  return (
    <AuthLayout
      title="Passwordless login"
      description="Enter your email address and we'll send you a magic link"
    >
      <PasswordlessForm />
    </AuthLayout>
  )
} 