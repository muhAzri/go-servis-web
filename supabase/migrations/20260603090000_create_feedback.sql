-- GoService — feedback / bug report schema (baseline)
-- This is the first migration: the feedback table, indexes, and RLS policies.
-- Safe to re-run (idempotent).

-- 1) Table -------------------------------------------------------------------
create table if not exists public.feedback (
  id           uuid primary key default gen_random_uuid(),
  type         text not null default 'feedback'
                 check (type in ('feedback', 'bug')),
  message      text not null
                 check (char_length(message) between 1 and 5000),
  email        text,
  status       text not null default 'open'
                 check (status in ('open', 'in_progress', 'resolved')),
  -- context captured from the app
  app_version  text,
  platform     text,
  device_model text,
  os_version   text,
  metadata     jsonb,
  -- admin fields
  admin_note   text,
  created_at   timestamptz not null default now(),
  resolved_at  timestamptz
);

create index if not exists feedback_status_idx
  on public.feedback (status);
create index if not exists feedback_created_at_idx
  on public.feedback (created_at desc);

-- 2) Row Level Security ------------------------------------------------------
-- The public API inserts with the SECRET key (bypasses RLS). Logged-in admins
-- read/update through the publishable key, so RLS only needs to grant the
-- `authenticated` role. The `anon` role gets nothing.
alter table public.feedback enable row level security;

drop policy if exists "admins can read feedback"   on public.feedback;
drop policy if exists "admins can update feedback" on public.feedback;

create policy "admins can read feedback"
  on public.feedback
  for select
  to authenticated
  using (true);

create policy "admins can update feedback"
  on public.feedback
  for update
  to authenticated
  using (true)
  with check (true);

-- Note: no INSERT/DELETE policy on purpose.
--   * INSERT happens server-side via the secret key (RLS bypassed).
--   * DELETE is disabled for everyone (keep an audit trail).
