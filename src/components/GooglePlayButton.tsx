import { PLAY_URL } from "@/lib/site";

/** Google Play's four-color triangle mark. */
function PlayMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path fill="#00d3ff" d="M48 32 322 256 48 480c-9 5-20-1-20-13V45c0-12 11-18 20-13z" />
      <path fill="#00f076" d="M322 256 48 32 372 219z" />
      <path fill="#ffce00" d="M464 233c14 8 14 38 0 46l-92 53-58-76 58-76z" />
      <path fill="#ff3a44" d="M372 293 48 480 322 256z" />
    </svg>
  );
}

const variants = {
  dark: "bg-ink text-white hover:bg-black",
  light: "bg-white text-ink shadow-soft hover:bg-white/90",
} as const;

/**
 * "Get it on Google Play" badge linking to the (pre-launch) listing.
 * Opens in a new tab; the listing pattern follows the bundle id.
 */
export function GooglePlayButton({
  className = "",
  label = "Dapatkan di",
  variant = "dark",
}: {
  className?: string;
  label?: string;
  variant?: keyof typeof variants;
}) {
  const subColor = variant === "dark" ? "text-white/70" : "text-ink-muted";

  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Unduh GoService di Google Play"
      className={`group inline-flex items-center gap-3 rounded-2xl px-5 py-3 shadow-soft transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${variants[variant]} ${className}`}
    >
      <PlayMark className="size-7 shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className={`text-[10px] font-medium uppercase tracking-wide ${subColor}`}>
          {label}
        </span>
        <span className="mt-1 text-lg font-bold tracking-tight">Google Play</span>
      </span>
    </a>
  );
}
