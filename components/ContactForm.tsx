"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "submitting" | "success" | "error";

const roles = [
  { value: "", label: "I am a…" },
  { value: "patient", label: "Patient" },
  { value: "hospital", label: "Hospital" },
  { value: "professional", label: "Healthcare Professional" },
  { value: "institution", label: "Institution" },
];

const VALID_ROLES = ["patient", "hospital", "professional", "institution"];

/**
 * Contact form UI. Submits enquiries directly to the Supabase
 * `contact_submissions` table from the browser (the site is a static export,
 * so there is no server API route). Inserts are anonymous — allowed by the
 * table's RLS insert policy — and there is no read access from the client.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as {
      name?: string;
      email?: string;
      role?: string;
      message?: string;
    };

    const name = data.name?.trim() ?? "";
    const email = data.email?.trim() ?? "";
    const role = data.role ?? "";
    const message = data.message?.trim() ?? "";

    // Client-side validation (mirrors the DB constraints).
    if (!name || !email || !role || !message || !VALID_ROLES.includes(role)) {
      setStatus("error");
      setError("Please fill in all fields.");
      return;
    }

    try {
      const supabase = createClient();
      const { error: insertError } = await supabase
        .from("contact_submissions")
        .insert({ name, email, role, message });

      if (insertError) throw insertError;

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-navy-100 bg-white p-10 text-center shadow-card"
      >
        <CheckCircle2 className="h-14 w-14 text-terra" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-navy-700">
          Thank you!
        </h3>
        <p className="mt-2 max-w-sm text-navy-500">
          Your message has been received. Our team will be in touch with you
          shortly to begin your journey.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy-100 bg-white p-7 shadow-card sm:p-9"
      noValidate
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className="form-input"
            />
          </Field>
          <Field label="Email address" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="form-input"
            />
          </Field>
        </div>

        <Field label="I am a…" htmlFor="role">
          <select id="role" name="role" required className="form-input" defaultValue="">
            {roles.map((r) => (
              <option key={r.value} value={r.value} disabled={r.value === ""}>
                {r.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us how we can help…"
            className="form-input resize-y"
          />
        </Field>

        {error && (
          <p role="alert" className="text-sm font-semibold text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Send className="h-5 w-5" aria-hidden="true" />
            </>
          )}
        </button>
      </div>

      {/* local form field styling */}
      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #cbddec;
          background: #ffffff;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #0a3253;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.form-input::placeholder) {
          color: #9cbdd7;
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: #a9683f;
          box-shadow: 0 0 0 3px rgba(169, 104, 63, 0.18);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-heading text-sm font-semibold text-navy-700"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
