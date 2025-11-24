'use client';

import { FaHammer, FaKey, FaClock, FaShieldAlt, FaTools, FaDoorOpen, FaCopy, FaMicrochip, FaPaintRoller, FaBolt, FaWrench, FaLock, FaCar, FaHome, FaBuilding, FaCamera, FaBell } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { contactInfo } from '@/lib/config';

export default function HizmetlerPage() {
  const mainServices = [
    {
      icon: FaHammer,
      title: 'Yapı Market',
      description: 'İnşaat ve tadilat projeleriniz için ihtiyaç duyduğunuz tüm yapı malzemeleri ve ekipmanları geniş ürün yelpazemizde bulabilirsiniz.',
      color: 'from-primary-500 to-primary-600',
      services: [
        { icon: FaPaintRoller, name: 'Boya & Badana Malzemeleri', desc: 'İç ve dış cephe boyaları, fırçalar, rulolar' },
        { icon: FaBolt, name: 'Elektrik Malzemeleri', desc: 'Kablo, priz, anahtar, sigorta ve elektrik ekipmanları' },
        { icon: FaWrench, name: 'Su Tesisatı', desc: 'Borular, muslukar, lavabo, banyo aksesuarları' },
        { icon: FaTools, name: 'El Aletleri & Hırdavat', desc: 'Vidalama, kesme, ölçüm aletleri ve hırdavat malzemeleri' },
      ]
    },
    {
      icon: FaKey,
      title: 'Çilingir & Anahtar Hizmetleri',
      description: 'Profesyonel çilingir ekibimiz ile anahtar ve kilit konusunda tüm ihtiyaçlarınıza hızlı ve güvenilir çözümler sunuyoruz.',
      color: 'from-secondary-500 to-secondary-600',
      services: [
        { icon: FaCopy, name: 'Anahtar Kopyalama', desc: 'Ev, iş yeri, oto anahtar kopyalama - tüm marka ve modeller' },
        { icon: FaLock, name: 'Kilit Değiştirme', desc: 'Kapı kilidi, silindir, barel değişimi - orijinal ve kaliteli ürünler' },
        { icon: FaCar, name: 'Oto Anahtar', desc: 'Araç anahtarı kopyalama, kumanda programlama, oto kilitleri' },
        { icon: FaDoorOpen, name: 'Anahtarsız Giriş', desc: 'Anahtarınızı kaybettiniz mi? Hasarsız kapı açma hizmeti' },
      ]
    },
    {
      icon: FaClock,
      title: 'Acil Servis (24/7)',
      description: 'Günün her saati acil durumlarınızda yanınızdayız. Kapınız kilitlendi mi? Anında arayın, 30 dakika içinde yerinde hizmet!',
      color: 'from-red-500 to-red-600',
      services: [
        { icon: FaDoorOpen, name: '24 Saat Kapı Açma', desc: 'Gece-gündüz acil kapı açma hizmeti, hasarsız açma garantisi' },
        { icon: FaLock, name: 'Acil Kilit Tamiri', desc: 'Kırık veya arızalı kilit onarımı, yerinde müdahale' },
        { icon: FaKey, name: 'Kayıp Anahtar', desc: 'Anahtar kaybı durumunda anında çözüm ve yeni anahtar' },
        { icon: FaHome, name: 'Hızlı Müdahale', desc: 'Konyaaltı ve çevresinde ortalama 30 dakika içinde yerindeyiz' },
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Güvenlik Çözümleri',
      description: 'Ev ve işyerleriniz için en son teknoloji güvenlik sistemleri. Profesyonel kurulum ve 7/24 teknik destek.',
      color: 'from-neutral-600 to-neutral-700',
      services: [
        { icon: FaMicrochip, name: 'Elektronik Kilit Sistemleri', desc: 'Şifreli, kartlı, parmak izli akıllı kilit sistemleri' },
        { icon: FaShieldAlt, name: 'Güvenlik Kilitleri', desc: 'Çelik kapı kilitleri, çoklu kilitleme sistemleri' },
        { icon: FaCamera, name: 'Kamera Sistemleri', desc: 'IP kamera, güvenlik kamerası kurulumu ve izleme' },
        { icon: FaBell, name: 'Alarm Sistemleri', desc: 'Hırsız alarm, yangın alarm sistemleri ve montajı' },
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 text-white mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-primary-100">
              Yapı malzemelerinden güvenlik çözümlerine, acil çilingir hizmetlerinden profesyonel danışmanlığa kadar 
              ihtiyacınız olan her şey bir çatı altında!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? '' : ''}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-6`}>
                      <service.icon className="text-4xl text-white" />
                    </div>
                    <h2 className="heading-2 text-3xl mb-4">{service.title}</h2>
                    <p className="text-lg text-neutral-600 mb-8">{service.description}</p>
                    
                    <div className="space-y-4">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} opacity-10 flex items-center justify-center`}>
                            <item.icon className="text-xl text-neutral-700" />
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900 mb-1">{item.name}</h4>
                            <p className="text-sm text-neutral-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`rounded-2xl h-96 bg-gradient-to-br ${service.color} opacity-20 flex items-center justify-center`}>
                      <service.icon className="text-9xl text-white/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-2 text-white mb-6">Hizmet Almak İster misiniz?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Profesyonel ekibimiz size yardımcı olmak için hazır. Hemen iletişime geçin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={contactInfo.phone.link} className="btn-secondary">
                Hemen Arayın: {contactInfo.phone.display}
              </a>
              <Link href="/iletisim" className="btn-outline bg-white text-primary-700 hover:bg-primary-50 border-white">
                Online Teklif Al
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
