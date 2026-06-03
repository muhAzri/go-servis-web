import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { parseFeedbackPayload } from "@/lib/feedback";

// Public endpoint hit by the mobile app — never statically cached.
export const dynamic = "force-dynamic";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

/**
 * POST /api/feedback
 * Accepts a feedback / bug report from the GoService app and stores it.
 * Body: { type?: "feedback"|"bug", message: string, email?, app_version?,
 *         platform?, device_model?, os_version?, metadata? }
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Body bukan JSON yang valid." },
      { status: 400, headers: CORS_HEADERS },
    );
  }

  const parsed = parseFeedbackPayload(body);
  if (!parsed.ok) {
    return NextResponse.json(
      { error: parsed.error },
      { status: 422, headers: CORS_HEADERS },
    );
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("feedback")
      .insert(parsed.data)
      .select("id")
      .single();

    if (error) {
      console.error("[feedback] insert failed:", error.message);
      return NextResponse.json(
        { error: "Gagal menyimpan feedback." },
        { status: 500, headers: CORS_HEADERS },
      );
    }

    return NextResponse.json(
      { ok: true, id: data.id },
      { status: 201, headers: CORS_HEADERS },
    );
  } catch (err) {
    console.error("[feedback] unexpected error:", err);
    return NextResponse.json(
      { error: "Konfigurasi server belum lengkap." },
      { status: 500, headers: CORS_HEADERS },
    );
  }
}
