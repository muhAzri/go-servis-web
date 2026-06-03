import {
  BellRing,
  Wrench,
  Gauge,
  History,
  Bike,
  FileSpreadsheet,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { features, type Feature } from "@/lib/site";

const icons: Record<Feature["icon"], LucideIcon> = {
  BellRing,
  Wrench,
  Gauge,
  History,
  Bike,
  FileSpreadsheet,
};

export function Features() {
  return (
    <section id="fitur" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">
          Fitur
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Semua yang dibutuhkan untuk merawat kendaraan
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Dirancang sederhana untuk pemilik motor & mobil di Indonesia — bukan
          untuk bengkel. Tanpa ribet, tanpa istilah teknis.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = icons[feature.icon];
          return (
            <Reveal key={feature.title} delay={(i % 3) * 0.06}>
              <article className="group h-full rounded-card border border-black/[0.06] bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-softer text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
                  {feature.desc}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
