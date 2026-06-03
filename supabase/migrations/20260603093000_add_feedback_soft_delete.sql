-- GoService — add soft delete to feedback
-- Lets admins mark invalid / spam reports as deleted without removing the row,
-- so the audit trail stays intact. Safe to re-run (idempotent).

alter table public.feedback
  add column if not exists deleted_at timestamptz;

create index if not exists feedback_deleted_at_idx
  on public.feedback (deleted_at);

-- Rollback (run manually if you ever need to undo this migration):
--   drop index if exists public.feedback_deleted_at_idx;
--   alter table public.feedback drop column if exists deleted_at;
