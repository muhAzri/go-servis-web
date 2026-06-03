/** Shared types + validation for user feedback / bug reports. */

export const FEEDBACK_TYPES = ["feedback", "bug"] as const;
export type FeedbackType = (typeof FEEDBACK_TYPES)[number];

export const FEEDBACK_STATUSES = ["open", "in_progress", "resolved"] as const;
export type FeedbackStatus = (typeof FEEDBACK_STATUSES)[number];

export type Feedback = {
  id: string;
  type: FeedbackType;
  message: string;
  email: string | null;
  status: FeedbackStatus;
  app_version: string | null;
  platform: string | null;
  device_model: string | null;
  os_version: string | null;
  metadata: Record<string, unknown> | null;
  admin_note: string | null;
  created_at: string;
  resolved_at: string | null;
  deleted_at: string | null;
};

export const MESSAGE_MAX = 5000;

/** Row shape inserted into Supabase from a validated payload. */
export type FeedbackInsert = {
  type: FeedbackType;
  message: string;
  email: string | null;
  app_version: string | null;
  platform: string | null;
  device_model: string | null;
  os_version: string | null;
  metadata: Record<string, unknown> | null;
};

function str(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

/**
 * Validates and normalises an incoming feedback payload (from the mobile app).
 * Returns either a ready-to-insert row or a human-readable error.
 */
export function parseFeedbackPayload(
  body: unknown,
): { ok: true; data: FeedbackInsert } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Body harus berupa objek JSON." };
  }
  const b = body as Record<string, unknown>;

  const message = str(b.message, MESSAGE_MAX);
  if (!message) {
    return { ok: false, error: "Field 'message' wajib diisi." };
  }

  const type: FeedbackType =
    b.type === "bug" || b.type === "feedback" ? b.type : "feedback";

  const email = str(b.email, 320);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Format email tidak valid." };
  }

  const metadata =
    typeof b.metadata === "object" && b.metadata !== null && !Array.isArray(b.metadata)
      ? (b.metadata as Record<string, unknown>)
      : null;

  return {
    ok: true,
    data: {
      type,
      message,
      email,
      app_version: str(b.app_version, 50),
      platform: str(b.platform, 30),
      device_model: str(b.device_model, 120),
      os_version: str(b.os_version, 50),
      metadata,
    },
  };
}
