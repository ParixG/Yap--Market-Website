'use client';

import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { contactInfo } from '@/lib/config';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              Acil Bir Durumunuz mu Var?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-3 sm:mb-4">
              24/7 Hizmet ile Yanınızdayız
            </p>
            <p className="text-base sm:text-lg text-primary-200 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Kapınız kilitlendi mi? Anahtar mı kaybettiniz? Kilit mi değiştireceksiniz? 
              Hemen arayın, profesyonel ekibimiz anında yardıma gelsin!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-12 sm:mb-16">
              <a 
                href={contactInfo.phone.link} 
                className="bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-secondary-500/50 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 text-base sm:text-lg min-h-[44px]"
              >
                <FaPhone className="text-xl sm:text-2xl" />
                <div className="text-left">
                  <div className="text-xs text-secondary-100">Hemen Arayın</div>
                  <div className="text-lg sm:text-xl font-bold">{contactInfo.phone.display}</div>
                </div>
              </a>

              <a 
                href={contactInfo.whatsapp.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 text-base sm:text-lg min-h-[44px]"
              >
                <FaWhatsapp className="text-xl sm:text-2xl" />
                <div className="text-left">
                  <div className="text-xs text-green-100">WhatsApp&apos;tan Yazın</div>
                  <div className="text-base sm:text-lg font-bold">Mesaj Gönder</div>
                </div>
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-white/20"
              >
                <FaMapMarkerAlt className="text-3xl sm:text-4xl text-secondary-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Konum</h3>
                <p className="text-primary-100 text-xs sm:text-sm">
                  {contactInfo.address.line1}<br />
                  {contactInfo.address.line2}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-white/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-secondary-400 mb-3 sm:mb-4">30 dk</div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Hızlı Müdahale</h3>
                <p className="text-primary-100 text-xs sm:text-sm">
                  Acil durumlarda ortalama<br />
                  30 dakika içinde yerindeyiz
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-5 sm:p-6 border border-white/20"
              >
                <div className="text-3xl sm:text-4xl font-bold text-secondary-400 mb-3 sm:mb-4">%100</div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">Müşteri Memnuniyeti</h3>
                <p className="text-primary-100 text-xs sm:text-sm">
                  Binlerce mutlu müşteri<br />
                  ile çalışmanın gururunu yaşıyoruz
                </p>
              </motion.div>
            </div>

            <div className="mt-8 sm:mt-12">
              <Link 
                href="/iletisim" 
                className="inline-block bg-white text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-xl text-sm sm:text-base min-h-[44px]"
              >
                Teklif Al veya Randevu Oluştur
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
