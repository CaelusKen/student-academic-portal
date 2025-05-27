"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, TrendingUp, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const currentSemesterGrades = [
  {
    courseId: "CS201",
    courseName: "Data Structures",
    credits: 3,
    instructor: "Dr. Alex Thompson",
    assignments: [
      { name: "Assignment 1", score: 85, maxScore: 100, weight: 15 },
      { name: "Midterm Exam", score: 78, maxScore: 100, weight: 30 },
      { name: "Assignment 2", score: 92, maxScore: 100, weight: 15 },
      { name: "Final Project", score: null, maxScore: 100, weight: 40 },
    ],
    currentGrade: "B+",
    gpa: 3.3,
  },
  {
    courseId: "MATH101",
    courseName: "Calculus I",
    credits: 4,
    instructor: "Prof. Lisa Wang",
    assignments: [
      { name: "Quiz 1", score: 95, maxScore: 100, weight: 10 },
      { name: "Quiz 2", score: 88, maxScore: 100, weight: 10 },
      { name: "Midterm", score: 82, maxScore: 100, weight: 35 },
      { name: "Final Exam", score: null, maxScore: 100, weight: 45 },
    ],
    currentGrade: "A-",
    gpa: 3.7,
  },
  {
    courseId: "ENG102",
    courseName: "Academic Writing",
    credits: 3,
    instructor: "Dr. Emily Rodriguez",
    assignments: [
      { name: "Essay 1", score: 90, maxScore: 100, weight: 25 },
      { name: "Essay 2", score: 87, maxScore: 100, weight: 25 },
      { name: "Research Paper", score: 93, maxScore: 100, weight: 35 },
      { name: "Final Portfolio", score: null, maxScore: 100, weight: 15 },
    ],
    currentGrade: "A",
    gpa: 4.0,
  },
]

const transcriptData = [
  {
    semester: "Fall 2024",
    courses: [
      { id: "CS101", name: "Intro to Computer Science", credits: 3, grade: "A", gpa: 4.0 },
      { id: "MATH100", name: "Pre-Calculus", credits: 3, grade: "B+", gpa: 3.3 },
      { id: "ENG101", name: "Composition", credits: 3, grade: "A-", gpa: 3.7 },
      { id: "HIST101", name: "World History", credits: 3, grade: "B", gpa: 3.0 },
    ],
    semesterGPA: 3.5,
    totalCredits: 12,
  },
  {
    semester: "Spring 2025",
    courses: currentSemesterGrades.map((course) => ({
      id: course.courseId,
      name: course.courseName,
      credits: course.credits,
      grade: course.currentGrade,
      gpa: course.gpa,
    })),
    semesterGPA: 3.67,
    totalCredits: 10,
    inProgress: true,
  },
]

export default function GradesPage() {
  const [selectedSemester, setSelectedSemester] = useState("Spring 2025")

  const calculateCurrentGPA = () => {
    const totalPoints = transcriptData.reduce((acc, semester) => {
      return (
        acc +
        semester.courses.reduce((semAcc, course) => {
          return semAcc + course.gpa * course.credits
        }, 0)
      )
    }, 0)

    const totalCredits = transcriptData.reduce((acc, semester) => {
      return acc + semester.totalCredits
    }, 0)

    return (totalPoints / totalCredits).toFixed(2)
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-600 bg-green-50"
    if (grade.startsWith("B")) return "text-blue-600 bg-blue-50"
    if (grade.startsWith("C")) return "text-yellow-600 bg-yellow-50"
    if (grade.startsWith("D")) return "text-orange-600 bg-orange-50"
    return "text-red-600 bg-red-50"
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
              <Award className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Academic Records</h1>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download Transcript</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* GPA Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                Cumulative GPA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-600">{calculateCurrentGPA()}</div>
              <p className="text-sm text-gray-600">Out of 4.0</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Current Semester</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">3.67</div>
              <p className="text-sm text-gray-600">Spring 2025 GPA</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">22</div>
              <p className="text-sm text-gray-600">Credits completed</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="current">Current Grades</TabsTrigger>
            <TabsTrigger value="transcript">Full Transcript</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            {currentSemesterGrades.map((course) => (
              <Card key={course.courseId}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        {course.courseId} - {course.courseName}
                      </CardTitle>
                      <CardDescription>
                        {course.instructor} • {course.credits} Credits
                      </CardDescription>
                    </div>
                    <Badge className={getGradeColor(course.currentGrade)}>{course.currentGrade}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium">Assignment Breakdown:</h4>
                    {course.assignments.map((assignment, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                        <div>
                          <span className="font-medium">{assignment.name}</span>
                          <span className="text-sm text-gray-500 ml-2">({assignment.weight}%)</span>
                        </div>
                        <div className="text-right">
                          {assignment.score !== null ? (
                            <span className="font-medium">
                              {assignment.score}/{assignment.maxScore}
                            </span>
                          ) : (
                            <Badge variant="outline">Pending</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="transcript" className="space-y-4">
            <div className="flex items-center gap-4 mb-4">
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  {transcriptData.map((semester) => (
                    <SelectItem key={semester.semester} value={semester.semester}>
                      {semester.semester}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {transcriptData
              .filter((semester) => selectedSemester === "All" || semester.semester === selectedSemester)
              .map((semester) => (
                <Card key={semester.semester}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          {semester.semester}
                          {semester.inProgress && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              In Progress
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription>
                          Semester GPA: {semester.semesterGPA} • {semester.totalCredits} Credits
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Course</th>
                            <th className="text-left py-2">Credits</th>
                            <th className="text-left py-2">Grade</th>
                            <th className="text-left py-2">Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          {semester.courses.map((course) => (
                            <tr key={course.id} className="border-b last:border-b-0">
                              <td className="py-2">
                                <div>
                                  <div className="font-medium">{course.id}</div>
                                  <div className="text-sm text-gray-600">{course.name}</div>
                                </div>
                              </td>
                              <td className="py-2">{course.credits}</td>
                              <td className="py-2">
                                <Badge className={getGradeColor(course.grade)}>{course.grade}</Badge>
                              </td>
                              <td className="py-2">{course.gpa.toFixed(1)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
