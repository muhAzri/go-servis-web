import {
  Bell,
  Bike,
  Droplet,
  CircleDot,
  Disc3,
  House,
  ClipboardList,
  Plus,
  Settings,
} from "lucide-react";

type Reminder = {
  icon: typeof Droplet;
  name: string;
  sub: string;
  pct: number;
  tone: "danger" | "warn" | "ok";
};

const reminders: Reminder[] = [
  { icon: Droplet, name: "Oli Mesin", sub: "Tinggal 180 km lagi", pct: 92, tone: "danger" },
  { icon: Disc3, name: "Kampas Rem", sub: "1.200 km lagi", pct: 64, tone: "warn" },
  { icon: CircleDot, name: "Ban", sub: "8.500 km lagi", pct: 28, tone: "ok" },
];

const toneBar: Record<Reminder["tone"], string> = {
  danger: "bg-danger",
  warn: "bg-warn",
  ok: "bg-brand",
};
const toneText: Record<Reminder["tone"], string> = {
  danger: "text-danger",
  warn: "text-warn",
  ok: "text-brand",
};

/** Decorative mock of the GoService home screen. Marked aria-hidden. */
export function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-[280px] select-none rounded-[2.75rem] border-[10px] border-ink bg-ink p-0 shadow-[0_40px_80px_-30px_rgba(26,36,24,0.55)]"
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-28 -translate-x-1/2 rounded-full bg-ink" />
      <div className="overflow-hidden rounded-[2.05rem] bg-cream">
        {/* status bar */}
        <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-semibold text-ink">
          <span>09:41</span>
          <span className="flex gap-1">
            <span>5G</span>
            <span>100%</span>
          </span>
        </div>

        {/* header */}
        <div className="flex items-center justify-between px-5 pb-3 pt-1">
          <div>
            <p className="text-[10px] font-medium text-ink-muted">Selamat pagi,</p>
            <p className="text-base font-extrabold tracking-tight text-ink">Azri</p>
          </div>
          <span className="grid size-9 place-items-center rounded-full bg-surface shadow-soft">
            <Bell className="size-4 text-ink" />
          </span>
        </div>

        {/* vehicle card */}
        <div className="mx-4 rounded-2xl bg-linear-to-br from-brand to-brand-dark p-4 text-white shadow-[0_16px_30px_-18px_rgba(34,104,63,0.9)]">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-white/20">
              <Bike className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold">Vario 160</p>
              <p className="text-[10px] text-white/70">B 1234 ABC · Matic</p>
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] text-white/70">Odometer</p>
              <p className="text-xl font-extrabold tracking-tight">24.310 km</p>
            </div>
            <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold">
              Update KM
            </span>
          </div>
        </div>

        {/* reminders */}
        <div className="px-4 pb-3 pt-4">
          <p className="mb-2 text-[11px] font-bold text-ink">Servis berikutnya</p>
          <div className="space-y-2">
            {reminders.map((r) => (
              <div
                key={r.name}
                className="rounded-xl bg-surface p-2.5 shadow-soft"
              >
                <div className="flex items-center gap-2.5">
                  <span className="grid size-8 place-items-center rounded-lg bg-brand-softer">
                    <r.icon className={`size-4 ${toneText[r.tone]}`} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-ink">{r.name}</p>
                    <p className={`text-[10px] font-medium ${toneText[r.tone]}`}>
                      {r.sub}
                    </p>
                  </div>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-alt">
                  <div
                    className={`h-full rounded-full ${toneBar[r.tone]}`}
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom nav */}
        <div className="mt-1 flex items-center justify-around border-t border-surface-alt bg-surface px-4 py-3">
          <House className="size-5 text-brand" />
          <ClipboardList className="size-5 text-ink-subtle" />
          <span className="grid size-10 -translate-y-3 place-items-center rounded-full bg-brand text-white shadow-[0_10px_20px_-8px_rgba(34,104,63,0.9)]">
            <Plus className="size-5" />
          </span>
          <Bell className="size-5 text-ink-subtle" />
          <Settings className="size-5 text-ink-subtle" />
        </div>
      </div>
    </div>
  );
}
