'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BarChart3, Palette, Users, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const features = [
    {
      icon: BarChart3,
      title: "Estratégia baseada em dados reais",
      description: "Analisamos mais de 50 métricas para otimizar suas campanhas"
    },
    {
      icon: Palette,
      title: "Criativos com alta retenção",
      description: "Design que converte com taxas de engajamento superiores a 300%"
    },
    {
      icon: Users,
      title: "Atendimento 100% personalizado",
      description: "Equipe dedicada exclusivamente ao seu projeto"
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento diário",
      description: "Relatórios detalhados e ajustes em tempo real"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 sm:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-white"
              variants={itemVariants}
            >
              Quem somos?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Somos uma agência de marketing digital que revolucionou a forma como empresas 
              escalam seus negócios online. Atuamos em 4 continentes sendo eles America, 
              Europa, Asia e Oceania, entregando campanhas de alto impacto com foco em 
              resultados reais. Unimos Mídia paga, branding e marketing estratégico.
            </motion.p>

            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Nossa Missão</h4>
              <p className="text-gray-300">
                Transformar pequenas empresas em grandes marcas através de estratégias 
                digitais que geram resultados mensuráveis e crescimento sustentável.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Parceiros Oficiais</h4>
              <div className="flex items-center justify-start gap-8">
                <motion.div
                  className="bg-white/80 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/google.png"
                    alt="Google Partner"
                    width={120}
                    height={50}
                    className="h-10 w-auto"
                  />
                </motion.div>
                <motion.div
                  className="bg-white/80 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/meta.png"
                    alt="Meta Business Partner"
                    width={120}
                    height={50}
                    className="h-10 w-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  variants={rightItemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-[#c28a32] to-[#FFD700] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-[#c28a32]/10 to-[#FFD700]/10 rounded-lg border border-[#c28a32]/20"
              variants={rightItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">
                🚀 Resultados que Falam por Si
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-[#c28a32]">300%</div>
                  <div className="text-gray-400">Aumento médio em conversões</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c28a32]">50%</div>
                  <div className="text-gray-400">Redução no custo por aquisição</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 