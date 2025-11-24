'use client';

import { FaCheck, FaClock, FaUserShield, FaAward, FaHandshake, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaClock,
      title: '24/7 Hizmet',
      description: 'Günün her saati acil çilingir hizmeti ile yanınızdayız. Kapınız kilitlendi mi? Hemen arayın!'
    },
    {
      icon: FaUserShield,
      title: 'Profesyonel Ekip',
      description: 'Uzman ve deneyimli çilingir ustalarımız ile güvenli ve hızlı çözümler sunuyoruz.'
    },
    {
      icon: FaAward,
      title: 'Kaliteli Ürünler',
      description: 'Yapı marketimizde sadece kaliteli ve güvenilir markaların ürünlerini bulabilirsiniz.'
    },
    {
      icon: FaHandshake,
      title: 'Güvenilir Hizmet',
      description: '15+ yıldır Konyaaltı\'nda hizmet veren güvenilir işletme. Binlerce mutlu müşteri.'
    },
    {
      icon: FaTools,
      title: 'Uygun Fiyat',
      description: 'Rekabetçi fiyatlarla kaliteli hizmet. Fiyat garantisi ve şeffaf ücretlendirme.'
    },
    {
      icon: FaCheck,
      title: 'Hızlı Çözüm',
      description: 'Acil durumlarda ortalama 30 dakika içinde yerinde hizmet. Hızlı ve etkili çözümler.'
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 mb-4 sm:mb-6">
              Neden <span className="text-primary-600">Akdeniz Yapı Market</span> & Çilingir?
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8">
              Konyaaltı&apos;nın en güvenilir yapı marketi ve çilingir hizmeti. Müşteri memnuniyeti odaklı yaklaşımımız ve 
              profesyonel ekibimizle her zaman yanınızdayız.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {reasons.slice(0, 3).map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-3 sm:gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <reason.icon className="text-lg sm:text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-neutral-900 mb-1">{reason.title}</h3>
                    <p className="text-neutral-600 text-xs sm:text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card text-center group hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 p-5 sm:p-6"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="text-xl sm:text-2xl text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-2 text-base sm:text-lg">{reason.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
