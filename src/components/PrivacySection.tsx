import { Smartphone, UserX, CloudOff, FileDown } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  {
    icon: Smartphone,
    title: "Data tinggal di HP-mu",
    desc: "Kendaraan, riwayat, pengingat, dan komponen disimpan lokal di penyimpanan privat aplikasi.",
  },
  {
    icon: UserX,
    title: "Tanpa akun, tanpa login",
    desc: "Tidak ada pendaftaran. Buka app, langsung pakai. Tidak ada profil online yang kami simpan.",
  },
  {
    icon: CloudOff,
    title: "Tidak ada server kami",
    desc: "Kami tidak mengunggah datamu ke mana pun. Notifikasi pun dijadwalkan sepenuhnya secara lokal.",
  },
  {
    icon: FileDown,
    title: "Backup di tanganmu",
    desc: "Ekspor seluruh data ke CSV kapan saja, simpan di tempat yang kamu kendalikan.",
  },
];

export function PrivacySection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wide text-brand-soft">
              Privasi
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Privasimu bukan produk kami
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/70">
              GoService dibangun lokal-first. Tidak ada login, tidak ada sync ke
              server, dan tidak ada pelacakan lintas-aplikasi dari kami. Datamu
              tetap milikmu — sepenuhnya.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/20 text-brand-soft">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
