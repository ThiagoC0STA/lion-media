"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md "
    >
      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/lion.png"
              alt="Lion Media Logo"
              width={60}
              height={60}
              className="w-8 h-8 sm:w-16 sm:h-16"
            />
            <div className="flex flex-col -ml-2">
              <span className="text-md text-white">LION</span>
              <span className="text-sm sm:text-base font-extrabold text-white -mt-2">
                MEDIA
              </span>
            </div>
          </motion.div>

          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="#servicos"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Serviços
            </motion.a>
            <motion.a
              href="#sobre"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sobre
            </motion.a>
            <motion.a
              href="#depoimentos"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Depoimentos
            </motion.a>
            <motion.button
              className="bg-[#FF8C00] hover:bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.button>
          </motion.nav>

          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
