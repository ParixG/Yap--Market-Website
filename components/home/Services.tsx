'use client';

import Link from 'next/link';
import { FaHammer, FaKey, FaClock, FaShieldAlt, FaTools, FaDoorOpen, FaCopy, FaMicrochip } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: FaHammer,
      title: 'Yapı Market',
      description: 'Yapı malzemeleri, inşaat ekipmanları ve hırdavat ürünlerinde geniş ürün yelpazesi',
      features: ['Boya & İnşaat Malzemeleri', 'El Aletleri', 'Elektrik Malzemeleri', 'Su Tesisatı'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: FaKey,
      title: 'Çilingir & Anahtar',
      description: 'Profesyonel anahtar ve kilit hizmetleri, uzman kadro ile güvenilir çözümler',
      features: ['Anahtar Kopyalama', 'Kilit Değiştirme', 'Anahtarsız Giriş', 'Oto Anahtar'],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: FaClock,
      title: 'Acil Servis (24/7)',
      description: 'Günün her saati acil kapı açma ve kilit servisi, hızlı ve güvenilir destek',
      features: ['24 Saat Hizmet', 'Hızlı Müdahale', 'Kapı Açma', 'Acil Kilit Tamiri'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FaShieldAlt,
      title: 'Güvenlik Çözümleri',
      description: 'Ev ve işyeri için modern güvenlik sistemleri ve profesyonel kurulum',
      features: ['Elektronik Kilit', 'Güvenlik Kilitleri', 'Kamera Sistemleri', 'Alarm Sistemleri'],
      color: 'from-neutral-600 to-neutral-700'
    },
  ];

  const quickServices = [
    { icon: FaDoorOpen, text: 'Kapı Açma' },
    { icon: FaCopy, text: 'Anahtar Kopyalama' },
    { icon: FaTools, text: 'Kilit Tamiri' },
    { icon: FaMicrochip, text: 'Elektronik Kilit' },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-3 sm:mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
              Yapı malzemelerinden güvenlik çözümlerine kadar ihtiyacınız olan her şey tek çatı altında
            </p>
          </motion.div>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="card h-full hover:scale-105 transition-transform duration-300">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-2xl sm:text-3xl text-white" />
                </div>
                <h3 className="heading-3 text-lg sm:text-xl mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm text-neutral-700">
                      <span className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Hızlı Hizmetler</h3>
            <p className="text-primary-100 text-sm sm:text-base">En çok tercih edilen hizmetlerimiz</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {quickServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 hover:bg-white/20 transition-colors active:bg-white/30">
                  <service.icon className="text-2xl sm:text-3xl text-secondary-400" />
                </div>
                <p className="font-semibold text-sm sm:text-base">{service.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Link href="/hizmetler" className="btn-secondary inline-block min-h-[44px] py-3 px-6">
              Tüm Hizmetleri Gör
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
