import { siteConfig } from "@/lib/site";

type LogoProps = {
  /** Render light text for use on dark (navy) backgrounds. */
  variant?: "dark" | "light";
  className?: string;
};

/**
 * WGHC wordmark: a stylised white star inside a navy/azure rounded badge,
 * followed by the organisation name. The star nods to the "Whitestar" name.
 */
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-700";
  const subColor = variant === "light" ? "text-white/70" : "text-navy-400";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy-600 to-azure shadow-sm"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1.8l2.7 6.02 6.55.62-4.94 4.35 1.46 6.41L12 16.9l-5.77 3.3 1.46-6.41L2.75 9.44l6.55-.62L12 1.8z"
            fill="#ffffff"
          />
          <circle cx="12" cy="12" r="2.1" fill="#A9683F" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading text-lg font-extrabold tracking-tight ${textColor}`}>
          Whitestar
        </span>
        <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.15em] ${subColor}`}>
          Global Health Connect
        </span>
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </span>
  );
}
