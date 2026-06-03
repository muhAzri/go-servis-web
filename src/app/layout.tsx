import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL, PLAY_URL, site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.developer }],
  creator: site.developer,
  publisher: site.developer,
  keywords: [
    "pengingat servis",
    "aplikasi servis motor",
    "aplikasi servis mobil",
    "catatan servis kendaraan",
    "reminder ganti oli",
    "pengingat ganti oli motor",
    "perawatan kendaraan",
    "service reminder",
    "odometer tracker",
    "GoService",
  ],
  category: "automotive",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#2e8b57",
  colorScheme: "light",
};

/**
 * JSON-LD structured data. MobileApplication helps Google surface the app
 * (price, platform, install link); WebSite attributes the publisher.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: site.name,
      operatingSystem: "ANDROID",
      applicationCategory: "AutomotiveApplication",
      description: site.longDescription,
      url: SITE_URL,
      installUrl: PLAY_URL,
      downloadUrl: PLAY_URL,
      softwareVersion: site.version,
      inLanguage: "id",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "IDR",
      },
      author: {
        "@type": "Person",
        name: site.developer,
        email: site.email,
      },
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: SITE_URL,
      inLanguage: "id",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} antialiased`}>
      <body className="min-h-dvh font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
