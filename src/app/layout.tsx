import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Lion Media - Agência de Marketing Digital | Tráfego Pago e Estratégia',
    template: '%s | Lion Media'
  },
  description: 'Transformamos cliques em clientes fiéis com publicidade estratégica. Especialistas em tráfego pago do Facebook e Google ADS. Atendemos 4 continentes com resultados comprovados de 400% de aumento em vendas.',
  keywords: [
    'marketing digital',
    'tráfego pago',
    'facebook ads',
    'google ads',
    'agência de marketing',
    'publicidade online',
    'campanhas digitais',
    'ROI marketing',
    'conversão',
    'vendas online',
    'estratégia digital',
    'meta ads',
    'google partner',
    'meta business partner'
  ],
  authors: [{ name: 'Lion Media' }],
  creator: 'Lion Media',
  publisher: 'Lion Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lionmediadigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://lionmediadigital.com',
    siteName: 'Lion Media',
    title: 'Lion Media - Agência de Marketing Digital | Tráfego Pago e Estratégia',
    description: 'Transformamos cliques em clientes fiéis com publicidade estratégica. Especialistas em tráfego pago do Facebook e Google ADS. Atendemos 4 continentes com resultados comprovados.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lion Media - Agência de Marketing Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lion Media - Agência de Marketing Digital | Tráfego Pago e Estratégia',
    description: 'Transformamos cliques em clientes fiéis com publicidade estratégica. Especialistas em tráfego pago do Facebook e Google ADS.',
    images: ['/twitter-image.jpg'],
    creator: '@lionmedia',
    site: '@lionmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  category: 'marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#FF8C00" />
        <meta name="msapplication-TileColor" content="#FF8C00" />
        
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
              "name": "Lion Media",
              "url": "https://lionmediadigital.com",
              "logo": "https://lionmediadigital.com/lion.png",
              "description": "Agência de marketing digital especializada em tráfego pago e estratégia de marketing",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://facebook.com/lionmedia",
                "https://instagram.com/lionmedia",
                "https://linkedin.com/company/lionmedia"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -23.5505,
                  "longitude": -46.6333
                },
                "geoRadius": "10000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Marketing Digital",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tráfego Pago Facebook Ads",
                      "description": "Campanhas otimizadas no Facebook e Instagram"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Google Ads",
                      "description": "Publicidade no Google Search e Display"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Estratégia de Marketing",
                      "description": "Planejamento estratégico completo"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lion Media",
              "image": "https://lionmediadigital.com/lion.png",
              "description": "Agência de marketing digital especializada em tráfego pago",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5505,
                "longitude": -46.6333
              },
              "url": "https://lionmediadigital.com",
              "telephone": "+55-11-99999-9999",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
