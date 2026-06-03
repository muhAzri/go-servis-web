import { Reveal } from "./Reveal";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="border-y border-black/[0.06] bg-surface-alt/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-brand">
            Cara Kerja
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Mulai dalam tiga langkah
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Set up sekali di awal, lalu biarkan GoService bekerja di latar
            belakang.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-linear-to-r from-transparent via-brand/30 to-transparent md:block" />

          {steps.map((step, i) => (
            <Reveal key={step.no} delay={i * 0.08} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand text-xl font-extrabold text-white shadow-[0_14px_28px_-14px_rgba(34,104,63,0.9)]">
                  {step.no}
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink-muted">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
