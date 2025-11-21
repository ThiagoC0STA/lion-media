import { Metadata } from 'next';

export const metadata: Metadata = {
  // --- Metadados Padrão ---
  title: "Estratégia Digital Vencedora | Lion Media - Seu Marketing Social",
  description: "Transformamos sua presença online! A Lion Media cria estratégias de mídia social e conteúdo que geram leads e aumentam suas vendas. Descubra nossos planos.",
  keywords: [
    "mídia social",
    "marketing digital",
    "estratégia social media",
    "gestão de redes sociais",
    "conteúdo engajador",
    "aumentar vendas",
    "lion media",
  ],

  // --- Metadados Open Graph (Otimização para Facebook, LinkedIn, etc.) ---
  openGraph: {
    title: "Estratégia Digital Vencedora | Lion Media - Seu Marketing Social",
    description: "Transformamos sua presença online! A Lion Media cria estratégias de mídia social e conteúdo que geram leads e aumentam suas vendas.",
    url: "https://lionmediadigital.com/servicos/social-media", // URL da página de destino
    siteName: "Lion Media - Marketing Digital",
    type: "website", // Use 'article' se for um blog post
  },

};

export default function SocialMediaPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}