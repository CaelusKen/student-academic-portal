"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, DollarSign, Download, CreditCard, Calendar, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const currentBill = {
  semester: "Spring 2025",
  dueDate: "2025-02-15",
  totalAmount: 8750.0,
  paidAmount: 5000.0,
  remainingBalance: 3750.0,
  status: "Partially Paid",
  breakdown: [
    { item: "Tuition (10 credits)", amount: 7500.0 },
    { item: "Student Activity Fee", amount: 150.0 },
    { item: "Technology Fee", amount: 200.0 },
    { item: "Library Fee", amount: 100.0 },
    { item: "Health Services Fee", amount: 300.0 },
    { item: "Parking Permit", amount: 500.0 },
  ],
}

const paymentHistory = [
  {
    date: "2025-01-15",
    description: "Spring 2025 Partial Payment",
    amount: 5000.0,
    method: "Bank Transfer",
    status: "Completed",
    reference: "TXN-2025-001234",
  },
  {
    date: "2024-12-20",
    description: "Fall 2024 Final Payment",
    amount: 2500.0,
    method: "Credit Card",
    status: "Completed",
    reference: "TXN-2024-005678",
  },
  {
    date: "2024-08-15",
    description: "Fall 2024 Initial Payment",
    amount: 6000.0,
    method: "Bank Transfer",
    status: "Completed",
    reference: "TXN-2024-003456",
  },
]

const financialAid = [
  {
    type: "Merit Scholarship",
    amount: 2000.0,
    semester: "Spring 2025",
    status: "Applied",
  },
  {
    type: "Need-Based Grant",
    amount: 1500.0,
    semester: "Spring 2025",
    status: "Pending",
  },
  {
    type: "Work-Study Program",
    amount: 1200.0,
    semester: "Spring 2025",
    status: "Active",
  },
]

export default function TuitionPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "partially paid":
        return "bg-orange-100 text-orange-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      case "applied":
        return "bg-blue-100 text-blue-800"
      case "active":
        return "bg-emerald-100 text-emerald-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Portal</span>
            </Link>
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Tuition & Fees</h1>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download Statement</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Current Balance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-emerald-600" />
                Total Amount Due
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">{formatCurrency(currentBill.totalAmount)}</div>
              <p className="text-sm text-gray-600">{currentBill.semester}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Amount Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{formatCurrency(currentBill.paidAmount)}</div>
              <p className="text-sm text-gray-600">Payments received</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Remaining Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{formatCurrency(currentBill.remainingBalance)}</div>
              <p className="text-sm text-gray-600">Due: {formatDate(currentBill.dueDate)}</p>
            </CardContent>
          </Card>
        </div>

        {/* Payment Due Alert */}
        {currentBill.remainingBalance > 0 && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              <h2 className="font-semibold text-orange-800">Payment Due</h2>
            </div>
            <p className="text-orange-700 text-sm">
              You have an outstanding balance of <strong>{formatCurrency(currentBill.remainingBalance)}</strong> due on{" "}
              <strong>{formatDate(currentBill.dueDate)}</strong>. Please make a payment to avoid late fees.
            </p>
            <Button className="mt-3 bg-orange-600 hover:bg-orange-700">Make Payment Now</Button>
          </div>
        )}

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="current">Current Bill</TabsTrigger>
            <TabsTrigger value="payment">Make Payment</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
            <TabsTrigger value="aid">Financial Aid</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{currentBill.semester} Statement</CardTitle>
                    <CardDescription>Due Date: {formatDate(currentBill.dueDate)}</CardDescription>
                  </div>
                  <Badge className={getStatusColor(currentBill.status)}>{currentBill.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Charges Breakdown:</h4>
                  {currentBill.breakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                      <span>{item.item}</span>
                      <span className="font-medium">{formatCurrency(item.amount)}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-2 border-t-2 font-bold text-lg">
                    <span>Total Amount</span>
                    <span>{formatCurrency(currentBill.totalAmount)}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 text-green-600">
                    <span>Amount Paid</span>
                    <span>-{formatCurrency(currentBill.paidAmount)}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 font-bold text-orange-600">
                    <span>Balance Due</span>
                    <span>{formatCurrency(currentBill.remainingBalance)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment">
            <Card>
              <CardHeader>
                <CardTitle>Make a Payment</CardTitle>
                <CardDescription>Select your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button
                      variant={selectedPaymentMethod === "credit" ? "default" : "outline"}
                      className="w-full h-24 flex flex-col items-center justify-center gap-2"
                      onClick={() => handlePaymentMethodChange("credit")}
                    >
                      <CreditCard className="h-6 w-6" />
                      <span>Credit Card</span>
                    </Button>
                    <Button
                      variant={selectedPaymentMethod === "bank" ? "default" : "outline"}
                      className="w-full h-24 flex flex-col items-center justify-center gap-2"
                      onClick={() => handlePaymentMethodChange("bank")}
                    >
                      <Calendar className="h-6 w-6" />
                      <span>Bank Transfer</span>
                    </Button>
                  </div>
                  {selectedPaymentMethod && (
                    <div className="mt-4">
                      <Button className="w-full">Proceed to Payment</Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <div className="grid gap-4">
              {paymentHistory.map((payment, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-4 w-4 text-gray-500" />
                          <span className="font-medium">{formatDate(payment.date)}</span>
                          <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{payment.description}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>Payment Method: {payment.method}</div>
                          <div>Reference: {payment.reference}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{formatCurrency(payment.amount)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="aid" className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <h2 className="font-semibold text-emerald-800">Financial Aid Summary</h2>
              </div>
              <p className="text-emerald-700 text-sm">
                Total financial aid for Spring 2025:{" "}
                <strong>{formatCurrency(financialAid.reduce((sum, aid) => sum + aid.amount, 0))}</strong>
              </p>
            </div>

            <div className="grid gap-4">
              {financialAid.map((aid, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{aid.type}</h3>
                          <Badge className={getStatusColor(aid.status)}>{aid.status}</Badge>
                        </div>
                        <p className="text-gray-600">{aid.semester}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-600">{formatCurrency(aid.amount)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Apply for Additional Aid</CardTitle>
                <CardDescription>Explore more financial aid opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Apply for Emergency Financial Aid
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Search for Scholarships
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Request Payment Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
