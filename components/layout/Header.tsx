'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { GiHammerNails, GiKeyCard } from 'react-icons/gi';
import { contactInfo } from '@/lib/config';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/urunler', label: 'Ürünler' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/referanslar', label: 'Referanslar' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top bar */}
      <div className="bg-primary-700 text-white py-2 text-xs sm:text-sm">
        <div className="container-custom flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href={contactInfo.phone.link} className="flex items-center gap-1 sm:gap-2 hover:text-secondary-400 transition-colors">
              <FaPhone className="text-secondary-400 text-sm" />
              <span className="font-medium">{contactInfo.phone.display}</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline text-xs sm:text-sm">24/7 Acil Servis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-xs">{contactInfo.address.line1}</span>
            <a 
              href={contactInfo.whatsapp.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 px-2 sm:px-3 py-1 rounded-full transition-colors text-xs"
            >
              <FaWhatsapp />
              <span className="text-xs font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-custom py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 sm:gap-2 group">
            <div className="relative">
              <GiHammerNails className="text-3xl sm:text-4xl text-primary-600 absolute -left-1 -top-1" />
              <GiKeyCard className="text-3xl sm:text-4xl text-secondary-500 relative" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg md:text-xl text-primary-700 leading-tight">
                {contactInfo.business.name}
              </span>
              <span className="text-xs sm:text-sm text-secondary-600 font-semibold">
                {contactInfo.business.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group text-sm xl:text-base"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href={contactInfo.phone.link} className="btn-primary text-sm xl:text-base py-2.5 px-5 xl:py-3 xl:px-6">
              Hemen Arayın
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl sm:text-3xl text-primary-600 p-2 hover:bg-primary-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-neutral-200 animate-fade-in-up">
            <ul className="flex flex-col gap-1 mt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors block py-3 px-4 rounded-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a href={contactInfo.phone.link} className="btn-primary block text-center w-full">
                  Hemen Arayın
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
