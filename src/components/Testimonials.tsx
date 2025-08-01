"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Depoimento dos nossos clientes:
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre os resultados que
            alcançaram com a Lion Media. Histórias reais de transformação e
            crescimento.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex gap-6 sm:gap-10 lg:gap-16">
            {[1, 2, 3].map((phone, index) => (
              <motion.div
                key={index}
                className="w-24 h-48 sm:w-32 sm:h-64 lg:w-40 lg:h-80 xl:w-48 xl:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 flex items-center justify-center relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255, 140, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#c28a32]/20 to-[#FFD700]/20 opacity-50"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <div className="relative z-10 text-gray-400 text-lg sm:text-xl lg:text-2xl">
                  📱
                </div>
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Você pode ter esses resultados também, basta agendar uma consulta
            sem compromisso abaixo
          </p>

          <motion.button
            className="btn-primary bg-gradient-to-r from-[#c28a32] to-[#FFA500] hover:from-[#FFA500] hover:to-[#c28a32] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 140, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Agendar Consulta Gratuita</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#c28a32]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
