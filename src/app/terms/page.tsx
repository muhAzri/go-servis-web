import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsSections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat & Ketentuan penggunaan aplikasi GoService untuk pengingat servis motor & mobil.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Syarat & Ketentuan"
      intro="Dengan menggunakan GoService, kamu menyetujui syarat berikut. Bacalah dengan saksama."
      sections={termsSections}
    />
  );
}
