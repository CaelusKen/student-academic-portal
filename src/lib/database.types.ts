export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      faculties: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
      }
      campuses: {
        Row: {
          id: string
          name: string
          location: string | null
        }
        Insert: {
          id?: string
          name: string
          location?: string | null
        }
        Update: {
          id?: string
          name?: string
          location?: string | null
        }
      }
      departments: {
        Row: {
          id: string
          name: string
          code: string
          faculty_id: string | null
          campus_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          code: string
          faculty_id?: string | null
          campus_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          code?: string
          faculty_id?: string | null
          campus_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      students: {
        Row: {
          id: string
          student_id: string
          full_name: string
          email: string
          date_of_birth: string | null
          gender: string | null
          phone_number: string | null
          address: string | null
          profile_image_url: string | null
          department_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          full_name: string
          email: string
          date_of_birth?: string | null
          gender?: string | null
          phone_number?: string | null
          address?: string | null
          profile_image_url?: string | null
          department_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          full_name?: string
          email?: string
          date_of_birth?: string | null
          gender?: string | null
          phone_number?: string | null
          address?: string | null
          profile_image_url?: string | null
          department_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      professors: {
        Row: {
          id: string
          professor_id: string
          full_name: string
          email: string
          department_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          professor_id: string
          full_name: string
          email: string
          department_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          professor_id?: string
          full_name?: string
          email?: string
          department_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          course_code: string
          title: string
          description: string | null
          department_id: string | null
          credits: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_code: string
          title: string
          description?: string | null
          department_id?: string | null
          credits: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_code?: string
          title?: string
          description?: string | null
          department_id?: string | null
          credits?: number
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          student_id: string
          course_id: string
          semester_id: string
          status: 'enrolled' | 'completed' | 'dropped'
          grade: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          course_id: string
          semester_id: string
          status: 'enrolled' | 'completed' | 'dropped'
          grade?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          course_id?: string
          semester_id?: string
          status?: 'enrolled' | 'completed' | 'dropped'
          grade?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      // Add more table types as needed
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 