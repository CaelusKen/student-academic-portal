"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, User, Calendar, MessageSquare, FileText, Clock, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const advisorInfo = {
  name: "Dr. James Wilson",
  title: "Academic Advisor - Computer Science",
  email: "jwilson@university.edu",
  phone: "(555) 123-4580",
  office: "Science Building, Room 305",
  officeHours: "Monday, Wednesday, Friday: 2:00 PM - 4:00 PM",
  specialties: ["Computer Science", "Software Engineering", "Data Science", "Career Planning"],
}

const upcomingAppointments = [
  {
    id: 1,
    date: "2025-02-15",
    time: "2:00 PM",
    type: "Course Planning",
    status: "confirmed",
    notes: "Discuss fall semester course selection",
  },
  {
    id: 2,
    date: "2025-03-01",
    time: "3:00 PM",
    type: "Degree Audit",
    status: "pending",
    notes: "Review graduation requirements",
  },
]

const appointmentHistory = [
  {
    id: 3,
    date: "2025-01-15",
    time: "2:30 PM",
    type: "Academic Planning",
    status: "completed",
    notes: "Discussed spring semester goals and course load",
    summary: "Reviewed current academic standing and planned course sequence for remaining semesters.",
  },
  {
    id: 4,
    date: "2024-11-20",
    time: "1:00 PM",
    type: "Career Guidance",
    status: "completed",
    notes: "Explored internship opportunities",
    summary: "Discussed summer internship options and resume preparation strategies.",
  },
]

export default function AdvisingPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("")
  const [appointmentNotes, setAppointmentNotes] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

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
              <User className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Academic Advising</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Advisor Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Academic Advisor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{advisorInfo.name}</h3>
                    <p className="text-sm text-gray-600">{advisorInfo.title}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Email:</span> {advisorInfo.email}
                  </div>
                  <div>
                    <span className="font-medium">Phone:</span> {advisorInfo.phone}
                  </div>
                  <div>
                    <span className="font-medium">Office:</span> {advisorInfo.office}
                  </div>
                  <div>
                    <span className="font-medium">Office Hours:</span> {advisorInfo.officeHours}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {advisorInfo.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  View Degree Audit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Course Planning Tool
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Graduation Checklist
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="appointments" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="schedule">Schedule New</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>

              <TabsContent value="appointments" className="space-y-6">
                {/* Upcoming Appointments */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled advising sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingAppointments.length === 0 ? (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming appointments</h3>
                        <p className="text-gray-500">Schedule an appointment with your advisor</p>
                      </div>
                    ) : (
                      upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="border rounded-lg p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="font-medium">{appointment.type}</h4>
                                <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{formatDate(appointment.date)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{appointment.time}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 mt-2">{appointment.notes}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                Reschedule
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </CardContent>
                </Card>

                {/* Appointment History */}
                <Card>
                  <CardHeader>
                    <CardTitle>Appointment History</CardTitle>
                    <CardDescription>Previous advising sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {appointmentHistory.map((appointment) => (
                      <div key={appointment.id} className="border rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">{appointment.type}</h4>
                              <Badge className={getStatusColor(appointment.status)}>{appointment.status}</Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(appointment.date)}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{appointment.time}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{appointment.summary}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Schedule New Appointment</CardTitle>
                    <CardDescription>Book a meeting with your academic advisor</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="appointment-type">Appointment Type</Label>
                        <Select value={appointmentType} onValueChange={setAppointmentType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select appointment type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="course-planning">Course Planning</SelectItem>
                            <SelectItem value="degree-audit">Degree Audit</SelectItem>
                            <SelectItem value="career-guidance">Career Guidance</SelectItem>
                            <SelectItem value="academic-support">Academic Support</SelectItem>
                            <SelectItem value="general-advising">General Advising</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferred-date">Preferred Date</Label>
                        <Input
                          id="preferred-date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferred-time">Preferred Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00">9:00 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="1:00">1:00 PM</SelectItem>
                          <SelectItem value="2:00">2:00 PM</SelectItem>
                          <SelectItem value="3:00">3:00 PM</SelectItem>
                          <SelectItem value="4:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="appointment-notes">Notes/Topics to Discuss</Label>
                      <Textarea
                        id="appointment-notes"
                        placeholder="Please describe what you'd like to discuss during the appointment..."
                        value={appointmentNotes}
                        onChange={(e) => setAppointmentNotes(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Request Appointment
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Advising Resources</CardTitle>
                    <CardDescription>Helpful tools and information for academic planning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Degree Requirements</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          View your program's degree requirements and track your progress
                        </p>
                        <Button size="sm" variant="outline">
                          View Requirements
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Course Catalog</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Browse available courses and plan your academic path
                        </p>
                        <Button size="sm" variant="outline">
                          Browse Catalog
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Academic Calendar</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Important dates, deadlines, and academic events
                        </p>
                        <Button size="sm" variant="outline">
                          View Calendar
                        </Button>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Career Planning</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Explore career paths and internship opportunities
                        </p>
                        <Button size="sm" variant="outline">
                          Career Resources
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-medium">How often should I meet with my advisor?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        We recommend meeting at least once per semester to review your academic progress and plan for upcoming terms.
                      </p>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-medium">What should I prepare for an advising appointment?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Bring your degree audit, transcript, and any questions about courses, career goals, or academic concerns.
                      </p>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-medium">Can I change my advisor?</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Yes, you can request an advisor change through the Academic Affairs office if needed.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
