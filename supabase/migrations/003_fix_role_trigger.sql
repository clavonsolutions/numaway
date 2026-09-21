-- Allow super_admin, admin, and service_role/postgres to update roles
create or replace function public.prevent_role_escalation()
returns trigger language plpgsql security definer
set search_path = public
as $$
declare
  is_privileged boolean;
  current_role text;
begin
  -- If role didn't change, allow it
  if new.role = old.role then
    return new;
  end if;

  -- Allow postgres/service_role to bypass (for seed scripts and SQL editor)
  if current_user in ('postgres', 'service_role', 'supabase_admin') then
    return new;
  end if;

  -- Check if current authenticated user is admin or super_admin
  select role into current_role from public.profiles where id = auth.uid();
  if current_role in ('admin', 'super_admin') then
    return new;
  end if;

  raise exception 'Only admins or super admins may change the role column';
end;
$$;

-- Force update the roles of the staff members we just seeded
UPDATE public.profiles SET role = 'super_admin' WHERE email = 'super@numaway.com';
UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@numaway.com';
UPDATE public.profiles SET role = 'counsellor' WHERE email = 'counsellor@numaway.com';
