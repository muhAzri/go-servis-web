import { Bike, Car } from "lucide-react";
import { Reveal } from "./Reveal";
import { components } from "@/lib/site";

export function ComponentsShowcase() {
  return (
    <section id="komponen" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-wide text-brand">
          Komponen
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Interval servis sudah disiapkan
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Pilih komponen yang ingin dipantau — GoService mengisi interval umum
          untuk motor dan mobil, jadi kamu tak perlu menebak.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.05}>
            <div className="flex h-full flex-col rounded-2xl border border-black/[0.06] bg-surface p-5 shadow-soft">
              <p className="text-base font-bold text-ink">{c.name}</p>
              <div className="mt-3 flex flex-col gap-1.5 text-sm">
                {c.motor && (
                  <span className="inline-flex items-center gap-2 text-ink-muted">
                    <Bike className="size-4 shrink-0 text-brand" />
                    Motor · {c.motor}
                  </span>
                )}
                {c.mobil && (
                  <span className="inline-flex items-center gap-2 text-ink-muted">
                    <Car className="size-4 shrink-0 text-brand" />
                    Mobil · {c.mobil}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 text-center">
        <p className="text-sm text-ink-subtle">
          Interval adalah default umum, bukan rekomendasi resmi pabrikan. Selalu
          rujuk buku manual kendaraanmu.
        </p>
      </Reveal>
    </section>
  );
}
