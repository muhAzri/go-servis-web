/**
 * Legal copy mirrored from the in-app Privacy & Terms screens so the website
 * and the app stay in lockstep. Effective dates match the app.
 */

export const LEGAL_EFFECTIVE = "Berlaku sejak 1 Januari 2026 · Diperbarui 2 Juni 2026";

export type LegalSection = { heading: string; body: string };

export const privacySummary = [
  "Data kendaraan, servis, pengingat, komponen, dan profil disimpan lokal di HP kamu",
  "Tidak ada login, tidak ada akun, dan tidak ada sync data ke server kami",
  "Iklan ditampilkan via SDK Yandex Mobile Ads (mediation pihak ketiga)",
  "File backup CSV hanya keluar dari perangkat kalau kamu sendiri yang mengekspor",
];

export const privacySections: LegalSection[] = [
  {
    heading: "1. Data yang kami simpan (semua lokal)",
    body:
      "Aplikasi ini bersifat lokal-first. Berikut data yang kami simpan di penyimpanan privat aplikasi (SQLite) di perangkatmu:\n" +
      "• Kendaraan: nama panggilan, merek, model, tahun, plat nomor, warna, dan odometer.\n" +
      "• Riwayat servis: mode (Komponen/Rutin/Manual), tanggal, odometer, bengkel, biaya, catatan, dan komponen terkait.\n" +
      "• Komponen yang dipantau: nama, interval, tanggal & KM servis terakhir, jadwal servis berikutnya, badge urgensi.\n" +
      "• Pengingat: judul, target KM dan/atau tanggal, status (aktif, ditunda, selesai, diabaikan).\n" +
      "• Profil: nama, warna avatar, dan email (opsional).\n" +
      "• Pengaturan: toggle notifikasi dan preferensi terkait.\n\n" +
      "Data ini tidak dikirim ke server kami dan tidak ada akun online yang kamu buat. Aplikasi lain di perangkat tidak bisa mengakses penyimpanan privat ini.",
  },
  {
    heading: "2. Notifikasi & Izin",
    body:
      "Notifikasi sepenuhnya dijadwalkan dan dipicu secara lokal — kami tidak menggunakan push server.\n\n" +
      "Aplikasi punya dua kategori notifikasi yang bisa kamu atur terpisah:\n" +
      "• Pengingat servis: muncul menjelang jatuh tempo pengingat yang kamu buat.\n" +
      "• Update KM: otomatis mengingatkanmu kalau odometer salah satu kendaraan tidak diperbarui selama 14 hari, jam 9 pagi waktu lokal.\n\n" +
      "Di Android 13+ aplikasi akan meminta izin POST_NOTIFICATIONS saat onboarding. Kamu bisa mematikan masing-masing kategori di Pengaturan > Notifikasi atau di setelan notifikasi sistem.",
  },
  {
    heading: "3. Iklan & Pihak Ketiga",
    body:
      "Saat ini kami menampilkan iklan via SDK Yandex Mobile Ads (banner, interstitial, native, app-open). SDK ini dapat mengakses identifier iklan perangkat (AAID) untuk personalisasi dan measurement sesuai kebijakan Yandex.\n\n" +
      "Kamu bisa mereset atau membatasi iklan terpersonalisasi via setelan sistem (Android: Setelan > Privasi > Iklan). Kami tidak menambahkan SDK analitik atau pelacakan lintas-aplikasi lain di atas SDK iklan ini.",
  },
  {
    heading: "4. Backup & Ekspor Data",
    body:
      "Fitur Ekspor di Pengaturan menghasilkan satu file CSV yang berisi data kendaraan, servis, pengingat, dan komponen yang kamu pilih. File ini hanya keluar dari perangkat kalau kamu sendiri yang menekan Share / Save lewat dialog sistem.\n\n" +
      "Kami tidak menyimpan salinan file ekspor di server manapun. Setelah file keluar dari perangkat, keamanannya menjadi tanggung jawab kamu — file dapat memuat informasi yang bisa mengidentifikasi kendaraanmu (plat nomor, riwayat bengkel, biaya).\n\n" +
      "Fitur Impor hanya membaca file CSV yang kamu pilih sendiri; impor melakukan merge by id sehingga re-impor tidak menggandakan data.",
  },
  {
    heading: "5. Penyimpanan Lokal & Penghapusan Data",
    body:
      "Semua data hidup di app-private storage milik GoService:\n" +
      "• 'Hapus Semua Data' di Pengaturan akan menghapus seluruh data aplikasi di perangkat ini.\n" +
      "• Uninstall aplikasi juga menghapus seluruh data lokal secara permanen.\n\n" +
      "Karena kami tidak punya backup di server kami, data yang sudah dihapus atau hilang akibat uninstall/format perangkat tidak dapat kami pulihkan. Disarankan untuk mengekspor CSV berkala (lihat bagian 4).",
  },
  {
    heading: "6. Anak di Bawah Umur",
    body:
      "Aplikasi ini tidak ditujukan untuk pengguna di bawah 13 tahun. Kami tidak sengaja mengumpulkan data dari anak-anak. Karena data tinggal di perangkat, jika orang tua/wali menemukan data anak di perangkatnya, dapat menghapusnya melalui 'Hapus Semua Data' atau dengan menguninstall aplikasi.",
  },
  {
    heading: "7. Perubahan Kebijakan",
    body:
      "Kami dapat memperbarui kebijakan ini sesekali untuk mencerminkan fitur baru atau perubahan SDK pihak ketiga. Tanggal 'Diperbarui' di bagian atas halaman ini akan kami ubah setiap kali ada revisi.",
  },
  {
    heading: "8. Kontak",
    body: "Pertanyaan, keluhan, atau permintaan terkait privasi: muhammad.azri.f.s@gmail.com",
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "1. Penerimaan Syarat",
    body: "Dengan mengunduh dan menggunakan aplikasi GoService (\"Aplikasi\"), kamu setuju untuk terikat oleh syarat dan ketentuan berikut. Jika kamu tidak setuju, mohon tidak menggunakan Aplikasi.",
  },
  {
    heading: "2. Penggunaan Aplikasi",
    body:
      "GoService adalah alat bantu untuk mencatat servis kendaraan, melacak komponen yang dipantau, dan mengingatkan jadwal servis. Fitur utama yang tersedia saat ini:\n" +
      "• Catat servis dalam tiga mode (Komponen / Rutin / Manual).\n" +
      "• Pengingat berbasis komponen yang dipantau atau pengingat manual.\n" +
      "• Pengingat otomatis Update KM bila odometer tidak diperbarui dalam 14 hari.\n" +
      "• Ekspor dan impor data dalam format CSV.\n\n" +
      "Aplikasi disediakan \"apa adanya\". GoService bukan pengganti panduan resmi pabrikan kendaraan atau penilaian mekanik bersertifikat — keputusan kapan, di mana, dan bagaimana servis dilakukan tetap menjadi tanggung jawab kamu.",
  },
  {
    heading: "3. Tidak Ada Jaminan",
    body: "Kami tidak menjamin keakuratan rekomendasi interval servis bawaan, badge urgensi komponen, atau ambang batas 14 hari pada pengingat Update KM. Angka-angka tersebut merupakan default umum, bukan rekomendasi resmi untuk kendaraan spesifikmu. Selalu rujuk buku manual pabrikan dan konsultasi mekanik bersertifikat untuk panduan resmi.",
  },
  {
    heading: "4. Iklan & Konten Pihak Ketiga",
    body: "Saat ini Aplikasi menampilkan iklan melalui SDK Yandex Mobile Ads. Komposisi SDK iklan dapat berubah seiring waktu. Kami tidak bertanggung jawab atas konten, produk, atau layanan yang ditampilkan dalam iklan tersebut. Iklan dapat menggunakan identifier perangkat sesuai kebijakan SDK iklan yang berlaku — lihat Kebijakan Privasi untuk detailnya.",
  },
  {
    heading: "5. Data Lokal & Tanggung Jawab Backup",
    body:
      "Semua data Aplikasi disimpan di perangkatmu. Kami TIDAK menyediakan sync cloud atau backup di server kami. Konsekuensinya:\n" +
      "• Uninstall, factory reset, kerusakan storage, atau penggantian perangkat dapat menyebabkan hilangnya seluruh data Aplikasi secara permanen.\n" +
      "• Kami tidak dapat memulihkan data yang telah hilang dengan cara apapun.\n\n" +
      "Sangat disarankan untuk menggunakan fitur Ekspor CSV secara berkala dan menyimpan file hasil ekspor di lokasi terpisah yang kamu kendalikan.",
  },
  {
    heading: "6. Hak Kekayaan Intelektual",
    body: "Logo, desain, dan kode aplikasi adalah milik pengembang GoService. Konten yang kamu masukkan (data kendaraan, catatan) tetap milikmu.",
  },
  {
    heading: "7. Pembatasan Tanggung Jawab",
    body: "Kami tidak bertanggung jawab atas kerugian, langsung maupun tidak langsung, yang timbul dari: kegagalan komponen kendaraan, kelupaan jadwal servis, ketidakakuratan data yang kamu masukkan, kehilangan data lokal, atau kebocoran data yang terjadi setelah kamu mengekspor file backup ke luar perangkat.",
  },
  {
    heading: "8. Penghentian Layanan",
    body: "Kami berhak menghentikan atau memodifikasi layanan kapan saja dengan pemberitahuan yang wajar. Karena tidak ada data Aplikasi yang kami simpan di server, penghentian layanan tidak memengaruhi data lokal yang ada di perangkatmu.",
  },
  {
    heading: "9. Hukum yang Berlaku",
    body: "Syarat ini diatur oleh hukum Republik Indonesia.",
  },
  {
    heading: "10. Kontak",
    body: "muhammad.azri.f.s@gmail.com",
  },
];
