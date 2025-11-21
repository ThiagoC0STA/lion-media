'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, TrendingUp, Megaphone, Check } from 'lucide-react';

export default function AboutUs({ isEn = false }) {
  const text = {
    pt: {
      whoWeAreTitle: "Quem somos?",
      whoWeAreBody: "Somos uma agência de marketing digital que revolucionou a forma como empresas escalam seus negócios online. Atuamos em 4 continentes sendo eles América, Europa, Ásia e Oceania, entregando campanhas de alto impacto com foco em resultados reais. Unimos mídia paga, branding e marketing estratégico.",
      missionTitle: "Nossa Missão",
      missionBody: "Transformar pequenas empresas em grandes marcas através de estratégias digitais que geram resultados mensuráveis e crescimento sustentável.",
      partnersTitle: "Parcerias Oficiais",
      partnerGoogle: "Google Partner",
      partnerMeta: "Meta Certified Company",
      features: [
        {
          icon: BarChart3,
          title: "Estratégia baseada em dados reais",
          description: "Analisamos mais de 30 métricas diferentes para otimizar suas campanhas"
        },
        {
          icon: Megaphone,
          title: "Anúncios com alta retenção",
          description: "Design que converte com taxas de engajamento superiores a 60%"
        },
        {
          icon: Users,
          title: "Atendimento 100% personalizado",
          description: "Equipe dedicada exclusivamente ao seu projeto"
        },
        {
          icon: TrendingUp,
          title: "Acompanhamento diário e relatórios semanais",
          description: "Relatórios detalhados e ajustes em tempo real"
        }
      ],
      resultsTitle: "🚀 Resultados que Falam por Si",
      resultsConversionRate: "Aumento médio em conversões",
      resultsCostReduction: "Redução no custo por aquisição"
    },
    en: {
      whoWeAreTitle: "WHO WE ARE?",
      whoWeAreBody: "We’re a global social media agency reshaping how companies scale online. We operate across four continents: America, Europe, Asia, and Oceania, delivering high-impact campaigns built around real results. Our work blends branding, content strategy, and smart funnel architecture to attract the ideal customers to your business.",
      missionTitle: "Our Mission",
      missionBody: "To help every company we partner with reach the highest level in its industry through strategies that deliver measurable results and continuous, sustainable growth.",
      partnersTitle: "Official Partnerships",
      partnerGoogle: "Google Partner",
      partnerMeta: "Meta Certified Company",
      features: [
        {
          icon: Check,
          title: "A strong, active brand on social media",
          description: "We make your brand seen, remembered, and followed every single day."
        },
        {
          icon: Check,
          title: "Ongoing branding improvement and reports",
          description: "Monthly report with results, strategy analysis, and adjustments with your team when needed."
        },
        {
          icon: Check,
          title: "Follow-up on your top competitors",
          description: "We analyze the strategies of the leading players in your industry worldwide to position your brand one step ahead."
        },
        {
          icon: Check,
          title: "Content that creates real connection",
          description: "Posts crafted with attention to every detail to go viral and attract your ideal target audience."
        }
      ],
      resultsTitle: "🚀 Results That Speak for Themselves",
      resultsConversionRate: "Average increase in conversions",
      resultsCostReduction: "Reduction in cost per acquisition"
    }
  };

  const currentText = isEn ? text.en : text.pt;

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
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-white"
              variants={itemVariants}
            >
              {currentText.whoWeAreTitle}
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {currentText.whoWeAreBody}
            </motion.p>

            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">{currentText.missionTitle}</h4>
              <p className="text-gray-300">
                {currentText.missionBody}
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">{currentText.partnersTitle}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#c28a32] rounded-full"></div>
                  <span className="text-white font-medium">{currentText.partnerGoogle}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#c28a32] rounded-full"></div>
                  <span className="text-white font-medium">{currentText.partnerMeta}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {currentText.features.map((feature, index) => {
              const IconComponent = feature.icon;

              return (
                <motion.div 
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  variants={rightItemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center"
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
                {currentText.resultsTitle}
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-[#c28a32]">60%</div>
                  <div className="text-gray-400">{currentText.resultsConversionRate}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#c28a32]">50%</div>
                  <div className="text-gray-400">{currentText.resultsCostReduction}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}