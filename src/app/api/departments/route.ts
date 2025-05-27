import { NextResponse } from 'next/server'
import { db, supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const departments = await db.departments.getAll()
    return NextResponse.json(departments)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch departments' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { data, error } = await supabase
      .from('departments')
      .insert([body])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create department' },
      { status: 500 }
    )
  }
} 