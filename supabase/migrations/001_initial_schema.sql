-- Numaway Initial Schema
-- ADR-015: Database — Supabase PostgreSQL
-- ADR-016: Auth — Supabase Auth
-- Run via: supabase db push (or apply in Supabase dashboard)

-- ============================================================
-- EXTENSIONS
-- ============================================================
create extension if not exists "uuid-ossp";

-- ============================================================
-- PROFILES
-- Extends auth.users. Created automatically by trigger below.
-- ============================================================
create table if not exists public.profiles (
  id              uuid primary key references auth.users(id) on delete cascade,
  email           text not null,
  full_name       text,
  phone           text,
  nationality     text,
  date_of_birth   date,
  highest_qualification text,
  target_country  text,
  target_intake   text,
  budget_range    text,
  ndpa_consent    boolean not null default false,
  ndpa_consent_at timestamptz,
  role            text not null default 'student'
                    check (role in ('student', 'admin', 'counsellor')),
  avatar_url      text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Auto-create profile on new user
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Auto-update updated_at
create or replace function public.update_updated_at()
returns trigger language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.update_updated_at();

-- ============================================================
-- APPLICATIONS
-- ============================================================
create table if not exists public.applications (
  id                  uuid primary key default uuid_generate_v4(),
  student_id          uuid not null references public.profiles(id) on delete cascade,
  university_name     text not null,
  university_country  text not null,
  programme_name      text not null,
  intake              text not null,
  status              text not null default 'draft'
                        check (status in (
                          'draft', 'in_review', 'documents_pending',
                          'submitted', 'offer_received', 'accepted', 'rejected', 'deferred'
                        )),
  progress_pct        integer not null default 0 check (progress_pct between 0 and 100),
  deadline            date,
  notes               text,
  service_id          text,          -- e.g. 'STU-03'
  counsellor_id       uuid references public.profiles(id),
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create trigger applications_updated_at
  before update on public.applications
  for each row execute procedure public.update_updated_at();

-- ============================================================
-- DOCUMENTS
-- ============================================================
create table if not exists public.documents (
  id                uuid primary key default uuid_generate_v4(),
  student_id        uuid not null references public.profiles(id) on delete cascade,
  application_id    uuid references public.applications(id) on delete set null,
  document_type     text not null default 'other'
                      check (document_type in (
                        'passport', 'transcript', 'personal_statement',
                        'reference_letter', 'ielts_certificate',
                        'financial_statement', 'other'
                      )),
  file_name         text not null,
  storage_path      text not null,
  file_size_bytes   integer not null,
  status            text not null default 'pending_review'
                      check (status in ('pending_review', 'approved', 'rejected')),
  rejection_reason  text,
  uploaded_at       timestamptz not null default now()
);

-- ============================================================
-- CONSULTATIONS
-- ============================================================
create table if not exists public.consultations (
  id              uuid primary key default uuid_generate_v4(),
  student_id      uuid references public.profiles(id) on delete set null,
  lead_id         uuid,              -- references leads table below
  counsellor_id   uuid references public.profiles(id) on delete set null,
  scheduled_at    timestamptz not null,
  duration_mins   integer not null default 30,
  meeting_type    text not null default 'video'
                    check (meeting_type in ('video', 'phone', 'in_person')),
  meeting_link    text,
  status          text not null default 'scheduled'
                    check (status in ('scheduled', 'completed', 'cancelled', 'no_show')),
  notes           text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger consultations_updated_at
  before update on public.consultations
  for each row execute procedure public.update_updated_at();

-- ============================================================
-- LEADS
-- ============================================================
create table if not exists public.leads (
  id              uuid primary key default uuid_generate_v4(),
  full_name       text not null,
  email           text not null,
  phone           text,
  source          text not null default 'website'
                    check (source in ('website', 'whatsapp', 'referral', 'social', 'other')),
  target_country  text,
  target_intake   text,
  status          text not null default 'new'
                    check (status in ('new', 'contacted', 'qualified', 'converted', 'lost')),
  assigned_to     uuid references public.profiles(id) on delete set null,
  notes           text,
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create trigger leads_updated_at
  before update on public.leads
  for each row execute procedure public.update_updated_at();

-- Add lead_id FK to consultations now that leads table exists
alter table public.consultations
  add constraint consultations_lead_id_fkey
  foreign key (lead_id) references public.leads(id) on delete set null;

-- ============================================================
-- MESSAGES
-- ============================================================
create table if not exists public.messages (
  id                        uuid primary key default uuid_generate_v4(),
  sender_id                 uuid not null references public.profiles(id) on delete cascade,
  recipient_id              uuid not null references public.profiles(id) on delete cascade,
  subject                   text,
  body                      text not null,
  is_read                   boolean not null default false,
  related_application_id    uuid references public.applications(id) on delete set null,
  created_at                timestamptz not null default now()
);

-- ============================================================
-- SAGE CONVERSATIONS
-- Audit trail for AI interactions per NDPA / MRS §7.5
-- ============================================================
create table if not exists public.sage_conversations (
  id          uuid primary key default uuid_generate_v4(),
  student_id  uuid not null references public.profiles(id) on delete cascade,
  session_id  text not null,
  role        text not null check (role in ('user', 'assistant')),
  content     text not null,
  created_at  timestamptz not null default now()
);

-- ============================================================
-- ROLE-CHECK HELPER FUNCTIONS
-- security definer = runs as the defining role, bypassing RLS.
-- This prevents the infinite-recursion that would occur if an RLS
-- policy on public.profiles used an EXISTS subquery against the same
-- table to determine whether the caller is an admin.
-- All admin/staff checks in every policy MUST use these functions.
-- ============================================================

create or replace function public.is_admin()
returns boolean language sql security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

create or replace function public.is_staff()
returns boolean language sql security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('admin', 'counsellor')
  );
$$;

-- ============================================================
-- ROLE ESCALATION GUARD
-- Prevents any authenticated user from changing their own role
-- (or another user's role) unless they are already an admin.
-- The trigger fires BEFORE every UPDATE on profiles; is_admin()
-- is security definer so the check itself cannot cause recursion.
-- ============================================================

create or replace function public.prevent_role_escalation()
returns trigger language plpgsql security definer
set search_path = public
as $$
begin
  if new.role <> old.role and not public.is_admin() then
    raise exception 'Only admins may change the role column';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_prevent_role_escalation on public.profiles;
create trigger profiles_prevent_role_escalation
  before update on public.profiles
  for each row execute procedure public.prevent_role_escalation();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- profiles
alter table public.profiles enable row level security;

create policy "Users: select own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Admins see every profile row.
-- Uses is_admin() (security definer) to avoid recursive EXISTS on this table.
create policy "Admins: select all profiles"
  on public.profiles for select
  using (public.is_admin());

-- Users may update their own row.
-- Role changes are blocked at the trigger level (prevent_role_escalation).
create policy "Users: update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- applications
alter table public.applications enable row level security;

create policy "Students: select own applications"
  on public.applications for select
  using (student_id = auth.uid());

create policy "Students: insert own applications"
  on public.applications for insert
  with check (student_id = auth.uid());

-- Students may only update applications that are still in draft status.
-- Once a counsellor advances an application past draft, the student
-- can no longer self-service update it, preventing status escalation.
create policy "Students: update own applications"
  on public.applications for update
  using (student_id = auth.uid() and status = 'draft');

create policy "Staff: manage all applications"
  on public.applications for all
  using (public.is_staff());

-- documents
alter table public.documents enable row level security;

create policy "Students: manage own documents"
  on public.documents for all
  using (student_id = auth.uid());

create policy "Staff: manage all documents"
  on public.documents for all
  using (public.is_staff());

-- consultations
alter table public.consultations enable row level security;

create policy "Students: select own consultations"
  on public.consultations for select
  using (student_id = auth.uid());

create policy "Staff: manage all consultations"
  on public.consultations for all
  using (public.is_staff());

-- leads (admin/counsellor only)
alter table public.leads enable row level security;

create policy "Staff: manage all leads"
  on public.leads for all
  using (public.is_staff());

-- messages
alter table public.messages enable row level security;

create policy "Users: select own messages"
  on public.messages for select
  using (sender_id = auth.uid() or recipient_id = auth.uid());

create policy "Users: insert own messages"
  on public.messages for insert
  with check (sender_id = auth.uid());

-- sage_conversations
alter table public.sage_conversations enable row level security;

create policy "Students: manage own sage history"
  on public.sage_conversations for all
  using (student_id = auth.uid());

-- Uses is_admin() (security definer) to avoid recursive EXISTS on profiles.
create policy "Admins: read all sage history"
  on public.sage_conversations for select
  using (public.is_admin());

-- ============================================================
-- STORAGE BUCKETS (run as supabase admin or via dashboard)
-- ============================================================
-- create bucket "student-documents" with RLS enabled.
-- Policy: authenticated users can upload to their own prefix (user_id/*).
-- insert into storage.buckets (id, name, public) values ('student-documents', 'student-documents', false);
