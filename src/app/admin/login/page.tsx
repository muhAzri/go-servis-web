"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { LogIn } from "lucide-react";
import { Logo } from "@/components/Logo";
import { signIn, type LoginState } from "../actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
    >
      <LogIn className="size-4" />
      {pending ? "Memproses…" : "Masuk"}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, formAction] = useActionState<LoginState, FormData>(signIn, {});

  return (
    <main className="grid min-h-dvh place-items-center px-5 py-12">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center text-center">
          <Logo />
          <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">
            Admin GoService
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            Masuk untuk melihat feedback & laporan bug.
          </p>
        </div>

        <form
          action={formAction}
          className="mt-8 rounded-card border border-black/[0.06] bg-surface p-6 shadow-soft"
        >
          <label className="block text-sm font-medium text-ink" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-cream px-3 text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
          />

          <label
            className="mt-4 block text-sm font-medium text-ink"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-cream px-3 text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/30"
          />

          {state.error && (
            <p className="mt-3 rounded-lg bg-danger/10 px-3 py-2 text-sm text-danger">
              {state.error}
            </p>
          )}

          <SubmitButton />
        </form>

        <p className="mt-6 text-center text-xs text-ink-subtle">
          Akun dibuat manual lewat dashboard Supabase. Pendaftaran publik
          dinonaktifkan.
        </p>
      </div>
    </main>
  );
}
