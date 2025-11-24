'use client';

import { motion } from 'framer-motion';
import { FaAward, FaHandshake, FaUsers, FaChartLine, FaHeart, FaShieldAlt } from 'react-icons/fa';

export default function HakkimizdaPage() {
  const values = [
    { icon: FaHandshake, title: 'Güven', desc: 'Müşteri memnuniyeti ve güven bizim en önemli değerimiz' },
    { icon: FaAward, title: 'Kalite', desc: 'Sadece kaliteli ve orijinal ürünlerle çalışıyoruz' },
    { icon: FaUsers, title: 'Profesyonellik', desc: 'Uzman ve deneyimli ekibimizle hizmet sunuyoruz' },
    { icon: FaChartLine, title: 'İnovasyon', desc: 'En yeni teknolojileri takip ediyor ve uyguluyoruz' },
    { icon: FaHeart, title: 'Müşteri Odaklı', desc: 'Her müşterimize özel çözümler üretiyoruz' },
    { icon: FaShieldAlt, title: 'Güvenilirlik', desc: '15+ yıldır kesintisiz hizmet veriyoruz' },
  ];

  const team = [
    { name: 'Ahmet Yılmaz', role: 'İşletme Sahibi & Genel Müdür', exp: '20+ yıl tecrübe' },
    { name: 'Mehmet Demir', role: 'Baş Çilingir Ustası', exp: '15+ yıl tecrübe' },
    { name: 'Ali Kaya', role: 'Yapı Market Müdürü', exp: '12+ yıl tecrübe' },
    { name: 'Ayşe Şahin', role: 'Müşteri İlişkileri', exp: '8+ yıl tecrübe' },
  ];

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
            <h1 className="heading-1 text-white mb-6">Hakkımızda</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Konyaaltı&apos;nın güvenilir yapı marketi ve çilingir hizmeti olarak 15 yılı aşkın süredir 
              müşterilerimize hizmet vermenin gururunu yaşıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-2 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  <strong>Akdeniz Yapı Market & Çilingir</strong>, 2008 yılında Konyaaltı&apos;nda küçük bir 
                  anahtar kopyalama dükkanı olarak başladığı yolculuğunda, bugün Antalya&apos;nın en güvenilir 
                  yapı marketi ve çilingir hizmeti haline gelmiştir.
                </p>
                <p>
                  Kurucumuz Ahmet Yılmaz&apos;ın &ldquo;müşteri memnuniyeti her şeyden önemlidir&rdquo; anlayışıyla 
                  başlattığı bu yolculuk, 15 yılı aşkın sürede binlerce mutlu müşteri ve başarı 
                  hikayesiyle devam etmektedir.
                </p>
                <p>
                  Bugün 10 kişilik profesyonel ekibimiz, modern mağazamız ve geniş ürün yelpazemiz 
                  ile yapı malzemelerinden güvenlik sistemlerine, acil çilingir hizmetlerinden 
                  profesyonel danışmanlığa kadar tüm ihtiyaçlarınıza çözüm sunuyoruz.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl h-96 flex items-center justify-center text-white"
            >
              <div className="text-center">
                <div className="text-8xl mb-4">🏪</div>
                <p className="text-2xl font-bold">15+ Yıl Tecrübe</p>
                <p className="text-primary-100">Konyaaltı&apos;da Hizmetinizde</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="heading-3 mb-4">Misyonumuz</h3>
              <p className="text-neutral-700 leading-relaxed">
                Konyaaltı ve çevresindeki müşterilerimize en kaliteli yapı malzemeleri ve güvenlik 
                çözümlerini sunmak, acil durumlarında 7/24 yanlarında olmak ve her zaman güvenilir, 
                profesyonel hizmet vermektir.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="card bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-200"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="heading-3 mb-4">Vizyonumuz</h3>
              <p className="text-neutral-700 leading-relaxed">
                Antalya&apos;nın en güvenilir ve tercih edilen yapı marketi ve güvenlik çözümleri merkezi 
                olmak, teknolojik yenilikleri takip ederek müşterilerimize en iyi hizmeti sunmak ve 
                sektörde öncü bir marka haline gelmektir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              İşimizi yaparken rehber aldığımız temel değerler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card text-center group hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-2xl text-white" />
                </div>
                <h3 className="font-bold text-xl text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Ekibimiz</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Profesyonel ve deneyimli ekibimizle hizmetinizdeyiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl text-white">
                  👤
                </div>
                <h3 className="font-bold text-lg text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-neutral-600">{member.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-6">Neden Bizi Seçmelisiniz?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '15+', label: 'Yıl Tecrübe', icon: '🏆' },
              { num: '1000+', label: 'Mutlu Müşteri', icon: '😊' },
              { num: '24/7', label: 'Acil Servis', icon: '⏰' },
              { num: '%100', label: 'Müşteri Memnuniyeti', icon: '✅' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold text-secondary-400 mb-2">{stat.num}</div>
                <div className="text-primary-100 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
