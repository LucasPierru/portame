export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cover_letters: {
        Row: {
          company: string | null
          content: string | null
          created_at: string | null
          id: string
          job_description: string | null
          job_title: string | null
          pdf_path: string | null
          user_id: string | null
        }
        Insert: {
          company?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          job_description?: string | null
          job_title?: string | null
          pdf_path?: string | null
          user_id?: string | null
        }
        Update: {
          company?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          job_description?: string | null
          job_title?: string | null
          pdf_path?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      experience: {
        Row: {
          company: string
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          is_current: boolean | null
          location: string | null
          start_date: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          company: string
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location?: string | null
          start_date?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          company?: string
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location?: string | null
          start_date?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      portfolio_settings: {
        Row: {
          custom_url: string | null
          id: string
          is_public: boolean | null
          show_email: boolean | null
          show_experience: boolean | null
          show_projects: boolean | null
          theme: string | null
          user_id: string | null
        }
        Insert: {
          custom_url?: string | null
          id?: string
          is_public?: boolean | null
          show_email?: boolean | null
          show_experience?: boolean | null
          show_projects?: boolean | null
          theme?: string | null
          user_id?: string | null
        }
        Update: {
          custom_url?: string | null
          id?: string
          is_public?: boolean | null
          show_email?: boolean | null
          show_experience?: boolean | null
          show_projects?: boolean | null
          theme?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          bio: string | null
          created_at: string | null
          full_name: string | null
          id: string
          profile_picture: string | null
          username: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          profile_picture?: string | null
          username?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          profile_picture?: string | null
          username?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string | null
          id: string
          impact: string | null
          link: string | null
          repo: string | null
          start_date: string | null
          technologies: string[] | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          impact?: string | null
          link?: string | null
          repo?: string | null
          start_date?: string | null
          technologies?: string[] | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          impact?: string | null
          link?: string | null
          repo?: string | null
          start_date?: string | null
          technologies?: string[] | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      resumes: {
        Row: {
          content: Json | null
          created_at: string | null
          id: string
          job_description: string | null
          job_title: string | null
          pdf_path: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          content?: Json | null
          created_at?: string | null
          id?: string
          job_description?: string | null
          job_title?: string | null
          pdf_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: Json | null
          created_at?: string | null
          id?: string
          job_description?: string | null
          job_title?: string | null
          pdf_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      skills: {
        Row: {
          category: string | null
          id: string
          level: string | null
          name: string
          user_id: string | null
        }
        Insert: {
          category?: string | null
          id?: string
          level?: string | null
          name: string
          user_id?: string | null
        }
        Update: {
          category?: string | null
          id?: string
          level?: string | null
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
