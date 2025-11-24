'use client';

import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { contactInfo } from '@/lib/config';

export default function ReferanslarPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    { id: 1, category: 'yapi-market', title: 'Mağaza İçi', desc: 'Geniş ürün yelpazemiz', emoji: '🏪' },
    { id: 2, category: 'yapi-market', title: 'Yapı Malzemeleri', desc: 'Kaliteli ürünler', emoji: '🏗️' },
    { id: 3, category: 'cilingir', title: 'Kilit Sistemleri', desc: 'Çeşitli kilit modelleri', emoji: '🔐' },
    { id: 4, category: 'cilingir', title: 'Anahtar Kopyalama', desc: 'Profesyonel hizmet', emoji: '🔑' },
    { id: 5, category: 'guvenlik', title: 'Elektronik Kilit', desc: 'Akıllı güvenlik', emoji: '🔢' },
    { id: 6, category: 'guvenlik', title: 'Kamera Sistemi', desc: 'Güvenlik çözümleri', emoji: '📹' },
    { id: 7, category: 'yapi-market', title: 'Elektrik Malzemeleri', desc: 'Geniş seçenek', emoji: '⚡' },
    { id: 8, category: 'cilingir', title: 'Acil Servis', desc: '24/7 hizmet', emoji: '🚨' },
  ];

  const testimonials = [
    {
      name: 'Mehmet Yılmaz',
      role: 'İşletme Sahibi',
      content: 'Acil bir durumda kapımız kilitlenmişti. Gece yarısı aradık ve 20 dakika içinde geldiler. Hem profesyonel hem de çok güler yüzlüydüler.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Ayşe Demir',
      role: 'Ev Hanımı',
      content: 'Yapı market ihtiyaçlarım için sürekli buraya geliyorum. Ürün çeşitliliği çok iyi ve fiyatlar uygun. Kesinlikle tavsiye ederim.',
      rating: 5,
      image: '👩'
    },
    {
      name: 'Ali Kaya',
      role: 'Müteahhit',
      content: 'İnşaatlarda tüm yapı malzemesi ihtiyaçlarımızı buradan karşılıyoruz. Güvenilir, kaliteli ürünler ve hızlı teslimat.',
      rating: 5,
      image: '👷'
    },
    {
      name: 'Zeynep Şahin',
      role: 'Otel Müdürü',
      content: 'Otelimizdeki tüm kilit sistemlerini burada yaptırdık. Elektronik kilit montajından sonra hiç sorun yaşamadık.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Hasan Öztürk',
      role: 'Restoran Sahibi',
      content: 'İşyerimin güvenliği için alarm sistemi ve özel kilitler taktırdım. Çok detaylı bilgi verdiler ve kurulum profesyonelce yapıldı.',
      rating: 5,
      image: '👨‍🍳'
    },
    {
      name: 'Fatma Arslan',
      role: 'Öğretmen',
      content: 'Evimin tüm anahtarlarını burada kopyalattım. Hem hızlı hem de çok kaliteli. Ayrıca boya ve tadilat malzemeleri de aldım.',
      rating: 5,
      image: '👩‍🏫'
    },
  ];

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'yapi-market', label: 'Yapı Market' },
    { id: 'cilingir', label: 'Çilingir' },
    { id: 'guvenlik', label: 'Güvenlik' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 text-white mb-6">Referanslar & Galeri</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Çalışmalarımızdan örnekler ve müşterilerimizin görüşleri
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-8">Galeri</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card group hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-8xl mb-4 text-center group-hover:scale-110 transition-transform">
                  {image.emoji}
                </div>
                <h3 className="font-bold text-lg text-neutral-900 mb-1">{image.title}</h3>
                <p className="text-sm text-neutral-600">{image.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Müşteri Yorumları</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Binlerce mutlu müşterimizden bazılarının görüşleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card group hover:shadow-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-neutral-700 text-sm leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '1000+', label: 'Mutlu Müşteri', icon: '😊' },
                { num: '15+', label: 'Yıl Tecrübe', icon: '🏆' },
                { num: '24/7', label: 'Acil Servis', icon: '⏰' },
                { num: '%100', label: 'Memnuniyet', icon: '✅' },
              ].map((stat, index) => (
                <div key={index} className="card text-center bg-gradient-to-br from-primary-50 to-secondary-50">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{stat.num}</div>
                  <div className="text-sm text-neutral-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 text-white mb-6">Siz de Mutlu Müşterilerimize Katılın!</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Kaliteli hizmet ve profesyonel yaklaşım için hemen iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contactInfo.phone.link} className="btn-secondary">
                Hemen Arayın: {contactInfo.phone.display}
              </a>
              <a href="/iletisim" className="btn-outline bg-white text-primary-700 hover:bg-primary-50 border-white">
                Teklif Al
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
