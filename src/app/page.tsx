import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GlobalBrands from '@/components/GlobalBrands'
import AboutUs from '@/components/AboutUs'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lion Media - Agência de Marketing Digital | Tráfego Pago e Estratégia',
  description: 'Transformamos cliques em clientes fiéis com publicidade estratégica. Especialistas em tráfego pago do Facebook e Google ADS. Atendemos 4 continentes com resultados comprovados de 400% de aumento em vendas.',
  keywords: 'marketing digital, tráfego pago, facebook ads, google ads, agência de marketing, publicidade online',
  openGraph: {
    title: 'Lion Media - Agência de Marketing Digital | Tráfego Pago e Estratégia',
    description: 'Transformamos cliques em clientes fiéis com publicidade estratégica. Especialistas em tráfego pago do Facebook e Google ADS.',
    url: 'https://lionmediadigital.com',
    siteName: 'Lion Media',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lion Media - Agência de Marketing Digital',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lion Media - Agência de Marketing Digital | Tráfego Pago e Estratégia',
    description: 'Transformamos cliques em clientes fiéis com publicidade estratégica. Especialistas em tráfego pago do Facebook e Google ADS.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://lionmediadigital.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <GlobalBrands />
      <AboutUs />
      <Stats />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
