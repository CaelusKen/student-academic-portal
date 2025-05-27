"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Award, CheckCircle, Circle, Clock, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const degreeInfo = {
  program: "Bachelor of Science in Computer Science",
  totalCredits: 120,
  completedCredits: 62,
  inProgressCredits: 10,
  remainingCredits: 48,
  expectedGraduation: "Spring 2026",
  currentGPA: 3.67,
}

const requirements = [
  {
    category: "General Education",
    totalCredits: 42,
    completedCredits: 30,
    inProgressCredits: 6,
    courses: [
      { code: "ENG101", name: "Composition I", credits: 3, status: "completed", grade: "A-" },
      { code: "ENG102", name: "Composition II", credits: 3, status: "in-progress", grade: null },
      { code: "MATH101", name: "Calculus I", credits: 4, status: "completed", grade: "B+" },
      { code: "MATH201", name: "Calculus II", credits: 4, status: "in-progress", grade: null },
      { code: "HIST101", name: "World History", credits: 3, status: "completed", grade: "B" },
      { code: "PHYS101", name: "Physics I", credits: 4, status: "completed", grade: "A" },
      { code: "CHEM101", name: "Chemistry I", credits: 4, status: "completed", grade: "B+" },
      { code: "PHIL101", name: "Introduction to Philosophy", credits: 3, status: "completed", grade: "A" },
      { code: "ART101", name: "Art Appreciation", credits: 3, status: "completed", grade: "A-" },
      { code: "PSYC101", name: "Introduction to Psychology", credits: 3, status: "completed", grade: "B+" },
      { code: "ECON101", name: "Microeconomics", credits: 3, status: "completed", grade: "B" },
      { code: "BIOL101", name: "Biology I", credits: 4, status: "completed", grade: "A-" },
      { code: "STAT201", name: "Statistics", credits: 3, status: "needed", grade: null },
      { code: "COMM101", name: "Public Speaking", credits: 3, status: "needed", grade: null },
    ],
  },
  {
    category: "Computer Science Core",
    totalCredits: 48,
    completedCredits: 21,
    inProgressCredits: 3,
    courses: [
      { code: "CS101", name: "Introduction to Computer Science", credits: 3, status: "completed", grade: "A" },
      { code: "CS201", name: "Data Structures", credits: 3, status: "in-progress", grade: null },
      { code: "CS202", name: "Algorithms", credits: 3, status: "completed", grade: "A-" },
      { code: "CS301", name: "Computer Organization", credits: 3, status: "completed", grade: "B+" },
      { code: "CS302", name: "Operating Systems", credits: 3, status: "completed", grade: "B" },
      { code: "CS401", name: "Software Engineering", credits: 3, status: "completed", grade: "A" },
      { code: "CS402", name: "Database Systems", credits: 3, status: "completed", grade: "A-" },
      { code: "CS403", name: "Computer Networks", credits: 3, status: "needed", grade: null },
      { code: "CS404", name: "Artificial Intelligence", credits: 3, status: "needed", grade: null },
      { code: "CS405", name: "Machine Learning", credits: 3, status: "needed", grade: null },
      { code: "CS406", name: "Cybersecurity", credits: 3, status: "needed", grade: null },
      { code: "CS407", name: "Web Development", credits: 3, status: "needed", grade: null },
      { code: "CS408", name: "Mobile App Development", credits: 3, status: "needed", grade: null },
      { code: "CS409", name: "Computer Graphics", credits: 3, status: "needed", grade: null },
      { code: "CS410", name: "Senior Capstone", credits: 6, status: "needed", grade: null },
    ],
  },
  {
    category: "Mathematics",
    totalCredits: 15,
    completedCredits: 8,
    inProgressCredits: 1,
    courses: [
      { code: "MATH101", name: "Calculus I", credits: 4, status: "completed", grade: "B+" },
      { code: "MATH201", name: "Calculus II", credits: 4, status: "in-progress", grade: null },
      { code: "MATH301", name: "Discrete Mathematics", credits: 3, status: "needed", grade: null },
      { code: "MATH401", name: "Linear Algebra", credits: 4, status: "needed", grade: null },
    ],
  },
  {
    category: "Electives",
    totalCredits: 15,
    completedCredits: 3,
    inProgressCredits: 0,
    courses: [
      { code: "MUS101", name: "Music Appreciation", credits: 3, status: "completed", grade: "A" },
      { code: "SPAN101", name: "Spanish I", credits: 3, status: "needed", grade: null },
      { code: "SPAN102", name: "Spanish II", credits: 3, status: "needed", grade: null },
      { code: "PHIL201", name: "Ethics", credits: 3, status: "needed", grade: null },
      { code: "GEOG101", name: "Physical Geography", credits: 3, status: "needed", grade: null },
    ],
  },
]

