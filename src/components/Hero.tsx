"use client";

import { motion } from "framer-motion";

export default function Hero() {
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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#c28a32]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="flex-1 space-y-8" variants={itemVariants}>
            {/* Main Headline */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight"
              variants={itemVariants}
            >
              Transformando cliques em{" "}
              <motion.span
                className="text-[#c28a32]"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(194, 138, 50, 0.3)",
                    "0 0 20px rgba(194, 138, 50, 0.5)",
                    "0 0 10px rgba(194, 138, 50, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                clientes fiéis
              </motion.span>{" "}
              com publicidade estratégica
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-2xl"
              variants={itemVariants}
            >
              Tráfego pago do Facebook e Google ADS e Estratégia de Marketing
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 pt-4"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-[#c28a32]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  50+
                </motion.div>
                <div className="text-gray-400 text-sm">Clientes</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-[#c28a32]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  4
                </motion.div>
                <div className="text-gray-400 text-sm">Continentes</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-[#c28a32]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-400 text-sm">Suporte</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="http://wa.me/5541991020364"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#c28a32] hover:bg-[#FFA500] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 relative overflow-hidden group inline-block text-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(194, 138, 50, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Fale com a nossa equipe</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FFA500] to-[#c28a32]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Right Content - Laptop */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="w-full max-w-md lg:max-w-lg h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center relative overflow-hidden"
              animate={floatingAnimation}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c28a32]/20 to-[#FFD700]/20 opacity-50" />
              <div className="relative z-10 text-gray-400 text-lg font-semibold">
                Dashboard de Resultados
              </div>
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
