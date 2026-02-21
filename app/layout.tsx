import "./globals.css";
import type { Metadata, Viewport } from "next";
import fr from "@/content/fr";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const { site, seo } = fr;

// Couleur principale sombre (proche de ton header/bg)
const THEME = "#0f2747";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  alternates: {
    canonical: "/",
  },

  // ❌ Next.js 16 : ne plus mettre themeColor ici

  openGraph: {
    type: "website",
    url: site.domain,
    title: seo.title,
    description: seo.description,
    siteName: site.name,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

// ✅ Next.js 16 : themeColor doit être dans viewport
export const viewport: Viewport = {
  themeColor: THEME,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.domain,
    telephone: site.phone,
    areaServed: site.serviceArea,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "FR",
    },
  };

  return (
    <html lang="fr">
      <head>
        {/* ✅ Fallback/compat: certains navigateurs lisent directement la meta */}
        <meta name="theme-color" content={THEME} />

        {/* ✅ iOS Safari (mode “app”) */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* NOTE: iOS n'accepte pas une couleur ici, seulement des styles (black / default / black-translucent) */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* ✅ Windows / Edge tiles */}
        <meta name="msapplication-TileColor" content={THEME} />
      </head>

      <body className={poppins.className}>
        {/* JSON-LD LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}