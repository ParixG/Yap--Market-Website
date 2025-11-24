'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import { contactInfo } from '@/lib/config';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Form gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

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
            <h1 className="heading-1 text-white mb-6">İletişim</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Size yardımcı olmaktan mutluluk duyarız. İletişim bilgilerimiz aşağıdadır.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-2 mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-6">
                <div className="card flex gap-4 items-start hover:shadow-2xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">Telefon</h3>
                    <a href={contactInfo.phone.link} className="text-primary-600 hover:text-primary-700 font-semibold text-xl">
                      {contactInfo.phone.display}
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">24/7 Acil Servis</p>
                  </div>
                </div>

                <div className="card flex gap-4 items-start hover:shadow-2xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">WhatsApp</h3>
                    <a 
                      href={contactInfo.whatsapp.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-semibold text-xl"
                    >
                      Mesaj Gönder
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">Hızlı İletişim</p>
                  </div>
                </div>

                <div className="card flex gap-4 items-start hover:shadow-2xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">E-posta</h3>
                    <a href={contactInfo.email.link} className="text-secondary-600 hover:text-secondary-700 font-semibold">
                      {contactInfo.email.address}
                    </a>
                    <p className="text-sm text-neutral-600 mt-1">Sorularınız için</p>
                  </div>
                </div>

                <div className="card flex gap-4 items-start hover:shadow-2xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">Adres</h3>
                    <p className="text-neutral-700 font-medium">
                      {contactInfo.address.line1}<br />
                      {contactInfo.address.line2}
                    </p>
                    <a 
                      href={contactInfo.address.mapLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 hover:text-primary-700 mt-2 inline-block"
                    >
                      Haritada Görüntüle →
                    </a>
                  </div>
                </div>

                <div className="card flex gap-4 items-start hover:shadow-2xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 mb-2">Çalışma Saatleri</h3>
                    <div className="text-neutral-700 space-y-1">
                      <p><strong>Pazartesi - Cumartesi:</strong> 08:00 - 20:00</p>
                      <p><strong>Pazar:</strong> 09:00 - 18:00</p>
                      <p className="text-secondary-600 font-semibold mt-2">⚡ {contactInfo.hours.emergency}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card bg-white">
                <h2 className="heading-3 mb-6">Teklif Formu</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="İsminizi girin"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Telefon Numaranız *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="0543 234 1401"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                      E-posta Adresiniz
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Hizmet Seçin *
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="">Bir hizmet seçin</option>
                      <option value="yapi-market">Yapı Market</option>
                      <option value="cilingir">Çilingir & Anahtar</option>
                      <option value="acil-servis">Acil Kapı Açma</option>
                      <option value="guvenlik">Güvenlik Sistemleri</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Talebinizi detaylı olarak açıklayın..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Teklif Gönder
                  </button>

                  <p className="text-xs text-neutral-500 text-center">
                    * işaretli alanlar zorunludur
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Konumumuz</h2>
            <p className="text-lg text-neutral-600">Mağazamıza bekliyoruz!</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
            <iframe 
              src={contactInfo.map.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akdeniz Yapı Market Konum"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
