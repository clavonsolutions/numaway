-- Add super_admin role to profiles
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check check (role in ('student', 'admin', 'counsellor', 'super_admin'));
