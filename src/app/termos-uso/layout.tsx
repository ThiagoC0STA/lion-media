import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Termos de Uso | Lion Media - Marketing Digital",
  description: "Termos de uso da Lion Media. Conheça as condições e regras para utilização de nossos serviços de marketing digital.",
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
    description: "Termos de uso da Lion Media. Conheça as condições e regras para utilização de nossos serviços de marketing digital.",
    url: "https://lionmediadigital.com/termos-uso",
    siteName: "Lion Media - Marketing Digital",
    type: "website",
  },
};

export default function TermosUsoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
