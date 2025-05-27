import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Helper function to handle Supabase errors
export const handleSupabaseError = (error: any) => {
  console.error('Supabase error:', error)
  throw new Error(error.message || 'An error occurred while interacting with the database')
}

// Type-safe database queries
export const db = {
  // Faculties
  faculties: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('faculties')
        .select('*')
      if (error) throw error
      return data
    },
    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('faculties')
        .select('*')
        .eq('id', id)
        .single()
      if (error) throw error
      return data
    }
  },

  // Departments
  departments: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('departments')
        .select(`
          *,
          faculty:faculties(*),
          campus:campuses(*)
        `)
      if (error) throw error
      return data
    },
    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('departments')
        .select(`
          *,
          faculty:faculties(*),
          campus:campuses(*)
        `)
        .eq('id', id)
        .single()
      if (error) throw error
      return data
    }
  },

  // Students
  students: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('students')
        .select(`
          *,
          department:departments(*)
        `)
      if (error) throw error
      return data
    },
    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('students')
        .select(`
          *,
          department:departments(*)
        `)
        .eq('id', id)
        .single()
      if (error) throw error
      return data
    },
    getByEmail: async (email: string) => {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('email', email)
        .single()
      if (error) throw error
      return data
    }
  },

  // Courses
  courses: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          department:departments(*)
        `)
      if (error) throw error
      return data
    },
    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          department:departments(*)
        `)
        .eq('id', id)
        .single()
      if (error) throw error
      return data
    }
  },

  // Enrollments
  enrollments: {
    getByStudentId: async (studentId: string) => {
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          course:courses(*),
          semester:semesters(*)
        `)
        .eq('student_id', studentId)
      if (error) throw error
      return data
    },
    getByCourseId: async (courseId: string) => {
      const { data, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          student:students(*)
        `)
        .eq('course_id', courseId)
      if (error) throw error
      return data
    }
  }
} 