"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Search, Filter, Clock, Users, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const departments = [
  { code: "CS", name: "Computer Science" },
  { code: "MATH", name: "Mathematics" },
  { code: "ENG", name: "English" },
  { code: "HIST", name: "History" },
  { code: "PHYS", name: "Physics" },
  { code: "CHEM", name: "Chemistry" },
  { code: "BIOL", name: "Biology" },
  { code: "ECON", name: "Economics" },
  { code: "PSYC", name: "Psychology" },
  { code: "ART", name: "Art" },
]

const courses = [
  {
    id: "cs101",
    code: "CS101",
    title: "Introduction to Computer Science",
    credits: 3,
    department: "CS",
    level: "100",
    description: "An introduction to computer science concepts, programming fundamentals, and problem-solving techniques using Python.",
    prerequisites: "None",
    instructor: "Dr. Sarah Johnson",
    schedule: "MWF 9:00-10:00 AM",
    location: "Computer Lab A",
    capacity: 30,
    enrolled: 25,
    available: true,
    term: "Spring 2025",
  },
  {
    id: "cs201",
    code: "CS201",
    title: "Data Structures and Algorithms",
    credits: 3,
    department: "CS",
    level: "200",
    description: "Study of fundamental data structures including arrays, linked lists, stacks, queues, trees, and graphs. Algorithm analysis and design.",
    prerequisites: "CS101",
    instructor: "Dr. Alex Thompson",
    schedule: "MWF 1:00-2:00 PM",
    location: "Computer Lab B",
    capacity: 25,
    enrolled: 23,
    available: true,
    term: "Spring 2025",
  },
  {
    id: "math101",
    code: "MATH101",
    title: "Calculus I",
    credits: 4,
    department: "MATH",
    level: "100",
    description: "Limits, derivatives, and applications of derivatives. Introduction to integration.",
    prerequisites: "High school algebra and trigonometry",
    instructor: "Prof. Lisa Wang",
    schedule: "TTh 9:00-10:30 AM",
    location: "Math Building 201",
    capacity: 35,
    enrolled: 32,
    available: true,
    term: "Spring 2025",
  },
  {
    id: "eng102",
    code: "ENG102",
    title: "Academic Writing",
    credits: 3,
    department: "ENG",
    level: "100",
    description: "Advanced composition focusing on research, argumentation, and academic writing conventions.",
    prerequisites: "ENG101",
    instructor: "Dr. Emily Rodriguez",
    schedule: "MWF 11:00-12:00 PM",
    location: "Humanities 105",
    capacity: 20,
    enrolled: 18,
    available: true,
    term: "Spring 2025",
  },
  {
    id: "phys201",
    code: "PHYS201",
    title: "Physics for Engineers",
    credits: 4,
    department: "PHYS",
    level: "200",
    description: "Mechanics, thermodynamics, and wave motion with applications to engineering problems.",
    prerequisites: "MATH101, PHYS101",
    instructor: "Dr. James Wilson",
    schedule: "TTh 10:00-11:30 AM",
    location: "Physics Lab 301",
    capacity: 30,
    enrolled: 28,
    available: true,
    term: "Spring 2025",
  },
  {
    id: "cs301",
    code: "CS301",
    title: "Computer Organization",
    credits: 3,
    department: "CS",
    level: "300",
    description: "Computer architecture, assembly language programming, and system-level programming concepts.",
    prerequisites: "CS201",
    instructor: "Dr. Michael Chen",
    schedule: "MWF 2:00-3:00 PM",
    location: "Computer Lab C",
    capacity: 25,
    enrolled: 25,
    available: false,
    term: "Spring 2025",
  },
]

export default function CourseCatalogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = 
      searchTerm === "" ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = departmentFilter === "all" || course.department === departmentFilter
    const matchesLevel = levelFilter === "all" || course.level.startsWith(levelFilter)
    const matchesAvailability = 
      availabilityFilter === "all" ||
      (availabilityFilter === "available" && course.available) ||
      (availabilityFilter === "full" && !course.available)

    return matchesSearch && matchesDepartment && matchesLevel && matchesAvailability
  })

  const getAvailabilityBadge = (course: any) => {
    if (course.available) {
      const spotsLeft = course.capacity - course.enrolled
      if (spotsLeft <= 3) {
        return <Badge className="bg-yellow-100 text-yellow-800">Few spots left</Badge>
      }
      return <Badge className="bg-green-100 text-green-800">Available</Badge>
    }
    return <Badge className="bg-red-100 text-red-800">Full</Badge>
  }

  const getLevelColor = (level: string) => {
    if (level.startsWith("1")) return "bg-blue-100 text-blue-800"
    if (level.startsWith("2")) return "bg-green-100 text-green-800"
    if (level.startsWith("3")) return "bg-orange-100 text-orange-800"
    if (level.startsWith("4")) return "bg-purple-100 text-purple-800"
    return "bg-gray-100 text-gray-800"
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
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Course Catalog</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="browse">Browse Courses</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search courses, instructors..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Departments</SelectItem>
                      {departments.map((dept) => (
                        <SelectItem key={dept.code} value={dept.code}>
                          {dept.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={levelFilter} onValueChange={setLevelFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="1">100-level</SelectItem>
                      <SelectItem value="2">200-level</SelectItem>
                      <SelectItem value="3">300-level</SelectItem>
                      <SelectItem value="4">400-level</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Courses</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="full">Full</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Course Results */}
            <div className="space-y-4">
              {filteredCourses.length === 0 ? (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-10">
                    <BookOpen className="h-10 w-10 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-1">No courses found</h3>
                    <p className="text-gray-500">Try adjusting your search criteria</p>
                  </CardContent>
                </Card>
              ) : (
                filteredCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">
                              {course.code} - {course.title}
                            </CardTitle>
                            <Badge className={getLevelColor(course.level)}>
                              {course.level}-level
                            </Badge>
                            {getAvailabilityBadge(course)}
                          </div>
                          <CardDescription className="text-base">
                            {course.description}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-emerald-600">
                            {course.credits} credits
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>Prof. {course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{course.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{course.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>{course.enrolled}/{course.capacity} enrolled</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <strong>Prerequisites:</strong> {course.prerequisites}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-emerald-600 hover:bg-emerald-700"
                            disabled={!course.available}
                          >
                            {course.available ? "Add to Cart" : "Join Waitlist"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((department) => {
                const deptCourses = courses.filter(course => course.department === department.code)
                const availableCourses = deptCourses.filter(course => course.available).length
                
                return (
                  <Card key={department.code} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        {department.name}
                      </CardTitle>
                      <CardDescription>
                        Department Code: {department.code}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Total Courses:</span>
                          <span className="font-medium">{deptCourses.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Available:</span>
                          <span className="font-medium text-green-600">{availableCourses}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Full:</span>
                          <span className="font-medium text-red-600">{deptCourses.length - availableCourses}</span>
                        </div>
                        <Button 
                          className="w-full mt-4" 
                          variant="outline"
                          onClick={() => setDepartmentFilter(department.code)}
                        >
                          View Courses
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
