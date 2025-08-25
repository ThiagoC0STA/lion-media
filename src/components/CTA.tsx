"use client";

import { motion } from "framer-motion";
import { Target, DollarSign, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Urgency Banner */}
          <motion.div
            className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-6 rounded-lg font-bold text-lg"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⚡ ÚLTIMAS VAGAS DISPONÍVEIS - CONSULTORIA GRATUITA LIMITADA
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pare de{" "}
            <motion.span
              className="text-red-500"
              animate={{
                textShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                  "0 0 40px rgba(239, 68, 68, 0.8)",
                  "0 0 20px rgba(239, 68, 68, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              perder dinheiro
            </motion.span>{" "}
            com marketing que não funciona
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Junte-se aos mais de 500 empresários que já transformaram seus
            negócios com a Lion Media. Agende sua consultoria gratuita HOJE e
            descubra como multiplicar suas vendas em 30 dias.
          </motion.p>

          {/* Benefits */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-center mb-3">
                <Target className="w-8 h-8 text-[#c28a32]" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Estratégia Personalizada
              </h3>
              <p className="text-gray-400 text-sm">
                Análise completa do seu negócio e plano de ação customizado
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-center mb-3">
                <DollarSign className="w-8 h-8 text-[#c28a32]" />
              </div>
              <h3 className="text-white font-semibold mb-2">ROI Garantido</h3>
              <p className="text-gray-400 text-sm">
                Resultados mensuráveis em 30 dias ou seu dinheiro de volta
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-center mb-3">
                <Clock className="w-8 h-8 text-[#c28a32]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-gray-400 text-sm">
                Equipe dedicada para acompanhar seus resultados
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
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
