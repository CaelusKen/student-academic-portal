"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  HelpCircle,
  Search,
  MessageSquare,
  Phone,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const faqCategories = [
  {
    category: "Account & Login",
    questions: [
      {
        question: "How do I reset my password?",
        answer:
          "You can reset your password by clicking the 'Forgot Password' link on the login page. Enter your email address and follow the instructions sent to your email.",
      },
      {
        question: "Why can't I log into my account?",
        answer:
          "Common issues include incorrect credentials, expired passwords, or account suspension. Try resetting your password first. If the problem persists, contact IT support.",
      },
      {
        question: "How do I update my personal information?",
        answer:
          "Go to your Profile page from the main menu. You can update your contact information, address, and other personal details there.",
      },
    ],
  },
  {
    category: "Course Registration",
    questions: [
      {
        question: "When does course registration open?",
        answer:
          "Course registration typically opens 4-6 weeks before the start of each semester. Check the academic calendar for specific dates.",
      },
      {
        question: "How do I add or drop a course?",
        answer:
          "Use the Course Registration page to add courses to your cart and complete registration. You can drop courses during the add/drop period without penalty.",
      },
      {
        question: "What if a course I need is full?",
        answer:
          "You can join the waitlist for full courses. You'll be automatically enrolled if a spot becomes available. Consider alternative courses or different sections.",
      },
      {
        question: "How do I check prerequisites for a course?",
        answer:
          "Course prerequisites are listed in the course catalog and on each course's detail page. Make sure you've completed all required prerequisites before registering.",
      },
    ],
  },
  {
    category: "Grades & Academic Records",
    questions: [
      {
        question: "When are grades posted?",
        answer:
          "Final grades are typically posted within one week after the end of the semester. Individual assignment grades are posted by instructors throughout the semester.",
      },
      {
        question: "How do I request a transcript?",
        answer:
          "You can request official transcripts through the Academic Records page. There may be a fee for official transcripts sent to external institutions.",
      },
      {
        question: "How is my GPA calculated?",
        answer:
          "Your GPA is calculated using a 4.0 scale. Each letter grade has a point value (A=4.0, B=3.0, etc.) multiplied by credit hours, then divided by total credit hours.",
      },
    ],
  },
  {
    category: "Financial Aid & Tuition",
    questions: [
      {
        question: "How do I apply for financial aid?",
        answer:
          "Complete the FAFSA (Free Application for Federal Student Aid) online. The priority deadline is typically in March for the following academic year.",
      },
      {
        question: "When is tuition due?",
        answer:
          "Tuition is typically due before the start of each semester. Check your student account for specific due dates and payment options.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept bank transfers, credit/debit cards, and payment plans. Note that credit card payments may include a processing fee.",
      },
    ],
  },
]

const contactOptions = [
  {
    title: "IT Help Desk",
    description: "Technical support for portal issues, password resets, and system problems",
    phone: "(555) 123-4567",
    email: "helpdesk@university.edu",
    hours: "Mon-Fri 8:00 AM - 6:00 PM",
  },
  {
    title: "Academic Affairs",
    description: "Course registration, academic records, and degree requirements",
    phone: "(555) 123-4568",
    email: "academic@university.edu",
    hours: "Mon-Fri 9:00 AM - 5:00 PM",
  },
  {
    title: "Financial Aid Office",
    description: "Financial aid, scholarships, and payment questions",
    phone: "(555) 123-4569",
    email: "finaid@university.edu",
    hours: "Mon-Fri 8:30 AM - 4:30 PM",
  },
  {
    title: "Student Services",
    description: "General student support and campus resources",
    phone: "(555) 123-4570",
    email: "studentservices@university.edu",
    hours: "Mon-Fri 8:00 AM - 5:00 PM",
  },
]

const quickLinks = [
  { title: "System Status", url: "#", description: "Check current system status and maintenance schedules" },
  { title: "User Guide", url: "#", description: "Comprehensive guide to using the academic portal" },
  { title: "Video Tutorials", url: "#", description: "Step-by-step video guides for common tasks" },
  { title: "Submit Feedback", url: "#", description: "Report issues or suggest improvements" },
  { title: "Emergency Contacts", url: "#", description: "Important emergency contact information" },
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          searchTerm === "" ||
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Portal</span>
            </Link>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Help & Support</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">How can we help you?</h2>
          <p className="opacity-90 mb-4">Find answers to common questions or get in touch with our support team.</p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for help..."
              className="pl-10 bg-white text-gray-900"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            {filteredFAQs.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-10">
                  <HelpCircle className="h-10 w-10 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No results found</h3>
                  <p className="text-gray-500">Try different search terms or browse all categories</p>
                </CardContent>
              </Card>
            ) : (
              filteredFAQs.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>
                      {category.questions.length} question{category.questions.length !== 1 ? "s" : ""}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {category.questions.map((faq, index) => {
                      const itemId = `${category.category}-${index}`
                      const isOpen = openItems.includes(itemId)

                      return (
                        <Collapsible key={index}>
                          <CollapsibleTrigger
                            className="flex items-center justify-between w-full p-3 text-left border rounded-lg hover:bg-gray-50"
                            onClick={() => toggleItem(itemId)}
                          >
                            <span className="font-medium">{faq.question}</span>
                            {isOpen ? (
                              <ChevronDown className="h-4 w-4 text-gray-500" />
                            ) : (
                              <ChevronRight className="h-4 w-4 text-gray-500" />
                            )}
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-3 py-2 text-gray-600">{faq.answer}</CollapsibleContent>
                        </Collapsible>
                      )
                    })}
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactOptions.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-emerald-600" />
                      {contact.title}
                    </CardTitle>
                    <CardDescription>{contact.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span>{contact.email}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Hours:</strong> {contact.hours}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Emergency Support</CardTitle>
                <CardDescription className="text-red-700">For urgent technical issues or emergencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="text-red-800">
                    <strong>24/7 Emergency Line:</strong> (555) 911-HELP
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Phone className="h-4 w-4 mr-1" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Information */}
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>Current system status and requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">System Status</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Portal: Operational</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Registration: Operational</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Payments: Operational</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Browser Requirements</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>• Chrome 90+ (recommended)</p>
                      <p>• Firefox 88+</p>
                      <p>• Safari 14+</p>
                      <p>• Edge 90+</p>
                      <p>• JavaScript enabled</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
