"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSocial() {
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
        {/* <motion.div
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
        /> */}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-6 lg:space-y-8"
            variants={itemVariants}
          >
            {/* Main Headline */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-6 lg:mt-10 text-center lg:text-left"
              variants={itemVariants}
            >
              TURN VIEWS INTO{" "}
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
                NEW IDEAL COSTUMERS
              </motion.span>{" "}
              {/* A terceira parte da frase em português foi removida para usar apenas a frase em inglês. */}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl text-center lg:text-left"
              variants={itemVariants}
            >
              WE CAN MAKE YOUR SOCIAL MEDIA A MONEY MACHINE
            </motion.p>

            {/* Stats */}
            {/* <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 pt-4"
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
            </motion.div> */}

            {/* CTA Button */}
            <motion.a
              href="http://wa.me/5541991020364"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-[#c28a32] hover:bg-[#FFA500] text-white font-semibold py-3 px-6 lg:py-4 lg:px-8 rounded-lg text-base lg:text-lg transition-all duration-300 relative overflow-hidden group inline-block text-center w-full sm:w-auto"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(194, 138, 50, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">CONTACT US</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FFA500] to-[#c28a32]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Right Content - Imagem Principal */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-lg overflow-hidden"
              animate={floatingAnimation}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/socialmedia/mockup_metrics.png"
                alt="Lion Media - Resultados e Sucesso"
                width={500}
                height={400}
                className="w-full h-full object-scale-down rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#c28a32]/10 to-[#FFD700]/10 opacity-30" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
