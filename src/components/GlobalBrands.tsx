'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GlobalBrands() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="border-t border-gray-800 pt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3 
            className="text-center text-2xl sm:text-3xl font-semibold mb-12 text-white"
            variants={itemVariants}
          >
            Confiança de marcas globais:
          </motion.h3>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/mansory.png"
                alt="Mansory"
                width={150}
                height={80}
                className="h-16 w-auto"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/team-seas.png"
                alt="HTEAM SEAS"
                width={150}
                height={80}
                className="h-16 w-auto"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/fyde.png"
                alt="Fyde"
                width={150}
                height={80}
                className="h-16 w-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-400 text-sm">
              Empresas que confiam na Lion Media para escalar seus resultados
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 