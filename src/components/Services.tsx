'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Target, Users, Handshake, Lightbulb } from 'lucide-react';

export default function Services({ isEn = false }) {
  const text = {
    pt: {
      mainTitle: "Nossos serviços são para empresas que:",
      subTitle: "Identificamos os desafios mais comuns que impedem o crescimento do seu negócio e oferecemos soluções personalizadas para cada situação.",
      ctaButton: "Agendar Consultoria Gratuita",
      ctaDisclaimer: "⚡ Consultoria gratuita - Sem compromisso",
      services: [
        {
          icon: DollarSign,
          title: "Estão cansadas de gastar dinheiro com marketing e não ver resultado algum",
          description: "Transformamos desperdício em investimento com estratégias que geram ROI real"
        },
        {
          icon: TrendingUp,
          title: "Querem aumentar suas vendas e ver resultados reais no marketing",
          description: "Campanhas que convertem visitantes em clientes pagantes"
        },
        {
          icon: Target,
          title: "Precisam de uma estratégia clara e bem definida para seus negócios",
          description: "Planejamento estratégico que alinha marketing com objetivos de negócio"
        },
        {
          icon: Users,
          title: "Desejam que o marketing seja direcionado para o cliente que tem desejo de verdade pelo seu produto ou serviço",
          description: "Segmentação avançada que atinge o público certo no momento certo"
        },
        {
          icon: Handshake,
          title: "Buscam resultados constantes mensais e escalar suas vendas mesmo fora da temporada usando tráfego pago",
          description: "Crescimento sustentável e consistente com campanhas otimizadas para escala"
        },
        {
          icon: Lightbulb,
          title: "Desejam um atendimento personalizado focado 100% em sua dificuldade no marketing?",
          description: "Suporte dedicado que entende suas necessidades específicas"
        }
      ],
    },
    en: {
      mainTitle: "Our services are for businesses that",
      subTitle: "We identify the most common obstacles holding back your growth on social media and deliver tailored solutions for each situation.",
      ctaButton: "Schedule Free Consultation",
      ctaDisclaimer: "⚡ Free consultation - No commitment",
      services: [
        {
          icon: DollarSign,
          title: "Are tired of posting and spending on social media with no return",
          description: "We turn wasted effort into real results through strategies that drive engagement and real growth."
        },
        {
          icon: TrendingUp,
          title: "Want to grow on Instagram and Facebook and attract more clients every day",
          description: "Content and campaigns designed to bring in qualified followers and ready-to-buy customers."
        },
        {
          icon: Target,
          title: "Need a clear and practical social media strategy",
          description: "Strategic planning focused on results and aligned with your business goals."
        },
        // {
        //   icon: Users,
        //   title: "Need a clear and practical social media strategy",
        //   description: "Strategic planning focused on results and aligned with your business goals."
        // },
        // {
        //   icon: Handshake,
        //   title: "Want to grow on Instagram and Facebook and attract more clients every day",
        //   description: "Content and campaigns designed to bring in qualified followers and ready-to-buy customers."
        // },
        // {
        //   icon: Lightbulb,
        //   title: "Are tired of posting and spending on social media with no return",
        //   description: "We turn wasted effort into real results through strategies that drive engagement and real growth."
        // }
      ],
    }
  };

  const currentText = isEn ? text.en : text.pt;
  const currentServices = currentText.services.map((service, index) => ({
    ...service,
    icon: text.pt.services[index]?.icon,
  }));

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="servicos" className="py-12 px-4 sm:px-8 lg:px-16 bg-black">
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {currentServices.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div 
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-[#c28a32]/50 transition-all duration-300 h-full">
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#c28a32] to-[#FFD700] rounded-full flex items-center justify-center">
                     {IconComponent != null && <IconComponent className="w-8 h-8 text-white" />}
                    </div>
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-white mb-4 text-center">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm text-center">
                    {service.description}
                  </p>

                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#c28a32]/10 to-[#FFD700]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

{
  !isEn && (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a 
            href="http://wa.me/5541991020364"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-gradient-to-r from-[#c28a32] to-[#FFA500] hover:from-[#FFA500] hover:to-[#c28a32] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 relative overflow-hidden group inline-block text-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 140, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{currentText.ctaButton}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#c28a32]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <p className="text-gray-400 text-sm mt-4">
            {currentText.ctaDisclaimer}
          </p>
        </motion.div>
  )
}
      </div>
    </section>
  );
}