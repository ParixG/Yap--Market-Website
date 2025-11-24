'use client';

import { motion } from 'framer-motion';
import { FaBox, FaLock, FaPaintRoller, FaBolt, FaWrench, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';
import { contactInfo } from '@/lib/config';

export default function UrunlerPage() {
  const categories = [
    {
      name: 'Yapı Malzemeleri',
      icon: FaPaintRoller,
      color: 'from-blue-500 to-blue-600',
      products: [
        { name: 'İç Cephe Boyası', price: '₺250-₺850', image: '🎨' },
        { name: 'Dış Cephe Boyası', price: '₺350-₺1.200', image: '🏠' },
        { name: 'Çimento & Harç', price: '₺45-₺120', image: '🏗️' },
        { name: 'Seramik & Fayans Yapıştırıcı', price: '₺75-₺180', image: '📦' },
      ]
    },
    {
      name: 'Kilit Sistemleri',
      icon: FaLock,
      color: 'from-orange-500 to-orange-600',
      products: [
        { name: 'Kale Çelik Kapı Kilidi', price: '₺450-₺1.800', image: '🔐' },
        { name: 'Yale Silindir', price: '₺180-₺650', image: '🔑' },
        { name: 'Kale Barel', price: '₺120-₺450', image: '🗝️' },
        { name: 'Elektronik Şifreli Kilit', price: '₺1.500-₺5.000', image: '🔢' },
      ]
    },
    {
      name: 'Elektrik Malzemeleri',
      icon: FaBolt,
      color: 'from-yellow-500 to-yellow-600',
      products: [
        { name: 'NYA Kablo (100m)', price: '₺350-₺750', image: '⚡' },
        { name: 'Priz & Anahtar Takımı', price: '₺25-₺85', image: '🔌' },
        { name: 'Sigorta Kutusu', price: '₺180-₺450', image: '📊' },
        { name: 'LED Ampul Seti', price: '₺35-₺120', image: '💡' },
      ]
    },
    {
      name: 'Su Tesisatı',
      icon: FaWrench,
      color: 'from-cyan-500 to-cyan-600',
      products: [
        { name: 'PPR Boru & Ek Parça', price: '₺15-₺85/m', image: '🚰' },
        { name: 'Musluk Bataryası', price: '₺250-₺1.200', image: '🚿' },
        { name: 'Lavabo & Eviye', price: '₺450-₺2.500', image: '🪥' },
        { name: 'WC & Rezervuar', price: '₺850-₺3.500', image: '🚽' },
      ]
    },
    {
      name: 'Güvenlik Ekipmanları',
      icon: FaShieldAlt,
      color: 'from-red-500 to-red-600',
      products: [
        { name: 'IP Güvenlik Kamerası', price: '₺850-₺3.500', image: '📹' },
        { name: 'Alarm Sistemi', price: '₺1.200-₺5.000', image: '🚨' },
        { name: 'Akıllı Kapı Zili', price: '₺650-₺2.200', image: '🔔' },
        { name: 'Yangın Alarm Sistemi', price: '₺1.500-₺6.000', image: '🔥' },
      ]
    },
    {
      name: 'El Aletleri & Hırdavat',
      icon: FaBox,
      color: 'from-gray-500 to-gray-600',
      products: [
        { name: 'Vidalama Seti', price: '₺85-₺450', image: '🔧' },
        { name: 'Çekiç & Pense Seti', price: '₺120-₺550', image: '🔨' },
        { name: 'Metre & Tesviye', price: '₺45-₺250', image: '📏' },
        { name: 'El Testeresi', price: '₺65-₺350', image: '🪚' },
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-1 text-white mb-6">Ürünler & Katalog</h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Yapı malzemelerinden kilit sistemlerine, elektrik malzemelerinden güvenlik ekipmanlarına kadar 
              ihtiyacınız olan tüm ürünler mağazamızda!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="text-3xl text-white" />
                  </div>
                  <h2 className="heading-2 text-3xl">{category.name}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.products.map((product, idx) => (
                    <div key={idx} className="card group hover:scale-105 transition-transform duration-300">
                      <div className="text-6xl mb-4 text-center">{product.image}</div>
                      <h3 className="font-bold text-lg text-neutral-900 mb-2">{product.name}</h3>
                      <p className="text-primary-600 font-bold text-xl mb-4">{product.price}</p>
                      <a href={contactInfo.phone.link} className="btn-primary w-full text-center block text-sm py-2">
                        Fiyat Bilgisi Al
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="heading-2 text-white mb-6">Aradığınız Ürünü Bulamadınız mı?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Mağazamızda binlerce ürün bulunmaktadır. Aradığınız ürün için bizi arayın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contactInfo.phone.link} className="btn-secondary">
                Hemen Arayın: {contactInfo.phone.display}
              </a>
              <Link href="/iletisim" className="btn-outline bg-white text-primary-700 hover:bg-primary-50 border-white">
                Mağazayı Ziyaret Edin
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
