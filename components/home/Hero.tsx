'use client';

import Link from 'next/link';
import { FaPhone, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { contactInfo } from '@/lib/config';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
              {contactInfo.business.name} & <br className="hidden sm:block" />
              <span className="text-secondary-400">{contactInfo.business.tagline.replace('Konyaaltı ', '')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-2 sm:mb-4 font-medium">
              Konyaaltı - Antalya
            </p>
            <p className="text-base sm:text-lg md:text-xl text-primary-200 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              Anahtar, kilit, yapı malzemeleri ve <span className="text-secondary-400 font-semibold">24/7 çilingir hizmeti</span> ile yanınızdayız
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-4">
              <a 
                href={contactInfo.phone.link} 
                className="bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-white font-bold py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-secondary-500/50 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 text-base sm:text-lg w-full sm:w-auto"
              >
                <FaPhone className="text-lg sm:text-xl" />
                Hemen Arayın
              </a>
              <Link 
                href="/iletisim" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 active:bg-white/30 text-white font-bold py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 border-2 border-white/30 flex items-center justify-center gap-3 text-base sm:text-lg w-full sm:w-auto"
              >
                <FaFileAlt className="text-lg sm:text-xl" />
                Teklif Al
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-secondary-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-primary-100 text-xs sm:text-sm font-medium">Acil Servis</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-secondary-400 mb-1 sm:mb-2">15+</div>
                <div className="text-primary-100 text-xs sm:text-sm font-medium">Yıl Tecrübe</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-secondary-400 mb-1 sm:mb-2">1000+</div>
                <div className="text-primary-100 text-xs sm:text-sm font-medium">Mutlu Müşteri</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-secondary-400 mb-1 sm:mb-2">%100</div>
                <div className="text-primary-100 text-xs sm:text-sm font-medium">Güven</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white/70 rounded-full mt-2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
