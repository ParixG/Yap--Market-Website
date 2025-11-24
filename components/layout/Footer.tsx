'use client';

import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GiHammerNails, GiKeyCard } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { contactInfo } from '@/lib/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      {/* Main Footer */}
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* About */}
          <div className="text-center sm:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <div className="relative">
                <GiHammerNails className="text-3xl text-primary-400 absolute -left-1 -top-1" />
                <GiKeyCard className="text-3xl text-secondary-400 relative" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">
                  {contactInfo.business.name}
                </span>
                <span className="text-xs text-secondary-400 font-semibold">
                  {contactInfo.business.tagline}
                </span>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm mb-4 max-w-xs mx-auto sm:mx-0">
              Konyaaltı&apos;nın güvenilir yapı marketi ve çilingir hizmeti. Kaliteli ürünler, profesyonel hizmet, 24/7 acil destek.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href={contactInfo.social.facebook} className="bg-primary-600 hover:bg-primary-700 p-2 rounded-full transition-colors" aria-label="Facebook">
                <FaFacebook className="text-xl" />
              </a>
              <a href={contactInfo.social.instagram} className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
              <a href={contactInfo.whatsapp.link} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-lg text-white mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm inline-block">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm inline-block">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm inline-block">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm inline-block">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm inline-block">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm inline-block">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-lg text-white mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400 text-sm">• Yapı Malzemeleri</li>
              <li className="text-neutral-400 text-sm">• Acil Kapı Açma (24/7)</li>
              <li className="text-neutral-400 text-sm">• Kilit Değiştirme</li>
              <li className="text-neutral-400 text-sm">• Anahtar Kopyalama</li>
              <li className="text-neutral-400 text-sm">• Elektronik Kilit Sistemleri</li>
              <li className="text-neutral-400 text-sm">• Güvenlik Çözümleri</li>
              <li className="text-neutral-400 text-sm">• Hırdavat & İnşaat Ekipmanları</li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-lg text-white mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <FaMapMarkerAlt className="text-secondary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-400 text-sm text-left">
                  {contactInfo.address.line1}<br />
                  {contactInfo.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <FaPhone className="text-secondary-400 flex-shrink-0" />
                <a href={contactInfo.phone.link} className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm">
                  {contactInfo.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <MdEmail className="text-secondary-400 flex-shrink-0" />
                <a href={contactInfo.email.link} className="text-neutral-400 hover:text-secondary-400 transition-colors text-sm break-all">
                  {contactInfo.email.address}
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <FaClock className="text-secondary-400 mt-1 flex-shrink-0" />
                <div className="text-neutral-400 text-sm text-left">
                  <div>Pzt-Cmt: 08:00 - 20:00</div>
                  <div>Pazar: 09:00 - 18:00</div>
                  <div className="text-secondary-400 font-semibold mt-1">{contactInfo.hours.emergency}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-500">
            <p className="text-center md:text-left">© {currentYear} {contactInfo.business.name} & Çilingir. Tüm hakları saklıdır.</p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/gizlilik" className="hover:text-secondary-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="hover:text-secondary-400 transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
