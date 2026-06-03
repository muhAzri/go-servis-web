# Supabase setup — GoService feedback

What powers `/api/feedback` (public submit) and `/admin` (review & resolve).

## 1. Environment variables (`.env.local`)

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...   # browser/SSR auth (RLS)
SUPABASE_SECRET_KEY=sb_secret_...                         # server only — inserts feedback
```

Find both keys in **Dashboard → Project Settings → API Keys**.
`SUPABASE_SECRET_KEY` must **never** get a `NEXT_PUBLIC_` prefix.

## 2. Database migrations

Schema changes live in [`migrations/`](./migrations) as ordered, incremental
files. Never edit an already-applied migration — add a new one instead.

| Order | File | Adds |
| ----- | ---- | ---- |
| 1 | `20260603090000_create_feedback.sql` | `feedback` table, indexes, RLS policies |
| 2 | `20260603093000_add_feedback_soft_delete.sql` | `deleted_at` column for soft delete |

**Apply them** in filename order. Two options:

- **SQL Editor (manual):** open **Dashboard → SQL Editor**, paste each file's
  contents in order, and run. Every migration is idempotent, so re-running an
  already-applied one is safe.
- **Supabase CLI:** `supabase link` then `supabase db push` applies any
  migrations not yet recorded in `supabase_migrations.schema_migrations`.

> If you already ran the original combined schema, you only need to apply
> migration **2** to get the `deleted_at` column. `add column if not exists`
> makes it safe even if the column somehow already exists.

### Reverting a migration

Supabase migrations are forward-only — there is no automatic "down". To undo a
change, run its rollback SQL (included as a comment at the bottom of the
migration). For the soft-delete migration:

```sql
drop index if exists public.feedback_deleted_at_idx;
alter table public.feedback drop column if exists deleted_at;
```

You do **not** need to revert migration 1 — it is the correct baseline and is
already applied.

## 3. Create the admin account

The login page does **not** allow self-signup. Create the admin manually:

1. **Dashboard → Authentication → Users → Add user**.
2. Enter the admin email + password, tick **Auto Confirm User**.
3. (Recommended) **Authentication → Sign In / Providers → Email** →
   turn **off** "Allow new users to sign up", so only accounts you create can log in.

Anyone who can log in is treated as an admin. Only create accounts you trust.

## 4. Done

- Submit test: `POST /api/feedback` with `{ "message": "halo", "type": "bug" }`.
- Review: visit `/admin`, log in, and resolve entries.

## How the security model works

- **Submit (`/api/feedback`)** runs server-side and uses the secret key, so the
  table stays locked: the app never talks to Supabase directly and never holds a
  write key. The endpoint validates and trims every field before inserting.
- **Admin (`/admin`)** uses cookie-based Supabase Auth (`@supabase/ssr`).
  Middleware redirects unauthenticated visitors to `/admin/login`. Reads and
  updates go through RLS, which only grants the `authenticated` role.
