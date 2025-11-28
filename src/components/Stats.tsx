'use client';

import { motion } from "framer-motion";
import { Users, DollarSign, Globe, Star } from "lucide-react";

export default function Stats({ isEn = false }) {
  const text = {
    pt: {
      mainTitle: "Números que Falam por Si",
      subTitle: "Resultados reais que transformaram centenas de empresas em todo o mundo",
      stats: [
        {
          number: 50,
          suffix: "+",
          label: "Clientes Satisfeitos",
          icon: Users,
        },
        {
          number: 38,
          suffix: "%",
          label: "Aumento em Vendas",
          icon: DollarSign,
        },
        {
          number: 4,
          suffix: "",
          label: "Continentes",
          icon: Globe,
        },
        {
          number: 98,
          suffix: "%",
          label: "Taxa de Satisfação",
          icon: Star,
        },
      ],
    },
    en: {
      mainTitle: "Numbers that speak for itself",
      subTitle: "Real results that boost digital presence and sales for brands around the world.",
      stats: [
        {
          number: 50,
          suffix: "+",
          label: "Brands Served",
          icon: Users,
        },
        {
          number: 38,
          suffix: "%",
          label: "Average Growth on Social Media",
          icon: DollarSign,
        },
        {
          number: 4,
          suffix: "",
          label: "Continents with Active Clients",
          icon: Globe,
        },
        {
          number: 98,
          suffix: "%",
          label: "Satisfaction Rate",
          icon: Star,
        },
      ],
    },
  };

  const currentText = isEn ? text.en : text.pt;
  const currentStats = currentText.stats;

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            {currentText.mainTitle}
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {currentText.subTitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {currentStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[#c28a32] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  className="text-4xl lg:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                  }}
                >
                  {stat.number}
                  {stat.suffix}
                </motion.div>

                <p className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}