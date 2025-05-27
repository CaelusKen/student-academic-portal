"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, Users, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const availableCourses = [
  {
    id: "CS101",
    name: "Introduction to Computer Science",
    credits: 3,
    instructor: "Dr. Sarah Johnson",
    schedule: "MWF 9:00-10:00 AM",
    capacity: 30,
    enrolled: 25,
    prerequisites: "None",
    status: "available",
  },
  {
    id: "MATH201",
    name: "Calculus II",
    credits: 4,
    instructor: "Prof. Michael Chen",
    schedule: "TTh 2:00-3:30 PM",
    capacity: 25,
    enrolled: 25,
    prerequisites: "MATH101",
    status: "full",
  },
  {
    id: "ENG102",
    name: "Academic Writing",
    credits: 3,
    instructor: "Dr. Emily Rodriguez",
    schedule: "MWF 11:00-12:00 PM",
    capacity: 20,
    enrolled: 18,
    prerequisites: "ENG101",
    status: "available",
  },
  {
    id: "PHYS201",
    name: "Physics for Engineers",
    credits: 4,
    instructor: "Dr. James Wilson",
    schedule: "TTh 10:00-11:30 AM",
    capacity: 35,
    enrolled: 30,
    prerequisites: "MATH101, PHYS101",
    status: "available",
  },
]

const registeredCourses = [
  {
    id: "CS201",
    name: "Data Structures",
    credits: 3,
    instructor: "Dr. Alex Thompson",
    schedule: "MWF 1:00-2:00 PM",
    status: "registered",
  },
  {
    id: "MATH101",
    name: "Calculus I",
    credits: 4,
    instructor: "Prof. Lisa Wang",
    schedule: "TTh 9:00-10:30 AM",
    status: "registered",
  },
]

export default function RegistrationPage() {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleCourseSelection = (courseId: string) => {
    setSelectedCourses((prev) => (prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]))
  }

  const filteredCourses = availableCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Course Registration</h1>
            </div>
          </div>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
            Registration Period: Open
          </Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Registration Status */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <h2 className="font-semibold text-emerald-800">Registration Status</h2>
          </div>
          <p className="text-emerald-700 text-sm">
            You are currently registered for <strong>2 courses (7 credits)</strong>. Registration deadline:{" "}
            <strong>May 15, 2025</strong>
          </p>
        </div>

        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="browse">Browse Courses</TabsTrigger>
            <TabsTrigger value="registered">My Courses</TabsTrigger>
            <TabsTrigger value="cart">Registration Cart</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-4">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <Label htmlFor="search">Search Courses</Label>
                <Input
                  id="search"
                  placeholder="Search by course name, code, or instructor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {course.id} - {course.name}
                          {course.status === "full" && <Badge variant="destructive">Full</Badge>}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          Instructor: {course.instructor} • {course.credits} Credits
                        </CardDescription>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={course.id}
                          checked={selectedCourses.includes(course.id)}
                          onCheckedChange={() => handleCourseSelection(course.id)}
                          disabled={course.status === "full"}
                        />
                        <Label htmlFor={course.id} className="text-sm">
                          Select
                        </Label>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>
                          {course.enrolled}/{course.capacity} enrolled
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-gray-500" />
                        <span>Prerequisites: {course.prerequisites}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="registered" className="space-y-4">
            <div className="grid gap-4">
              {registeredCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {course.id} - {course.name}
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            Registered
                          </Badge>
                        </CardTitle>
                        <CardDescription className="mt-1">
                          Instructor: {course.instructor} • {course.credits} Credits
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Drop Course
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{course.schedule}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cart" className="space-y-4">
            {selectedCourses.length === 0 ? (
              <Card>
                <CardContent className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No courses selected</h3>
                  <p className="text-gray-500">Browse available courses and add them to your cart.</p>
                </CardContent>
              </Card>
            ) : (
              <>
                <div className="grid gap-4">
                  {selectedCourses.map((courseId) => {
                    const course = availableCourses.find((c) => c.id === courseId)
                    if (!course) return null

                    return (
                      <Card key={course.id}>
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">
                                {course.id} - {course.name}
                              </CardTitle>
                              <CardDescription className="mt-1">
                                Instructor: {course.instructor} • {course.credits} Credits
                              </CardDescription>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => handleCourseSelection(course.id)}>
                              Remove
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{course.schedule}</span>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>

                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Total Credits:</span>
                      <span className="font-bold text-emerald-700">
                        {selectedCourses.reduce((total, courseId) => {
                          const course = availableCourses.find((c) => c.id === courseId)
                          return total + (course?.credits || 0)
                        }, 0)}{" "}
                        credits
                      </span>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Complete Registration</Button>
                  </CardContent>
                </Card>
              </>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
