"use client";

import { useFormStatus } from "react-dom";
import { Bug, MessageSquare, Mail, Save, Trash2, RotateCcw } from "lucide-react";
import {
  FEEDBACK_STATUSES,
  type Feedback,
  type FeedbackStatus,
} from "@/lib/feedback";
import { updateFeedback, setFeedbackDeleted } from "./actions";

const statusLabel: Record<FeedbackStatus, string> = {
  open: "Baru",
  in_progress: "Diproses",
  resolved: "Selesai",
};

const statusStyle: Record<FeedbackStatus, string> = {
  open: "bg-warn/15 text-warn",
  in_progress: "bg-brand/15 text-brand",
  resolved: "bg-ink/10 text-ink-muted",
};

function PendingButton({
  children,
  pendingText,
  className,
}: {
  children: React.ReactNode;
  pendingText: string;
  className: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={className}>
      {pending ? pendingText : children}
    </button>
  );
}

export function FeedbackCard({
  item,
  createdLabel,
}: {
  item: Feedback;
  createdLabel: string;
}) {
  const isBug = item.type === "bug";
  const isDeleted = item.deleted_at !== null;

  return (
    <article
      className={`rounded-card border bg-surface p-5 shadow-soft ${
        isDeleted ? "border-danger/20 opacity-70" : "border-black/[0.06]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
            isBug ? "bg-danger/10 text-danger" : "bg-brand/10 text-brand"
          }`}
        >
          {isBug ? <Bug className="size-3.5" /> : <MessageSquare className="size-3.5" />}
          {isBug ? "Bug" : "Feedback"}
        </span>
        {isDeleted ? (
          <span className="rounded-full bg-danger/10 px-2.5 py-1 text-xs font-semibold text-danger">
            Tidak valid
          </span>
        ) : (
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyle[item.status]}`}
          >
            {statusLabel[item.status]}
          </span>
        )}
        <span className="ml-auto text-xs text-ink-subtle">{createdLabel}</span>
      </div>

      <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed text-ink">
        {item.message}
      </p>

      <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-muted">
        {item.email && (
          <span className="inline-flex items-center gap-1">
            <Mail className="size-3.5" />
            <a href={`mailto:${item.email}`} className="hover:text-brand">
              {item.email}
            </a>
          </span>
        )}
        {item.app_version && <span>v{item.app_version}</span>}
        {item.platform && <span>{item.platform}</span>}
        {item.device_model && <span>{item.device_model}</span>}
        {item.os_version && <span>OS {item.os_version}</span>}
      </dl>

      {isDeleted ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4">
          <p className="text-xs text-ink-muted">
            Ditandai tidak valid — disembunyikan dari daftar utama.
          </p>
          <form action={setFeedbackDeleted}>
            <input type="hidden" name="id" value={item.id} />
            <input type="hidden" name="restore" value="1" />
            <PendingButton
              pendingText="Memulihkan…"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-black/10 px-3 text-sm font-semibold text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink disabled:opacity-60"
            >
              <RotateCcw className="size-3.5" />
              Pulihkan
            </PendingButton>
          </form>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3 border-t border-black/[0.06] pt-4 sm:flex-row sm:items-end">
          <form
            action={updateFeedback}
            className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-end"
          >
            <input type="hidden" name="id" value={item.id} />

            <label className="flex flex-col gap-1 text-xs font-medium text-ink-muted">
              Status
              <select
                name="status"
                defaultValue={item.status}
                className="h-9 rounded-lg border border-black/10 bg-cream px-2 text-sm text-ink outline-none focus:border-brand"
              >
                {FEEDBACK_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {statusLabel[s]}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-1 flex-col gap-1 text-xs font-medium text-ink-muted">
              Catatan admin
              <input
                type="text"
                name="admin_note"
                defaultValue={item.admin_note ?? ""}
                placeholder="Opsional — mis. sudah diperbaiki di v1.0.1"
                className="h-9 rounded-lg border border-black/10 bg-cream px-3 text-sm text-ink outline-none focus:border-brand"
              />
            </label>

            <PendingButton
              pendingText="Menyimpan…"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-brand px-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
            >
              <Save className="size-3.5" />
              Simpan
            </PendingButton>
          </form>

          <form action={setFeedbackDeleted}>
            <input type="hidden" name="id" value={item.id} />
            <PendingButton
              pendingText="…"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-danger/30 px-3 text-sm font-semibold text-danger transition-colors hover:bg-danger/10 disabled:opacity-60"
            >
              <Trash2 className="size-3.5" />
              Tidak valid
            </PendingButton>
          </form>
        </div>
      )}
    </article>
  );
}
