import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./Logo";
import { Footer } from "./Footer";
import { LEGAL_EFFECTIVE, type LegalSection } from "@/lib/legal";

function Paragraph({ text }: { text: string }) {
  // Render newline-separated bullets/paragraphs the way the app does.
  return (
    <div className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink-muted">
      {text.split("\n").map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("•")) {
          return (
            <p key={i} className="flex gap-2 pl-1">
              <span className="text-brand">•</span>
              <span>{trimmed.replace(/^•\s*/, "")}</span>
            </p>
          );
        }
        return <p key={i}>{trimmed}</p>;
      })}
    </div>
  );
}

export function LegalPage({
  title,
  intro,
  summary,
  sections,
}: {
  title: string;
  intro?: string;
  summary?: string[];
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-cream/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Link href="/" aria-label="GoService beranda">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            Beranda
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink-subtle">{LEGAL_EFFECTIVE}</p>
        {intro && (
          <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
            {intro}
          </p>
        )}

        {summary && (
          <div className="mt-8 rounded-2xl border border-brand/20 bg-brand-softer p-5">
            <p className="text-sm font-bold text-ink">Ringkasan</p>
            <ul className="mt-3 space-y-2">
              {summary.map((line) => (
                <li
                  key={line}
                  className="flex gap-2 text-[15px] leading-relaxed text-ink"
                >
                  <span className="text-brand">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 space-y-9">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-lg font-bold text-ink">{s.heading}</h2>
              <Paragraph text={s.body} />
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
