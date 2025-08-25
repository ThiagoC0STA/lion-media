import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Lion Media - Agência de Marketing Digital #1 | Facebook Ads + Google Ads | ROI 400%",
    template: "%s | Lion Media - Marketing Digital",
  },
  description:
    "🚀 Agência de Marketing Digital que transforma cliques em clientes fiéis! Especialistas em Facebook Ads, Google Ads e estratégia digital. Atendemos 4 continentes com resultados comprovados: 400% aumento em vendas, 60% engajamento. Google Partner + Meta Certified. Consultoria GRATUITA!",
  keywords: [
    "marketing digital",
    "tráfego pago",
    "facebook ads",
    "google ads",
    "agência de marketing",
    "publicidade online",
    "campanhas digitais",
    "ROI marketing",
    "conversão",
    "vendas online",
    "estratégia digital",
    "meta ads",
    "google partner",
    "meta certified",
    "marketing digital brasil",
    "facebook ads brasil",
    "google ads brasil",
    "agência marketing digital",
    "tráfego pago facebook",
    "campanhas facebook ads",
    "publicidade google",
    "ROI publicidade",
    "conversão vendas",
    "leads qualificados",
    "marketing performance",
    "anúncios online",
    "segmentação avançada",
    "otimização campanhas",
    "resultados marketing",
    "crescimento negócio",
    "escalar vendas",
  ],
  authors: [{ name: "Lion Media" }],
  creator: "Lion Media",
  publisher: "Lion Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lionmediadigital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lionmediadigital.com",
    siteName: "Lion Media - Marketing Digital",
    title:
      "Lion Media - Agência de Marketing Digital #1 | Facebook Ads + Google Ads | ROI 400%",
    description:
      "🚀 Agência de Marketing Digital que transforma cliques em clientes fiéis! Especialistas em Facebook Ads, Google Ads e estratégia digital. Atendemos 4 continentes com resultados comprovados: 400% aumento em vendas, 60% engajamento. Google Partner + Meta Certified. Consultoria GRATUITA!",
    images: [
      {
        url: "/lion.png",
        width: 1200,
        height: 630,
        alt: "Lion Media - Agência de Marketing Digital #1 com ROI de 400%",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lion Media - Agência de Marketing Digital #1 | Facebook Ads + Google Ads | ROI 400%",
    description:
      "🚀 Agência de Marketing Digital que transforma cliques em clientes fiéis! Especialistas em Facebook Ads, Google Ads e estratégia digital. Atendemos 4 continentes com resultados comprovados: 400% aumento em vendas, 60% engajamento. Google Partner + Meta Certified. Consultoria GRATUITA!",
    images: ["/lion.png"],
    creator: "@lionmedia",
    site: "@lionmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  category: "marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#c28a32" />
        <meta name="msapplication-TileColor" content="#c28a32" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Lion Media" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lion Media - Agência de Marketing Digital",
              url: "https://lionmediadigital.com",
              logo: "https://lionmediadigital.com/lion.png",
              description:
                "Agência de marketing digital #1 especializada em Facebook Ads, Google Ads e estratégia de marketing. Atendemos 4 continentes com ROI comprovado de 400% e 60% de engajamento.",
              foundingDate: "2020",
              slogan: "Transformamos cliques em clientes fiéis",
              numberOfEmployees: "15-50",
              award: [
                "Google Partner",
                "Meta Certified Company",
                "Melhor ROI do mercado"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: [
                "https://facebook.com/lionmedia",
                "https://instagram.com/lionmedia",
                "https://linkedin.com/company/lionmedia",
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -23.5505,
                  longitude: -46.6333,
                },
                geoRadius: "10000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Marketing Digital Premium",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Facebook Ads & Instagram Ads",
                      description: "Campanhas otimizadas com ROI de 400% e engajamento de 60%",
                      provider: {
                        "@type": "Organization",
                        name: "Lion Media"
                      }
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Ads Search & Display",
                      description: "Publicidade no Google com segmentação avançada e conversões reais",
                      provider: {
                        "@type": "Organization",
                        name: "Lion Media"
                      }
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Estratégia de Marketing Digital",
                      description: "Planejamento estratégico completo com análise de mercado e concorrentes",
                      provider: {
                        "@type": "Organization",
                        name: "Lion Media"
                      }
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Social Media Management",
                      description: "Gestão completa de redes sociais com criação de conteúdo",
                      provider: {
                        "@type": "Organization",
                        name: "Lion Media"
                      }
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lion Media - Agência de Marketing Digital",
              image: "https://lionmediadigital.com/lion.png",
              description:
                "Agência de marketing digital #1 especializada em Facebook Ads, Google Ads e estratégia de marketing. Atendemos 4 continentes com ROI comprovado de 400% e 60% de engajamento.",
              priceRange: "$$",
              areaServed: [
                "Brasil",
                "América do Norte", 
                "Europa",
                "Ásia",
                "Oceania"
              ],
              serviceType: [
                "Facebook Ads",
                "Google Ads", 
                "Marketing Digital",
                "Estratégia de Marketing",
                "Social Media Management"
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.5505,
                longitude: -46.6333,
              },
              url: "https://lionmediadigital.com",
              telephone: "+55-11-99999-9999",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
