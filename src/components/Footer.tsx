import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <nav className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-subtle">
                Navigasi
              </p>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <nav className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-subtle">
                Legal
              </p>
              <a
                href="/privacy"
                className="text-sm text-ink-muted transition-colors hover:text-brand"
              >
                Kebijakan Privasi
              </a>
              <a
                href="/terms"
                className="text-sm text-ink-muted transition-colors hover:text-brand"
              >
                Syarat & Ketentuan
              </a>
            </nav>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-subtle">
                Kontak
              </p>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-brand"
              >
                <Mail className="size-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/[0.06] pt-6 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.developer}. GoService v{site.version}.
          </p>
          <p>Dibuat untuk pemilik motor & mobil di Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
