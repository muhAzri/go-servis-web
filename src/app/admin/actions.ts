"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { FEEDBACK_STATUSES, type FeedbackStatus } from "@/lib/feedback";

export type LoginState = { error?: string };

export async function signIn(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Email atau password salah." };
  }

  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateFeedback(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") as FeedbackStatus;
  const adminNote = String(formData.get("admin_note") ?? "").trim();

  if (!id || !FEEDBACK_STATUSES.includes(status)) {
    return;
  }

  const supabase = await createClient();

  // Guard: only an authenticated admin may mutate.
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  await supabase
    .from("feedback")
    .update({
      status,
      admin_note: adminNote || null,
      resolved_at: status === "resolved" ? new Date().toISOString() : null,
    })
    .eq("id", id);

  revalidatePath("/admin");
}

/**
 * Soft-delete an entry (e.g. spam / invalid report) by stamping deleted_at, or
 * restore it by clearing the stamp. Rows are never hard-deleted, so the audit
 * trail stays intact.
 */
export async function setFeedbackDeleted(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const restore = String(formData.get("restore") ?? "") === "1";
  if (!id) return;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  await supabase
    .from("feedback")
    .update({ deleted_at: restore ? null : new Date().toISOString() })
    .eq("id", id);

  revalidatePath("/admin");
}
