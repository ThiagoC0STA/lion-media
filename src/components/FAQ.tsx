"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como vocês conseguem resultados tão rápido?",
      answer:
        "Nossa metodologia comprovada já transformou mais de 50 empresas. Começamos com uma análise completa do seu negócio, e do seu mercado, identificamos as oportunidades de crescimento e estudamos seus maiores concorrentes, assim implementamos campanhas otimizadas desde o primeiro dia. Nossos clientes veem os primeiros resultados em 15-30 dias.",
      icon: CheckCircle,
      highlight: "Resultados em 15-30 dias",
    },
    {
      question: "Vocês trabalham com qualquer tipo de negócio?",
      answer:
        "Sim! Já atendemos desde pequenas empresas locais até grandes marcas em 4 países. Nossa metodologia é adaptável a qualquer nicho. O que importa é que você tenha um produto/serviço de qualidade e esteja disposto a investir em crescimento.",
      icon: Target,
      highlight: "Atendemos multiplos nicho",
    },
    {
      question: "Como funciona o acompanhamento e suporte?",
      answer:
        "Você terá acesso direto à nossa equipe via WhatsApp, email e reuniões semanais. Além disso, fornecemos relatórios detalhados e dashboards em tempo real. Nosso suporte é 24/7 para solucionar todos os seus problemas.",
      icon: CheckCircle,
      highlight: "Suporte 24/7",
    },
    {
      question: "Qual o investimento necessário para começar?",
      answer:
        "Nossos planos são flexíveis e adaptados ao porte do seu negócio, mas começamos com consultorias gratuitas para entender suas necessidades.O importante é que você tenha clareza de onde está investindo e do potencial de retorno.",
      icon: DollarSign,
      highlight: "Planos flexíveis",
    },
    {
      question:
        "Como sei que meu negócio não vai ficar perdido em meio a tantos clientes de vocês?",
      answer:
        "Diferente de agências que atendem em massa, na Lion Media priorizamos atendimento personalizados, entendendo cada detalhe do seu negócio antes de criar as campanhas e dando o devido suporte ao cliente 100%.",
      icon: CheckCircle,
      highlight: "Serviços Personalizados",
    },
    {
      question: "Preciso assinar contrato de longo prazo?",
      answer:
        "Não exigimos contratos amarrados.Você pode começar com um plano mensal e continuar apenas se estiver satisfeito com os resultados.",
      icon: DollarSign,
      highlight: "Contratos de acordo com sua necessidade",
    },
    {
      question: "Vocês só fazem anúncios ou cuidam também das redes sociais?",
      answer:
        "Além da gestão de tráfego pago (Facebook Ads e Google Ads), também oferecemos gestão de social media, criação de conteúdo, envolvendo conteudo em imagem e video para fortalecer sua marca online.",
      icon: CheckCircle,
      highlight: "Serviços de Social Media",
    },
    {
      question:
        "Eu já tentei anúncios antes e não tive retorno. Por que agora seria diferente?",
      answer:
        "Muitos negócios investem em anúncios sem estratégia. Aqui na Lion Media, usamos segmentação avançada, criativos de alta performance e funis de conversão, o que garante muito mais chances de sucesso.",
      icon: CheckCircle,
      highlight: "Estratégia Comprovada",
    },
  ];

  // Debug: Log dos FAQs
  console.log("FAQs array:", faqs);
  console.log("openIndex:", openIndex);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 lg:px-16 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Dúvidas Frequentes
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre nossos serviços e
            metodologia. Transparência total para você tomar a melhor decisão.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#c28a32] to-[#FFD700] rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {faq.question} {/* Index: {index} */}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[#c28a32]">
                          {faq.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer} {/* FAQ {index} */}
                    </p>

                    {isOpen && (
                      <motion.div
                        className="mt-4 p-4 bg-gradient-to-r from-[#c28a32]/10 to-[#FFD700]/10 rounded-lg border border-[#c28a32]/20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#c28a32]" />
                          <span className="text-white font-medium">
                            Resposta baseada em nossa experiência com mais de 50
                            clientes
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-gray-300 mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <motion.a
              href="http://wa.me/5541991020364"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#c28a32] to-[#FFA500] hover:from-[#FFA500] hover:to-[#c28a32] text-white font-bold py-6 px-12 rounded-lg text-xl transition-all duration-300 relative overflow-hidden group w-full sm:w-auto inline-block text-center"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                AGENDAR CONSULTORIA GRATUITA AGORA
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#c28a32]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Consultoria 100% gratuita
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Sem compromisso
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Resultados em 30 dias
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
