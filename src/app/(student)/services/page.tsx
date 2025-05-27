"use client"

import Link from "next/link"
import { ArrowLeft, Users, Heart, Home, Utensils, Car, Briefcase, GraduationCap, Shield } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "counseling",
    title: "Counseling & Mental Health",
    description: "Professional counseling services and mental health support",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
    hours: "Mon-Fri 8:00 AM - 6:00 PM",
    location: "Student Health Center, 2nd Floor",
    phone: "(555) 123-4567",
    services: ["Individual Counseling", "Group Therapy", "Crisis Support", "Wellness Workshops"],
  },
  {
    id: "housing",
    title: "Housing & Residence Life",
    description: "On-campus housing options and residential support",
    icon: Home,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    hours: "Mon-Fri 9:00 AM - 5:00 PM",
    location: "Housing Office, Administration Building",
    phone: "(555) 123-4568",
    services: ["Room Assignments", "Housing Applications", "Maintenance Requests", "Community Programs"],
  },
  {
    id: "dining",
    title: "Dining Services",
    description: "Campus dining options and meal plan information",
    icon: Utensils,
    color: "text-green-500",
    bgColor: "bg-green-50",
    hours: "Daily 7:00 AM - 10:00 PM",
    location: "Multiple campus locations",
    phone: "(555) 123-4569",
    services: ["Meal Plans", "Dietary Accommodations", "Catering Services", "Nutrition Counseling"],
  },
  {
    id: "parking",
    title: "Parking & Transportation",
    description: "Parking permits and campus transportation services",
    icon: Car,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    hours: "Mon-Fri 8:00 AM - 5:00 PM",
    location: "Campus Safety Office",
    phone: "(555) 123-4570",
    services: ["Parking Permits", "Shuttle Service", "Bike Registration", "Transportation Assistance"],
  },
  {
    id: "career",
    title: "Career Services",
    description: "Career counseling, job placement, and internship opportunities",
    icon: Briefcase,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    hours: "Mon-Fri 9:00 AM - 5:00 PM",
    location: "Career Center, Student Union",
    phone: "(555) 123-4571",
    services: ["Resume Review", "Interview Prep", "Job Search", "Career Fairs"],
  },
  {
    id: "academic",
    title: "Academic Support",
    description: "Tutoring, study groups, and academic assistance",
    icon: GraduationCap,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    hours: "Mon-Thu 9:00 AM - 9:00 PM, Fri 9:00 AM - 5:00 PM",
    location: "Learning Center, Library Building",
    phone: "(555) 123-4572",
    services: ["Tutoring", "Study Groups", "Writing Center", "Math Lab"],
  },
  {
    id: "disability",
    title: "Disability Services",
    description: "Accommodations and support for students with disabilities",
    icon: Users,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    hours: "Mon-Fri 8:30 AM - 4:30 PM",
    location: "Accessibility Office, Student Services",
    phone: "(555) 123-4573",
    services: ["Academic Accommodations", "Assistive Technology", "Note-taking Services", "Testing Accommodations"],
  },
  {
    id: "safety",
    title: "Campus Safety",
    description: "24/7 campus security and emergency services",
    icon: Shield,
    color: "text-red-600",
    bgColor: "bg-red-50",
    hours: "24/7",
    location: "Campus Safety Office",
    phone: "(555) 123-4574",
    services: ["Emergency Response", "Safety Escorts", "Lost & Found", "Incident Reporting"],
  },
]

export default function ServicesPage() {
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
              <Users className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Student Services</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">Student Support Services</h2>
          <p className="opacity-90 max-w-2xl">
            We're here to support your success. Explore our comprehensive range of student services designed to help you thrive academically, personally, and professionally.
          </p>
        </div>

        {/* Emergency Contact */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="font-semibold text-red-800">Emergency Contact</h3>
                <p className="text-red-700">For emergencies, call Campus Safety: <strong>(555) 911-HELP</strong></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.services.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Hours:</span> {service.hours}
                    </div>
                    <div>
                      <span className="font-medium">Location:</span> {service.location}
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span> {service.phone}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Contact Service
                    </Button>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quick Links */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Frequently accessed student resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-sm">Health Services</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Briefcase className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Job Board</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <Home className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Housing Portal</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <GraduationCap className="h-5 w-5 text-emerald-500" />
                <span className="text-sm">Tutoring</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Student Services Office</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Student Union Building, 1st Floor</p>
                  <p>Phone: (555) 123-4500</p>
                  <p>Email: studentservices@university.edu</p>
                  <p>Hours: Monday-Friday 8:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">After Hours Support</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Campus Safety: (555) 123-4574</p>
                  <p>Crisis Hotline: (555) 123-HELP</p>
                  <p>24/7 Online Chat Support</p>
                  <p>Emergency Services: 911</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
