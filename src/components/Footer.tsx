'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-8 lg:px-16 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#c28a32] to-[#FFD700] rounded-full flex items-center justify-center text-white font-bold">
                L
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">LION MEDIA</h3>
                <p className="text-gray-400 text-sm">Transformando cliques em resultados</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Especialistas em marketing digital que transformam pequenas empresas em grandes marcas. 
              Resultados comprovados em 4 continentes.
            </p>
            
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#c28a32] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#c28a32] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#c28a32] transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Google Ads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook Ads</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">📧 contato@lionmedia.com</li>
              <li className="text-gray-400">📱 +55 (11) 99999-9999</li>
              <li className="text-gray-400">📍 São Paulo, SP</li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2025. Desenvolvido por Lion Media Digital. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 