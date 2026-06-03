import { Check, ShieldCheck, Star } from "lucide-react";
import { GooglePlayButton } from "./GooglePlayButton";
import { PhoneMockup } from "./PhoneMockup";
import { Reveal } from "./Reveal";
import { trustPoints } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand-soft/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-softer px-3 py-1 text-xs font-semibold text-brand-dark">
              <ShieldCheck className="size-3.5" />
              Lokal-first · Tanpa login · Privasi terjaga
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Servis kendaraan{" "}
              <span className="text-brand">tepat waktu,</span> tanpa perlu
              diingat-ingat
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              GoService mencatat servis motor & mobilmu, memantau komponen
              seperti oli, ban, dan rem, lalu mengingatkan otomatis sebelum
              jatuh tempo. Catat sekali — kami yang ingatkan.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <GooglePlayButton />
              <div className="flex items-center gap-2 text-sm text-ink-muted">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-warn text-warn"
                    />
                  ))}
                </span>
                <span className="font-medium">Gratis · untuk Android</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-ink"
                >
                  <Check className="size-4 text-brand" strokeWidth={3} />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-linear-to-tr from-brand/10 to-brand-soft/40 blur-2xl" />
            <PhoneMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