export default function DegreeProgressPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredRequirements = selectedCategory === "all" 
    ? requirements 
    : requirements.filter(req => req.category === selectedCategory)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "needed":
        return <Circle className="h-4 w-4 text-gray-400" />
      default:
        return <Circle className="h-4 w-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "needed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getGradeColor = (grade: string | null) => {
    if (!grade) return ""
    if (grade.startsWith("A")) return "text-green-600"
    if (grade.startsWith("B")) return "text-blue-600"
    if (grade.startsWith("C")) return "text-yellow-600"
    return "text-red-600"
  }

  const overallProgress = (degreeInfo.completedCredits / degreeInfo.totalCredits) * 100

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
              <Award className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">Degree Progress</h1>
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download Audit</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Degree Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600" />
              {degreeInfo.program}
            </CardTitle>
            <CardDescription>Expected Graduation: {degreeInfo.expectedGraduation}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">{degreeInfo.completedCredits}</div>
                <div className="text-sm text-gray-600">Credits Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{degreeInfo.inProgressCredits}</div>
                <div className="text-sm text-gray-600">Credits In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{degreeInfo.remainingCredits}</div>
                <div className="text-sm text-gray-600">Credits Remaining</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{degreeInfo.currentGPA}</div>
                <div className="text-sm text-gray-600">Current GPA</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-gray-600">{Math.round(overallProgress)}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="requirements" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="planning">Course Planning</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="space-y-6">
            {filteredRequirements.map((category) => {
              const categoryProgress = (category.completedCredits / category.totalCredits) * 100
              
              return (
                <Card key={category.category}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <Badge variant="outline">
                        {category.completedCredits + category.inProgressCredits}/{category.totalCredits} credits
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Progress</span>
                      <span className="text-sm text-gray-600">{Math.round(categoryProgress)}%</span>
                    </div>
                    <Progress value={categoryProgress} className="h-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {category.courses.map((course) => (
                        <div key={course.code} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(course.status)}
                            <div>
                              <div className="font-medium">{course.code} - {course.name}</div>
                              <div className="text-sm text-gray-600">{course.credits} credits</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {course.grade && (
                              <span className={`font-medium ${getGradeColor(course.grade)}`}>
                                {course.grade}
                              </span>
                            )}
                            <Badge className={getStatusColor(course.status)}>
                              {course.status.replace("-", " ")}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          <TabsContent value="planning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Course Sequence</CardTitle>
                <CardDescription>Suggested courses for upcoming semesters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Fall 2025 (Recommended)</h4>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">CS403 - Computer Networks</div>
                          <div className="text-sm text-gray-600">3 credits</div>
                        </div>
                        <Badge variant="outline">Core Requirement</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">MATH301 - Discrete Mathematics</div>
                          <div className="text-sm text-gray-600">3 credits</div>
                        </div>
                        <Badge variant="outline">Math Requirement</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">STAT201 - Statistics</div>
                          <div className="text-sm text-gray-600">3 credits</div>
                        </div>
                        <Badge variant="outline">General Education</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">SPAN101 - Spanish I</div>
                          <div className="text-sm text-gray-600">3 credits</div>
                        </div>
                        <Badge variant="outline">Elective</Badge>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      Total: 12 credits
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Spring 2026 (Recommended)</h4>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">CS404 - Artificial Intelligence</div>
                          <div className="text-sm text-gray-600">3 credits</div>
                        </div>
                        <Badge variant="outline">Core Requirement</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">CS410 - Senior Capstone</div>
                          <div className="text-sm text-gray-600">6 credits</div>
                        </div>
                        <Badge variant="outline">Core Requirement</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">COMM101 - Public Speaking</div>
                          <div className="text-sm text-gray-600">3 credits</div>
                        </div>
                        <Badge variant="outline">General Education</Badge>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                      Total: 12 credits
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Course Prerequisites</CardTitle>
                <CardDescription>Prerequisites for remaining courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium">CS404 - Artificial Intelligence</h4>
                    <p className="text-sm text-gray-600">Prerequisites: CS201 (Data Structures), MATH301 (Discrete Mathematics)</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-medium">CS405 - Machine Learning</h4>
                    <p className="text-sm text-gray-600">Prerequisites: CS404 (AI), STAT201 (Statistics), MATH401 (Linear Algebra)</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">CS410 - Senior Capstone</h4>
                    <p className="text-sm text-gray-600">Prerequisites: Senior standing, completion of core CS courses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Graduation Timeline</CardTitle>
                <CardDescription>Your path to degree completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">Fall 2024 - Spring 2025 (Current)</h4>
                      <p className="text-sm text-gray-600 mb-2">Completed 62 credits, currently enrolled in 10 credits</p>
                      <div className="text-xs text-green-600">✓ On track</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">Fall 2025</h4>
                      <p className="text-sm text-gray-600 mb-2">Plan to complete 12 credits (CS403, MATH301, STAT201, SPAN101)</p>
                      <div className="text-xs text-blue-600">→ Planned</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">Spring 2026</h4>
                      <p className="text-sm text-gray-600 mb-2">Plan to complete 12 credits including Senior Capstone</p>
                      <div className="text-xs text-blue-600">→ Planned</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                    <div className="flex-1">
                      <h4 className="font-medium">May 2026</h4>
                      <p className="text-sm text-gray-600 mb-2">Expected graduation with Bachelor of Science in Computer Science</p>
                      <div className="text-xs text-purple-600">🎓 Graduation</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Graduation Checklist</CardTitle>
                <CardDescription>Requirements for degree completion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Complete 120 total credits</span>
                    <Badge className="bg-green-100 text-green-800">62/120 completed</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Maintain minimum 2.0 GPA</span>
                    <Badge className="bg-green-100 text-green-800">3.67 GPA</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Circle className="h-5 w-5 text-gray-400" />
                    <span>Complete all core CS requirements</span>
                    <Badge className="bg-yellow-100 text-yellow-800">21/48 completed</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Circle className="h-5 w-5 text-gray-400" />
                    <span>Complete Senior Capstone project</span>
                    <Badge className="bg-gray-100 text-gray-800">Not started</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Circle className="h-5 w-5 text-gray-400" />
                    <span>Submit graduation application</span>
                    <Badge className="bg-gray-100 text-gray-800">Due: Fall 2025</Badge>
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
