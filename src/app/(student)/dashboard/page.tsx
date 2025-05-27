import Link from "next/link"
import {
  Bell,
  BookOpen,
  Calendar,
  FileText,
  HelpCircle,
  Info,
  User,
  DollarSign,
  BookMarked,
  Clock,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            <h1 className="text-xl font-bold">Academic Portal</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
              <HelpCircle className="h-4 w-4" />
              <span>Help</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">My Account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg p-6 mb-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Welcome to the Academic Portal</h2>
          <p className="opacity-90 max-w-2xl">
            Access your academic information, register for courses, view your schedule, and manage your academic journey
            all in one place.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/registration" className="text-emerald-600 hover:underline flex items-center gap-1">
                    Register for courses
                  </Link>
                </li>
                <li>
                  <Link href="/registration" className="text-emerald-600 hover:underline flex items-center gap-1">
                    Add/drop courses
                  </Link>
                </li>
                <li>
                  <Link href="/registration" className="text-emerald-600 hover:underline flex items-center gap-1">
                    View registration status
                  </Link>
                </li>
                <li>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                    Registration deadline: May 15
                  </Badge>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" />
                Academic Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/grades" className="text-emerald-600 hover:underline flex items-center gap-1">
                    View grades
                  </Link>
                </li>
                <li>
                  <Link href="/grades" className="text-emerald-600 hover:underline flex items-center gap-1">
                    Download transcripts
                  </Link>
                </li>
                <li>
                  <Link href="/grades" className="text-emerald-600 hover:underline flex items-center gap-1">
                    View degree progress
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-emerald-600 hover:underline flex items-center gap-1">
                    Academic calendar
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="h-5 w-5 text-emerald-600" />
                Important Notices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Badge variant="destructive" className="mt-0.5 shrink-0">
                    New
                  </Badge>
                  <span>Final exam schedule now available</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="destructive" className="mt-0.5 shrink-0">
                    New
                  </Badge>
                  <span>Tuition payment deadline extended to June 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge variant="outline" className="mt-0.5 shrink-0">
                    Info
                  </Badge>
                  <span>Summer courses registration opens next week</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-4">
            <TabsTrigger value="academic">Academic Information</TabsTrigger>
            <TabsTrigger value="procedures">Procedures & Deadlines</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="regulations">Regulations</TabsTrigger>
          </TabsList>

          <TabsContent value="academic" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Registration & Application</CardTitle>
                  <CardDescription>Manage your course registration and applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/registration" className="text-emerald-600 hover:underline">
                        Register for new semester
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" className="text-emerald-600 hover:underline">
                        Cancel registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" className="text-emerald-600 hover:underline">
                        Suspend one semester
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" className="text-emerald-600 hover:underline">
                        Move out class
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" className="text-emerald-600 hover:underline">
                        Register extra courses
                      </Link>
                    </li>
                    <li>
                      <Link href="/registration" className="text-emerald-600 hover:underline">
                        Register to repeat a course
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Access</CardTitle>
                  <CardDescription>Access your academic information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/schedule" className="text-emerald-600 hover:underline">
                        University timetable
                      </Link>
                    </li>
                    <li>
                      <Link href="/tuition" className="text-emerald-600 hover:underline">
                        Tuition fee per course
                      </Link>
                    </li>
                    <li>
                      <Link href="/schedule" className="text-emerald-600 hover:underline">
                        Weekly timetable
                      </Link>
                    </li>
                    <li>
                      <Link href="/schedule" className="text-emerald-600 hover:underline">
                        View exam schedule
                      </Link>
                    </li>
                    <li>
                      <Link href="/grades" className="text-emerald-600 hover:underline">
                        View Syllabus
                      </Link>
                    </li>
                    <li>
                      <Link href="/grades" className="text-emerald-600 hover:underline">
                        Student status guidelines
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="procedures" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Procedures & Deadlines</CardTitle>
                <CardDescription>Important academic procedures and their deadlines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="p-2 border">Type of procedure</th>
                        <th className="p-2 border">Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border">
                          <Link href="/registration" className="text-emerald-600 hover:underline">
                            1. Changing group
                          </Link>
                        </td>
                        <td className="p-2 border">4 weeks before the new semester (4 tuần trước học kỳ mới)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">
                          <Link href="/registration" className="text-emerald-600 hover:underline">
                            2. Changing campus
                          </Link>
                        </td>
                        <td className="p-2 border">4 weeks before the new semester (4 tuần trước học kỳ mới)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">
                          <Link href="/registration" className="text-emerald-600 hover:underline">
                            3. Retake
                          </Link>
                        </td>
                        <td className="p-2 border">10 days before the new semester (10 ngày trước học kỳ mới)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">
                          <Link href="/registration" className="text-emerald-600 hover:underline">
                            4. Suspend one semester
                          </Link>
                        </td>
                        <td className="p-2 border">1 week before the new semester (1 tuần trước học kỳ mới)</td>
                      </tr>
                      <tr>
                        <td className="p-2 border">
                          <Link href="/registration" className="text-emerald-600 hover:underline">
                            5. Suspend one semester to take repeated course
                          </Link>
                        </td>
                        <td className="p-2 border">1 week before the new semester (1 tuần trước học kỳ mới)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Resources</CardTitle>
                  <CardDescription>Access learning materials and resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/library" className="text-emerald-600 hover:underline">
                        Access e-books and journals
                      </Link>
                    </li>
                    <li>
                      <Link href="/library" className="text-emerald-600 hover:underline">
                        Library resources
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-emerald-600 hover:underline">
                        Online courses
                      </Link>
                    </li>
                    <li>
                      <Link href="/library" className="text-emerald-600 hover:underline">
                        Research databases
                      </Link>
                    </li>
                    <li>
                      <Link href="/library" className="text-emerald-600 hover:underline">
                        Academic writing resources
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feedback & Reports</CardTitle>
                  <CardDescription>Provide feedback and access reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-emerald-600 hover:underline">
                        Feedback about teaching
                      </Link>
                    </li>
                    <li>
                      <Link href="/grades" className="text-emerald-600 hover:underline">
                        Mark Report
                      </Link>
                    </li>
                    <li>
                      <Link href="/grades" className="text-emerald-600 hover:underline">
                        Academic Transcript
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-emerald-600 hover:underline">
                        Curriculum
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-emerald-600 hover:underline">
                        Attendance report
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regulations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Academic Regulations</CardTitle>
                <CardDescription>University rules and regulations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-emerald-600 hover:underline">
                      General regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-emerald-600 hover:underline">
                      Dormitory regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-emerald-600 hover:underline">
                      Examination regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="/tuition" className="text-emerald-600 hover:underline">
                      Tuition fee regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-emerald-600 hover:underline">
                      Student code of conduct
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Additional Quick Access Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Link href="/schedule">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Clock className="h-8 w-8 text-emerald-600 mb-2" />
                <h3 className="font-medium text-center">My Schedule</h3>
              </CardContent>
            </Card>
          </Link>

          <Link href="/grades">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Award className="h-8 w-8 text-emerald-600 mb-2" />
                <h3 className="font-medium text-center">Grades & Transcripts</h3>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tuition">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <DollarSign className="h-8 w-8 text-emerald-600 mb-2" />
                <h3 className="font-medium text-center">Tuition & Payments</h3>
              </CardContent>
            </Card>
          </Link>

          <Link href="/registration">
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <BookMarked className="h-8 w-8 text-emerald-600 mb-2" />
                <h3 className="font-medium text-center">Course Registration</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Contact</h3>
              <p className="text-sm text-gray-600">
                Academic Affairs Office
                <br />
                Room A1-203, Main Building
                <br />
                Email: academic@university.edu
                <br />
                Phone: (123) 456-7890
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    University Homepage
                  </Link>
                </li>
                <li>
                  <Link href="/library" className="text-gray-600 hover:text-emerald-600">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Student Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    IT Help Desk
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Help & Support</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    User Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Report an Issue
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-emerald-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2025 University Academic Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
