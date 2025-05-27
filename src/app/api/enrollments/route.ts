import { NextResponse } from 'next/server'
import { db, supabase } from '@/lib/supabase'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const studentId = searchParams.get('studentId')
    const courseId = searchParams.get('courseId')

    if (studentId) {
      const enrollments = await db.enrollments.getByStudentId(studentId)
      return NextResponse.json(enrollments)
    }

    if (courseId) {
      const enrollments = await db.enrollments.getByCourseId(courseId)
      return NextResponse.json(enrollments)
    }

    // If no filters are provided, return all enrollments
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        student:students(*),
        course:courses(*),
        semester:semesters(*)
      `)

    if (error) throw error
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch enrollments' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { data, error } = await supabase
      .from('enrollments')
      .insert([body])
      .select(`
        *,
        student:students(*),
        course:courses(*),
        semester:semesters(*)
      `)
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create enrollment' },
      { status: 500 }
    )
  }
} 