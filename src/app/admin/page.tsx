import type { Metadata } from "next";
import Link from "next/link";
import { LogOut, Inbox } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import {
  FEEDBACK_STATUSES,
  type Feedback,
  type FeedbackStatus,
} from "@/lib/feedback";
import { Logo } from "@/components/Logo";
import { signOut } from "./actions";
import { FeedbackCard } from "./FeedbackCard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

type Filter = FeedbackStatus | "all" | "deleted";

const FILTERS = ["all", ...FEEDBACK_STATUSES, "deleted"] as const;

const filterLabel: Record<Filter, string> = {
  all: "Semua",
  open: "Baru",
  in_progress: "Diproses",
  resolved: "Selesai",
  deleted: "Dihapus",
};

const dateFmt = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "medium",
  timeStyle: "short",
});

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const activeFilter: Filter = FILTERS.includes(status as Filter)
    ? (status as Filter)
    : "all";

  const supabase = await createClient();

  let query = supabase
    .from("feedback")
    .select("*")
    .order("created_at", { ascending: false });

  if (activeFilter === "deleted") {
    query = query.not("deleted_at", "is", null);
  } else {
    // Soft-deleted entries stay hidden from the active queues.
    query = query.is("deleted_at", null);
    if (activeFilter !== "all") {
      query = query.eq("status", activeFilter);
    }
  }

  const { data, error } = await query;
  const items = (data ?? []) as Feedback[];

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold text-brand">
              Admin
            </span>
          </div>
          <form action={signOut}>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink"
            >
              <LogOut className="size-4" />
              Keluar
            </button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-ink">
          Feedback & Laporan Bug
        </h1>
        <p className="mt-1 text-sm text-ink-muted">
          {items.length} entri{activeFilter !== "all" ? ` (${filterLabel[activeFilter].toLowerCase()})` : ""}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <Link
                key={f}
                href={f === "all" ? "/admin" : `/admin?status=${f}`}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "border border-black/10 text-ink-muted hover:bg-surface-alt"
                }`}
              >
                {filterLabel[f]}
              </Link>
            );
          })}
        </div>

        {error ? (
          <div className="mt-8 rounded-card border border-danger/20 bg-danger/5 p-6 text-sm text-danger">
            Gagal memuat data: {error.message}. Pastikan tabel{" "}
            <code>feedback</code> dan policy RLS sudah dibuat di Supabase.
          </div>
        ) : items.length === 0 ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-card border border-black/[0.06] bg-surface p-12 text-center">
            <Inbox className="size-10 text-ink-subtle" />
            <p className="font-semibold text-ink">Belum ada entri</p>
            <p className="text-sm text-ink-muted">
              Laporan dari pengguna akan muncul di sini.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <FeedbackCard
                key={item.id}
                item={item}
                createdLabel={dateFmt.format(new Date(item.created_at))}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
