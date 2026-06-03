/**
 * Single source of truth for GoService landing-page content.
 * Mirrors the real app (package: com.zrifapps.goservice) so marketing copy,
 * the Play Store listing, and the in-app legal screens stay consistent.
 */

export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.zrifapps.goservice&hl=id";

export const ANDROID_PACKAGE = "com.zrifapps.goservice";

/**
 * Public origin used for canonical URLs, sitemap, and Open Graph tags.
 * Override per-environment with NEXT_PUBLIC_SITE_URL when the real domain is live.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://goservice.app"
).replace(/\/$/, "");

export const site = {
  name: "GoService",
  shortName: "GoService",
  tagline: "Pengingat servis kendaraan untuk motor & mobil",
  // Mirrors the in-app About screen.
  description:
    "Pengingat servis sederhana untuk pemilik motor & mobil di Indonesia. Catat sekali, lupa-lupa nanti — kami yang ingatkan.",
  longDescription:
    "GoService mencatat servis kendaraanmu, memantau komponen seperti oli, ban, dan rem, lalu mengingatkan otomatis sebelum jatuh tempo — berbasis kilometer maupun tanggal. Semua data tersimpan lokal di HP-mu: tanpa login, tanpa akun, tanpa server.",
  developer: "Muhammad Azri Fatihah Susanto",
  email: "muhammad.azri.f.s@gmail.com",
  version: "1.0.0",
  locale: "id_ID",
  country: "Indonesia",
} as const;

export const nav = [
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Komponen", href: "#komponen" },
  { label: "FAQ", href: "#faq" },
] as const;

export type Feature = {
  icon:
    | "BellRing"
    | "Wrench"
    | "Gauge"
    | "History"
    | "Bike"
    | "FileSpreadsheet";
  title: string;
  desc: string;
};

export const features: Feature[] = [
  {
    icon: "BellRing",
    title: "Pengingat servis otomatis",
    desc: "Notifikasi muncul menjelang jatuh tempo — berbasis komponen yang dipantau atau pengingat manual. Tinggal atur sekali.",
  },
  {
    icon: "Wrench",
    title: "Pelacakan komponen",
    desc: "Oli, busi, aki, ban, kampas rem, V-belt, rantai, dan belasan komponen lain lengkap dengan interval default & badge urgensi.",
  },
  {
    icon: "Gauge",
    title: "Pengingat update KM",
    desc: "Lupa update odometer? GoService otomatis mengingatkan kalau KM tak diperbarui dalam 14 hari, jam 9 pagi.",
  },
  {
    icon: "History",
    title: "Riwayat servis lengkap",
    desc: "Catat tanggal, KM, bengkel, biaya, dan catatan. Tiga mode: Komponen, Rutin, atau Manual — sesukamu.",
  },
  {
    icon: "Bike",
    title: "Motor & mobil sekaligus",
    desc: "Matic, kopling, bebek, moge, hingga MPV, SUV, sedan, dan pickup. Kelola banyak kendaraan dalam satu app.",
  },
  {
    icon: "FileSpreadsheet",
    title: "Ekspor & impor CSV",
    desc: "Backup seluruh data ke file CSV kapan saja, lalu impor lagi tanpa duplikat. Datamu tetap milikmu.",
  },
];

export const steps = [
  {
    no: "01",
    title: "Tambah kendaraan",
    desc: "Pilih jenis (motor/mobil), isi merek, model, plat, dan KM saat ini. Selesai dalam semenit.",
  },
  {
    no: "02",
    title: "Pantau komponen",
    desc: "Pilih komponen yang ingin dilacak dari katalog. GoService mengisi interval default yang umum.",
  },
  {
    no: "03",
    title: "Diingatkan tepat waktu",
    desc: "Tenang berkendara. Notifikasi muncul sebelum servis jatuh tempo, berbasis KM maupun tanggal.",
  },
];

export type TrackedComponent = {
  name: string;
  motor?: string;
  mobil?: string;
};

/** Subset of the in-app component catalog, used for the showcase grid. */
export const components: TrackedComponent[] = [
  { name: "Oli Mesin", motor: "2.000 km / 2 bln", mobil: "5.000 km / 6 bln" },
  { name: "Busi", motor: "6.000 km", mobil: "20.000 km" },
  { name: "Aki", motor: "1–2 tahun", mobil: "2–3 tahun" },
  { name: "Kampas Rem", motor: "8.000 km", mobil: "20.000 km" },
  { name: "Ban", motor: "15.000 km", mobil: "40.000 km" },
  { name: "Filter Udara", motor: "8.000 km", mobil: "15.000 km" },
  { name: "V-Belt CVT", motor: "24.000 km" },
  { name: "Rantai & Gear", motor: "8.000 km" },
  { name: "Filter Oli", mobil: "10.000 km" },
  { name: "Filter Kabin / AC", mobil: "15.000 km" },
  { name: "Cairan Radiator", motor: "tahunan", mobil: "40.000 km / 2 thn" },
  { name: "Minyak Rem", mobil: "40.000 km / 2 thn" },
];

export const faqs = [
  {
    q: "Apakah GoService gratis?",
    a: "Ya, gratis dengan iklan. Kami menjaga privasimu — tidak ada login, tidak ada tracking lintas aplikasi dari kami.",
  },
  {
    q: "Apakah saya perlu update KM tiap hari?",
    a: "Tidak. Update saat kamu ingat saja — minimal sebulan sekali agar pengingat tetap akurat.",
  },
  {
    q: "Bagaimana cara menambah kendaraan?",
    a: "Tap tombol + di tab tengah, lalu pilih jenis (motor/mobil), isi merek, model, plat, dan KM saat ini. Selesai.",
  },
  {
    q: "Data saya hilang setelah uninstall?",
    a: "Iya, karena data disimpan lokal di perangkat dan kami tidak menyimpan ke server. Ekspor CSV dulu sebelum uninstall jika ingin menyimpan riwayat.",
  },
  {
    q: "Notifikasi tidak muncul?",
    a: "Pastikan izin notifikasi aktif di Pengaturan HP > GoService > Notifikasi.",
  },
  {
    q: "Apakah tersedia untuk iPhone?",
    a: "Saat ini GoService rilis untuk Android lebih dulu. Versi platform lain menyusul setelah validasi pasar.",
  },
];

export const trustPoints = [
  "Tanpa login & tanpa akun",
  "Data tersimpan lokal di HP",
  "Gratis untuk dipakai",
] as const;
