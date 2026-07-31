import { NextResponse } from "next/server";

/**
 * Placeholder contact endpoint.
 *
 * For now this validates the payload and logs it server-side, returning a
 * success response so the UI flow works end-to-end. To go live, replace the
 * body of this handler with your email service (e.g. Resend, SendGrid),
 * a CRM webhook, or a database write.
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

    // TODO: integrate with a real email / CRM provider here.
    console.info("[WGHC contact] New enquiry:", { name, email, role });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}
