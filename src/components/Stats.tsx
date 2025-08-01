'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Users, DollarSign, Globe, Star } from 'lucide-react';

export default function Stats() {
  const [counts, setCounts] = useState({
    clients: 0,
    revenue: 0,
    countries: 0,
    satisfaction: 0
  });

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Clientes Atendidos",
      icon: Users
    },
    {
      number: 50,
      suffix: "M",
      label: "Reais em Vendas Geradas",
      icon: DollarSign
    },
    {
      number: 4,
      suffix: "",
      label: "Continentes",
      icon: Globe
    },
    {
      number: 98,
      suffix: "%",
      label: "Taxa de Satisfação",
      icon: Star
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({
        clients: 500,
        revenue: 50,
        countries: 4,
        satisfaction: 98
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
            Números que Falam por Si
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Resultados reais que transformaram centenas de empresas em todo o mundo
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
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
                  className="w-20 h-20 bg-gradient-to-br from-[#FF8C00] to-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4"
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
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                
                <p className="text-gray-400 text-sm lg:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-[#FF8C00]/10 to-[#FFD700]/10 p-8 rounded-xl border border-[#FF8C00]/20">
            <h4 className="text-2xl font-bold text-white mb-4">
              🚀 Crescimento Médio dos Nossos Clientes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-3xl font-bold text-[#FF8C00]">300%</div>
                <div className="text-gray-400">Aumento em vendas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF8C00]">60%</div>
                <div className="text-gray-400">Redução no custo por aquisição</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF8C00]">800%</div>
                <div className="text-gray-400">ROI médio</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 