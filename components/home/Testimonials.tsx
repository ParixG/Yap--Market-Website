'use client';

import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mehmet Yılmaz',
      role: 'İşletme Sahibi',
      content: 'Acil bir durumda kapımız kilitlenmişti. Gece yarısı aradık ve 20 dakika içinde geldiler. Hem profesyonel hem de çok güler yüzlüydüler. Teşekkürler Akdeniz Çilingir!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Ayşe Demir',
      role: 'Ev Hanımı',
      content: 'Yapı market ihtiyaçlarım için sürekli buraya geliyorum. Ürün çeşitliliği çok iyi ve fiyatlar uygun. Çalışanlar çok yardımcı oluyor. Kesinlikle tavsiye ederim.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    },
    {
      name: 'Ali Kaya',
      role: 'Müteahhit',
      content: 'İnşaatlarda tüm yapı malzemesi ihtiyaçlarımızı buradan karşılıyoruz. Güvenilir, kaliteli ürünler ve hızlı teslimat. 15 yıldır müşterisiyim.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      name: 'Zeynep Şahin',
      role: 'Otel Müdürü',
      content: 'Otelimizdeki tüm kilit sistemlerini burada yaptırdık. Elektronik kilit montajından sonra hiç sorun yaşamadık. Hem ürün hem hizmet kalitesi mükemmel.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Hasan Öztürk',
      role: 'Restoran Sahibi',
      content: 'İşyerimin güvenliği için alarm sistemi ve özel kilitler taktırdım. Çok detaylı bilgi verdiler ve kurulum çok profesyonelce yapıldı. Çok memnunum.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      name: 'Fatma Arslan',
      role: 'Öğretmen',
      content: 'Evimin tüm anahtarlarını burada kopyalattım. Hem hızlı hem de çok kaliteli. Ayrıca boya ve tadilat malzemeleri de aldım, çok memnun kaldım.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
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
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
              Binlerce mutlu müşterimizden bazılarının görüşleri
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card group hover:shadow-2xl p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    sizes="(max-width: 640px) 56px, 64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                ))}
              </div>

              <div className="relative">
                <FaQuoteLeft className="absolute -top-2 -left-2 text-2xl sm:text-3xl text-primary-200 opacity-50" />
                <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed pl-5 sm:pl-6">
                  {testimonial.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12 bg-white rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 shadow-lg">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">1000+</div>
              <div className="text-xs sm:text-sm text-neutral-600">Mutlu Müşteri</div>
            </div>
            <div className="w-full h-px sm:w-px sm:h-16 bg-neutral-200"></div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-secondary-500 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-neutral-600">Yıl Tecrübe</div>
            </div>
            <div className="w-full h-px sm:w-px sm:h-16 bg-neutral-200"></div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-neutral-600">Acil Servis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
