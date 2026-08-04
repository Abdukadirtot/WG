import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const VALID_ROLES = ["patient", "hospital", "professional", "institution"];

/**
 * Contact endpoint — persists enquiries to the Supabase `contact_submissions`
 * table. Anonymous submissions are allowed (RLS insert policy), so no auth is
 * required. There is no SELECT policy, so submissions stay private to the
 * project owner (readable via the Supabase dashboard / service role only).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, message } = body ?? {};

    // Basic server-side validation
    if (!name || !email || !role || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (!VALID_ROLES.includes(String(role))) {
      return NextResponse.json(
        { ok: false, error: "Invalid role." },
        { status: 400 }
      );
    }

    const supabase = createClient();
    const { error } = await supabase.from("contact_submissions").insert({
      name: String(name).trim(),
      email: String(email).trim(),
      role: String(role),
      message: String(message).trim(),
    });

    if (error) {
      console.error("[WGHC contact] Supabase insert failed:", error.message);
      return NextResponse.json(
        { ok: false, error: "Could not save your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
