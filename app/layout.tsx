import type { Metadata } from "next";
import { Suspense } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { getCompanyData } from "@/lib/company";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fortnelcher.com.br";
const company = getCompanyData();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: company.seo.tituloPadrao,
    template: `%s | ${company.nome}`,
  },
  description: company.seo.descricaoPadrao,
  keywords: company.seo.palavrasChave,
  authors: [{ name: company.razaoSocial }],
  applicationName: company.nome,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: company.nome,
    title: company.seo.tituloPadrao,
    description: company.seo.descricaoPadrao,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: company.seo.tituloPadrao,
    description: company.seo.descricaoPadrao,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsapp = company.contato.telefones[0]?.whatsapp ?? "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.nome,
    legalName: company.razaoSocial,
    description: company.descricaoLonga,
    taxID: company.cnpj,
    email: company.contato.email,
    telephone: company.contato.telefones.map((t) => t.numero),
    address: {
      "@type": "PostalAddress",
      addressLocality: company.endereco.cidade,
      addressRegion: company.endereco.estado,
      addressCountry: "BR",
    },
    areaServed: company.endereco.regiaoAtendida,
    openingHours: "Mo-Fr 08:00-18:00",
    sameAs: [company.redesSociais.instagram],
    url: siteUrl,
  };

  return (
    <html
      lang="pt-BR"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <ThemeProvider>
          <a
            href="#conteudo-principal"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
          >
            Pular para o conteúdo principal
          </a>
          <Header whatsapp={whatsapp} />
          <main id="conteudo-principal">{children}</main>
          <Footer company={company} />
        </ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
