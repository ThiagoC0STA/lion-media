"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurResults() {
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
      repeat: Number.POSITIVE_INFINITY,
    },
  };

  const phones = [
    { src: "/socialmedia/OUR RESULTS 01.png", alt: "Result 01" },
    { src: "/socialmedia/OUR RESULTS 02.png", alt: "Result 02" },
    { src: "/socialmedia/OUR RESULTS 03.png", alt: "Result 03" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-16 bg-black">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h3
            className="text-3xl sm:text-4xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            Our Results
          </motion.h3>

          {/* Phone Mockups */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {phones.map((phone, index) => (
              <motion.div
                key={index}
                className="flex justify-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full max-w-[280px] aspect-[9/19] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={phone.src || "/placeholder.svg"}
                    alt={phone.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-12 rounded-lg text-lg transition-all duration-300 relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">BUTTON</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
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
