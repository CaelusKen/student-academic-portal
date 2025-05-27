import { NextResponse } from 'next/server'
import { db, supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const students = await db.students.getAll()
    return NextResponse.json(students)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch students' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { data, error } = await supabase
      .from('students')
      .insert([body])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    )
  }
} 