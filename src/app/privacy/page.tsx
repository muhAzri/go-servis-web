import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacySections, privacySummary } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi GoService — aplikasi lokal-first tanpa login. Pelajari data apa yang disimpan, semuanya di perangkatmu.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      intro="GoService bersifat lokal-first. Halaman ini menjelaskan data apa yang disimpan aplikasi, semuanya di perangkatmu, dan bagaimana iklan pihak ketiga bekerja."
      summary={privacySummary}
      sections={privacySections}
    />
  );
}
