/* eslint-disable react/jsx-no-leaked-render */
/* eslint-disable react/jsx-no-bind */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ContactUs from "./ContactUs";

const headerText = {
  pt: {
    services: "Serviços",
    about: "Sobre",
    testimonials: "Depoimentos",
    contactUs: "Fale Conosco",
  },
  en: {
    services: "Services",
    about: "About",
    testimonials: "Testimonials",
    contactUs: "Contact Us",
  },
};

export default function Header({ isEn = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  const openModal = () => setOpenContactModal(true);
  const closeModal = () => setOpenContactModal(false);

  const currentText = isEn ? headerText.en : headerText.pt;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md px-4"
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
              {/* Desktop Links */}
              <motion.a
                href="#servicos"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentText.services}
              </motion.a>
              <motion.a
                href="#sobre"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentText.about}
              </motion.a>
              <motion.a
                href="#depoimentos"
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentText.testimonials}
              </motion.a>
              {isEn ? (
                <motion.button
                  onClick={openModal}
                  className="bg-[#c28a32] hover:bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentText.contactUs}
                </motion.button>
              ) : (
                <motion.a
                  href="http://wa.me/5541991020364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c28a32] hover:bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentText.contactUs}
                </motion.a>
              )}
            </motion.nav>

            <motion.button
              className="md:hidden text-white z-50"
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-16 bg-black z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {/* Mobile Links */}
              <a
                href="#servicos"
                className="text-white text-lg hover:text-[#c28a32] transition-colors"
                onClick={closeMenu}
              >
                {currentText.services}
              </a>
              <a
                href="#sobre"
                className="text-white text-lg hover:text-[#c28a32] transition-colors"
                onClick={closeMenu}
              >
                {currentText.about}
              </a>
              <a
                href="#depoimentos"
                className="text-white text-lg hover:text-[#c28a32] transition-colors"
                onClick={closeMenu}
              >
                {currentText.testimonials}
              </a>
              {isEn ? (
                <motion.button
                  onClick={openModal}
                  className="bg-[#c28a32] hover:bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentText.contactUs}
                </motion.button>
              ) : (
                <a
                  href="http://wa.me/5541991020364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c28a32] hover:bg-[#FFA500] text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  {currentText.contactUs}
                </a>
              )}{" "}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactUs open={openContactModal} onClose={closeModal} />
    </>
  );
}
