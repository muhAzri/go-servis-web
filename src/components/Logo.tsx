import { Wrench } from "lucide-react";

/** GoService wordmark: wrench badge in brand green + name. */
export function Logo({
  className = "",
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid size-9 place-items-center rounded-xl bg-brand text-white shadow-[0_6px_16px_-6px_rgba(34,104,63,0.7)]">
        <Wrench className="size-[18px]" strokeWidth={2.5} />
      </span>
      {showWord && (
        <span className="text-lg font-extrabold tracking-tight text-ink">
          Go<span className="text-brand">Service</span>
        </span>
      )}
    </span>
  );
}
