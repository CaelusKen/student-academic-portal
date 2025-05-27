"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, ChevronLeft, ChevronRight, Plus, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const academicEvents = [
  {
    id: 1,
    title: "Spring Semester Begins",
    date: "2025-01-15",
    type: "academic",
    description: "First day of classes for Spring 2025 semester",
  },
  {
    id: 2,
    title: "Add/Drop Deadline",
    date: "2025-01-29",
    type: "deadline",
    description: "Last day to add or drop courses without penalty",
  },
  {
    id: 3,
    title: "Presidents Day - No Classes",
    date: "2025-02-17",
    type: "holiday",
    description: "University closed, no classes scheduled",
  },
  {
    id: 4,
    title: "Midterm Exams Begin",
    date: "2025-03-10",
    type: "exam",
    description: "Midterm examination period begins",
  },
  {
    id: 5,
    title: "Spring Break",
    date: "2025-03-24",
    type: "break",
    description: "Spring break week - no classes",
  },
  {
    id: 6,
    title: "Registration Opens - Fall 2025",
    date: "2025-04-01",
    type: "registration",
    description: "Course registration opens for Fall 2025 semester",
  },
  {
    id: 7,
    title: "Last Day of Classes",
    date: "2025-05-09",
    type: "academic",
    description: "Final day of regular classes",
  },
  {
    id: 8,
    title: "Final Exams Begin",
    date: "2025-05-12",
    type: "exam",
    description: "Final examination period begins",
  },
  {
    id: 9,
    title: "Commencement Ceremony",
    date: "2025-05-24",
    type: "ceremony",
    description: "Graduation ceremony for Spring 2025",
  },
  {
    id: 10,
    title: "Summer Session Begins",
    date: "2025-06-02",
    type: "academic",
    description: "First day of summer session classes",
  },
]

const personalEvents = [
  {
    id: 11,
    title: "CS201 Project Due",
    date: "2025-02-15",
    type: "assignment",
    description: "Data Structures final project submission",
  },
  {
    id: 12,
    title: "Math Tutoring Session",
    date: "2025-02-20",
    type: "appointment",
    description: "Weekly tutoring session with Dr. Wang",
  },
  {
    id: 13,
    title: "Career Fair",
    date: "2025-03-05",
    type: "event",
    description: "Annual spring career fair in Student Center",
  },
]

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewType, setViewType] = useState("month")
  const [eventFilter, setEventFilter] = useState("all")

  // Add handlers for date and view type changes
  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleViewTypeChange = (value: string) => {
    setViewType(value)
  }

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "academic":
        return "bg-blue-100 text-blue-800"
      case "deadline":
        return "bg-red-100 text-red-800"
      case "exam":
        return "bg-purple-100 text-purple-800"
      case "holiday":
        return "bg-green-100 text-green-800"
      case "break":
        return "bg-yellow-100 text-yellow-800"
      case "registration":
        return "bg-emerald-100 text-emerald-800"
      case "ceremony":
        return "bg-pink-100 text-pink-800"
      case "assignment":
        return "bg-orange-100 text-orange-800"
      case "appointment":
        return "bg-indigo-100 text-indigo-800"
      case "event":
        return "bg-teal-100 text-teal-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const allEvents = [...academicEvents, ...personalEvents]
  const filteredEvents = eventFilter === "all" ? allEvents : allEvents.filter(event => event.type === eventFilter)

  const upcomingEvents = filteredEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 10)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getRelativeDate = (dateString: string) => {
    const eventDate = new Date(dateString)
    const today = new Date()
    const diffTime = eventDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Tomorrow"
    if (diffDays < 7) return `In ${diffDays} days`
    if (diffDays < 30) return `In ${Math.ceil(diffDays / 7)} weeks`
    return `In ${Math.ceil(diffDays / 30)} months`
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
              <Calendar className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Academic Calendar</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add Event
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Calendar Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handlePreviousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleNextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <span className="font-semibold">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
            <Select value={viewType} onValueChange={handleViewTypeChange}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="View" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="day">Day</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <Select value={eventFilter} onValueChange={setEventFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter events" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="deadline">Deadlines</SelectItem>
                <SelectItem value="exam">Exams</SelectItem>
                <SelectItem value="assignment">Assignments</SelectItem>
                <SelectItem value="holiday">Holidays</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar View */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i - 6)
                    const isCurrentMonth = date.getMonth() === currentDate.getMonth()
                    const isToday = date.toDateString() === new Date().toDateString()
                    const dayEvents = filteredEvents.filter(
                      event => new Date(event.date).toDateString() === date.toDateString()
                    )

                    return (
                      <div
                        key={i}
                        className={`min-h-[80px] p-1 border border-gray-100 ${
                          isCurrentMonth ? "bg-white" : "bg-gray-50"
                        } ${isToday ? "bg-blue-50 border-blue-200" : ""}`}
                      >
                        <div className={`text-sm ${isCurrentMonth ? "text-gray-900" : "text-gray-400"} ${isToday ? "font-bold text-blue-600" : ""}`}>
                          {date.getDate()}
                        </div>
                        <div className="space-y-1">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs p-1 rounded truncate ${getEventTypeColor(event.type)}`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-l-4 border-emerald-500 pl-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                          <span className="text-xs text-gray-500">{getRelativeDate(event.date)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Add/Drop Deadline</span>
                  <span className="text-sm font-medium">Jan 29</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Midterm Exams</span>
                  <span className="text-sm font-medium">Mar 10-14</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Spring Break</span>
                  <span className="text-sm font-medium">Mar 24-28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Final Exams</span>
                  <span className="text-sm font-medium">May 12-16</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Graduation</span>
                  <span className="text-sm font-medium">May 24</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event List View */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>All Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredEvents
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium">{event.title}</h4>
                        <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{formatDate(event.date)}</div>
                      <div className="text-xs text-gray-500">{getRelativeDate(event.date)}</div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
