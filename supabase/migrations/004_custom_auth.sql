-- Numaway Custom Auth Migration
-- ADR-017: Auth — Custom JWT + Resend
-- Run via: supabase db push

create extension if not exists "pgcrypto";

-- 1. Add new columns to public.profiles
alter table public.profiles
  add column if not exists password_hash text,
  add column if not exists reset_token text,
  add column if not exists reset_token_expires timestamptz;

-- 2. Modify id to auto-generate UUID if not provided (needed since we don't rely on auth.users generating it first)
alter table public.profiles
  alter column id set default uuid_generate_v4();

-- 3. Drop the foreign key constraint to auth.users
-- The constraint name is usually 'profiles_id_fkey' or similar
alter table public.profiles drop constraint if exists profiles_id_fkey;
alter table public.profiles drop constraint if exists profiles_id_fkey1;

-- 4. Set a default password hash for existing users ('Password123!')
update public.profiles
set password_hash = crypt('Password123!', gen_salt('bf'))
where password_hash is null;
alter table public.profiles drop constraint if exists profiles_id_fkey;

-- We don't delete auth.users data here, just decouple our profiles from it.
-- Any future inserts into profiles won't require a corresponding auth.users record.
