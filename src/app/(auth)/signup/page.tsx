import { AuthLayout } from "@/components/auth/auth-layout"
import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage() {
  return (
    <AuthLayout
      title="Create an account"
      description="Enter your information to create your account"
    >
      <SignupForm />
    </AuthLayout>
  )
} 