import { Metadata } from "next";

// Meta tags para a página principal
export const homeMetaTags: Metadata = {
  title:
    "Lion Media - Agência de Marketing Digital #1 | Facebook Ads + Google Ads | ROI 400%",
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
  openGraph: {
    title:
      "Lion Media - Agência de Marketing Digital #1 | Facebook Ads + Google Ads | ROI 400%",
    description:
      "🚀 Agência de Marketing Digital que transforma cliques em clientes fiéis! Especialistas em Facebook Ads, Google Ads e estratégia digital. Atendemos 4 continentes com resultados comprovados: 400% aumento em vendas, 60% engajamento. Google Partner + Meta Certified. Consultoria GRATUITA!",
    url: "https://lionmediadigital.com",
    siteName: "Lion Media - Marketing Digital",
    images: [
      {
        url: "/lion.png",
        width: 1200,
        height: 630,
        alt: "Lion Media - Agência de Marketing Digital #1 com ROI de 400%",
      },
    ],
    locale: "pt_BR",
    type: "website",
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
};

// Meta tags para a página de política de privacidade
export const privacyMetaTags: Metadata = {
  title: "Política de Privacidade | Lion Media - Marketing Digital",
  description:
    "Política de privacidade da Lion Media. Saiba como coletamos, usamos e protegemos suas informações pessoais em conformidade com a LGPD.",
  keywords: [
    "política de privacidade",
    "LGPD",
    "proteção de dados",
    "privacidade",
    "dados pessoais",
    "lion media",
    "marketing digital",
  ],
  openGraph: {
    title: "Política de Privacidade | Lion Media - Marketing Digital",
    description:
      "Política de privacidade da Lion Media. Saiba como coletamos, usamos e protegemos suas informações pessoais em conformidade com a LGPD.",
    url: "https://lionmediadigital.com/politica-privacidade",
    siteName: "Lion Media - Marketing Digital",
    type: "website",
  },
};

// Meta tags para a página de termos de uso
export const termsMetaTags: Metadata = {
  title: "Termos de Uso | Lion Media - Marketing Digital",
  description:
    "Termos de uso da Lion Media. Conheça as condições e regras para utilização de nossos serviços de marketing digital.",
  keywords: [
    "termos de uso",
    "condições de uso",
    "regras",
    "serviços",
    "marketing digital",
    "lion media",
  ],
  openGraph: {
    title: "Termos de Uso | Lion Media - Marketing Digital",
    description:
      "Termos de uso da Lion Media. Conheça as condições e regras para utilização de nossos serviços de marketing digital.",
    url: "https://lionmediadigital.com/termos-uso",
    siteName: "Lion Media - Marketing Digital",
    type: "website",
  },
};

// Meta tags para seções específicas
export const sectionMetaTags = {
  hero: {
    title:
      "🚀 Transforme Cliques em Clientes | Lion Media - Marketing Digital #1",
    description:
      "Agência de Marketing Digital com ROI de 400% e 60% de engajamento. Especialistas em Facebook Ads e Google Ads. Consultoria GRATUITA!",
    keywords: [
      "transformar cliques em clientes",
      "ROI 400%",
      "engajamento 60%",
      "consultoria gratuita marketing",
    ],
  },
  sobre: {
    title: "Quem Somos | Lion Media - Agência de Marketing Digital #1",
    description:
      "Somos uma agência de marketing digital que revolucionou a forma como empresas escalam seus negócios online. Atuamos em 4 continentes com resultados comprovados.",
    keywords: [
      "quem somos",
      "agência marketing digital",
      "4 continentes",
      "resultados comprovados",
      "google partner",
      "meta certified",
    ],
  },
  servicos: {
    title: "Nossos Serviços | Facebook Ads + Google Ads + Marketing Digital",
    description:
      "Serviços de marketing digital para empresas que querem resultados reais. Facebook Ads, Google Ads, estratégia digital e social media. ROI comprovado de 400%.",
    keywords: [
      "serviços marketing digital",
      "facebook ads",
      "google ads",
      "estratégia digital",
      "social media",
      "ROI 400%",
    ],
  },
  depoimentos: {
    title: "Depoimentos de Clientes | Lion Media - Resultados Reais",
    description:
      "Veja o que nossos clientes têm a dizer sobre os resultados que alcançaram com a Lion Media. Histórias reais de transformação e crescimento.",
    keywords: [
      "depoimentos clientes",
      "resultados reais",
      "histórias sucesso",
      "transformação negócio",
      "crescimento empresa",
    ],
  },
  faq: {
    title: "Dúvidas Frequentes | Lion Media - Marketing Digital",
    description:
      "Respostas para as principais dúvidas sobre nossos serviços e metodologia. Transparência total para você tomar a melhor decisão.",
    keywords: [
      "dúvidas frequentes",
      "perguntas marketing digital",
      "metodologia",
      "transparência",
      "decisão",
    ],
  },
};

// Meta tags para serviços específicos
export const serviceMetaTags = {
  facebookAds: {
    title: "Facebook Ads & Instagram Ads | Lion Media - ROI 400%",
    description:
      "Campanhas de Facebook Ads e Instagram Ads com ROI de 400% e engajamento de 60%. Especialistas em segmentação avançada e conversões reais.",
    keywords: [
      "facebook ads",
      "instagram ads",
      "meta ads",
      "campanhas facebook",
      "ROI 400%",
      "engajamento 60%",
      "segmentação avançada",
    ],
  },
  googleAds: {
    title: "Google Ads Search & Display | Lion Media - Conversões Reais",
    description:
      "Publicidade no Google Search e Display com segmentação avançada e conversões reais. Especialistas em Google Ads com resultados comprovados.",
    keywords: [
      "google ads",
      "google search ads",
      "google display ads",
      "publicidade google",
      "segmentação avançada",
      "conversões reais",
    ],
  },
  marketingDigital: {
    title:
      "Estratégia de Marketing Digital | Lion Media - Crescimento Sustentável",
    description:
      "Planejamento estratégico completo de marketing digital com análise de mercado, concorrentes e implementação de campanhas otimizadas.",
    keywords: [
      "estratégia marketing digital",
      "planejamento estratégico",
      "análise mercado",
      "análise concorrentes",
      "campanhas otimizadas",
    ],
  },
  socialMedia: {
    title: "Social Media Management | Lion Media - Gestão Completa",
    description:
      "Gestão completa de redes sociais com criação de conteúdo, engajamento e crescimento de comunidade para sua marca.",
    keywords: [
      "social media management",
      "gestão redes sociais",
      "criação conteúdo",
      "engajamento",
      "crescimento comunidade",
    ],
  },
};
