'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PoliticaPrivacidade() {
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
              Política de Privacidade
            </h1>
            <p className="text-gray-400 text-lg">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Informações que Coletamos
              </h2>
              <p className="mb-4">
                A Lion Media Digital coleta informações que você nos fornece diretamente, como quando:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Preenche formulários em nosso site</li>
                <li>Entra em contato conosco via WhatsApp ou email</li>
                <li>Solicita uma consultoria gratuita</li>
                <li>Contrata nossos serviços</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Como Usamos Suas Informações
              </h2>
              <p className="mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e melhorar nossos serviços de marketing digital</li>
                <li>Comunicar sobre consultorias e propostas</li>
                <li>Enviar informações relevantes sobre marketing digital</li>
                <li>Processar pagamentos e emitir notas fiscais</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Compartilhamento de Informações
              </h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para prestar nossos serviços ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger 
                suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Seus Direitos
              </h2>
              <p className="mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Revogar consentimento a qualquer momento</li>
                <li>Portabilidade de seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Cookies e Tecnologias Similares
              </h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar a experiência em nosso site, 
                analisar o tráfego e personalizar conteúdo. Você pode gerenciar suas preferências 
                de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Retenção de Dados
              </h2>
              <p>
                Mantemos suas informações pelo tempo necessário para cumprir os propósitos 
                descritos nesta política, a menos que uma retenção mais longa seja exigida 
                ou permitida por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Alterações nesta Política
              </h2>
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças 
                significativas através de nosso site ou contato direto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Contato
              </h2>
              <p>
                Para dúvidas sobre esta política ou exercer seus direitos, entre em contato:
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