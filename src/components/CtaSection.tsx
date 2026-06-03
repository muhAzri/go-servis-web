import { GooglePlayButton } from "./GooglePlayButton";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-brand to-brand-dark px-6 py-16 text-center shadow-lift sm:px-12">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto inline-flex rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
              <Logo showWord={false} />
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Berhenti lupa jadwal servis
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
              Unduh GoService gratis, tambahkan kendaraanmu, dan biarkan
              pengingat bekerja untukmu.
            </p>
            <div className="mt-8 flex justify-center">
              <GooglePlayButton variant="light" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
