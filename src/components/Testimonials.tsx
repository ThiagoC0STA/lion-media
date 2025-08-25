"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dominique Columbus",
      company: "Ator de Hollywood & Produtor",
      text: "A Lion Media cuidou do meu marketing como se fosse deles. Em pouco tempo, meu nome começou a aparecer para o público certo e os resultados foram incríveis. Recomendo de olhos fechados.",
      rating: 5,
      result: "Resultados Incríveis",
      image: "/depoimentos/DOMINIQUE COLUMBUS.webp",
    },
    {
      name: "Mercedes-Benz Mansory",
      company: "Luxury Auto Dealer",
      text: "Trabalhar com a Lion Media foi um divisor de águas. As campanhas que eles criaram trouxeram clientes realmente interessados e aumentaram nossas vendas de forma visível. Uma parceria que vale cada centavo.",
      rating: 5,
      result: "Divisor de Águas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Mark Rober",
      company: "Co-Fundador Team Seas",
      text: "A equipe entendeu nossa causa e transformou isso em campanhas que emocionaram e engajaram milhares de pessoas. Ver nosso alcance crescer e mais gente apoiando foi algo especial.",
      rating: 5,
      result: "Milhares Engajados",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ethan Williams",
      company: "Empreendedor & Investidor",
      text: "Antes da Lion Media, eu gastava com anúncios sem ver retorno. Eles entraram, ajustaram tudo e hoje recebo contatos todos os dias de clientes qualificados. Estou mais do que satisfeito.",
      rating: 5,
      result: "Clientes Qualificados",
      image: "/depoimentos/Ethan Williams.jpeg",
    },
    {
      name: "Callum",
      company: "Mastery Motiv - Empreendedor & Criador de Conteúdo Digital",
      text: "Eu precisava alcançar mais público para meus produtos e a Lion Media fez isso possível. Atingimos mais de 100 milhões de views em um curto período de tempo, um resultado muito acima do esperado. Fechei novas parcerias e sinto que minha marca está cada vez mais forte.",
      rating: 5,
      result: "100M+ Views",
      image: "/depoimentos/Callum.png",
    },
  ];

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

  return (
    <section
      id="depoimentos"
      className="py-20 px-4 sm:px-8 lg:px-16 bg-black relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
            Depoimento dos nossos clientes:
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre os resultados que
            alcançaram com a Lion Media. Histórias reais de transformação e
            crescimento.
          </p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          className=" mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700/50 h-[420px] flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#c28a32]/30 transition-all duration-300"
                >
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c28a32]/5 to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Testimonial Text */}
                  <div className="mb-6 relative z-10 flex-1 flex items-center">
                    <p className="text-gray-200 text-sm leading-relaxed max-w-sm font-medium">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="border-t border-gray-600/50 pt-6 w-full relative z-10">
                    <div className="flex items-center justify-start gap-4 mb-4">
                      <div className="relative w-12 h-12">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c28a32]/30 flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-start">
                        <h4 className="text-white font-bold text-lg mb-0">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#c28a32]/10 to-[#FFD700]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-[#c28a32] !bg-gray-800 !w-12 !h-12 !rounded-full !flex !items-center !justify-center hover:!bg-[#c28a32] hover:!text-white transition-all duration-300 !left-4"></div>
          <div className="swiper-button-next !text-[#c28a32] !bg-gray-800 !w-12 !h-12 !rounded-full !flex !items-center !justify-center hover:!bg-[#c28a32] hover:!text-white transition-all duration-300 !right-4"></div>

          {/* Custom Pagination */}
          <div className="swiper-pagination !bottom-0 !mt-8"></div>
        </motion.div>

        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Você pode ter esses resultados também, basta agendar uma consulta
            sem compromisso abaixo
          </p>

          <motion.a
            href="http://wa.me/5541991020364"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-gradient-to-r from-[#c28a32] to-[#FFA500] hover:from-[#FFA500] hover:to-[#c28a32] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 relative overflow-hidden group inline-block text-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(194, 138, 50, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Agendar Consulta Gratuita</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#c28a32]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 80px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px;
          font-weight: bold;
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: #c28a32;
          background: rgba(31, 41, 55, 0.95);
          border: 2px solid #c28a32;
          backdrop-filter: blur(15px);
          z-index: 10;
          box-shadow: 0 8px 32px rgba(194, 138, 50, 0.2);
          transition: all 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #c28a32 !important;
          color: white !important;
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(194, 138, 50, 0.4);
        }

        .swiper-pagination-bullet {
          background: #6b7280;
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #c28a32;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(194, 138, 50, 0.5);
        }

        .swiper-slide {
          height: auto;
        }



        @media (max-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
            opacity: 0;
          }

          .testimonials-swiper {
            padding-bottom: 60px;
          }
        }
      `}</style>
    </section>
  );
}
