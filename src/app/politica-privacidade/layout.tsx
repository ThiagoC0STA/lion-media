import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Privacidade | Lion Media - Marketing Digital",
  description: "Política de privacidade da Lion Media. Saiba como coletamos, usamos e protegemos suas informações pessoais em conformidade com a LGPD.",
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
    description: "Política de privacidade da Lion Media. Saiba como coletamos, usamos e protegemos suas informações pessoais em conformidade com a LGPD.",
    url: "https://lionmediadigital.com/politica-privacidade",
    siteName: "Lion Media - Marketing Digital",
    type: "website",
  },
};

export default function PoliticaPrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
