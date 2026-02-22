import "./globals.css";
import type { Metadata, Viewport } from "next";
import fr from "@/content/fr";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const { site, seo } = fr;

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

  openGraph: {
    type: "website",
    url: site.domain,
    title: seo.title,
    description: seo.description,
    siteName: site.name,
    locale: "fr_FR",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: site.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/icon.png"],
  },
};

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
        <meta name="theme-color" content={THEME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content={THEME} />
      </head>

      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}