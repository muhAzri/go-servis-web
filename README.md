# GoService — Web

Marketing landing page and admin backend for **GoService**, a service-reminder
app for motorcycle & car owners in Indonesia (Android, package
`com.zrifapps.goservice`).

Built with Next.js 16 (App Router), Tailwind CSS v4, lucide-react, motion, and
Supabase.

## What's inside

- **Landing page** (`/`) — hero, features, how-it-works, component intervals,
  privacy, FAQ, and a Google Play CTA. Fully server-rendered and SEO-tuned
  (metadata, JSON-LD, sitemap, robots, manifest, dynamic OG image).
- **Legal pages** — `/privacy` and `/terms`, mirrored from the in-app screens.
- **Feedback API** (`POST /api/feedback`) — public endpoint the mobile app calls
  to submit feedback / bug reports.
- **Admin** (`/admin`) — Supabase-authenticated dashboard to review, resolve,
  and soft-delete (mark invalid / spam) reports. Guarded by a route proxy.

## Getting started

```bash
yarn install
yarn dev      # http://localhost:3000
```

Other scripts: `yarn build`, `yarn start`, `yarn lint`.

> This project uses Yarn with the `node-modules` linker (`.yarnrc.yml`) because
> Turbopack — the default builder in Next 16 — does not resolve Yarn PnP.

## Environment variables

Create `.env.local` (see `.env.local` for the live values):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com        # canonical/OG/sitemap base (defaults to a placeholder)
NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...   # browser/SSR auth (RLS)
SUPABASE_SECRET_KEY=sb_secret_...                         # server only — feedback inserts
```

Anything sent to crawlers (canonical URL, Open Graph, sitemap) uses
`NEXT_PUBLIC_SITE_URL`; set the real domain before deploying.

## Supabase setup

Database migrations, RLS policies, and how to create the admin account are
documented in [`supabase/README.md`](./supabase/README.md). Schema changes live
as ordered files in [`supabase/migrations/`](./supabase/migrations).

Quick version:

1. Apply the files in `supabase/migrations/` (in order) via the Supabase SQL
   Editor or `supabase db push`.
2. Add `SUPABASE_SECRET_KEY` to `.env.local`.
3. Create an admin user in **Authentication → Users** and disable public signup.

## Feedback API

`POST /api/feedback` — `Content-Type: application/json`

```jsonc
{
  "type": "bug",            // or "feedback" (default)
  "message": "…",           // required, 1–5000 chars
  "email": "user@mail.com", // optional
  "app_version": "1.0.0",   // optional context
  "platform": "android",
  "device_model": "…",
  "os_version": "14",
  "metadata": {}            // optional free-form object
}
```

Responses: `201 { ok, id }` · `422 { error }` (validation) · `400` (bad JSON).
The route inserts using the secret key server-side, so the app never holds a
write key and the table stays locked by RLS.

## Project structure

```
src/
  app/
    page.tsx              landing page
    privacy/ terms/       legal pages
    api/feedback/         public submission endpoint
    admin/                auth-guarded review dashboard
    layout.tsx            metadata, fonts, JSON-LD
    sitemap.ts robots.ts manifest.ts opengraph-image.tsx icon.svg
  components/             landing + admin UI
  lib/
    site.ts legal.ts      content (single source of truth)
    feedback.ts           feedback types + validation
    supabase/             server & admin clients, session proxy
  proxy.ts                admin route guard (Next 16 proxy convention)
supabase/                 migrations/ + setup guide
```

## Deploy

Deploys cleanly to Vercel. Set the env vars above in the project settings
(`SUPABASE_SECRET_KEY` as a non-public secret).
