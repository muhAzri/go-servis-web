import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #2E8B57 0%, #22683F 100%)",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* dotted texture corner */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: "100%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 22,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
            }}
          >
            🔧
          </div>
          <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>
            GoService
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 920,
            }}
          >
            Servis kendaraan tepat waktu, tanpa perlu diingat-ingat
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 880,
            }}
          >
            Pengingat servis motor & mobil — gratis untuk Android.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          <span
            style={{
              background: "white",
              color: "#1A2418",
              padding: "10px 22px",
              borderRadius: 999,
            }}
          >
            ▶ Google Play
          </span>
          <span>Tanpa login · Data di HP-mu</span>
        </div>
      </div>
    ),
    size,
  );
}
