'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao site
          </Link>
        </div>
      </motion.header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Termos de Uso
            </h1>
            <p className="text-gray-400 text-lg">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e usar o site da Lion Media Digital, você concorda em cumprir 
                e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
                parte destes termos, não deve usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Descrição dos Serviços
              </h2>
              <p className="mb-4">
                A Lion Media Digital oferece serviços de marketing digital, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gestão de campanhas no Google Ads</li>
                <li>Gestão de campanhas no Facebook Ads</li>
                <li>Consultoria em marketing digital</li>
                <li>Estratégias de marketing personalizadas</li>
                <li>Análise e otimização de campanhas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Uso Aceitável
              </h2>
              <p className="mb-4">
                Você concorda em usar nossos serviços apenas para propósitos legais e de 
                acordo com estes Termos. Você não deve:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usar nossos serviços para atividades ilegais</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Transmitir vírus ou código malicioso</li>
                <li>Interferir no funcionamento do site</li>
                <li>Coletar informações de outros usuários sem autorização</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site, incluindo textos, imagens, logos, design e 
                código, é propriedade da Lion Media Digital e está protegido por leis de 
                direitos autorais. É proibida a reprodução sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                A Lion Media Digital não se responsabiliza por danos indiretos, incidentais 
                ou consequenciais decorrentes do uso de nossos serviços. Nossa responsabilidade 
                total é limitada ao valor pago pelos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Garantias e Resultados
              </h2>
              <p className="mb-4">
                Embora nos esforcemos para entregar resultados excepcionais, não garantimos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Resultados específicos de campanhas publicitárias</li>
                <li>Posicionamento exato em mecanismos de busca</li>
                <li>Aumento garantido de vendas ou conversões</li>
                <li>Disponibilidade ininterrupta dos serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Pagamentos e Reembolsos
              </h2>
              <p className="mb-4">
                Os pagamentos são processados conforme acordado em contrato. Política de reembolso:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consultoria gratuita: sem custo</li>
                <li>Serviços contratados: conforme contrato específico</li>
                <li>Reembolsos: avaliados caso a caso</li>
                <li>Cancelamentos: 30 dias de antecedência</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Confidencialidade
              </h2>
              <p>
                Comprometemo-nos a manter a confidencialidade das informações do seu negócio 
                e estratégias de marketing. Não compartilhamos dados sensíveis com terceiros 
                sem sua autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Modificações dos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação no site. 
                Seu uso continuado constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Lei Aplicável
              </h2>
              <p>
                Estes Termos são regidos pelas leis brasileiras. Qualquer disputa será 
                resolvida nos tribunais da comarca de Itapema, Santa Catarina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                11. Contato
              </h2>
              <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="mt-4 space-y-2">
                <p>📧 Email: comercial@lionmediadigital.com</p>
                <p>📱 WhatsApp: +55 41 99102-0364</p>
                <p>📍 Endereço: Itapema, SC - Brasil</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 