import { NextResponse } from 'next/server'
import { db, supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const faculties = await db.faculties.getAll()
    return NextResponse.json(faculties)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch faculties' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { data, error } = await supabase
      .from('faculties')
      .insert([body])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create faculty' },
      { status: 500 }
    )
  }
} 