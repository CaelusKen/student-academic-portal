"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useAuth } from "@/lib/auth/auth-context"
import { toast } from "sonner"
import { KeyRound } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { resetPassword } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      await resetPassword(values.email)
      setIsSubmitted(true)
      toast.success("Password reset link sent! Please check your email.")
    } catch (error: any) {
      console.error(error)
      toast.error(error.message || "Failed to send reset link. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="grid gap-6">
        <div className="text-center">
          <h3 className="text-lg font-medium">Check your email</h3>
          <p className="text-sm text-muted-foreground mt-2">
            We have sent a password reset link to your email address.
            Please check your inbox and follow the instructions to reset your password.
          </p>
        </div>
        <div className="text-center text-sm">
          <Link
            href="/login"
            className="text-primary hover:underline"
          >
            Back to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      <div className="flex justify-center mb-2">
        <div className="rounded-full bg-emerald-100 p-3">
          <KeyRound className="h-6 w-6 text-emerald-600" />
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@university.edu"
                    type="email"
                    disabled={isLoading}
                    className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700" type="submit" disabled={isLoading}>
            {isLoading ? "Sending reset link..." : "Send reset link"}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm">
        Remember your password?{" "}
        <Link href="/login" className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium">
          Sign in
        </Link>
      </div>
    </div>
  )
} 