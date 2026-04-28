/**
 * Numaway database type definitions — generated from Supabase schema.
 * Mirrors the tables defined in supabase/migrations/001_initial_schema.sql.
 * Update this file whenever the schema changes.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          nationality: string | null;
          date_of_birth: string | null;
          highest_qualification: string | null;
          target_country: string | null;
          target_intake: string | null;
          budget_range: string | null;
          ndpa_consent: boolean;
          ndpa_consent_at: string | null;
          role: "student" | "admin" | "counsellor";
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["profiles"]["Row"], "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      applications: {
        Row: {
          id: string;
          student_id: string;
          university_name: string;
          university_country: string;
          programme_name: string;
          intake: string;
          status:
            | "draft"
            | "in_review"
            | "documents_pending"
            | "submitted"
            | "offer_received"
            | "accepted"
            | "rejected"
            | "deferred";
          progress_pct: number;
          deadline: string | null;
          notes: string | null;
          service_id: string | null;
          counsellor_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["applications"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["applications"]["Insert"]>;
      };
      documents: {
        Row: {
          id: string;
          student_id: string;
          application_id: string | null;
          document_type:
            | "passport"
            | "transcript"
            | "personal_statement"
            | "reference_letter"
            | "ielts_certificate"
            | "financial_statement"
            | "other";
          file_name: string;
          storage_path: string;
          file_size_bytes: number;
          status: "pending_review" | "approved" | "rejected";
          rejection_reason: string | null;
          uploaded_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["documents"]["Row"], "id" | "uploaded_at">;
        Update: Partial<Database["public"]["Tables"]["documents"]["Insert"]>;
      };
      consultations: {
        Row: {
          id: string;
          student_id: string | null;
          lead_id: string | null;
          counsellor_id: string | null;
          scheduled_at: string;
          duration_mins: number;
          meeting_type: "video" | "phone" | "in_person";
          meeting_link: string | null;
          status: "scheduled" | "completed" | "cancelled" | "no_show";
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["consultations"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["consultations"]["Insert"]>;
      };
      leads: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          source: "website" | "whatsapp" | "referral" | "social" | "other";
          target_country: string | null;
          target_intake: string | null;
          status: "new" | "contacted" | "qualified" | "converted" | "lost";
          assigned_to: string | null;
          notes: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["leads"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["leads"]["Insert"]>;
      };
      messages: {
        Row: {
          id: string;
          sender_id: string;
          recipient_id: string;
          subject: string | null;
          body: string;
          is_read: boolean;
          related_application_id: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["messages"]["Row"], "id" | "is_read" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["messages"]["Insert"]>;
      };
      sage_conversations: {
        Row: {
          id: string;
          student_id: string;
          session_id: string;
          role: "user" | "assistant";
          content: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["sage_conversations"]["Row"], "id" | "created_at">;
        Update: never;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// Convenience row types
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Application = Database["public"]["Tables"]["applications"]["Row"];
export type Document = Database["public"]["Tables"]["documents"]["Row"];
export type Consultation = Database["public"]["Tables"]["consultations"]["Row"];
export type Lead = Database["public"]["Tables"]["leads"]["Row"];
export type Message = Database["public"]["Tables"]["messages"]["Row"];
export type SageConversation = Database["public"]["Tables"]["sage_conversations"]["Row"];
